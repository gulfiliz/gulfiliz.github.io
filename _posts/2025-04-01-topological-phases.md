---
layout: post
title: Topological Phases of Matter — When Topology Becomes Physics
date: 2025-04-01
description: The 2016 Nobel Prize recognized a revolution in condensed matter physics — the discovery that matter can be classified not by symmetry breaking but by topology. This is the story of that revolution, from the quantum Hall effect to topological insulators to non-Abelian anyons.
tags: research-logs , physics , quantum , EN
---

In 1980, Klaus von Klitzing
was measuring the Hall resistance
of a two-dimensional electron gas
at low temperature and high magnetic field.

He found something unexpected.

The Hall conductance —
instead of varying continuously with
the magnetic field —
was quantized.

It took only integer values,
in units of $$e^2/h$$:

$$\sigma_{xy} = \nu \frac{e^2}{h}, \quad \nu \in \mathbb{Z}$$

The quantization was extraordinary —
not approximately integer.
Exactly integer.
To one part in $$10^9$$.

More precise than any other measurement in condensed matter.
Independent of sample geometry.
Independent of impurities.
Independent of the details of the material.

Von Klitzing received the Nobel Prize in 1985.

The question: **why so precise?**

The answer, worked out over the following years,
was shocking:

**Because topology.**

The quantization is not approximate.
It is exact —
because it is a topological invariant.
And topological invariants are integers.
Integers are exact.

This was the beginning of a revolution.

---

## I. The Landau Paradigm and Its Limits

To understand the revolution,
we need to understand what it overturned.

**The Landau paradigm of phases of matter:**

Lev Landau (1937) established the framework
that dominated condensed matter physics
for fifty years.

Phases of matter are classified by
**symmetry breaking** and **order parameters.**

Water to ice: translational symmetry broken → crystal.
Paramagnet to ferromagnet: rotational symmetry broken → magnetization.
Normal metal to superconductor: $$U(1)$$ broken → Cooper pair condensate.

Every phase transition involves
the breaking of some symmetry.
Every phase is characterized by
an order parameter — a local quantity
that is zero in the symmetric phase
and nonzero in the broken phase.

This framework is extraordinarily successful.
It classifies an enormous range of phenomena.

**Its failure:**

The integer quantum Hall effect (IQHE)
does not fit the Landau paradigm.

Different quantum Hall states —
with different values of $$\nu$$ —
have the same symmetries.
No symmetry is broken going from $$\nu = 1$$ to $$\nu = 2$$.

There is no local order parameter
that distinguishes them.

By the Landau classification,
they should be the same phase.

They are not.
They are topologically distinct.

You cannot continuously deform
the $$\nu = 1$$ state into the $$\nu = 2$$ state
without closing the bulk energy gap —
without a phase transition.

The distinction is topological, not symmetry-based.

A new classification principle was needed.

---

## II. The TKNN Invariant — Topology Enters

In 1982, Thouless, Kohmoto, Nightingale, and den Nijs (TKNN)
computed the Hall conductance
of a two-dimensional Bloch Hamiltonian.

Their result:

$$\sigma_{xy} = \frac{e^2}{h} \sum_n C_n$$

where the sum is over filled bands
and $$C_n$$ is the **Chern number** of band $$n$$:

$$C_n = \frac{1}{2\pi}\int_{BZ} d^2k \,\Omega_n(\mathbf{k})$$

The **Berry curvature**:

$$\Omega_n(\mathbf{k}) = -2\,\text{Im}
\langle\partial_{k_x}u_{n\mathbf{k}}|\partial_{k_y}u_{n\mathbf{k}}\rangle$$

where $$|u_{n\mathbf{k}}\rangle$$ is the periodic part
of the Bloch wavefunction.

The Chern number is a topological invariant —
it is an integer,
unchanged by smooth deformations of the Hamiltonian
that do not close the gap.

**The geometric origin:**

The Berry curvature $$\Omega_n(\mathbf{k})$$
is the curvature of a connection
on a fiber bundle —
the Bloch wavefunction bundle
over the Brillouin zone (BZ).

The Brillouin zone of a 2D crystal
is a torus $$T^2$$.

The Chern number is the integral
of the Berry curvature over this torus —
the total flux of curvature
through the Brillouin zone.

By the **Gauss-Bonnet theorem** in this context,
this integral must be an integer.

**The physical meaning:**

The Chern number counts
the number of times the wavefunction
"winds" around the Brillouin zone.

It is a winding number —
a topological property
that cannot be changed
without tearing the wavefunction.

This is why the Hall conductance is quantized:
it is proportional to a topological invariant.
Topological invariants are integers.
Therefore the conductance is an integer
times $$e^2/h$$.

Exactly. Not approximately.

---

## III. The Bulk-Boundary Correspondence

The topological invariant of the bulk —
the Chern number —
has a remarkable physical consequence
at the surface.

**The bulk-boundary correspondence:**

A topological phase with Chern number $$C$$
has exactly $$|C|$$ chiral edge modes —
one-dimensional channels at the boundary
that propagate in one direction only.

These edge modes are **topologically protected** —
they cannot be localized or gapped
without destroying the bulk topology.

**Why this is remarkable:**

In an ordinary metal,
impurities scatter electrons backward.
Resistance arises from backscattering.

In a quantum Hall state,
the edge modes are chiral —
they can only propagate forward.
There is no backward-moving mode
to scatter into.

Backscattering is impossible —
not because the impurities are weak,
but because of topology.

The edge conduction is perfect —
resistance exactly zero —
regardless of impurities.

This is the physical basis of
the exact quantization of the Hall conductance.

**The formal statement:**

For a system with open boundary conditions,
the number of edge states crossing the Fermi level
equals the bulk topological invariant.

This is a deep result —
the bulk topology is manifest at the boundary.
The interior of the material determines
what happens at its surface.

---

## IV. The BKT Transition — Topology in Classical Systems

Before the quantum Hall revolution,
Berezinskii, Kosterlitz, and Thouless
discovered topological order
in classical 2D systems.

**The 2D XY model:**

Spins in a plane, on a 2D lattice.
The Hamiltonian:

$$H = -J\sum_{\langle i,j\rangle}\cos(\theta_i - \theta_j)$$

The Coleman-Mermin-Wagner theorem:
no long-range order at any finite temperature —
continuous symmetry cannot break in 2D.

But something happens at a critical temperature $$T_{BKT}$$.

**Vortices:**

The key excitations are **vortices** —
topological defects where the spin angle
winds by $$\pm 2\pi$$ around a point.

A vortex has logarithmically divergent energy:
$$E_{vortex} = \pi J \ln(L/a)$$

where $$L$$ is the system size and $$a$$ is the lattice spacing.

At low temperature:
vortices and antivortices are bound in pairs —
the energy cost confines them.
The system has quasi-long-range order:
power-law correlations.

At high temperature:
the entropy gain from free vortices
overcomes the energy cost.
Vortices proliferate.
Correlations decay exponentially.

The **BKT transition** is a transition
between the vortex-bound phase
and the vortex-unbound phase.

It is driven by topological defects —
not by a local order parameter.

The Landau paradigm has no description of it.

Kosterlitz and Thouless received
the Nobel Prize in 2016
for this work (done in the early 1970s).

---

## V. Symmetry-Protected Topological Phases

The quantum Hall effect requires
an external magnetic field —
it breaks time-reversal symmetry.

Can topological phases exist
without breaking time-reversal symmetry?

Yes. This led to one of the richest
developments in modern condensed matter:

**Symmetry-Protected Topological (SPT) phases.**

**The quantum spin Hall effect (2005-2007):**

Kane and Mele (2005) predicted
a new topological phase in graphene —
the **quantum spin Hall insulator** —
protected by time-reversal symmetry.

Unlike the IQHE,
it exists without a magnetic field.

The key: spin-orbit coupling
creates a topological band structure.

The bulk is insulating.
The edges carry **helical** edge modes —
spin-up propagates right,
spin-down propagates left.

These are protected by time-reversal symmetry:
to scatter a right-mover into a left-mover
requires flipping the spin —
which requires breaking time-reversal.

Impurities that preserve time-reversal
cannot backscatter these modes.

The $$\mathbb{Z}_2$$ invariant:

The quantum spin Hall insulator
is characterized not by an integer (Chern number)
but by a $$\mathbb{Z}_2$$ invariant —
either 0 (trivial) or 1 (topological).

This invariant, developed by Kane and Mele,
counts the parity of the number
of Kramers pairs of edge states.

**3D topological insulators:**

Fu, Kane, and Mele extended this to 3D (2007).

A 3D topological insulator has:
- Insulating bulk
- Metallic surface states

The surface states form a **single Dirac cone** —
a band structure that cannot exist
in a purely 2D system
(fermion doubling theorem).

The surface Dirac fermion is topologically protected —
it cannot be gapped by any perturbation
preserving time-reversal symmetry.

**Experimental realization:**

Bi$$_2$$Se$$_3$$ and Bi$$_2$$Te$$_3$$
were predicted (2009) and confirmed
to be 3D topological insulators.

ARPES (Angle-Resolved Photoemission Spectroscopy)
directly observed the surface Dirac cone.

This was a triumph of
topological band theory —
a theoretical prediction confirmed
by direct experimental observation.

---

## VI. The Tenfold Way — Classification of All Topological Phases

Ryu, Schnyder, Furusaki, and Ludwig (2008)
and Kitaev (2009)
completed the classification of
**free-fermion topological phases.**

Their result: the **tenfold way** —
ten symmetry classes,
each with its own topological classification
in each spatial dimension.

The ten classes arise from combinations of:
- Time-reversal symmetry $$\mathcal{T}$$
- Particle-hole symmetry $$\mathcal{C}$$
- Chiral symmetry $$\mathcal{S} = \mathcal{T}\mathcal{C}$$

Each symmetry can be absent,
present with $$\mathcal{T}^2 = +1$$,
or present with $$\mathcal{T}^2 = -1$$
(similarly for $$\mathcal{C}$$).

This gives $$3 \times 3 + 1 = 10$$ classes
(the Altland-Zirnbauer classification).

For each class in each dimension,
the possible topological invariants are:
$$\mathbb{Z}$$, $$\mathbb{Z}_2$$, or trivial (0).

The complete classification
organizes all possible topological insulators
and superconductors
in a periodic table —
the table of topological phases.

**The Bott periodicity:**

The classification follows an 8-fold pattern —
Bott periodicity in K-theory.

The mathematics: the classification
of topological phases
is the classification of
vector bundles over spheres —
the same problem that arises
in homotopy theory and K-theory.

Physics rediscovered
a deep result of 20th-century mathematics.

---

## VII. Topological Superconductors and Majorana Fermions

Some of the most exciting topological phases
are topological superconductors —
bulk superconductors with
topologically protected boundary modes.

**The Kitaev chain (2001):**

Alexei Kitaev proposed a 1D model —
a chain of spinless fermions
with p-wave superconducting pairing:

$$H = -t\sum_i(c_i^\dagger c_{i+1} + h.c.)
- \mu\sum_i c_i^\dagger c_i
+ \Delta\sum_i(c_i c_{i+1} + h.c.)$$

In the topological phase ($$|\mu| < 2t$$):
the chain has **Majorana zero modes**
at its ends.

**Majorana fermions:**

A Majorana fermion is its own antiparticle:
$$\gamma = \gamma^\dagger$$

In condensed matter,
Majorana modes arise as
half-fermion excitations —
the fermion is split,
with half at each end of the chain.

The two Majorana modes form
a **non-local qubit:**

$$\tilde{c} = \frac{1}{2}(\gamma_1 + i\gamma_2)$$

This qubit is non-local —
it is not at any specific position
but distributed between the two ends.

Local perturbations at one end
cannot affect the qubit state —
they cannot "see" the other half.

This is topological protection:
the qubit is protected from decoherence
by non-locality.

**Experimental realizations:**

Semiconductor nanowires (InAs, InSb)
with strong spin-orbit coupling,
proximitized by an s-wave superconductor,
in a magnetic field —
this engineered system is predicted
to be a topological superconductor.

Signatures of Majorana zero modes —
zero-bias conductance peaks —
have been observed by multiple groups
(Mourik et al., Science 2012;
many subsequent experiments).

The interpretation remains debated —
zero-bias peaks can arise from
non-topological mechanisms.

Definitive demonstration
of non-Abelian braiding
remains an outstanding experimental challenge.

---

## VIII. Non-Abelian Anyons and Topological Quantum Computation

We have discussed anyons in the BEC essay.
Here we go deeper —
into the non-Abelian case.

**Non-Abelian anyons:**

For Abelian anyons:
exchanging two particles gives a phase $$e^{i\theta}$$.
The phase commutes with everything.
The order of exchanges does not matter.

For non-Abelian anyons:
the state space of $$n$$ anyons
is a multi-dimensional degenerate subspace.
Exchanging particles performs
a **unitary matrix operation** on this space.

Different sequences of exchanges give
different unitary operations —
they do not commute.

The exchanges form a representation
of the **braid group $$B_n$$** —
not the symmetric group $$S_n$$.

**The Moore-Read state:**

The fractional quantum Hall state at $$\nu = 5/2$$
is believed to be described by
the Moore-Read (Pfaffian) state —
which supports non-Abelian anyons.

The quasiparticles are Ising anyons —
they fuse according to the rules:
$$\sigma \times \sigma = 1 + \psi$$
$$\sigma \times \psi = \sigma$$
$$\psi \times \psi = 1$$

The fusion of two $$\sigma$$ anyons
can give either the vacuum (1) or a fermion ($$\psi$$).
Before measurement, both outcomes are possible.

**Topological quantum computation (Kitaev, 2003):**

The degenerate ground state subspace of
non-Abelian anyons
can be used as a **topological qubit.**

Gates are implemented by **braiding** —
moving anyons around each other.

The braiding unitary depends only on
the topology of the braiding path —
not on the speed, the exact path,
or small perturbations.

This gives inherent fault tolerance:
the computation is protected
by the topology of the anyon worldlines.

Local errors cannot corrupt the computation
without creating detectable anyon pairs.

**The challenge:**

Demonstrating non-Abelian braiding
requires:
1. A system that supports non-Abelian anyons
2. The ability to create, move, and fuse anyons
3. The ability to read out the topological qubit state

None of these has been fully demonstrated.

Microsoft's topological qubit program —
targeting Majorana-based systems —
is the major industrial effort.

Progress has been slow.
The physics is hard.
The reward — a fundamentally decoherence-resistant qubit —
would be transformative.

---

## IX. Topological Semimetals

Beyond topological insulators:
**topological semimetals** —
materials where the topological protection
manifests in the bulk band structure.

**Weyl semimetals:**

In a Weyl semimetal,
the conduction and valence bands touch
at isolated points in the Brillouin zone —
**Weyl points.**

Near a Weyl point,
the Hamiltonian takes the form:

$$H(\mathbf{k}) = \chi \hbar v_F \boldsymbol{\sigma}\cdot\mathbf{k}$$

where $$\chi = \pm 1$$ is the **chirality** —
the topological charge.

Weyl points are topological monopoles
of Berry curvature:

$$\oint_{S^2} \mathbf{\Omega} \cdot d\mathbf{S} = 2\pi\chi$$

They always come in pairs (Nielsen-Ninomiya theorem).
They cannot be removed individually —
only by annihilating a pair of opposite chirality.

**Fermi arcs:**

The surface of a Weyl semimetal
has unusual **Fermi arc** surface states —
open arcs in the surface BZ
connecting the projections of Weyl points.

These are topologically protected —
they cannot be removed
without destroying the bulk Weyl points.

Fermi arcs were experimentally observed
in TaAs (2015) —
the first Weyl semimetal discovered.

**The chiral anomaly:**

Weyl fermions in parallel electric and magnetic fields
exhibit the **chiral anomaly** —
the non-conservation of chirality:

$$\partial_\mu j^\mu_5 = \frac{e^2}{4\pi^2\hbar^2}\mathbf{E}\cdot\mathbf{B}$$

This is a quantum field theory anomaly
(originally discovered in particle physics)
manifested in a condensed matter system.

The physical consequence:
**negative magnetoresistance** —
resistance decreases with parallel magnetic field.

Observed in multiple Weyl semimetals.

Condensed matter as a quantum field theory simulator —
directly accessing phenomena
usually confined to high-energy physics.

---

## X. The K-Theory Classification and Beyond

The tenfold way classifies
**free-fermion** topological phases.

What about interacting systems?

**Symmetry-Protected Topological (SPT) order
in interacting systems:**

For free fermions:
topological phases classified by
K-theory — $$\mathbb{Z}$$ or $$\mathbb{Z}_2$$.

With interactions:
some of these phases collapse —
the group structure of topological phases
changes.

In 1D: the Haldane phase
(spin-1 antiferromagnetic chain)
is a bosonic SPT phase —
it has no free-fermion realization.

In 3D: interacting bosonic SPT phases
are classified by group cohomology:

$$H^{d+1}(G, U(1))$$

where $$G$$ is the symmetry group
and $$d$$ is the spatial dimension.

This is a mathematical structure —
group cohomology —
that appears in topology and algebra,
now classifying phases of matter.

**Topological order:**

Beyond SPT phases:
**topological order** —
phases with long-range entanglement
that cannot be described by any local order parameter
or any SPT classification.

Topological order is characterized by:
- Ground state degeneracy on topologically nontrivial manifolds
- Anyonic excitations
- Topological entanglement entropy

The toric code (Kitaev, 2003)
is the canonical example:
a $\mathbb{Z}_2$$ topologically ordered phase
with Abelian anyons,
exact solvability,
and topological quantum error correction.

The classification of topologically ordered phases —
beyond free fermions,
beyond SPT —
is a major open problem.

Tensor category theory,
modular tensor categories,
topological quantum field theory —
these are the mathematical tools.
The physics is not yet fully understood.

---

## XI. What Topology Tells Us About Matter

The topological revolution in condensed matter
has revealed something profound:

**The ground state wavefunction
carries topological information
that is invisible to local probes.**

Traditional condensed matter physics
focused on local order parameters —
quantities you can measure at a point.

Topological phases are characterized by
global, non-local properties of the wavefunction —
properties that cannot be detected
by any local measurement.

This is new.
It requires new tools —
mathematical tools from topology,
physical tools that access
global quantum correlations.

**Entanglement as the key:**

The topological entanglement entropy:

$$S_{topo} = S_{A} - \alpha|\partial A| + \gamma$$

where the universal constant $$\gamma = \ln\mathcal{D}$$
is determined by the **total quantum dimension** $$\mathcal{D}$$
of the topological phase.

For a trivial phase: $$\gamma = 0$$.
For the toric code: $$\gamma = \ln 2$$.

The topological phase is characterized
by the structure of its long-range entanglement —
the topological entanglement entropy
is a universal signature.

This connects topological order
to quantum information —
topological phases are phases
with specific patterns of quantum entanglement.

**The classification program:**

The full classification of topological phases —
including interactions, all symmetries,
all spatial dimensions —
is one of the great open problems
in condensed matter physics.

It sits at the intersection of:
- Condensed matter physics
- Algebraic topology
- K-theory
- Tensor category theory
- Topological quantum field theory
- Quantum information

It is a problem where physics and mathematics
are genuinely co-evolving —
each driving the other forward.

---

## XII. From von Klitzing to the Future

In 1980, von Klitzing measured
an extraordinarily precise integer.

He did not know he was measuring topology.

Over the following forty years,
we learned that:

The integer is a Chern number —
a topological invariant of the Bloch wavefunction bundle.

The precision is exact
because topological invariants are integers.

The phenomenon is the first example
of topological order in nature —
the first instance of quantum matter
organized not by symmetry breaking
but by the global topology of quantum states.

This led to:
- Topological insulators and superconductors
- Non-Abelian anyons and topological quantum computation
- Weyl and Dirac semimetals
- SPT phases and their classification
- A new understanding of quantum entanglement

And it raised new questions:

What is the full classification of topological phases?
Can non-Abelian anyons be realized in the laboratory?
Is topological quantum computation feasible?
What role does topology play in strongly correlated systems —
in high-temperature superconductors,
in heavy fermion materials,
in frustrated magnets?

We are at the beginning of the topological era
in condensed matter physics —
not at its end.

The von Klitzing measurement of 1980
was the first word.

We are still working out what it means.

---

*Essential reading:*

*von Klitzing, Dorda & Pepper —*
*"New Method for High-Accuracy Determination*
*of the Fine-Structure Constant" (1980)*
*Phys. Rev. Lett. 45, 494*
*— the original discovery*


*Thouless, Kohmoto, Nightingale & den Nijs —*
*"Quantized Hall Conductance in a Two-Dimensional Periodic Potential" (1982)*
*Phys. Rev. Lett. 49, 405*
*— the TKNN paper*


*Haldane — "Model for a Quantum Hall Effect Without Landau Levels" (1988)*
*Phys. Rev. Lett. 61, 2015*
*— the Chern insulator*


*Kane & Mele — "Quantum Spin Hall Effect in Graphene" (2005)*
*Phys. Rev. Lett. 95, 226801*


*Fu, Kane & Mele — "Topological Insulators in Three Dimensions" (2007)*
*Phys. Rev. Lett. 98, 106803*


*Kitaev — "Unpaired Majorana Fermions in Quantum Wires" (2001)*
*Phys.-Usp. 44, 131*


*Ryu, Schnyder, Furusaki & Ludwig —*
*"Topological insulators and superconductors:*
*tenfold way and dimensional hierarchy" (2010)*
*New J. Phys. 12, 065010*


*For reviews:*

*Hasan & Kane — "Colloquium: Topological insulators" (2010)*
*Rev. Mod. Phys. 82, 3045*
*— the essential review*


*Qi & Zhang — "Topological insulators and superconductors" (2011)*
*Rev. Mod. Phys. 83, 1057*


*For the mathematically serious:*

*Bernevig & Hughes — Topological Insulators and*
*Topological Superconductors (2013)*
*Princeton University Press*
*— the graduate textbook*
