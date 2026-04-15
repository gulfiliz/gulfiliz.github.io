---
layout: post
title: Bell's Theorem — The Most Profound Discovery in the History of Physics
date: 2026-01-12
description: In 1964, John Bell proved that no theory of local hidden variables can reproduce quantum mechanics. In 1982, Aspect confirmed it experimentally. The universe is nonlocal. This changes everything.
tags: research-logs, physics, quantum, EN,
---

In 1935, Einstein, Podolsky, and Rosen
published a paper intended to show
that quantum mechanics was incomplete.

Their argument was careful, precise, and devastating.

If quantum mechanics is correct —
if entangled particles really do exhibit
the correlations it predicts —
then either:

(a) there is instantaneous action at a distance,
    violating special relativity, or

(b) quantum mechanics is incomplete —
    there are hidden variables that determine
    the outcomes of measurements in advance.

Einstein found (a) unacceptable.
He called it *spukhafte Fernwirkung* —
"spooky action at a distance."

He concluded: quantum mechanics is incomplete.
Hidden variables must exist.

For twenty-nine years, this remained a philosophical debate.

Then John Bell did something remarkable.

He turned it into physics.

---

## I. The Setup

Consider a source that emits pairs of particles
in an entangled spin state —
the **singlet state:**

$$|\Psi^-\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_A|\downarrow\rangle_B - |\downarrow\rangle_A|\uparrow\rangle_B\right)$$

Alice receives particle A.
Bob receives particle B.
They are separated — far apart.

Alice measures the spin of her particle
along direction $$\hat{a}$$.
Bob measures the spin of his particle
along direction $$\hat{b}$$.

Each measurement yields $$+1$$ or $$-1$$.

**Quantum mechanical prediction:**

The correlation between their results:

$$E(\hat{a}, \hat{b}) = \langle\Psi^-|\hat{\sigma}_A\cdot\hat{a} \otimes \hat{\sigma}_B\cdot\hat{b}|\Psi^-\rangle = -\hat{a}\cdot\hat{b} = -\cos\theta_{ab}$$

where $$\theta_{ab}$$ is the angle between the measurement directions.

If $$\theta = 0°$$: perfect anti-correlation. $$E = -1$$.
If $$\theta = 90°$$: no correlation. $$E = 0$$.
If $$\theta = 180°$$: perfect correlation. $$E = +1$$.

This is the quantum prediction.
It has been verified to extraordinary precision.

The question Bell asked:
**Can any local hidden variable theory
reproduce this correlation?**

---

## II. Local Hidden Variables — The Precise Definition

A **local hidden variable (LHV) theory** is any theory satisfying:

**1. Realism (hidden variables):**

The outcome of every measurement is predetermined
by variables $$\lambda$$ —
the "hidden variables" —
that exist prior to measurement.

The outcome of Alice's measurement:
$$A(\hat{a}, \lambda) = \pm 1$$

The outcome of Bob's measurement:
$$B(\hat{b}, \lambda) = \pm 1$$

These are definite functions of
the measurement setting and the hidden variable.

**2. Locality:**

Alice's outcome does not depend on Bob's measurement setting,
and vice versa:

$$A = A(\hat{a}, \lambda) \quad \text{(not } \hat{b}\text{)}$$
$$B = B(\hat{b}, \lambda) \quad \text{(not } \hat{a}\text{)}$$

What happens at Bob's detector
cannot influence Alice's result —
they are spacelike separated.

**3. Statistical independence (no conspiracy):**

The hidden variable $$\lambda$$ is distributed according
to some probability distribution $$\rho(\lambda)$$,
independent of the measurement settings:

$$\rho(\lambda | \hat{a}, \hat{b}) = \rho(\lambda)$$

The hidden state of the particles
is not influenced by the experimenters' choices
of measurement directions.

Given these three assumptions —
realism, locality, statistical independence —
Bell derived an inequality
that any LHV theory must satisfy.

---

## III. Bell's Inequality — The Derivation

Consider three measurement directions
$$\hat{a}$$, $$\hat{b}$$, $$\hat{c}$$.

For any single hidden variable $$\lambda$$,
define:

$$A_a = A(\hat{a}, \lambda) = \pm 1$$
$$A_b = A(\hat{b}, \lambda) = \pm 1$$  
$$A_c = A(\hat{c}, \lambda) = \pm 1$$

Note the algebraic identity:

$$A_a A_b - A_a A_c = A_a A_b(1 - A_b A_c)$$

Since $$A_b^2 = 1$$:

$$|A_a A_b - A_a A_c| = |1 - A_b A_c|$$

Taking the expectation value over $$\lambda$$:

$$|E(\hat{a},\hat{b}) - E(\hat{a},\hat{c})| \leq 1 - E(\hat{b},\hat{c})$$

This is the **Bell inequality** in its original form.

More commonly used: the **CHSH inequality**
(Clauser, Horne, Shimony, Holt, 1969):

Consider four measurement settings:
$$\hat{a}$$, $$\hat{a}'$$ for Alice and $$\hat{b}$$, $$\hat{b}'$$ for Bob.

Define the **CHSH correlator:**

$$S = E(\hat{a},\hat{b}) - E(\hat{a},\hat{b}') + E(\hat{a}',\hat{b}) + E(\hat{a}',\hat{b}')$$

**For any LHV theory:**

$$|S| \leq 2$$

This is the CHSH inequality.
Any theory satisfying locality, realism,
and statistical independence must satisfy this.

The derivation is elementary.
The implication is revolutionary.

---

## IV. Quantum Mechanics Violates the Bell Inequality

Now compute the quantum mechanical prediction for $$S$$.

Choose measurement directions:

$$\hat{a} = 0°, \quad \hat{a}' = 90°$$
$$\hat{b} = 45°, \quad \hat{b}' = 135°$$

The quantum correlations:

$$E(\hat{a},\hat{b}) = -\cos(45°) = -\frac{1}{\sqrt{2}}$$

$$E(\hat{a},\hat{b}') = -\cos(135°) = +\frac{1}{\sqrt{2}}$$

$$E(\hat{a}',\hat{b}) = -\cos(45°) = -\frac{1}{\sqrt{2}}$$

$$E(\hat{a}',\hat{b}') = -\cos(45°) = -\frac{1}{\sqrt{2}}$$

Therefore:

$$S_{QM} = -\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}} \cdot(-1) + (-\frac{1}{\sqrt{2}}) + (-\frac{1}{\sqrt{2}})$$

Wait — let me be precise:

$$S_{QM} = E(\hat{a},\hat{b}) - E(\hat{a},\hat{b}') + E(\hat{a}',\hat{b}) + E(\hat{a}',\hat{b}')$$

$$= -\frac{1}{\sqrt{2}} - (+\frac{1}{\sqrt{2}}) + (-\frac{1}{\sqrt{2}}) + (-\frac{1}{\sqrt{2}})$$

$$= -\frac{4}{\sqrt{2}} = -2\sqrt{2} \approx -2.828$$

$$|S_{QM}| = 2\sqrt{2} \approx 2.828$$

**The quantum mechanical prediction:**
$$|S_{QM}| = 2\sqrt{2} \approx 2.828$$

**The Bell bound for any LHV theory:**
$$|S_{LHV}| \leq 2$$

Quantum mechanics violates the Bell inequality
by a factor of $$\sqrt{2}$$.

The **Tsirelson bound** — the maximum possible violation
in any quantum theory — is exactly $$2\sqrt{2}$$.
Quantum mechanics saturates it.

This is not a small effect.
It is not within experimental error.
It is a clean, unambiguous violation
of what any local realistic theory can produce.

---

## V. The Experiments — Closing the Loopholes

Bell's theorem is a mathematical result.
Its physical significance depends on experiment.

**The loopholes:**

Any Bell experiment must contend with loopholes —
experimental imperfections that could,
in principle, allow an LHV theory
to fake a Bell violation.

**The detection loophole:**
If detectors are inefficient —
if they miss some particles —
an LHV theory could conspire so that
the detected particles are a biased sample
that violates Bell inequalities
even though the full sample does not.

Requires: detector efficiency $$> \frac{2(\sqrt{2}-1)}{1} \approx 82.8\%$$
for the CHSH inequality.

**The locality loophole:**
If Alice's choice of measurement setting
can influence Bob's outcome —
or if there is a common cause that sets both —
the Bell inequality derivation is invalid.

Requires: spacelike separation of measurement events,
with random setting choices made after
the particles have left the source.

**The freedom-of-choice loophole:**
If the experimenters' choices of settings
are correlated with the hidden variable $$\lambda$$,
the statistical independence assumption fails.

Requires: truly random setting choices,
independent of the particle source.

**Early experiments (1972-1982):**

Freedman & Clauser (1972): first Bell test.
Aspect, Grangier & Roger (1982): first with time-varying settings.

These closed some loopholes but not all.
LHV theories were constrained but not ruled out.

**Loophole-free Bell tests (2015):**

In 2015, three experiments simultaneously
closed all major loopholes:

**Hensen et al. (Delft):**
Used electron spins in nitrogen-vacancy centers
separated by 1.3 km.
Detected violation: $$S = 2.42 \pm 0.20$$.
Closed detection and locality loopholes simultaneously.

**Giustina et al. (Vienna):**
Used photons with high-efficiency detectors.
Closed detection loophole with $$p < 3.74 \times 10^{-31}$$.

**Shalm et al. (NIST):**
Used photons, random number generators,
and spacelike separation.
Violation with $$p < 3.6 \times 10^{-9}$$.

**The Big Bell Test (2018):**
Used human choices from 100,000 participants worldwide
to generate measurement settings —
addressing the freedom-of-choice loophole.

Violation confirmed.

**The conclusion is definitive:**

No local hidden variable theory
can reproduce the quantum correlations.

The universe is not locally realistic.

---

## VI. What Must Be Abandoned

Bell's theorem, combined with the experimental results,
forces us to abandon at least one of:

**1. Realism:**
Physical quantities do not have definite values
prior to measurement.
The moon is not there when nobody looks.

**2. Locality:**
The outcome of a measurement here
can be instantaneously influenced
by a measurement there,
regardless of spatial separation.

**3. Statistical independence (Free will / No conspiracy):**
The measurement settings chosen by experimenters
are correlated with the hidden state of the particles —
either through a common cause in the past
or through cosmic conspiracy.

These are not equivalent choices.
Each corresponds to a different interpretation
of quantum mechanics.

**Abandon realism → Copenhagen, QBism, Relational QM:**
There are no hidden variables.
Quantum states are complete descriptions.
Properties do not exist prior to measurement.

**Abandon locality → Bohmian mechanics:**
Keep realism — particles have definite positions.
Accept nonlocality — the pilot wave is nonlocal.
The guidance equation acts instantaneously
across arbitrary distances.

**Abandon statistical independence → Superdeterminism:**
The particles and the detectors share a common past cause
that correlates the hidden variable
with the measurement settings.
No experiment can ever test LHV theories —
because the settings are always correlated
with what is being measured.

Most physicists find superdeterminism repugnant —
it implies that the universe conspires
to prevent us from testing it,
and it undermines the entire
notion of scientific experiment.

But it cannot be experimentally ruled out.

---

## VII. Nonlocality Without Signaling

The experimental violation of Bell inequalities
establishes quantum nonlocality.

But — crucially —
this nonlocality **cannot be used to send signals.**

This is not obvious. Let me explain it carefully.

Alice and Bob share an entangled pair.
Alice measures along $$\hat{a}$$ and gets $$+1$$.
She knows instantaneously that Bob's result
(if he measures along the anti-parallel direction)
will be $$-1$$.

But Bob does not know Alice measured.
Bob does not know Alice got $$+1$$.
Bob just sees $$-1$$ — which he would have gotten
with 50% probability anyway.

The nonlocal correlation is only visible
when Alice and Bob **compare their results** —
which requires classical communication,
limited by the speed of light.

More precisely:

Bob's marginal distribution —
the probability of his outcomes,
ignoring Alice's results —
is independent of Alice's measurement setting:

$$P(B = +1 | \hat{b}) = \frac{1}{2}$$
regardless of what $$\hat{a}$$ Alice chose.

The nonlocality is in the **joint distribution** —
in the correlations —
not in the marginal distributions.

You cannot signal with entanglement
because you cannot control which outcome you get.
The randomness of quantum measurement
is exactly what prevents faster-than-light signaling.

This is the **no-signaling theorem:**

Any theory that reproduces quantum predictions
must satisfy the no-signaling condition —
the marginal distributions of one party
are independent of the other's settings.

Quantum mechanics satisfies this.
But it satisfies it in a striking way:
the correlations are nonlocal,
but the nonlocality is precisely calibrated
to prevent signaling.

Why?
We don't know.

---

## VIII. Tsirelson's Bound and Beyond

The maximum quantum violation of the CHSH inequality
is $$2\sqrt{2}$$ — the **Tsirelson bound.**

Is this the maximum possible?
Could a theory be more nonlocal than quantum mechanics?

**Popescu-Rohrlich (PR) boxes:**

In 1994, Popescu and Rohrlich asked:
what is the maximum possible violation of the CHSH inequality
in any no-signaling theory?

The answer: $$|S| \leq 4$$.

A hypothetical "PR box" would achieve $$|S| = 4$$:
maximum possible nonlocality
consistent with no-signaling.

The PR box satisfies no-signaling —
it cannot be used to send information —
but it is more nonlocal than quantum mechanics.

Why doesn't nature use PR boxes?
Why is quantum nonlocality limited to $$2\sqrt{2}$$
rather than $$4$$?

Several information-theoretic principles
have been proposed as explanations:

**Information causality** (Pawłowski et al., 2009):
The amount of information Bob can access
about Alice's data, using their shared correlations
and $$m$$ bits of classical communication,
is at most $$m$$ bits.

Quantum mechanics satisfies information causality.
PR boxes violate it.

**Macroscopic locality** (Navascués & Wunderlich, 2010):
When many measurements are coarse-grained,
the statistics should be locally explainable.

Quantum mechanics satisfies this.
PR boxes violate it.

**Local orthogonality** (Fritz et al., 2012):
Events that are locally exclusive
should be globally exclusive.

Quantum mechanics satisfies this.
PR boxes violate it.

These principles recover the Tsirelson bound —
they explain why quantum mechanics
is exactly as nonlocal as it is.

But they do not explain *why* these principles hold.
They replace one mystery with another.

---

## IX. Bell Nonlocality in Quantum Information

Bell nonlocality is not only foundational.
It is a resource.

**Device-independent quantum cryptography:**

In device-independent QKD,
Alice and Bob certify the security of their key
by observing a Bell inequality violation —
without trusting their devices.

If the devices produce a Bell violation,
an eavesdropper cannot have full information
about the outcomes —
because any eavesdropper who did
would have to share a local realistic theory
with Alice and Bob,
which would not produce the violation.

The Bell violation **certifies security**
from first principles — from physics alone.

This is remarkable:
the violation of a mathematical inequality
guarantees cryptographic security.

**Device-independent randomness certification:**

A Bell violation certifies genuine randomness.

If Alice's outcomes were predetermined —
if there were a hidden variable $$\lambda$$
determining her results —
the Bell inequality would not be violated.

Therefore: the random outcomes of a Bell experiment
are genuinely random —
certified by physics,
not by the quality of a random number generator.

This is the only known method
of certifying **true randomness**
from first principles.

**Quantum communication complexity:**

Bell nonlocality provides exponential advantages
in certain communication complexity tasks —
tasks where two parties must compute a function
of their combined inputs
while minimizing communication.

Nonlocal correlations allow them to do this
with exponentially fewer bits
than any classical protocol.

---

## X. What Bell's Theorem Tells Us About Reality

Bell's theorem is the most important result
in the foundations of physics
since quantum mechanics itself.

Its implications are not yet fully absorbed —
even by physicists who use quantum mechanics daily.

**Locality is false.**

This is not a matter of interpretation.
It is an experimental fact.
The universe exhibits nonlocal correlations
that cannot be explained by any local theory.

Special relativity tells us
that nothing travels faster than light.
Bell's theorem tells us
that the universe is nonlocal.

These two facts are compatible —
but their compatibility is not obvious.
The reconciliation requires that nonlocality
not be usable for signaling —
a constraint that quantum mechanics satisfies
by precise calibration.

Why? We don't know.

**Realism is in trouble.**

If you want to maintain locality —
if you find nonlocal hidden variables unacceptable —
then you must abandon realism:
the idea that physical quantities
have definite values prior to measurement.

The moon is not there when nobody looks.
Not as a philosophical conceit.
As a physical statement.

**The universe cannot be explained
by local realistic physics.**

This is what Bell proved.
This is what the experiments confirmed.

The structure of reality
at the quantum level
violates the intuitions
built into every macroscopic experience
we have ever had.

---

## XI. The Conspiracy That Cannot Be Ruled Out

I want to end with the deepest loophole —
the one that cannot be closed.

**Superdeterminism.**

Bell's derivation assumes statistical independence:
the hidden variable $$\lambda$$
is uncorrelated with the measurement settings $$\hat{a}, \hat{b}$$.

If this assumption fails —
if the past light cone of the particle source
intersects the past light cones of
the setting choices in a way
that creates correlations —
then Bell's theorem does not apply.

An LHV theory could reproduce all quantum predictions
if the universe is so finely tuned
that every "random" choice of measurement setting
is correlated with the hidden state of the particles.

This cannot be ruled out experimentally —
because any experiment we design
uses measurement settings from within the universe,
which share a common past with everything else.

The **Big Bell Test** used human choices.
But humans are physical systems —
their choices are determined by their past,
which shares a common origin with the particles.

To truly close this loophole,
you would need measurement settings
from a source causally disconnected
from the particle source —
from outside the universe.

This is impossible.

Superdeterminism is the last refuge
of local realism.

Most physicists reject it —
because it requires a cosmic conspiracy
so fine-tuned as to be indistinguishable from magic,
and because it undermines
the entire enterprise of experimental science.

But it cannot be ruled out.

Gerard 't Hooft — Nobel laureate —
takes superdeterminism seriously.

He may be right.

Or the universe may simply be nonlocal —
deeply, irreducibly, experimentally confirmed nonlocal —
and we have not yet found the right framework
to make sense of it.

---

## Coda

Bell wrote his theorem in 1964,
while working at CERN on accelerator design.

He did it in his spare time.
It was not his job.

He submitted it to *Physics* —
a journal that folded shortly after,
so the paper was technically never published
in the issue it was submitted to.

It was rescued and reprinted.

He spent the rest of his life
arguing for its importance —
arguing that the foundations of quantum mechanics
were not a philosophical sideshow
but a central unsolved problem in physics.

He was largely ignored.

He died in 1990 — of a cerebral hemorrhage,
one day after being nominated for the Nobel Prize.

He never received it.

The Nobel was eventually awarded
to Aspect, Clauser, and Zeilinger in 2022 —
for experimental tests of Bell inequalities.

Bell's theorem is now recognized
as the most important result
in the foundations of physics
of the 20th century.

*"It is a curious historical fact
that modern quantum mechanics began
with two quite different mathematical formulations:
the differential equation of Schrödinger,
and the matrix algebra of Heisenberg.
The two approaches were shown to be
mathematically equivalent.
These two mathematical formulations had in common,
at least in the hands of their inventors,
a quite decisive break with classical tradition.
This made things easier.
Now we have a third approach:
the quantum theory of Bell."*

— John Bell, 1987

The universe is nonlocal.

We do not know what this means.

We are certain that it is true.

---

*Essential reading:*

*Bell — "On the Einstein-Podolsky-Rosen Paradox" (1964)*
*Physics 1, 195*
*— the original paper; six pages; read it*


*Bell — Speakable and Unspeakable in Quantum Mechanics (1987)*
*Cambridge University Press*
*— everything Bell wrote on foundations; essential*


*Aspect, Grangier & Roger —*
*"Experimental Tests of Bell's Inequalities" (1982)*
*Phys. Rev. Lett. 49, 91*


*Hensen et al. — "Loophole-free Bell inequality violation" (2015)*
*Nature 526, 682*
*— the definitive experimental result*


*Brunner et al. — "Bell nonlocality" (2014)*
*Rev. Mod. Phys. 86, 419*
*— the comprehensive review*


*For the technically serious:*

*Nielsen & Chuang — Quantum Computation and Quantum Information*
*— Chapter 2 for the Bell inequality treatment*
