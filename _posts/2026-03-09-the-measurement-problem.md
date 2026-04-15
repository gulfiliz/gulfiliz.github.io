---
layout: post
title: What Does It Mean to Measure Something?
date: 2026-03-09
description: The deepest unsolved problem in quantum mechanics — and why your textbook lied to you.
tags: research-logs, physics, quantum, EN
---

Your introductory quantum mechanics course taught you the following:

1. A quantum system evolves according to the Schrödinger equation.
2. When you measure it, the wavefunction collapses to an eigenstate.
3. The probability of each outcome is given by the Born rule: $$P_i = |\langle \phi_i | \psi \rangle|^2$$.

This is correct. It works. It has never failed an experimental test.

It is also, philosophically, a disaster.

---

## The Problem, Precisely Stated

The Schrödinger equation is linear and unitary.
It takes pure states to pure states.
It never produces definite outcomes — only superpositions.

But measurements produce definite outcomes.

You measure the spin of an electron.
You get UP or DOWN. Not both. Not a superposition.
One result. Every time.

The Schrödinger equation cannot explain this.
It predicts that after measurement, 
the system and the measuring device are in an entangled superposition:

$$|\psi\rangle = \alpha|\text{up}\rangle|\text{device reads up}\rangle + \beta|\text{down}\rangle|\text{device reads down}\rangle$$

But you see ONE of these. Not both.

Where does the other term go?

This is the **measurement problem.**
It has been open since 1926.

---

## Copenhagen — The Pragmatist's Escape

The Copenhagen interpretation, due to Bohr and Heisenberg,
essentially refuses to answer the question.

The wavefunction is not a real physical object —
it is a calculational tool for predicting measurement outcomes.
Asking what happens "between measurements" is meaningless.
Physics is about what we can observe. Full stop.

This is intellectually unsatisfying but experimentally bulletproof.
It is why most working physicists say
*"shut up and calculate"* — a phrase often attributed, perhaps unfairly, to Feynman.

Copenhagen works. It just doesn't explain anything.

---

## Von Neumann and the Chain of Measurement

John von Neumann formalized quantum mechanics in 1932
and noticed something troubling.

The boundary between "quantum system" and "classical measuring device"
is arbitrary. You can push it anywhere.

The electron is quantum. Fine.
But so is the detector. And the wire carrying the signal.
And the neurons in your brain processing the result.

Von Neumann showed you can place the "Heisenberg cut" —
the boundary where collapse occurs —
anywhere in this chain without changing the predictions.

But the cut has to be *somewhere.*

His conclusion, developed further by Eugene Wigner:
collapse occurs in **consciousness.**
The wavefunction is physically real and evolves unitarily
until it enters a conscious observer's experience.

This is called the **von Neumann–Wigner interpretation.**
Almost no physicist accepts it today.
But it follows logically from taking the formalism seriously.

---

## Everett and the Many-Worlds Interpretation

In 1957, Hugh Everett III — a graduate student at Princeton —
proposed a radical solution:

**There is no collapse.**

The Schrödinger equation is always, exactly, universally valid.
When you measure a spin:

$$|\psi\rangle = \alpha|\text{up}\rangle|\text{device reads up}\rangle|\text{you see up}\rangle$$
$$\quad + \beta|\text{down}\rangle|\text{device reads down}\rangle|\text{you see down}\rangle$$

Both terms are real. Both exist.
You — the observer — also split into two branches.
One of you sees UP. One sees DOWN.

There is no collapse because there is no need for collapse.
The universe is a single, deterministically evolving wavefunction.
What we call "measurement outcomes" are simply 
the different branches of this universal wavefunction
becoming mutually unobservable due to decoherence.

This is the **Many-Worlds Interpretation (MWI).**

It is, in a sense, the most conservative interpretation —
it takes the Schrödinger equation completely seriously
and adds nothing to it.

The cost: an astronomically — infinitely — branching multiverse,
one branch for every quantum event in the history of the universe.

**The Born rule problem:** MWI struggles to explain
*why* we should assign probability $$|\alpha|^2$$ to the up branch.
In a theory where both branches exist,
what does probability even mean?

This remains an active research area.
David Deutsch and David Wallace have proposed decision-theoretic
derivations of the Born rule within MWI.
The debate continues.

---

## Decoherence — The Modern Partial Answer

By the 1980s, **decoherence theory** (Zeh, Zurek) provided
a crucial piece of the puzzle.

When a quantum system interacts with its environment —
even slightly, even unavoidably —
the off-diagonal terms of its density matrix 
decay exponentially fast in the pointer basis:

$$\rho \rightarrow \sum_i |c_i|^2 |\phi_i\rangle\langle\phi_i|$$

The system *looks* classical. The superposition becomes unobservable.

For a macroscopic object like a measuring device,
decoherence occurs on timescales of $$\sim 10^{-23}$$ seconds.
This is why we never see Schrödinger's cat in a superposition —
decoherence destroys the coherence faster than any measurement.

But — and this is crucial —
**decoherence does not solve the measurement problem.**

Decoherence explains why we can't observe the superposition.
It does not explain why we observe *one* outcome.
The density matrix after decoherence is diagonal —
but it still contains all the terms.
We still need to explain why only one is experienced.

Decoherence removes the problem from sight.
It does not remove the problem.

---

## Pilot Wave Theory — Bohmian Mechanics

In 1952, David Bohm resurrected and completed
a 1927 idea by de Broglie:

**Particles have definite positions at all times.**

There is a real particle, always at a definite location,
guided by a real wave — the wavefunction — 
which evolves according to the Schrödinger equation.

The particle's trajectory is determined by the **guidance equation:**

$$\frac{d\mathbf{x}}{dt} = \frac{\hbar}{m} \text{Im} \frac{\nabla \psi}{\psi}$$

No collapse. No many worlds. No role for consciousness.
Just a particle, a wave, and a deterministic equation.

The randomness of quantum mechanics arises from
ignorance of initial conditions — exactly like classical statistical mechanics.

**The cost:** the wave is real and nonlocal.
The guidance equation depends on the configuration of 
*all* particles in the universe simultaneously.
Bell's theorem guarantees that any hidden-variable theory
reproducing quantum predictions must be nonlocal.
Bohmian mechanics is manifestly, explicitly nonlocal.

Many physicists find this unacceptable.
Others find it the most honest theory on the table.

---

## QBism — The Radical Subjectivist Turn

More recently, **QBism** (Quantum Bayesianism, Fuchs, Mermin, Schack)
has proposed something even more radical than Copenhagen:

The wavefunction is not a property of the world.
It is an agent's **personal probability assignment** —
a tool for navigating experience, not a description of reality.

When a wavefunction collapses, nothing physical happens.
An agent simply updates their beliefs upon receiving new information.
The Born rule is a normative rule for rational belief — 
like Bayesian probability, not like Newton's laws.

QBism dissolves the measurement problem by denying
that quantum mechanics describes an observer-independent reality.

This is philosophically provocative and experimentally empty —
QBism makes no predictions that differ from standard quantum mechanics.

Whether that is a virtue or a vice depends on 
what you think physics is for.

---

## Where We Stand

It has been nearly a century since Heisenberg wrote down his matrix mechanics.

We have the most precisely tested theory in the history of science.
We do not agree on what it means.

Copenhagen, Many-Worlds, Bohmian mechanics, QBism,
Relational QM (Rovelli), Consistent Histories, Objective Collapse theories —
each with serious physicists defending them,
each with serious problems unsolved.

The measurement problem is not a philosophical curiosity
at the edges of physics.
It is a crack running through the foundation.

What is a quantum state, really?
What is an observer?
Does the moon exist when nobody looks at it?

Bohr said asking such questions was meaningless.
Einstein refused to believe the answer was no.

Neither of them solved it.

Neither have we.

---

*If this keeps you up at night — good.
It should.*
