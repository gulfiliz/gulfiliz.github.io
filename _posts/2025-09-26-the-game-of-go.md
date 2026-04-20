---
layout: post
title: The Game of Go — The Most Human Game Ever Invented
date: 2025-09-26
description: On Weiqi, AlphaGo, and why 19×19 intersections contain everything.
tags: hobbies, EN,
---

I am a 6-dan Go player.

I say this not to impress — in East Asia, where Go was born,
6-dan is a serious amateur level, not a professional title.
There are players who have dedicated their entire lives to this game
and will still lose to a 9-dan professional by 50 points.

That humility is, perhaps, the first thing Go teaches you.

---

## What Is Go?

The rules of Go are deceptively simple.

Two players — Black and White — alternate placing stones
on the intersections of a 19×19 grid.
Stones surrounded on all sides by the opponent are captured and removed.
The player who controls more territory at the end wins.

That's it. No dice. No hidden information. No luck.

And yet — Go has more possible board positions than there are 
atoms in the observable universe.

$$\text{Possible Go games} \approx 10^{700}$$

Chess, by comparison: $$10^{120}$$.

The difference is not incremental. It is categorical.

---

## Weiqi — The Chinese Origin

Go is at least 2,500 years old.
Its Chinese name is **Weiqi** (围棋) — literally "encirclement game."

In ancient China, Weiqi was one of the **four arts** of the scholar-gentleman,
alongside calligraphy, painting, and music — *qín, qí, shū, huà* (琴棋書畫).

To not know Weiqi was to be considered uncultured.

The game was not merely entertainment —
it was a model for military strategy, political thinking, philosophical inquiry.
Sun Tzu's *Art of War* and Weiqi share a deep vocabulary:
encirclement, sacrifice, the value of position over material.

A general who could not play Weiqi
was thought to lack the strategic mind required for command.

---

## Baduk — Korea's Obsession

Go arrived in Korea around the 5th century CE,
where it became **Baduk** (바둑).

Korean Go culture is arguably the most intense in the world.
Professional players begin training at age 6–8,
spending 8–10 hours a day studying for years before their first professional match.

The Korean **Baduk TV** channel broadcasts Go 24 hours a day.
Professional matches are covered like major sporting events.
Top players are celebrities.

Korea dominated world Go from the 1980s through the 2010s —
players like Lee Changho, Choi Cheolhan, and later Park Junghwan
were the Michael Jordans of the Go world.

---

## Igo — Japan's Aesthetic

In Japan, Go is **Igo** (囲碁), and it carries a different weight.

Japanese Go culture elevated the game to an art form.
The aesthetic of the game — the sound of a stone placed on a wooden board,
the feel of a slate-and-shell stone between the fingers,
the silence between moves — all of this matters.

The traditional equipment is exquisite:
**Kaya** wood boards, **kugeishi** (slate) black stones, 
**hamaguri** (clam shell) white stones.
A full professional-grade set can cost tens of thousands of dollars.

The Japanese Go world also gave us the concept of **fuseki** —
opening theory — and **joseki** — corner sequences —
which are studied the way musicians study Bach.

Honinbo Shusaku, a 19th century Japanese professional,
is considered by many the greatest player in history before the AI era.
His style — patient, territorial, deep — influenced the game for 150 years.

---

## AlphaGo — The Day Everything Changed

In March 2016, DeepMind's **AlphaGo** defeated Lee Sedol —
arguably the greatest human player of his generation —
4–1 in a five-game match.

The Go world was shaken.

Not because AI defeated a human — chess had fallen to Deep Blue in 1997.
But because of *how* AlphaGo played.

Its moves were strange. Inhuman. Wrong-looking.
And then, ten moves later, you understood.

Move 37 in Game 2 — a shoulder hit on the fifth line —
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

**AlphaGo Zero** (2017) went further — trained entirely through self-play,
with no human game data at all.
Starting from random play, it surpassed AlphaGo in three days.
It discovered joseki that humans had developed over centuries —
and then discarded some of them as suboptimal.

**KataGo** (2019–present), an open-source successor,
is now available to everyone.
Playing against KataGo at full strength is like 
staring into an abyss that stares back with perfect clarity.

---

## What AI Taught Human Players

Here is the remarkable thing:

After AlphaGo, human Go *improved.*

AI analysis tools showed that many established joseki were wrong.
Opening theories developed over decades were revised.
Moves once considered amateur mistakes were revealed as genius.

The AI didn't end Go. It deepened it.

Today, top professionals use AI analysis the way musicians use recordings —
to study, to question, to improve.
The game is richer now than it was before 2016.

---

## Why You Should Learn Go

Chess is a game of elimination. You win by destroying.

Go is a game of coexistence — until it isn't.
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

I have been playing for years, and I am still learning how to lose well.

That, more than anything, is why I keep playing.

---

*If you want to start: download KGS or OGS (online Go servers), 
pick up a 9×9 board, and play your first hundred games without worrying about winning.*

*The game will teach you the rest.*
