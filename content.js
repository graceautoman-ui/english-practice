const createdAt='2026-11-06T00:00:00.000Z';
const groups={
'日常交流':[
["I'm still getting used to the new routine.",'我还在适应新的日常安排。'],
["I didn't realize how late it was getting.",'我没意识到已经这么晚了。'],
["Let me get back to you once I've checked.",'等我确认一下再回复你。'],
["Would you mind keeping the noise down a little?",'能麻烦你稍微小声一点吗？'],
["I could use a bit of fresh air.",'我想出去透透气。'],
["It slipped my mind completely.",'我把这事忘得一干二净了。'],
["I'm not in much of a rush.",'我不是很赶时间。'],
["Let's play it by ear and see how we feel.",'到时候看我们的状态再决定吧。'],
["That turned out better than I expected.",'结果比我预想的好。'],
["I've been meaning to ask you about that.",'我一直想问你那件事。'],
["I might have left it on the kitchen counter.",'我可能把它落在厨房台面上了。'],
["There's no point worrying about it now.",'现在担心也没有用。'],
["I'm trying to cut back on coffee.",'我正试着少喝点咖啡。'],
["It's not quite what I had in mind.",'这和我原本想的不太一样。'],
["Take your time; there's no rush.",'慢慢来，不着急。'],
["I ended up staying in last night.",'昨晚我最后还是待在家里了。'],
["Could you give me a hand with this?",'你能帮我弄一下这个吗？'],
["I'll leave it up to you.",'这事由你决定吧。'],
["Sorry, I didn't catch the last part.",'抱歉，最后那部分我没听清。'],
["I wouldn't want to put you out.",'我不想给你添麻烦。'],
["We seem to have run out of milk.",'我们好像没牛奶了。']
],
'观点表达':[
["I see your point, but I'm not entirely convinced.",'我明白你的意思，但还没有完全被说服。'],
["It depends on what you're looking for.",'这取决于你想要什么。'],
["I'd be more comfortable with a smaller commitment.",'如果不用一下子投入那么多，我会更安心。'],
["There's more to it than meets the eye.",'这件事没有表面看起来那么简单。'],
["I wouldn't rule it out just yet.",'我暂时还不会排除这种可能。'],
["That sounds reasonable in principle.",'原则上听起来是合理的。'],
["I'm leaning toward the second option.",'我更倾向于第二个选项。'],
["What concerns me is the lack of time.",'让我担心的是时间不够。'],
["I'm open to trying a different approach.",'我愿意尝试不同的方法。'],
["I can see why you feel that way.",'我能理解你为什么会有那种感受。'],
["I wouldn't necessarily call that a failure.",'我未必会把那称为失败。'],
["That's a fair point, actually.",'其实你说得有道理。'],
["I'd rather look at the bigger picture.",'我更想从整体上看这个问题。'],
["I'm not sure that's the best way to go about it.",'我不确定那是不是处理这件事的最佳方法。'],
["The benefits seem to outweigh the drawbacks.",'好处似乎比坏处更多。'],
["It's worth considering the long-term impact.",'值得考虑一下长期影响。'],
["I may be missing something, but that doesn't quite add up.",'也许我漏掉了什么，但这似乎说不通。'],
["I'd need a little more context before deciding.",'做决定前我还需要多了解一些背景。'],
["I agree with the idea, if not every detail.",'整体思路我赞同，尽管不是每个细节都认同。'],
["Let's not jump to conclusions.",'我们先别急着下结论。'],
["There's a trade-off either way.",'无论选哪种，都需要有所取舍。']
],
'旅行与社交':[
["Is there any chance of checking in a little early?",'有可能稍微提前办理入住吗？'],
["Could we have a table somewhere a bit quieter?",'能给我们安排一张稍微安静点的桌子吗？'],
["I'm just browsing for now, thanks.",'我暂时随便看看，谢谢。'],
["Would you happen to know when the next bus leaves?",'请问你知道下一班公交车什么时候发车吗？'],
["It was lovely catching up with you.",'能和你聊聊近况真好。'],
["I'd love to join you, but I've already made plans.",'我很想一起去，不过已经有安排了。'],
["Could you point me in the right direction?",'你能给我指一下路吗？'],
["Does that include the service charge?",'那包含服务费吗？'],
["Let's split the bill evenly, if that works for everyone.",'如果大家都方便，我们就平摊账单吧。']
],
'工作沟通':[
["Could we clarify what needs to be done first?",'我们能先明确一下哪些事需要优先做吗？'],
["I'm running a little behind on this.",'这件事我的进度稍微落后了一点。'],
["Let's make sure we're on the same page.",'我们确认一下彼此的理解是否一致吧。'],
["I'll put together a rough draft by tomorrow.",'我会在明天之前整理出一份初稿。'],
["Would it be possible to move the meeting back an hour?",'会议能往后推迟一小时吗？'],
["Thanks for flagging that; I'll take a closer look.",'谢谢你提醒，我会仔细看一下。'],
["We might need to revisit the timeline.",'我们可能需要重新考虑时间安排。'],
["I'll keep you posted as things develop.",'有进展我会随时告诉你。'],
["I'd appreciate a second opinion on this.",'我想听听你对这件事的看法。']
]};
const patterns=[
['表达偏好',"I'd rather + 动词原形",'表达更倾向于做什么；否定时用 rather not。','日常交流',[
["I'd rather stay home tonight.",'今晚我更想待在家里。'],["I'd rather wait until the traffic clears.",'我宁愿等到不堵车了再走。'],["I'd rather not talk about it right now.",'我现在不太想谈这件事。'],["I'd rather hear it from you directly.",'我更希望直接听你说。']]],
['委婉请求','Would you mind + 动名词…?','礼貌地请别人做某事。','日常交流',[
['Would you mind closing the window?','能麻烦你关一下窗吗？'],['Would you mind giving me a few more minutes?','可以再给我几分钟吗？'],['Would you mind moving your bag?','能麻烦你挪一下包吗？']]],
['一直想做',"I've been meaning to + 动词原形",'表示一段时间以来一直想做但还没做的事。','日常交流',[
["I've been meaning to call you.",'我一直想给你打电话。'],["I've been meaning to sort out these photos.",'我一直想整理这些照片。'],["I've been meaning to try that little café.",'我一直想去试试那家小咖啡馆。']]],
['最后的结果','end up + 动名词','描述事情最终的发展，常带有与计划不同的意味。','日常交流',[
['We ended up walking all the way home.','我们最后一路走回了家。'],['I ended up buying the cheaper one.','我最后买了便宜的那一个。'],['They ended up talking for hours.','他们最后聊了好几个小时。']]],
['保留意见',"I'm not sure + 从句",'温和地表达不确定或不完全赞同。','观点表达',[
["I'm not sure we have enough information yet.",'我不确定我们现在掌握的信息是否足够。'],["I'm not sure that would solve the problem.",'我不确定那样能解决问题。'],["I'm not sure this is the right moment.",'我不确定现在是不是合适的时机。']]],
['表达关注点','What concerns me is + 名词 / 从句','将对话重点放在你担心的问题上。','观点表达',[
['What concerns me is the extra cost.','我担心的是额外费用。'],['What concerns me is how little time we have.','让我担心的是我们剩的时间太少了。'],["What concerns me is that nobody has checked the details.",'让我担心的是还没人核实细节。']]],
['值得尝试',"It's worth + 动名词",'表达某件事值得投入时间或精力。','观点表达',[
["It's worth asking for another opinion.",'值得再听听别人的看法。'],["It's worth checking the terms before you sign.",'签字前值得核对一下条款。'],["It's worth giving it another try.",'值得再试一次。']]],
['理解与转折','I see + …, but + …','先认可对方的角度，再补充自己的不同看法。','观点表达',[
["I see what you mean, but we still need a backup plan.",'我明白你的意思，不过我们仍然需要备用方案。'],["I see the appeal, but it's beyond our budget.",'我明白它的吸引力，不过这超出了预算。'],["I see why you're worried, but we have time to fix it.",'我理解你的担忧，不过我们有时间解决。']]],
['询问可能性','Is there any chance of + 动名词…?','礼貌地询问是否可以安排某事。','旅行与社交',[
['Is there any chance of getting a window seat?','有可能安排一个靠窗的座位吗？'],['Is there any chance of extending our stay?','我们有可能延长入住时间吗？'],['Is there any chance of joining the afternoon tour?','我们有可能参加下午的游览吗？']]],
['礼貌婉拒',"I'd love to, but + 原因",'先表达意愿，再自然说明无法接受的原因。','旅行与社交',[
["I'd love to, but I have an early start tomorrow.",'我很想去，不过明天要早起。'],["I'd love to, but I'm away that weekend.",'我很想参加，不过那个周末我不在。'],["I'd love to, but I promised to help a friend.",'我很想去，不过答应了帮朋友。']]],
['协调时间','Would it be possible to + 动词原形…?','以商量的语气提出调整或请求。','工作沟通',[
['Would it be possible to send the figures today?','今天方便把数据发来吗？'],['Would it be possible to discuss this after lunch?','能在午饭后讨论这件事吗？'],['Would it be possible to extend the deadline by two days?','截止日期可以延后两天吗？']]],
['明确下一步',"Let's make sure + 从句",'提醒双方共同确认关键事项。','工作沟通',[
["Let's make sure everyone has the latest version.",'我们确认一下每个人都有最新版本。'],["Let's make sure the client understands the changes.",'我们确认一下客户理解了这些改动。'],["Let's make sure we agree on the next steps.",'我们确认一下对下一步安排有一致意见。']]]
];
const dialogues=[
['酒店办理入住','旅行与社交',[
['Good evening! Do you have a reservation?','有的，预订人是 Grace Chen。','Yes, I have a reservation under Grace Chen.'],
['Welcome, Ms. Chen. May I see your passport?','当然，给您。','Of course. Here you go.'],
["Thank you. You're staying for three nights, correct?",'对，周五早上退房。',"That's right. I'll be checking out on Friday morning."],
['Would you prefer a room on a higher floor?','如果可以，我想要高一点、远离电梯的房间。',"A higher floor would be great, preferably away from the elevator."],
['We have a quiet room on the sixth floor.','听起来不错。早餐包含在房费里吗？',"That sounds good. Is breakfast included in the room rate?"],
['Yes, breakfast is served from seven to ten.','谢谢。餐厅在哪儿？',"Thanks. Where is the restaurant?"],
["It's on the ground floor, next to the lobby.",'明白了。房间有无线网络吗？',"Got it. Is Wi-Fi available in the room?"],
["Yes. The password is printed on your key card holder.",'好的。我周五能晚一点退房吗？',"Great. Would it be possible to check out a little later on Friday?"],
['We can offer noon instead of eleven at no extra charge.','中午退房正合适，谢谢您帮忙。',"Noon would be perfect. Thanks for your help."],
["You're welcome. Here are your keys. The elevators are on your left.",'非常感谢。祝您晚上愉快。',"Thank you very much. Have a good evening."]
]],
['餐厅点餐与调整','旅行与社交',[
['Hi there. A table for two?','是的，如果可以，我们想坐安静一点的位置。',"Yes, please. Could we sit somewhere a little quieter?"],
['Of course. How about this table by the window?','这里很好，谢谢。',"This is lovely, thank you."],
['Can I get you something to drink?','我们先要一瓶不含气的水。',"We'll start with a bottle of still water, please."],
["Here you go. Are you ready to order?",'能再给我们几分钟吗？',"Could we have a few more minutes?"],
['Certainly. Let me know if you have any questions.','烤鱼会不会很辣？',"Is the grilled fish very spicy?"],
['The sauce is quite spicy, but we can serve it on the side.','那很好。我想要烤鱼，酱汁单独放。',"That would be great. I'll have the grilled fish with the sauce on the side."],
['And for the other main course?','我们还要一份蘑菇意面。',"We'd also like the mushroom pasta."],
['Would you like any sides to share?','一份绿色沙拉就够了。',"A green salad should be enough, thanks."],
['How is everything?','味道很好。能再拿两张餐巾纸吗？',"Everything tastes great. Could we have a couple more napkins?"],
['Of course. Would you like to see the dessert menu?','不用了，谢谢。麻烦结账，服务费包含了吗？',"No, thank you. Could we have the bill? Is the service charge included?"]
]],
['和朋友安排周末','日常交流',[
['Have you got any plans for Saturday?','还没有确定。你有什么想法？',"Nothing definite yet. What did you have in mind?"],
['I was thinking we could go for a hike.','听起来不错，不过我最近没怎么运动。',"That sounds nice, but I haven't been very active lately."],
["We could choose an easy trail.",'那我愿意去。大概要走多久？',"I'd be up for that. How long would the walk take?"],
['About two hours, with a stop for lunch.','这样挺合适。我们需要早出发吗？',"That sounds manageable. Do we need to leave early?"],
['How does nine in the morning sound?','能不能改成九点半？我早上还有点事。',"Could we make it nine thirty? I have something to take care of first."],
['Sure. Shall I pick you up?','方便的话太好了。我可以分担油费。',"That would be great if it's convenient. I can chip in for petrol."],
["Don't worry about that. Could you bring some snacks?",'当然。我也会带点水。',"Of course. I'll bring some water too."],
['The forecast says it might rain in the afternoon.','那我们带上雨衣吧。天气太差就改去喝咖啡。',"Let's bring raincoats. If the weather's too bad, we can get coffee instead."],
['Good idea. I will check the forecast again tomorrow.','好，有变化就告诉我。',"Great. Let me know if anything changes."],
["Will do. See you Saturday!",'周六见，真期待出去走走。',"See you Saturday. I'm looking forward to getting outside."]
]],
['讨论远程办公','观点表达',[
['Do you think our team should work remotely more often?','我倾向于支持，但要看如何安排。',"I'm leaning toward yes, but it depends on how we organize it."],
['I think people are more productive at home.','有些工作确实如此，不过协作可能更难。',"That's true for some tasks, though collaboration can be harder."],
["Couldn't we just have more video calls?",'可以，但开太多会让人难以专注。',"We could, but too many calls make it hard to focus."],
['What would you suggest instead?','可以固定协作时段，其他时间专注工作。',"We could set aside time for collaboration and keep the rest for focused work."],
['Would two office days a week be enough?','值得尝试。我想先了解大家的需求。',"It's worth trying. I'd like to understand everyone's needs first."],
['Some people have very long commutes.','这是个重要因素，减少通勤能省下很多精力。',"That's an important factor. Less commuting could save a lot of energy."],
['But new colleagues might feel isolated.','我也担心这一点。我们可以安排定期沟通。',"That concerns me too. We could arrange regular check-ins."],
['So would you support a trial period?','支持，前提是提前约定如何评估效果。',"Yes, as long as we agree in advance on how to evaluate it."],
['We could review it after a month.','一个月可能有点短，我更倾向于六周。',"A month might be a little short. I'd prefer six weeks."],
["That sounds fair. Shall we put a proposal together?",'好，我先整理主要观点，你再补充。',"Yes. I'll outline the main points, and you can add your thoughts."]
]],
['协商项目交付时间','工作沟通',[
['How is the report coming along?','初稿快好了，不过还有部分数据没确认。',"The draft is nearly ready, but some of the figures still need checking."],
['Can you send the final version by tomorrow?','我担心来不及完成核对。',"I'm concerned that won't leave enough time to check everything."],
['Which figures are still missing?','我们还在等销售团队的上月数据。',"We're still waiting for last month's figures from the sales team."],
['Have you followed up with them?','有，今天上午联系过，他们说明天下午能给。',"Yes, I followed up this morning. They said they could send them tomorrow afternoon."],
['The client is expecting an update tomorrow morning.','我可以先发进度摘要，明确哪些数据待确认。',"I can send a progress summary first and flag which figures are still unconfirmed."],
['That might work. When could you finish the full report?','如果数据按时到，周四中午可以完成。',"If the figures arrive on time, I can finish by noon on Thursday."],
['Could someone help you check the numbers?','可以，请 Maya 帮忙复核会很有用。',"Yes, it would help if Maya could review the numbers."],
["I'll ask her. What about the recommendations section?",'那部分已经写好，数据确认后可能需要小幅调整。',"That's drafted already. It may need minor changes once the figures are confirmed."],
["Please keep me informed if anything changes.",'没问题，我明天下午再向你更新一次。',"Of course. I'll give you another update tomorrow afternoon."],
['Thanks. Let us go with that plan.','好的，我会先把明早的摘要准备好。',"Great. I'll get the summary ready for tomorrow morning first."]
]],
['和邻居沟通噪音','日常交流',[
['Hi! Is everything okay?','你好，不好意思打扰你，我想聊一下晚上的声音。',"Hi, sorry to bother you. I wanted to mention the noise in the evenings."],
["Oh, has it been too loud?",'最近几晚音乐声比较大，我不太容易入睡。',"The music has been quite loud the last few nights, and I've had trouble getting to sleep."],
["I'm sorry. I didn't realize you could hear it.",'谢谢你理解，我知道你不是故意的。',"Thanks for understanding. I know it wasn't intentional."],
['What time do you usually go to bed?','工作日通常十一点左右。',"Usually around eleven on weeknights."],
["I can turn it down after ten.",'那就太好了，低音的声音传得尤其明显。',"That would really help. The bass carries through especially clearly."],
["Maybe I should move the speaker away from the wall.",'值得试试，可能会有很大改善。',"That's worth trying. It might make a big difference."],
["I'm having a few friends over on Saturday, though.",'没关系，你们大概几点结束？',"That's okay. What time do you expect to finish?"],
["We should be done by eleven thirty.",'谢谢提前告诉我，十一点以后能小声一点就好。',"Thanks for letting me know. It would help if you could keep it down after eleven."],
['Absolutely. Please tell me if it gets too loud again.','好的，也欢迎你随时告诉我有没有打扰到你。',"I will. And please let me know if I ever disturb you too."],
["Of course. I'm glad you came over to talk.",'谢谢你愿意沟通，祝你晚上愉快。',"Thanks for being so understanding. Have a good evening."]
]]];
const systemTranslations=[
['晚上好！请问您有预订吗？','欢迎您，陈女士。我可以看一下您的护照吗？','谢谢。您入住三晚，对吗？','您更喜欢楼层高一点的房间吗？','我们六楼有一间安静的房间。','包含的，早餐供应时间是七点到十点。','餐厅在一楼，大堂旁边。','有的，密码印在您的房卡套上。','我们可以免费把退房时间从十一点延至中午十二点。','不客气。这是您的房卡，电梯在左边。'],
['您好，两位吗？','当然可以。窗边这张桌子怎么样？','想先喝点什么吗？','水来了。现在可以点餐了吗？','当然，有问题随时问我。','酱汁比较辣，不过我们可以单独放。','另一份主菜想要什么呢？','需要点什么配菜一起吃吗？','吃得怎么样？','当然。需要看看甜品菜单吗？'],
['你周六有什么安排吗？','我在想我们可以去徒步。','我们可以选一条轻松的路线。','大约两小时，中途停下来吃午饭。','早上九点怎么样？','没问题。要我去接你吗？','不用担心油费。你能带点零食吗？','天气预报说下午可能下雨。','好主意。我明天再查一下天气预报。','好的，周六见！'],
['你觉得我们团队应该增加远程办公的时间吗？','我觉得大家在家工作效率更高。','我们不能多开一些视频会议吗？','那你有什么其他建议？','每周来办公室两天够吗？','有些人通勤时间很长。','不过新同事可能会觉得孤立。','那你支持先试行一段时间吗？','我们可以一个月后评估一下。','听起来合理。我们一起写个提案吧？'],
['报告进展怎么样了？','你能在明天之前发最终版本吗？','还缺哪些数据？','你跟他们跟进过了吗？','客户希望明天上午收到进展更新。','这样也许可以。完整报告什么时候能完成？','能找人帮你核对数据吗？','我会问问她。建议部分怎么样了？','有任何变化请及时告诉我。','谢谢。那就按这个计划来吧。'],
['你好！有什么事吗？','哦，是声音太大了吗？','对不起，我不知道你能听到。','你通常几点睡觉？','我可以在十点以后把声音调低。','也许我应该把音箱从墙边挪开。','不过周六我会请几个朋友来家里。','我们应该会在十一点半前结束。','当然。如果再太吵，请告诉我。','当然。很高兴你过来和我聊。']
];
let n=0;
export const CONTENT=[...Object.entries(groups).flatMap(([category,rows])=>rows.map(([en,zh])=>({id:`s-${String(++n).padStart(3,'0')}`,type:'sentence',category,en,zh,source:'builtin',createdAt}))),...patterns.map(([title,structure,note,category,rows],i)=>({id:`p-${i+1}`,type:'pattern',category,title,structure,note,examples:rows.map(([en,zh],j)=>({id:`p-${i+1}-e-${j+1}`,en,zh})),source:'builtin',createdAt})),...dialogues.map(([title,category,rows],i)=>({id:`d-${i+1}`,type:'dialogue',category,title,turns:rows.map(([system,prompt,answer],j)=>({system,prompt,answer,systemZh:systemTranslations[i][j]})),source:'builtin',createdAt}))];
