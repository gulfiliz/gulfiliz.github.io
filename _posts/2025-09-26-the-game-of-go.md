---
layout: post
title: "The Game of Go: The Most Human Game Ever Invented"
date: 2025-09-26
description: On Weiqi, AlphaGo, and why 19×19 intersections contain everything.
tags: hobbies, EN,
---

I am a 6-dan Go player.

I say this not to impress.
In East Asia, where Go was born,
6-dan is a serious amateur level, not a professional title.
There are players who have dedicated their entire lives to this game
and will still lose to a 9-dan professional by 50 points.

That humility is, perhaps, the first thing Go teaches you.

---

## What Is Go?

The rules of Go are deceptively simple.

Two players, Black and White, alternate placing stones
on the intersections of a 19×19 grid.
Stones surrounded on all sides by the opponent are captured and removed.
The player who controls more territory at the end wins.

That's it. No dice. No hidden information. No luck.

And yet, Go has more possible board positions than there are 
atoms in the observable universe.

$$\text{Possible Go games} \approx 10^{700}$$

Chess, by comparison: $$10^{120}$$.

The difference is not incremental. It is categorical.

---

## Weiqi: The Chinese Origin

Go is at least 2,500 years old.
Its Chinese name is **Weiqi** (围棋), literally "encirclement game."

In ancient China, Weiqi was one of the **four arts** of the scholar-gentleman,
alongside calligraphy, painting, and music: *qín, qí, shū, huà* (琴棋書畫).

To not know Weiqi was to be considered uncultured.

The game was not merely entertainment.
It was a model for military strategy, political thinking, philosophical inquiry.
Sun Tzu's *Art of War* and Weiqi share a deep vocabulary:
encirclement, sacrifice, the value of position over material.

A general who could not play Weiqi
was thought to lack the strategic mind required for command.

---

## Baduk: Korea's Obsession

Go arrived in Korea around the 5th century CE,
where it became **Baduk** (바둑).

Korean Go culture is arguably the most intense in the world.
Professional players begin training at age 6–8,
spending 8–10 hours a day studying for years before their first professional match.

The Korean **Baduk TV** channel broadcasts Go 24 hours a day.
Professional matches are covered like major sporting events.
Top players are celebrities.

Korea dominated world Go from the 1980s through the 2010s.
Players like Lee Changho, Choi Cheolhan, and later Park Junghwan
were the Michael Jordans of the Go world.

---

## Igo: Japan's Aesthetic

In Japan, Go is **Igo** (囲碁), and it carries a different weight.

Japanese Go culture elevated the game to an art form.
The aesthetic of the game matters:
the sound of a stone placed on a wooden board,
the feel of a slate-and-shell stone between the fingers,
the silence between moves.

The traditional equipment is exquisite:
**Kaya** wood boards, **nachiguro** (slate) black stones, 
**hamaguri** (clam shell) white stones.
A full professional-grade set can cost tens of thousands of dollars.

The Japanese Go world also gave us the concept of **fuseki**
(opening theory) and **joseki** (corner sequences),
which are studied the way musicians study Bach.

Honinbo Shusaku, a 19th century Japanese professional,
is considered by many the greatest player in history before the AI era.
His style, patient and territorial and deep, influenced the game for 150 years.

---

## AlphaGo: The Day Everything Changed

In March 2016, DeepMind's **AlphaGo** defeated Lee Sedol,
arguably the greatest human player of his generation,
4–1 in a five-game match.

The Go world was shaken.

Not because AI defeated a human. Chess had fallen to Deep Blue in 1997.
Because of *how* AlphaGo played.

Its moves were strange. Inhuman. Wrong-looking.
And then, ten moves later, you understood.

Move 37 in Game 2, a shoulder hit on the fifth line,
was described by commentators as "not a human move."
Lee Sedol left the room for fifteen minutes after seeing it.
He later said it made him question his entire understanding of the game.

AlphaGo used a combination of **deep convolutional neural networks**
and **Monte Carlo Tree Search (MCTS):**

- A **policy network** trained on millions of human games,
  predicting which moves are worth considering.
- A **value network** estimating the probability of winning
  from any given board position.
- MCTS to search forward, guided by both networks.

**AlphaGo Zero** (2017) went further.
It was trained entirely through self-play,
with no human game data at all.
Starting from random play, it surpassed AlphaGo in three days.
It discovered joseki that humans had developed over centuries,
and then discarded some of them as suboptimal.

**KataGo** (2019–present), an open-source successor,
is now available to everyone.
Playing against KataGo at full strength is like 
staring into an abyss that stares back with perfect clarity.

---

## What AI Taught Human Players

Here is the remarkable thing.

After AlphaGo, human Go *improved.*

AI analysis tools showed that many established joseki were wrong.
Opening theories developed over decades were revised.
Moves once considered amateur mistakes were revealed as genius.

The AI didn't end Go. It deepened it.

Today, top professionals use AI analysis the way musicians use recordings:
to study, to question, to improve.
The game is richer now than it was before 2016.

---

## Why You Should Learn Go

Chess is a game of elimination. You win by destroying.

Go is a game of coexistence. Until it isn't.
You build, you surround, you sacrifice, you invade.
The balance shifts move by move.

A single game of Go can contain:
a catastrophic blunder that turns into a brilliant sacrifice,
a territory you thought was safe that suddenly collapses,
a group you thought was dead that comes back to life.

Go teaches you that:

- **Losing is information.** Every loss shows you something you didn't see.
- **Efficiency matters more than force.** One stone in the right place 
  beats ten stones in the wrong place.
- **Local and global are always in tension.** 
  Winning a corner can lose the game.
- **Patience is a weapon.**

---

## Daejeon

I learned Go in Korea, the summer I was twenty-one.

I had gone there for a quantum optics internship in my second year of physics undergrad. The professor at home wrote the reference letter. Years later, my Go teacher in Korea, who had been my host for the internship, told me what the letter had said: *Filiz has not even taken quantum mechanics yet. She only knows what she has taught herself. But she learns quickly. At worst, you can teach her Go. Be careful. She might beat you.*

I think my professor at home knew me better than I knew myself at twenty-one.

The first day in the lab my Korean teacher said, all right then, let us play with what you taught yourself. We sat down. I beat him. Beginner's luck, I think now. I do not know what he thought then.

I do not know whether I went to Korea to do quantum optics or to learn Go. To say South Korea called me there to learn Go would be too romantic. So I will say it.

I lived in Daejeon for two and a half months. The city had a slogan about being a bike city, *It is Daejeon, it is bike,* and I rode for hours every day. After the lab I went looking for grandfathers in the parks. They were always there, hunched over their boards, slapping stones down. We did not share a language. They did not speak English or Turkish, and I did not speak Korean. We understood each other anyway. They were so happy when I beat them. Some of them began waiting for me to come out of the lab. I have not forgotten their faces.

Then I went home. The semester started. I drowned in classes. Go stayed in Korea.

---

## Femme Fatale

Years later, on a Go server, a French player wrote *femme fatale* under one of our games.

I was furious. The server showed my gender. It did not show my face or my name. Instead of commenting on the game he had something to say about me. I cursed him out. I blocked him. I walked away.

He reached out through other people, weeks later. He told me he had been following my games for some time. He apologized. We talked. We came to love and respect each other deeply. He became my Go advisor, and has been for years.

I will not name him. He hates being public. :) 
(Yes, I know how that sounds. I am joking and also not joking. He is genuinely well known.)

The nickname stayed. He still calls me *femme fatale*. So do my friends in France and in China.

It was through him that I learned how late I was. Top players in East Asia start at four or five. They are professionals by eighteen. I was twenty-two. Twenty-two is very, very, very late. My advisor said: no giving up! I went to tournaments. He came to Japan with me. He was with me in Beijing when my paperwork for China was being processed. He likes talking nonstop about me to Go community, lucky me not knowing Chinese. I would blush! :) Thanks to him I could reach 6-dan. 

There is no formal age limit at the American Go Association or the European Go Federation. There is one in China, Korea, and Japan: around eighteen, with very rare exceptions. Good references can help. I think I will not take that path. The honest version is that I have not decided.

I have kept my Go identity private. This was a decision I made with my advisor. I wanted to keep my relationship with Go uncomplicated. I did not want the thing I love most to become a competition.

---

## Nobara

In Japan I am Nobara.

The name was given to me by Ryo, one of my best friends, a 9p Japanese professional and (since people sometimes ask) my favorite player in the world. My name in Turkish is Gül, which means rose. In Japanese, *bara*. *No-bara* is wild rose. He said it was because I am resilient, and he called me Nobara, and it stuck. My Japanese friends still call me that.

They tell me I play like a samurai! It turns out I am only not sharp when I am writing.

I think they mean the style. I play *aji-tesuji*, the long trap, the move that does not yet look like what it is. My opponent plays comfortably, never suspecting, never tightening up. Then suddenly, in some corner of the board, every stone they have put down is gone. I do not even do this consciously most of the time. It is the way the board shapes itself for me. My opponents tend to be angry afterward.

The most extraordinary game of my life was a simul in Beijing against a hundred opponents. China has Go players I had not imagined a single city could contain. I will not tell you how it went. I will only say that I was the one who walked from board to board. I was challenged by young brilliant Chinese kids! It was awesome.

---

## 2016

For me, Lee Sedol was unbeatable. I went into those five games the way most Go players in the world went in: the best human on Earth against an AI. I did not know who would win.

My advisor, by the way, had been gathering server games for AI research for some time before AlphaGo became AlphaGo. After Move 37 became Move 37, he wrote to me: *AlphaGo learned that one from you.* We laugh about it. I think he was half-serious.

What I do not joke about is what watching those games did to me. I came out of them understanding that something I had not understood was possible. I had physics undergraduate degree. By the end of 2016 I was making plans to pivot to computer science. Deep learning and reinforcement learning had walked into my life on those five days in Seoul, and they were not leaving.

Lee Sedol won one game out of five. The wedge in Game 4 was the proudest move I have ever seen a human being make.

*[The documentary, if you have not seen it.](https://www.youtube.com/watch?v=WXuK6gekU1Y&t=1925s)*

---

## Kinokuniya

The first time I walked into a Kinokuniya in Japan, I cried.

It was the Go books. Shelves of Go books. Joseki dictionaries, fuseki collections, problem books, biographies of dead masters, professional game records arranged by year, magazines I had never seen in formats I had not known existed. Most of them in Japanese, none of which I could read. Standing in front of them I understood that I lived in a place where this would never be on the shelf. That I had walked into someone else's library.

I have been back to Japan many times since. You can guess what one of my suitcases is for on the return trip. I have learned what I can and cannot read. Some of those books I cannot read at all. I keep them anyway.

---

## Coco Ichibanya

I had visited the Nihon Ki-in when I was twenty-three and still about 2-dan. I played a game against a nine-year-old named Yoshi. He was amateur 3-dan. He beat me very badly.

After the game he looked at my face and said, *I will make you forget your defeat.* He took me to Coco Ichibanya for curry. He paid. *Women do not pay,* he informed me. *Think of it as a date.* I worked very hard not to laugh.

(He is at Tokyo University now. I hear he has grown into something of a womanizer. The signs were there.)

The curry was so spicy I could not leave the bathroom for three or four days. I forgot the defeat entirely. He was right.

There is a Coco Ichibanya in Dallas. I live near it. I go there whenever I lose at something. A bad exam. Something at work. A Go game. It does not matter what. The point is the curry. The point is the gesture made by a nine-year-old in Tokyo who had just dismantled me at my favorite game and then decided I had suffered enough.

---

I have been playing for years, and I am still learning how to lose well.

That, more than anything, is why I keep playing.

---

*If you want to start: download KGS or OGS (online Go servers), 
pick up a 9×9 board, and play your first hundred games without worrying about winning.*

*The game will teach you the rest.*

