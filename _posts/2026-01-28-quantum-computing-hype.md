---
layout: post
title: Quantum Computing — Separating the Revolution from the Hype
date: 2026-01-28
description: A quantum researcher's honest guide to what quantum computers can and cannot do — and why the headlines are almost always wrong.
tags: research-logs , physics , quantum , EN
---

Recently, I started to work on quantum error correction.

This means I'll spend my days thinking about
how to build quantum computers that actually work —
not in press releases, not in investor decks,
not in breathless technology journalism —
but in the real world,
where qubits decohere,
errors accumulate,
and the gap between what we can do
and what people claim we can do
is measured in decades and orders of magnitude.

I love quantum computing.
I believe it is genuinely revolutionary.
And I am going to tell you
why almost everything you have read about it
is wrong, exaggerated, or misleading.

This is not pessimism.
This is what honest quantum science looks like.

---

## I. What Quantum Computers Actually Are

Let us start with what a quantum computer is —
not the metaphor, the reality.

A quantum computer is a physical system
that stores and processes information in quantum states.

Classical computers use bits — 0 or 1.
Quantum computers use qubits —
quantum states that can be in superpositions of 0 and 1.

A qubit state is:

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$

where $$|\alpha|^2 + |\beta|^2 = 1$$.

*n* qubits can be in a superposition of $$2^n$$ states simultaneously.
This is the source of the "exponential speedup" narrative.

But — and this is crucial —
**you cannot read out all $$2^n$$ states.**

When you measure the system,
it collapses to a single state —
with probabilities given by $$|\alpha|^2$$ and $$|\beta|^2$$.

The art of quantum algorithm design
is not about storing $$2^n$$ values simultaneously.
It is about constructing interference patterns —
using the quantum amplitudes —
such that wrong answers cancel out
and right answers reinforce.

This is extraordinarily difficult.
Most problems do not have this structure.

Quantum computers are not
"classical computers that try all answers at once."

They are devices that exploit quantum interference
to solve specific problems with specific mathematical structure
more efficiently than classical algorithms.

---

## II. What Quantum Computers Are Actually Good At

The honest list of problems where quantum computers
offer provable or strong evidence of speedup:

**Factoring large integers — Shor's algorithm (1994).**

Peter Shor showed that a quantum computer
can factor an $$n$$-bit integer
in polynomial time: roughly $$O(n^3)$$.
The best known classical algorithm (general number field sieve)
runs in sub-exponential time —
super-polynomial but sub-exponential.

For large enough integers,
a sufficiently powerful quantum computer
could factor numbers that are classically intractable.

RSA encryption depends on the difficulty of factoring.
A large enough quantum computer could break RSA.

This is real. This is not hype.

It is also roughly 20–30 years away from practical relevance,
as I will explain.

**Searching unsorted databases — Grover's algorithm (1996).**

Grover's algorithm searches an unsorted database
of $$N$$ items in $$O(\sqrt{N})$$ time.
Classical search requires $$O(N)$$.

This is a quadratic speedup — real but modest.
It does not break encryption directly.
It halves the effective key length —
which is addressed by simply doubling key length.

**Simulating quantum systems.**

This is the most immediately practical application
and the one Feynman originally had in mind
when he proposed quantum computers in 1982.

Simulating quantum chemistry — molecules, materials —
requires classical computers to track
exponentially many quantum amplitudes.
A quantum computer could simulate quantum systems
with polynomial overhead.

Applications: drug discovery, materials science,
catalysis, battery technology, solar cells.

These are real, important, and closer than
the cryptography applications.

**Optimization problems.**

Quantum annealing and gate-based quantum algorithms
may offer speedups for certain optimization problems —
logistics, finance, machine learning.

The evidence here is more mixed.
For many optimization problems,
the best classical algorithms are already very good,
and demonstrated quantum advantage is limited.

---

## III. The Hype Taxonomy

Let me categorize the quantum hype
you will encounter in the wild.

**Type 1: The Exponential Fallacy.**

*"A 300-qubit quantum computer can represent more states
than there are atoms in the observable universe!"*

True. Irrelevant.

Yes, 300 qubits span a Hilbert space of $$2^{300}$$ dimensions.
No, this does not mean a 300-qubit quantum computer
is more powerful than all classical computers combined.

You cannot access $$2^{300}$$ states.
You get one sample from the output distribution per shot.
The exponential state space is not your computational resource —
quantum interference is.

And quantum interference only helps
for problems with very specific structure.

**Type 2: The Supremacy Confusion.**

In 2019, Google announced "quantum supremacy" —
their 53-qubit Sycamore processor performed
a specific sampling task in 200 seconds
that they claimed would take a classical supercomputer 10,000 years.

IBM disputed this, claiming the task could be done classically
in 2.5 days with better algorithms.

Subsequent work has further reduced the classical simulation time.

The task Google chose — random circuit sampling —
was specifically designed to be hard for classical computers
and easy for quantum computers.
It has no known practical application.

"Quantum supremacy" does not mean quantum computers
are now better than classical computers at useful tasks.
It means a quantum processor performed one specific,
artificial, carefully chosen task faster.

This is a scientific milestone. It is not a revolution.

**Type 3: The Timeline Compression.**

*"Quantum computers will break encryption in 5 years."*

No.

To break RSA-2048 with Shor's algorithm,
you need approximately **4000 logical qubits**
running reliable quantum circuits with millions of gates.

A logical qubit is a fault-tolerant qubit —
protected from errors by quantum error correction.

Current state of the art:
surface code error correction requires approximately
**1000 physical qubits per logical qubit**
at current physical error rates (~0.1%).

So breaking RSA-2048 requires approximately:
4000 logical qubits × 1000 physical/logical
= **4 million physical qubits.**

Current state of the art: ~1000-2000 physical qubits.

We need three orders of magnitude improvement
in qubit count,
while simultaneously maintaining or improving
error rates,
coherence times,
gate fidelities,
and connectivity.

This is not 5 years.
This is not 10 years.
Serious researchers consider 20-30 years optimistic.

**Type 4: The NISQ Oversell.**

NISQ — Noisy Intermediate-Scale Quantum —
refers to current quantum devices:
50-1000 qubits, without full error correction,
with significant noise.

There is genuine research interest in whether
NISQ devices can demonstrate quantum advantage
for practical problems before full error correction is achieved.

This is a legitimate research question.

It has been aggressively oversold
by companies (IBM, Google, IonQ, Rigetti)
as imminent commercial quantum advantage.

The honest answer from the research community:
**NISQ advantage for practical problems
has not been convincingly demonstrated.**

The variational quantum algorithms (VQE, QAOA)
proposed for NISQ devices
have not outperformed classical algorithms
on any problem of practical interest.

This may change. But it has not changed yet.

**Type 5: The Investment Narrative.**

Quantum computing has received billions of dollars
in venture capital and government investment.

This creates strong incentives to:
- Announce milestones aggressively
- Describe research progress in maximum-impact language
- Imply near-term commercial applications
- Avoid discussing fundamental obstacles

I am not suggesting fraud.
I am observing that financial incentives
distort the public presentation of research progress
in predictable ways.

Read quantum computing press releases
with this in mind.

---

## IV. The Real Obstacles

What actually stands between current devices
and useful quantum computers?

**1. Physical error rates.**

Current best physical qubit error rates:
approximately 0.1% per gate operation
for the best superconducting qubits.

This sounds small.
For a circuit requiring 1 million gate operations —
typical for Shor's algorithm at useful scales —
the probability of at least one error is approximately:

$$1 - (1 - 0.001)^{10^6} \approx 1 - e^{-1000} \approx 1$$

Certainty of error. Without error correction, useless.

**2. The error correction overhead.**

Quantum error correction protects logical qubits
from physical errors.

The most promising code for near-term devices:
the surface code.

Surface code overhead at 0.1% physical error rate:
approximately 1000 physical qubits per logical qubit.

This number improves as physical error rates decrease —
but improving physical error rates is itself
an enormous engineering challenge.

**3. Decoherence.**

Qubits lose their quantum state
through interaction with the environment.
T1 (energy relaxation) and T2 (dephasing) times
for current superconducting qubits:
approximately 100-500 microseconds.

Gate times: approximately 10-100 nanoseconds.

This gives you roughly 1000-10000 gates
before decoherence destroys your computation.

For useful quantum algorithms: millions of gates needed.

The gap between available coherence
and required coherence
is the central engineering challenge.

**4. Connectivity.**

Quantum algorithms often require arbitrary qubit-to-qubit interactions.
Physical devices have limited connectivity —
qubits can only interact with their neighbors.

Implementing long-range interactions requires SWAP gates —
additional gates that introduce additional errors.

**5. Classical simulation of quantum advantage.**

For any quantum algorithm to be useful,
it must outperform the best classical algorithm —
not the worst classical algorithm,
not a naive classical algorithm,
but the best.

Classical algorithms and classical hardware
are also improving rapidly.
The bar for quantum advantage moves continuously.

Several proposed quantum advantages
have been eliminated by better classical algorithms.
This will continue to happen.

---

## V. What Is Actually Happening

Despite everything I have said —
and I mean everything, genuinely —
remarkable progress is being made.

**Error rates are improving.**

IBM's best qubits have achieved error rates
of 0.1% and below.
Several groups are approaching 0.01%.
Every order of magnitude improvement in error rate
reduces the error correction overhead dramatically.

**Qubit counts are increasing.**

IBM's roadmap projects 100,000+ qubit processors
by the end of the decade.
Whether this will be achievable with sufficient quality
is uncertain — but the trajectory is real.

**New error correcting codes.**

This is where my own work lives.

The surface code is not the only error correcting code.
**qLDPC codes** — quantum Low-Density Parity-Check codes —
including the Bivariate Bicycle codes
I work on directly —
offer dramatically better encoding rates:
fewer physical qubits per logical qubit.

If qLDPC codes can be implemented in hardware —
and this is a serious "if" —
the overhead for fault-tolerant quantum computation
could be reduced by an order of magnitude.

This would move the timeline for useful quantum computation
significantly forward.

**Quantum simulation is already useful.**

For simulating quantum chemistry —
small molecules, reaction mechanisms,
electronic structure —
quantum computers are approaching the regime
where they can do calculations
classically intractable for specific systems.

This is not breaking encryption.
It is helping design better batteries and drugs.
It is less dramatic. It is more real.

---

## VI. The Responsibility of the Quantum Researcher

I want to say something directly.

Those of us who work in quantum computing
have a responsibility to the public
that we have not always honored.

When we allow our work to be presented
in press releases that claim quantum supremacy
means practical quantum computers are here —
we are complicit in misleading people.

When we allow our funding agencies to believe
that quantum computers will break encryption
in five years —
we are creating false urgency
that distorts policy and resource allocation.

When we allow companies to sell
"quantum-enhanced" products that have no quantum advantage —
we are participating in fraud by association.

The honest message is less exciting but more important:

**Quantum computing is a genuine scientific and engineering revolution
that is decades from practical large-scale impact
on most applications,
that requires fundamental breakthroughs
in error correction and hardware,
that will be enormously important when it arrives,
and that deserves serious investment and serious research —
not hype, not promises, and not the inflation of timelines
for the sake of press coverage or investment rounds.**

The physics is real.
The mathematics is beautiful.
The engineering challenges are enormous.
The timeline is long.

All four of these things are true simultaneously.

---

## VII. What You Should Actually Be Excited About

Here is what deserves genuine excitement —
not hype, but real scientific progress:

**Quantum error correction is working.**

For the first time, experimentalists are demonstrating
that logical qubits can be more reliable than physical qubits —
that error correction actually reduces error rates,
rather than introducing more errors than it corrects.

Google's 2023 demonstration of below-threshold
error correction in the surface code
was a genuine milestone.
Not hype. A real proof of principle.

**New codes are being discovered.**

The Bivariate Bicycle codes —
the subject of Bravyi et al.'s 2024 paper —
represent a genuine theoretical advance:
codes that encode more logical qubits per physical qubit
than the surface code,
with comparable error thresholds.

Whether these can be implemented in hardware
remains to be seen.
The theoretical advance is real.

**Quantum simulation of chemistry is approaching utility.**

For specific molecules — FeMoco (the active site of nitrogenase),
cytochrome P450, specific transition metal complexes —
quantum simulation is approaching the regime
where it could outperform classical methods.

Drug discovery. Catalyst design. Materials science.
These applications are closer than cryptography.
They are also more beneficial.

**The hardware is genuinely improving.**

Coherence times, gate fidelities, qubit counts —
all are improving on roughly annual timescales.
The trajectory is real, even if the hype outpaces it.

---

## VIII. A Note on Quantum Cryptography

One area where quantum technology is already useful:

**Quantum Key Distribution (QKD).**

QKD uses quantum mechanics —
specifically, the no-cloning theorem
and the disturbance caused by measurement —
to distribute cryptographic keys
with information-theoretic security.

An eavesdropper cannot intercept a QKD transmission
without disturbing it in a detectable way.

QKD networks exist —
China has deployed a 2000km QKD network.
Commercial QKD systems are available.

This is quantum technology that works now —
not requiring error correction,
not requiring millions of qubits.

It is also not a replacement for
classical public-key cryptography in most applications —
it requires a dedicated quantum channel,
has distance limitations,
and is expensive.

But it is real, working quantum technology.
Not hype.

---

## Coda

I started this essay saying I love quantum computing.

I do.

The physics is extraordinary —
the manipulation of quantum coherence,
the exploitation of entanglement,
the correction of errors that should be uncorrectable —
these are among the most beautiful
and technically demanding achievements
in the history of science and engineering.

The mathematics is deep —
error correcting codes, fault-tolerant protocols,
quantum algorithms — these are genuinely beautiful
mathematical structures.

And the potential is real —
not the potential of breaking encryption next year,
but the potential of simulating quantum systems,
discovering new materials,
and solving optimization problems
that have resisted classical approaches.

That potential is worth working toward.
It is worth the decades it will take.

It is not worth the lies we tell
to get there faster.

*Honest science is slower.*
*Honest science is more reliable.*
*Honest science is, in the end, the only kind that works.*

The revolution is real.
The timeline is long.
The hype is harmful.

Hold all three thoughts simultaneously.
That is what it means to be a quantum researcher.

---
