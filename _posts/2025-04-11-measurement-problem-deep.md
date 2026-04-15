---
layout: post
title: The Measurement Problem — Why Quantum Mechanics Has No Agreed Interpretation After 100 Years
date: 2025-04-11
description: The formalism works perfectly. Nobody agrees on what it means. A technical deep-dive into the most embarrassing open problem in physics.
tags: research-logs, physics, quantum, EN
---

Quantum mechanics is the most precisely tested theory
in the history of science.

Its predictions have been verified to ten significant figures.
Every experiment we have ever done
is consistent with its predictions.
Not one experimental result has contradicted it.

And we do not agree on what it means.

Not in the way that scientists sometimes disagree —
arguing about interpretations at the edges
of an otherwise settled theory.

We disagree about the most fundamental question:

**What is actually happening when a quantum measurement occurs?**

This is not a philosophical nicety.
It is a gap at the center of our most successful theory —
a place where the formalism ends
and confusion begins.

One hundred years of the best minds in physics.
No consensus.

Let me show you exactly why.

---

## I. The Formalism — What Everyone Agrees On

Despite the interpretational chaos,
everyone agrees on the mathematical formalism.

A quantum system is described by a **state vector** $$|\psi\rangle$$
in a Hilbert space $$\mathcal{H}$$.

Between measurements, the state evolves according to
the **Schrödinger equation:**

$$i\hbar \frac{\partial}{\partial t}|\psi\rangle = \hat{H}|\psi\rangle$$

This evolution is:
- **Linear:** if $$|\psi_1\rangle$$ and $$|\psi_2\rangle$$ are solutions,
  so is $$\alpha|\psi_1\rangle + \beta|\psi_2\rangle$$
- **Unitary:** it preserves the norm $$\langle\psi|\psi\rangle = 1$$
- **Deterministic:** given $$|\psi(t_0)\rangle$$,
  $$|\psi(t)\rangle$$ is uniquely determined
- **Time-reversible:** run it backward, get the same physics

Upon measurement of an observable $$\hat{A}$$
with eigenstates $$|a_i\rangle$$ and eigenvalues $$a_i$$:

The state can be written as:
$$|\psi\rangle = \sum_i c_i |a_i\rangle$$

The measurement yields outcome $$a_i$$
with probability $$|c_i|^2$$.

After the measurement, the state **collapses:**
$$|\psi\rangle \to |a_i\rangle$$

This is the **Born rule** plus the **collapse postulate.**

These two rules — Schrödinger evolution and collapse —
are contradictory.

Schrödinger evolution is linear, unitary, deterministic.
Collapse is nonlinear, non-unitary, probabilistic.

The theory has two dynamical rules
that apply in different circumstances —
but it does not say what those circumstances are.

**When does collapse happen?**

This is the measurement problem.

---

## II. Why It's Actually a Problem

You might think: so what?
We know when to apply each rule.
Apply Schrödinger when nothing is being measured.
Apply collapse when a measurement occurs.
It works. Move on.

This is the Copenhagen response.
It is pragmatically successful.
It is philosophically evasive.

The problem is that "measurement" is not defined
within the theory itself.

What counts as a measurement?
Is a photon hitting a photographic plate a measurement?
Is a particle interacting with a gas molecule a measurement?
Is a computer recording data a measurement?
Is a human looking at a computer screen a measurement?

The theory gives no answer.

Worse: if we take the theory seriously —
if we believe quantum mechanics applies to everything —
then the measuring apparatus is also a quantum system.
The observer is also a quantum system.
The entire universe is a quantum system.

And quantum systems evolve according to the Schrödinger equation.
Which is linear. And unitary. And does not produce collapse.

So where does collapse come from?

---

## III. The Von Neumann Chain

John von Neumann formalized this problem in 1932.

Consider measuring the spin of an electron
using a Stern-Gerlach apparatus.

The electron is initially in state:
$$|\psi_e\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$$

The apparatus is initially in its ready state $$|R\rangle$$.

According to the Schrödinger equation,
the joint evolution is:

$$(\alpha|\uparrow\rangle + \beta|\downarrow\rangle)|R\rangle
\to \alpha|\uparrow\rangle|D_\uparrow\rangle + \beta|\downarrow\rangle|D_\downarrow\rangle$$

where $$|D_\uparrow\rangle$$ and $$|D_\downarrow\rangle$$
are states of the apparatus registering "up" and "down."

After the interaction, the system is in an **entangled superposition.**

The apparatus is not in a definite state.
It is in a superposition of "registered up" and "registered down."

This is not what we observe.
We observe a definite outcome.

Von Neumann's solution: place the "cut"
between quantum and classical somewhere.
Below the cut: quantum evolution.
Above the cut: classical definite states.

But where is the cut?

Von Neumann showed you can place it anywhere —
between electron and apparatus,
between apparatus and observer's eye,
between eye and brain,
between brain and consciousness —
and get the same predictions.

He concluded: the cut must be placed at consciousness.
The wavefunction collapses when a conscious observer
becomes aware of the result.

This is the **von Neumann-Wigner interpretation.**
It has very few current defenders.
But it follows logically from taking
the formalism seriously all the way up
to the observer.

---

## IV. Decoherence — The Modern Partial Answer

By the 1980s, **decoherence theory**
(Zeh, Zurek, Joos) provided a crucial insight.

When a quantum system interacts with an environment —
any environment, even a single air molecule —
it becomes entangled with that environment.

Tracing out the environmental degrees of freedom
(taking the partial trace of the density matrix),
the system's reduced density matrix becomes diagonal
in the **pointer basis** — the preferred classical basis
selected by the form of the system-environment interaction:

$$\rho_S = \text{Tr}_E(|\Psi\rangle\langle\Psi|)
\approx \sum_i |c_i|^2 |s_i\rangle\langle s_i|$$

The off-diagonal elements — the coherences —
decay exponentially with a timescale:

$$\tau_D \sim \tau_c \left(\frac{\lambda_{dB}}{\Delta x}\right)^2$$

where $$\tau_c$$ is the correlation time of the environment,
$$\lambda_{dB}$$ is the thermal de Broglie wavelength,
and $$\Delta x$$ is the separation between pointer states.

For a macroscopic object:
$$\tau_D \sim 10^{-23} \text{ seconds}$$

Decoherence is effectively instantaneous for large objects.
This explains why we never see macroscopic superpositions.

But decoherence does not solve the measurement problem.

After decoherence, the density matrix is diagonal —
it looks like a classical probability distribution.
But the universe is still in the global superposition:

$$|\Psi\rangle = \sum_i c_i |s_i\rangle|E_i\rangle$$

Decoherence makes the branches of this superposition
mutually orthogonal — non-interfering.
It does not select one branch.
It does not produce a definite outcome.

**Decoherence explains why we cannot observe interference
between macroscopic branches.**

**It does not explain why we observe one branch.**

This distinction is subtle but crucial.
Confusing decoherence with the solution to the
measurement problem is the most common
sophisticated mistake in discussions of quantum foundations.

---

## V. The Interpretations — A Technical Survey

Let me go through the major interpretations
with more precision than usual.

### Copenhagen

**Core claim:** The wavefunction is not a description
of physical reality. It is a calculational tool
for predicting measurement outcomes.

**The cut:** Between quantum system and classical apparatus.
The cut is pragmatically placed where convenient.

**Collapse:** A real update, but not a physical process —
an update of our knowledge,
not a change in the physical world.

**Mathematical commitment:** None beyond the formalism.
Copenhagen refuses to answer questions
about what happens between measurements.

**Problem:** Does not explain why measurements have outcomes.
Treats "measurement" and "classical apparatus"
as primitive, undefined concepts.

### Many-Worlds (Everett, 1957)

**Core claim:** The Schrödinger equation is always, exactly valid.
There is no collapse. There is no cut.

**What happens at measurement:**
$$|\psi_{system}\rangle|\psi_{apparatus}\rangle|\psi_{observer}\rangle$$
evolves unitarily into a superposition of branches.
In each branch, the observer sees a definite outcome.
All branches are equally real.

**The universal wavefunction:**
$$|\Psi\rangle = \sum_i c_i |\text{branch}_i\rangle$$

All branches exist. You are in one branch.
The other-you's are in other branches.

**Advantages:**
- No collapse needed
- No cut needed
- No special role for measurement or observers
- Fully Schrödinger-equation based

**Problems:**

1. **The preferred basis problem:**
   What determines the branches?
   The wavefunction can be decomposed in infinitely many ways.
   Decoherence provides a pragmatic answer
   but not a fundamental one.

2. **The Born rule problem:**
   Why are probabilities $$|c_i|^2$$?
   In a theory where all branches exist,
   what does probability mean?
   
   Deutsch and Wallace have proposed a decision-theoretic
   derivation: a rational agent who knows they are
   in a branching universe should bet as if
   probabilities are $$|c_i|^2$$.
   
   Whether this derivation works is contested.

3. **The ontology:**
   The "many worlds" are not in some other space.
   They are different components of the same wavefunction.
   What does it mean for them to "exist"?

### Bohmian Mechanics (de Broglie 1927, Bohm 1952)

**Core claim:** There are particles with definite positions.
There is also a wavefunction — the pilot wave —
that guides the particles.

**The guidance equation:**

$$\frac{d\mathbf{Q}_k}{dt} = \frac{\hbar}{m_k}
\text{Im}\frac{\nabla_k \psi(\mathbf{Q}_1,...,\mathbf{Q}_N, t)}
{\psi(\mathbf{Q}_1,...,\mathbf{Q}_N, t)}$$

The particle positions $$\mathbf{Q}_k$$ are guided
by the wavefunction $$\psi$$.

**Measurement:** The particle enters the apparatus.
Its position becomes correlated with the apparatus reading.
The "outcome" is determined by the particle's initial position,
plus the wavefunction's guidance.

**Advantages:**
- Definite particle positions always
- No collapse (wavefunction evolves by Schrödinger always)
- No measurement problem (measurement is just interaction)
- Deterministic

**Problems:**

1. **Nonlocality:**
   The guidance equation depends on the positions
   of all particles simultaneously.
   It is manifestly nonlocal —
   changing the wavefunction here
   instantly affects particles anywhere.
   
   This is compatible with relativity at the statistical level
   (you cannot use it to send signals)
   but requires a preferred reference frame at the fundamental level.
   
   **Relativistic Bohmian mechanics is not yet fully worked out.**

2. **The wavefunction ontology:**
   The wavefunction lives in configuration space —
   a $$3N$$-dimensional space for $$N$$ particles.
   It is not a field in physical 3D space.
   What is it?

3. **Empty branches:**
   In Bohmian mechanics, the "empty" branches of the wavefunction —
   the branches the actual particles did not enter —
   still exist and still evolve.
   They carry no particles but still influence future evolution.
   What are they?

### GRW — Spontaneous Collapse (Ghirardi, Rimini, Weber, 1986)

**Core claim:** The Schrödinger equation is wrong.
It needs to be modified by adding stochastic collapse terms.

**The modified evolution:**

$$d|\psi\rangle = \left[-\frac{i}{\hbar}\hat{H}dt
+ \sum_k \left(\frac{\hat{L}_k}{\sqrt{\langle\hat{L}_k^\dagger\hat{L}_k\rangle}} - 1\right)dN_k\right]|\psi\rangle$$

Particles undergo spontaneous localization —
random collapses to position eigenstates —
at a rate $$\lambda \sim 10^{-16}$$ s$$^{-1}$$ per particle.

For a single particle: essentially never collapses.
For a macroscopic object with $$10^{23}$$ particles:
collapses $$\sim 10^7$$ times per second.
Effectively always localized.

**Advantages:**
- Solves the measurement problem directly
- No special role for observers or measurements
- Macroscopic objects always have definite states

**Problems:**

1. **New parameters:**
   The collapse rate $$\lambda$$ and localization width $$r_c$$
   are new fundamental constants.
   Why these values?

2. **Energy non-conservation:**
   Each collapse involves an energy kick.
   Total energy is not conserved —
   though the violation is extremely small.

3. **Relativistic extension:**
   GRW is not easily made compatible with special relativity.
   Relativistic collapse models exist
   but are more complicated.

4. **It modifies quantum mechanics:**
   Unlike other interpretations, GRW makes
   different experimental predictions.
   In principle, it can be tested against standard QM.
   No deviation has been found.

### Relational QM (Rovelli, 1996)

**Core claim:** Quantum states are not absolute —
they are relational.
A quantum state $$|\psi\rangle$$ is always
the state *relative to* some observer or system.

Different observers can assign different states
to the same system.
Both assignments are correct — relative to their respective observers.

**Measurement:** System S interacts with observer O.
Relative to O, S is in a definite state after interaction.
Relative to another observer O', the combined S+O system
may still be in superposition.

**Advantages:**
- No special role for macroscopic observers
- No collapse as a physical process
- Consistent with relativity

**Problems:**
- What does it mean for facts to be observer-relative?
- Can different observers' accounts be reconciled?
- The recent "Wigner's Friend" experiments
  probe exactly this question experimentally.

---

## VI. Wigner's Friend — The Problem Made Concrete

**Wigner's Friend** is a thought experiment
that makes the measurement problem concrete.

Wigner is outside a sealed laboratory.
His Friend is inside, measuring an electron's spin.

**From Friend's perspective:**
The measurement occurs. The wavefunction collapses.
Friend sees a definite outcome — say, spin-up.

**From Wigner's perspective:**
The laboratory is a closed quantum system.
Friend + electron + apparatus evolve unitarily.
No collapse occurs from outside.
The laboratory is in superposition:

$$|\Psi_{lab}\rangle = \alpha|\text{up}\rangle|\text{Friend saw up}\rangle
+ \beta|\text{down}\rangle|\text{Friend saw down}\rangle$$

Both accounts cannot be simultaneously correct —
unless facts are observer-relative (Relational QM)
or all branches are real (Many-Worlds).

In 2019, **Brukner** showed that in an extended version —
**Extended Wigner's Friend** —
the different observers' accounts can lead to
logical contradictions if you assume:
(1) the universality of quantum mechanics,
(2) the reality of observed facts, and
(3) freedom of choice in measurements.

You must abandon at least one of these.

Experiments implementing extended Wigner's Friend scenarios
have been performed — using photons as proxies for observers.
The results are consistent with quantum mechanics
violating at least one of the three assumptions.

Which one?

We do not know.

---

## VII. The Preferred Basis Problem

Every interpretation faces a version of
the **preferred basis problem.**

The Hilbert space of a quantum system
has no preferred basis.
The state $$|\psi\rangle$$ can be decomposed
in infinitely many ways.

$$|\psi\rangle = \sum_i c_i|a_i\rangle = \sum_j d_j|b_j\rangle = ...$$

Why do measurements yield outcomes
in the position basis? The spin basis?
Why do we see cats as alive or dead,
not as superpositions of
(alive + dead) and (alive - dead)?

Decoherence provides a partial answer:
the pointer basis — selected by the system-environment interaction —
is the basis in which off-diagonal elements decay fastest.

For position measurements:
the environment (air molecules, photons)
interacts locally in position space.
Position is the pointer basis.

But this answer presupposes a preferred factorization
of the universe into system + environment.
What determines this factorization?
In a fully quantum universe with no external observer —
just one big wavefunction —
where does the factorization come from?

This is called the **preferred factorization problem**
or the **problem of the preferred basis for branches.**

It remains open.

---

## VIII. What Does This Mean for Quantum Computing?

You might wonder: if the foundations are this unsettled,
how can we build quantum computers?

The answer: quantum computers depend on the formalism,
not the interpretation.

The unitary evolution of the Schrödinger equation —
universally agreed upon — is what makes
quantum computation possible.
Superposition, entanglement, interference —
all are features of the unitary formalism.

Quantum error correction —
my own field —
is entirely within the formalism.
We describe errors as quantum channels,
encode logical qubits in stabilizer codes,
perform syndrome measurements to detect errors.

None of this requires a preferred interpretation.
Copenhagen, Many-Worlds, Bohmian mechanics —
all agree on the predictions.
All would endorse the same quantum error correction protocols.

The measurement problem matters for:
- Understanding what quantum computers *are*
- Understanding what "running a quantum algorithm" means
- Understanding whether quantum computers are doing
  something genuinely different from classical computers

For Everettians: each quantum computation branches
the universe into a superposition of outcomes.
Quantum advantage comes from interference between branches.

For Bohmians: the wavefunction guides physical particles
through a computation. The guidance exploits
the high-dimensional structure of configuration space.

For Copenhagenists: the quantum computer performs operations
on quantum states, and we measure the output.
What happens in between is not our concern.

All three predict the same outputs.
All three endorse the same algorithms.

The measurement problem is real and important.
It does not stop us from building quantum computers.
It stops us from fully understanding them.

---

## IX. Current Research in Quantum Foundations

Quantum foundations is not a dead field.
It is a growing one.

**Bell inequality tests:**
Loophole-free Bell tests — Hensen et al. (2015),
Giustina et al. (2015), Shalm et al. (2015) —
have definitively ruled out local hidden variable theories.
The universe is nonlocal. This is established.

**Extended Wigner's Friend experiments:**
Probing the consistency of quantum mechanics
across multiple observers.
These experiments are getting closer
to testing interpretational differences.

**Quantum Darwinism (Zurek):**
A framework for understanding how classical reality
emerges from quantum mechanics through environmental selection.
Not an interpretation but a framework for understanding
why we see the world we see.

**QBism (Fuchs, Mermin, Schack):**
Quantum Bayesianism — the wavefunction as a personal
probability assignment, not a physical object.
Increasingly sophisticated development of
the "agent-centric" view of quantum mechanics.

**Consistent Histories (Griffiths, Gell-Mann, Hartle):**
A framework for assigning probabilities to
sequences of events (histories) without requiring
a classical observer.

None of these has achieved consensus.
All are active research programs.

---

## X. Why This Should Matter to You

If you are a physicist:
The measurement problem is an embarrassment
we have hidden behind the success of the formalism.
We teach students the rules without the reasons.
We calculate without understanding.

This is pragmatically successful.
It is intellectually incomplete.
The measurement problem should bother you —
not as a distraction from real physics,
but as a sign that our deepest theory
is telling us something we have not yet understood.

If you are not a physicist:
The measurement problem is a window into
something genuinely strange about reality.

The question "what happens when we look at something?"
turns out to be one of the hardest questions in science.
One hundred years of the best minds —
Bohr, Heisenberg, von Neumann, Dirac, Feynman,
Bell, Everett, Bohm, Zeh, Zurek —
and we still do not agree.

This is not a failure.
This is physics at its most honest:
acknowledging that the deepest question
about its most successful theory
remains open.

---

## Coda

The Schrödinger equation works.
Perfectly. Every time.

We do not know why.

We do not know what the wavefunction is.
We do not know if it is real
or a calculational tool or an agent's belief.
We do not know if there is one world or many.
We do not know if particles have positions
between measurements.
We do not know if the Schrödinger equation
is exactly right or needs modification.

We know the predictions.
We do not know the reality.

*"Anyone who is not shocked by quantum mechanics
has not understood it."*

Bohr said this.
He was right.
He also did not solve the problem.

Neither have we.

---

*For the serious reader:*
*Bell — Speakable and Unspeakable in Quantum Mechanics (1987)*
*— the essential collection; Bell is the clearest writer*
*on quantum foundations*
*Everett — "Relative State Formulation of Quantum Mechanics" (1957)*
*— the original Many-Worlds paper; remarkably readable*
*Bohm — "A Suggested Interpretation of the Quantum Theory*
*in Terms of Hidden Variables" (1952)*
*— the original pilot wave paper*
*Wallace — The Emergent Multiverse (2012)*
*— the most rigorous defense of Many-Worlds*
*Maudlin — Quantum Non-Locality and Relativity (1994)*
*— the best philosophical treatment of Bell nonlocality*
*Barrett — The Quantum Mechanics of Minds and Worlds (1999)*
*— comprehensive survey of interpretations*
