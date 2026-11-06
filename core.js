export const CATEGORIES=['日常交流','观点表达','旅行与社交','工作沟通'];
export const TYPES=['sentence','pattern','dialogue'];
export const clone=x=>structuredClone(x);
const validId=s=>typeof s==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9._:~-]{0,127}$/.test(s);
export function localDate(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export const norm=s=>s.trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ');
export const signature=c=>c.type+':'+norm(c.type==='sentence'?c.en:c.title)+':'+(c.examples||c.turns||[]).map(x=>norm(x.en||x.system)).join('|');
export function validateContent(c){
 const non=s=>typeof s==='string'&&s.trim().length>0&&s.length<=20000;
 if(!c||!validId(c.id)||!TYPES.includes(c.type)||!CATEGORIES.includes(c.category)||!['builtin','user'].includes(c.source)||!non(c.createdAt))throw Error('内容标识、分类或来源无效');
 if(c.type==='sentence'){if(!non(c.en)||!non(c.zh))throw Error('请补充英文和中文翻译');}
 else if(c.type==='pattern'){
 if(!non(c.title)||!non(c.structure)||!non(c.note))throw Error('请补充句式名称、结构与说明');
 if(!Array.isArray(c.examples)||c.examples.length<3||c.examples.length>5)throw Error('句式需要 3～5 个例句');
 const ids=new Set(); const texts=new Set(); for(const x of c.examples){if(!validId(x.id)||ids.has(x.id)||!non(x.en)||!non(x.zh))throw Error('请补全例句翻译，且例句 ID 不得重复');if(texts.has(norm(x.en)))throw Error('同一句式的例句不能重复');texts.add(norm(x.en));ids.add(x.id)}
 }else{
 if(!non(c.title)||!Array.isArray(c.turns)||c.turns.length<10||c.turns.length>100)throw Error('对话需要场景名称和至少 10 轮完整交互（最多 100 轮）');
 for(const x of c.turns)if((x.systemZh!==undefined&&(typeof x.systemZh!=='string'||x.systemZh.length>20000))||!non(x.system)||!non(x.prompt)||!non(x.answer))throw Error('每轮需要系统英文、用户中文提示和英文建议回答');
 }
 return c;
}
function shuffle(a,rng){return a.map(x=>({x,r:rng()})).sort((a,b)=>a.r-b.r).map(v=>v.x)}
export function makeTask(date,contents,mastery={},tasks=[],rng=Math.random){
 const seen=new Set(tasks.flatMap(t=>[...t.sentences.map(s=>s.content.id),t.pattern?.content.id,t.dialogue?.content.id].filter(Boolean)));
 const pick=(a,n,review)=>{const r=shuffle(a.filter(review),rng), fresh=shuffle(a.filter(x=>!review(x)&&!seen.has(x.id)),rng),old=shuffle(a.filter(x=>!review(x)&&seen.has(x.id)),rng);const nr=Math.min(Math.round(n*.3),r.length);return [...r.slice(0,nr),...fresh,...old,...r.slice(nr)].slice(0,n)};
 const patterns=contents.filter(c=>c.type==='pattern');
 const reviews=patterns.filter(c=>c.examples.some(e=>mastery[e.id]?.rating==='review'));
 const p=(reviews.length&&rng()<.3?shuffle(reviews,rng):shuffle(patterns.filter(c=>!seen.has(c.id)),rng).concat(shuffle(patterns,rng)))[0];
 const excluded=new Set((p?.examples||[]).map(e=>norm(e.en)));
 const unique=contents.filter(c=>{if(c.type!=='sentence'||excluded.has(norm(c.en)))return false;excluded.add(norm(c.en));return true});
 const sentences=pick(unique,5,c=>mastery[c.id]?.rating==='review').map(content=>({content:clone(content),count:0,rating:null}));
 const dialogues=contents.filter(c=>c.type==='dialogue'); const d=shuffle(dialogues.filter(c=>!seen.has(c.id)),rng).concat(shuffle(dialogues,rng))[0];
 return {id:date,date,createdAt:new Date().toISOString(),sentences,pattern:p?{content:clone(p),started:false,items:p.examples.map(content=>({content:clone(content),count:0,rating:null}))}:null,dialogue:d?{content:clone(d),index:0,revealed:[]}:null};
}
export function progress(t,mode){if(mode==='dialogue')return [t.dialogue?.index||0,t.dialogue?.content.turns.length||0];const a=mode==='sentence'?t.sentences:t.pattern?.items||[];return [a.filter(x=>x.rating).length,a.length]}
export function complete(t){return (t.focus?[t.focus]:TYPES).every(m=>{const [a,b]=progress(t,m);return b>0&&a===b})}
export function reduceTask(task,action){const t=clone(task); let rating=null;
 if(action.kind==='start'){if(!t.pattern)throw Error('无句式任务');t.pattern.started=true;return {task:t,rating}}
 if(action.kind==='next'||action.kind==='reveal'){
 const d=t.dialogue;if(!d||d.index>=d.content.turns.length)throw Error('对话已结束');
 if(action.index!==d.index)throw Error('进度已更新，请重试');
 if(action.kind==='next')d.index++;else if(!d.revealed.includes(d.index))d.revealed.push(d.index);
 return {task:t,rating};
 }
 const items=action.mode==='sentence'?t.sentences:t.pattern?.items;
 const i=items?.findIndex(x=>!x.rating);if(i==null||i<0)throw Error('练习已完成');
 const x=items[i];if(x.content.id!==action.contentId)throw Error('进度已更新，请重试');
 if(action.kind==='count'){if(x.count<5)x.count++;}
 else if(action.kind==='rate'){if(x.count!==5)throw Error('请先朗读 5 遍');if(!['mastered','review'].includes(action.rating))throw Error('评价无效');x.rating=action.rating;rating={id:x.content.id,rating:action.rating,updatedAt:new Date().toISOString(),en:x.content.en,zh:x.content.zh,category:action.mode==='sentence'?x.content.category:t.pattern.content.category};}
 else throw Error('未知操作');return {task:t,rating};
}
export function parseText(text,type){
 if(!text.trim())throw Error('请先粘贴内容');if(text.length>200000)throw Error('单次文本请控制在 20 万字以内');
 const lines=text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
 if(type==='dialogue')return lines.map(line=>{const [system='',prompt='',answer='',systemZh='']=line.split(/\s*\|\s*/);return {system,prompt,answer,...(systemZh?{systemZh}:{})}});
 const out=[];for(const line of lines){if(line.includes('|')){const [en='',zh='']=line.split(/\s*\|\s*/);out.push({en,zh});}else if(/[\u4e00-\u9fff]/.test(line)&&out.length&&!out.at(-1).zh&&!/[a-z]{3}/i.test(line)){out.at(-1).zh=line;}else{for(const en of line.split(/(?<=[.!?])\s+(?=[A-Z])/))out.push({en,zh:''});}}
 return out;
}
export function validateBackup(b){
 if(!b||b.format!=='speak-everyday'||b.version!==1||!Array.isArray(b.contents)||!Array.isArray(b.tasks)||!Array.isArray(b.mastery))throw Error('不是有效的 V1 备份');
 if(b.contents.length>20000||b.tasks.length>30000||b.mastery.length>100000)throw Error('备份数据过大');
 for(const a of [b.contents,b.tasks,b.mastery]){const ids=new Set();for(const x of a){if(!x||!validId(x.id)||ids.has(x.id))throw Error('备份含重复或缺失 ID');ids.add(x.id)}}
 b.contents.forEach(validateContent);
 const checkItem=x=>{if(!x||!validId(x.content?.id)||typeof x.content.en!=='string'||typeof x.content.zh!=='string'||!Number.isInteger(x.count)||x.count<0||x.count>5||![null,'mastered','review'].includes(x.rating)||(x.rating&&x.count!==5))throw Error('备份含无效朗读进度')};
 for(const t of b.tasks){if((t.id!==t.date&&!t.id.startsWith(t.date+'~'))||(t.focus&&!TYPES.includes(t.focus))||!/^\d{4}-\d{2}-\d{2}$/.test(t.date)||!Array.isArray(t.sentences)||t.sentences.length>5||!('pattern'in t)||!('dialogue'in t))throw Error('任务结构无效');
 const d=new Date(t.date+'T12:00:00');if(Number.isNaN(+d)||localDate(d)!==t.date)throw Error('任务日期无效');
 t.sentences.forEach(x=>{checkItem(x);validateContent(x.content);if(x.content.type!=='sentence')throw Error('句子类型错误')});
 if(new Set(t.sentences.map(x=>x.content.id)).size!==t.sentences.length)throw Error('任务句子重复');
 if(t.pattern){const p=t.pattern;validateContent(p.content);if(p.content.type!=='pattern'||typeof p.started!=='boolean'||!Array.isArray(p.items)||p.items.length!==p.content.examples.length)throw Error('句式结构无效');p.items.forEach((x,i)=>{checkItem(x);if(x.content.id!==p.content.examples[i].id)throw Error('例句不匹配')})}
 if(t.dialogue){const d=t.dialogue;validateContent(d.content);if(d.content.type!=='dialogue'||!Number.isInteger(d.index)||d.index<0||d.index>d.content.turns.length||!Array.isArray(d.revealed)||d.revealed.some(i=>!Number.isInteger(i)||i<0||i>=d.content.turns.length||i>d.index))throw Error('对话进度无效')}
 }
 for(const m of b.mastery)if(!['mastered','review'].includes(m.rating)||typeof m.en!=='string'||typeof m.zh!=='string')throw Error('熟练度记录无效');
 return b;
}
