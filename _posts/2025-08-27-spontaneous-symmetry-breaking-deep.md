---
layout: post
title: Spontaneous Symmetry Breaking — When the Universe Chose a Direction
date: 2025-08-27
description: The Lagrangian is symmetric. The vacuum is not. This asymmetry between the laws and their solution is the origin of mass, the origin of phases of matter, and possibly the origin of everything.
tags: research-logs, physics, EN,
---

The laws of physics are symmetric.

The equations don't care about direction.
They don't prefer left over right,
north over south,
spin-up over spin-down.

And yet the universe is full of asymmetries.

Magnets point in a direction.
Crystals have preferred axes.
The weak force violates parity.
Protons have mass. Lots of it.
You exist, rather than nothing.

How does asymmetry emerge from symmetric laws?

**Spontaneous symmetry breaking.**

The answer is not that the laws secretly prefer something.
The answer is stranger:

**The laws are symmetric.
The ground state — the vacuum —
is not.**

The asymmetry is not in the equations.
It is in the solution the universe chose.

---

## I. The Concept — Precisely

A physical system exhibits **spontaneous symmetry breaking (SSB)**
when:

1. The Lagrangian (or Hamiltonian) has a symmetry $$G$$
2. The ground state (vacuum) is not invariant under $$G$$
3. The ground state spontaneously selects a particular configuration
   from a family of degenerate ground states

The symmetry is not broken by the dynamics.
It is broken by the state.

The equation $$x^2 = 1$$ is symmetric under $$x \to -x$$.
The solutions $$x = +1$$ and $$x = -1$$
are not symmetric — each breaks the symmetry.
But the set of solutions respects it.

This is SSB in miniature.

---

## II. The Mexican Hat Potential

The canonical example:
a scalar field $$\phi$$ in 2D
with potential:

$$V(\phi) = -\mu^2|\phi|^2 + \lambda|\phi|^4$$

with $$\mu^2 > 0$$, $$\lambda > 0$$.

This is the **Mexican hat** (or wine bottle) potential.

The potential is symmetric under global $$U(1)$$:
$$\phi \to e^{i\alpha}\phi$$

The minimum is not at $$\phi = 0$$ (the top of the hat —
an unstable maximum)
but on a circle of minima:

$$|\phi_{min}|^2 = \frac{\mu^2}{2\lambda} \equiv \frac{v^2}{2}$$

where $$v$$ is the **vacuum expectation value (VEV).**

The vacuum is degenerate —
infinitely many minima,
all related by $$U(1)$$ rotations.

The system must "choose" one.
Say: $$\phi_0 = v/\sqrt{2}$$.

This choice breaks $$U(1)$$ spontaneously.

Now expand around the chosen minimum:

$$\phi = \frac{1}{\sqrt{2}}(v + h + i\pi)$$

where $$h$$ is the radial fluctuation
and $$\pi$$ is the angular fluctuation.

The mass matrix:

$$m_h^2 = 2\mu^2 = 4\lambda v^2 \quad \text{(massive)}$$
$$m_\pi^2 = 0 \quad \text{(massless)}$$

The angular mode $$\pi$$ is massless.
This is the **Goldstone boson.**

---

## III. Goldstone's Theorem

**Goldstone's Theorem (1961):**

For every continuous symmetry that is spontaneously broken,
there exists a massless scalar particle —
a **Goldstone boson.**

More precisely:
if a continuous symmetry group $$G$$
is spontaneously broken to a subgroup $$H$$,
the number of Goldstone bosons equals:

$$n_{GB} = \dim G - \dim H$$

The Goldstone bosons correspond to
the broken generators of $$G$$.

**Proof sketch:**

The effective potential $$V(\phi)$$ is invariant under $$G$$:

$$V(\phi) = V(e^{i\alpha^a T^a}\phi)$$

Differentiating with respect to $$\alpha^a$$
and evaluating at the vacuum $$\phi_0$$:

$$\frac{\partial^2 V}{\partial\phi_i\partial\phi_j}\bigg|_{\phi_0}
(T^a)_{jk}\phi_{0k} = 0$$

The mass matrix $$M^2_{ij} = \partial^2 V/\partial\phi_i\partial\phi_j|_{\phi_0}$$
has zero eigenvalues corresponding to
the broken generators $$(T^a\phi_0 \neq 0)$.

Zero eigenvalues of the mass matrix = massless particles.

**Physical interpretation:**

The Goldstone bosons are the modes
that move you along the valley of degenerate vacua —
from one ground state to another.

These motions cost no energy (at lowest order) —
hence massless.

**Examples:**

Ferromagnet breaking $$O(3) \to O(2)$$:
2 broken generators → 2 Goldstone bosons = **magnons** (spin waves)

Antiferromagnet: similar, with **magnons**

Superfluid $$^4$$He breaking $$U(1)$$:
1 broken generator → 1 Goldstone boson = **phonon**

Chiral symmetry breaking in QCD:
$$SU(2)_L \times SU(2)_R \to SU(2)_V$$:
3 broken generators → 3 Goldstone bosons = **pions** $$(\pi^+, \pi^-, \pi^0)$$

The pions are not exactly massless —
chiral symmetry is only approximate.
They are **pseudo-Goldstone bosons:**
light but not massless.
$$m_\pi \approx 140$$ MeV $$\ll m_p \approx 938$$ MeV.

---

## IV. The Higgs Mechanism — Goldstone Bosons Eaten

In a **gauge theory** —
where the symmetry is local —
Goldstone's theorem is evaded.

The Goldstone bosons do not appear as physical particles.
They are "eaten" by the gauge bosons,
which become massive.

This is the **Higgs mechanism** (1964).

**The Abelian Higgs model:**

Start with scalar QED:

$$\mathcal{L} = |D_\mu\phi|^2 - V(\phi) - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}$$

where $$D_\mu = \partial_\mu - ieA_\mu$$
and $$V(\phi) = -\mu^2|\phi|^2 + \lambda|\phi|^4$$.

The Lagrangian has local $$U(1)$$ symmetry:
$$\phi \to e^{i\alpha(x)}\phi, \quad A_\mu \to A_\mu + \frac{1}{e}\partial_\mu\alpha$$

After SSB: $$\langle\phi\rangle = v/\sqrt{2}$$

Expand: $$\phi = \frac{1}{\sqrt{2}}(v + h)e^{i\pi/v}$$

The Goldstone boson $$\pi$$ appears.

But gauge invariance allows us to choose
the **unitary gauge:**

$$\alpha(x) = -\pi(x)/v$$

In this gauge:

$$\phi = \frac{1}{\sqrt{2}}(v + h)$$

The Goldstone boson $$\pi$$ has been gauged away.

The kinetic term becomes:

$$|D_\mu\phi|^2 \to \frac{1}{2}(\partial_\mu h)^2
+ \frac{e^2v^2}{2}A_\mu A^\mu + ...$$

The term $$\frac{e^2v^2}{2}A_\mu A^\mu$$
is a **mass term for the gauge field:**

$$m_A = ev$$

The photon has acquired a mass!

The Goldstone boson $$\pi$$ has become
the longitudinal polarization of the massive $$A_\mu$$.

Before SSB: massless photon (2 degrees of freedom)
+ complex scalar (2 degrees of freedom)
= 4 degrees of freedom

After SSB: massive photon (3 degrees of freedom)
+ real scalar $$h$$ (1 degree of freedom)
= 4 degrees of freedom ✓

Degrees of freedom are conserved.
The Goldstone boson is not lost —
it becomes the longitudinal mode of the gauge boson.

---

## V. The Electroweak Higgs Mechanism

In the Standard Model,
the Higgs mechanism operates on
the $$SU(2)_L \times U(1)_Y$$ gauge group.

**The Higgs field:**

A complex $$SU(2)$$ doublet:

$$\Phi = \begin{pmatrix}\phi^+\\\phi^0\end{pmatrix}$$

with hypercharge $$Y = 1/2$$.

4 real degrees of freedom.

**The Higgs potential:**

$$V(\Phi) = -\mu^2\Phi^\dagger\Phi + \lambda(\Phi^\dagger\Phi)^2$$

Minimum at:

$$\langle\Phi\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}0\\v\end{pmatrix}$$

where $$v = \sqrt{\mu^2/\lambda} \approx 246$$ GeV.

This VEV is not invariant under $$SU(2)_L \times U(1)_Y$$
(4 generators)
but is invariant under $$U(1)_{EM}$$
(1 generator — the photon).

Broken generators: $$4 - 1 = 3$$
→ 3 Goldstone bosons
→ eaten by $$W^+, W^-, Z^0$$
→ these acquire mass.

The surviving degree of freedom: the **Higgs boson** $$h$$.

**The gauge boson masses:**

$$m_W = \frac{1}{2}gv \approx 80.4 \text{ GeV}$$

$$m_Z = \frac{1}{2}\sqrt{g^2 + g'^2}v \approx 91.2 \text{ GeV}$$

$$m_\gamma = 0 \quad \text{(unbroken } U(1)_{EM}\text{)}$$

The ratio:

$$\rho \equiv \frac{m_W^2}{m_Z^2\cos^2\theta_W} = 1$$

at tree level — a prediction of the minimal Higgs mechanism.

Experimentally: $$\rho = 1.00038 \pm 0.00020$$

The small deviation is from radiative corrections —
precisely calculable in the SM.

**The Higgs boson mass:**

$$m_H^2 = 2\lambda v^2 = 2\mu^2$$

Measured: $$m_H = 125.25 \pm 0.17$$ GeV (LHC, 2022)

This fixes $$\lambda = m_H^2/2v^2 \approx 0.13$$.

**Fermion masses via Yukawa couplings:**

The fermion masses arise from Yukawa interactions:

$$\mathcal{L}_{Yukawa} = -y_f\bar{\psi}_L\Phi\psi_R + h.c.$$

After SSB:

$$m_f = \frac{y_f v}{\sqrt{2}}$$

The Yukawa coupling $$y_f$$ is a free parameter —
not determined by the SM.

For the top quark: $$y_t \approx 1$$ — order unity, natural.
For the electron: $$y_e \approx 3 \times 10^{-6}$$ — tiny, mysterious.

Why the Yukawa couplings span six orders of magnitude —
the **flavor hierarchy problem** —
is unknown.

---

## VI. QCD Chiral Symmetry Breaking

In QCD, there is a different and equally important
instance of SSB.

**The chiral symmetry:**

For massless quarks, QCD has a classical symmetry:

$$SU(N_f)_L \times SU(N_f)_R$$

Left-handed and right-handed quarks
transform independently.

For $$N_f = 2$$ (up and down quarks,
approximately massless at QCD scales):

$$SU(2)_L \times SU(2)_R \cong SO(4)$$

**The chiral condensate:**

At low energies, the QCD vacuum
is not symmetric under this chiral group.

A quark-antiquark condensate forms:

$$\langle\bar{q}q\rangle = \langle\bar{u}u + \bar{d}d\rangle
\approx -(250 \text{ MeV})^3$$

This condensate is not invariant under
$$SU(2)_L \times SU(2)_R$$
but is invariant under the **vector subgroup** $$SU(2)_V$$:

$$SU(2)_L \times SU(2)_R \to SU(2)_V$$

3 generators broken → 3 Goldstone bosons → **pions.**

The pion decay constant:

$$f_\pi \approx 93 \text{ MeV}$$

characterizes the scale of chiral SSB.

**Why does the chiral condensate form?**

It is energetically favorable —
the condensate lowers the vacuum energy.

The mechanism is non-perturbative:
the strong coupling at low energies ($$\alpha_s \sim 1$$)
causes quarks and antiquarks
to pair and condense.

This is analogous to Cooper pairing in superconductivity —
the BCS mechanism at the quark level.

**Consequences:**

The proton mass $$m_p \approx 938$$ MeV
is mostly NOT from the Higgs mechanism.

The up quark mass: $$\sim 2$$ MeV
The down quark mass: $$\sim 5$$ MeV
Sum: $$\sim 7$$ MeV

But $$m_p \approx 938$$ MeV.

The remaining $$\sim 930$$ MeV comes from
**the energy of the chromodynamic field** —
from the binding energy of the gluons —
which is related to chiral SSB.

$$E = mc^2$$, applied to the QCD vacuum:

The chiral condensate and confinement energy
contribute $$\sim 99\%$$ of your mass.

The Higgs gives you $$\sim 1\%$$.

Your mass is mostly chiral symmetry breaking.
Your existence is mostly QCD.

---

## VII. The Coleman-Mermin-Wagner Theorem

Spontaneous symmetry breaking is not always possible.

**The Coleman-Mermin-Wagner (CMW) theorem:**

In $$d \leq 2$$ spatial dimensions,
continuous symmetries cannot be spontaneously broken
at finite temperature.

The reason: **infrared fluctuations.**

In low dimensions, long-wavelength fluctuations
(Goldstone modes) are so strong
that they disorder the system —
preventing the formation of a condensate.

For the 2D XY model (spins in a plane):

The Goldstone mode (spin waves)
has correlations:

$$\langle\phi(x)\phi(0)\rangle \sim \frac{T}{2\pi J}\ln|x|$$

The variance of $$\phi$$ grows logarithmically with distance —
no long-range order.

At low $$T$$: **quasi-long-range order** —
power-law correlations.
At high $$T$$: disorder.

The transition between these phases is the
**Berezinskii-Kosterlitz-Thouless (BKT) transition** —
driven by the unbinding of **vortex pairs.**

Kosterlitz and Thouless received the Nobel Prize in 2016.

**Implications for quantum systems:**

CMW applies to thermal fluctuations.
Quantum fluctuations can order 2D systems
even at $$T = 0$$.

Quantum phase transitions in 2D
can break continuous symmetries —
if the quantum fluctuations are not too strong.

**The Mermin-Wagner theorem for quantum systems:**

In 1+1 dimensions (1D quantum systems),
continuous symmetries cannot be broken
even at $$T = 0$$, under certain conditions.

The 1D Heisenberg model:
no long-range magnetic order at $$T = 0$$.
(Bethe ansatz solution.)

**Topological order:**

In 2D systems, even without SSB,
there can be **topological order** —
long-range entanglement not captured
by any local order parameter.

Topological order is more subtle than SSB —
it cannot be described by a Landau order parameter.

The fractional quantum Hall states are topologically ordered.
Topological quantum computation exploits this.

---

## VIII. The Landau Theory of Phase Transitions

Lev Landau (1937) developed a general framework
for SSB — before the field-theoretic formulation.

**The order parameter:**

For each symmetry-breaking transition,
there is an **order parameter** $$\phi$$:

$$\phi = \begin{cases} 0 & \text{symmetric phase} \\ \neq 0 & \text{broken phase} \end{cases}$$

Examples:
- Ferromagnet: $$\phi = \langle\mathbf{M}\rangle$$ (magnetization)
- Superfluid: $$\phi = \langle\psi\rangle$$ (condensate wavefunction)
- Superconductor: $$\phi = \langle\psi\psi\rangle$$ (Cooper pair condensate)
- Electroweak: $$\phi = \langle H\rangle$$ (Higgs VEV)

**The Landau free energy:**

Near the transition, expand in powers of $$\phi$$,
consistent with the symmetry:

For $$\mathbb{Z}_2$$ symmetry ($$\phi \to -\phi$$):

$$F(\phi) = a_0 + a_2\phi^2 + a_4\phi^4 + ...$$

$$a_2 \propto (T - T_c)$$:
- $$T > T_c$$: $$a_2 > 0$$ → minimum at $$\phi = 0$$ (symmetric)
- $$T < T_c$$: $$a_2 < 0$$ → minima at $$\phi = \pm\sqrt{-a_2/2a_4}$$ (broken)

This gives a **second-order** (continuous) phase transition.

**Critical exponents from Landau theory:**

$$m \sim (T_c - T)^\beta, \quad \beta = 1/2$$
$$\chi \sim |T - T_c|^{-\gamma}, \quad \gamma = 1$$
$$\xi \sim |T - T_c|^{-\nu}, \quad \nu = 1/2$$

These are the **mean-field exponents.**

They are exact in $$d \geq 4$$ (above the upper critical dimension).
In $$d = 3$$: fluctuations correct them significantly.
($$\beta = 0.327, \gamma = 1.237, \nu = 0.630$$ for 3D Ising)

The RG explains why mean-field fails below $$d = 4$$:
fluctuations (Goldstone modes) are relevant below 4D.

---

## IX. SSB and the Origin of the Universe

Spontaneous symmetry breaking
may be responsible for the large-scale structure
of the universe.

**The electroweak phase transition:**

At temperature $$T \sim 100$$ GeV $$(10^{15} \text{ K})$$:

The universe underwent an electroweak phase transition.

Above $$T_{EW}$$: $$\langle H\rangle = 0$$ — electroweak symmetry restored.
$$W, Z, \gamma$$ all massless.
All quarks and leptons massless.

Below $$T_{EW}$$: $$\langle H\rangle = v = 246$$ GeV.
$$W, Z$$ acquire mass.
Fermions acquire mass via Yukawa.

The universe today is in the broken phase.

**Baryogenesis and SSB:**

For the matter-antimatter asymmetry to be generated
(Sakharov conditions),
the electroweak phase transition must be
**strongly first-order** —
the transition proceeds via bubble nucleation,
with CP-violating processes at the bubble walls.

In the minimal SM:
the electroweak transition is not strongly first-order —
it is actually a smooth crossover for $$m_H > 70$$ GeV.

Since $$m_H = 125$$ GeV:
the SM cannot explain baryogenesis via the electroweak transition.

New physics is required.

Extensions with additional scalars
can make the transition first-order.
This is an active research area —
connecting particle physics to cosmology
via SSB.

**Cosmic inflation and SSB:**

The **inflaton** — the field driving cosmic inflation —
may be related to SSB.

The inflaton rolls down its potential
from a high-energy symmetric state
to a lower-energy broken state.

The energy released reheats the universe
after inflation.

The structure of the inflaton potential —
its symmetries and their breaking —
determines the spectrum of primordial perturbations
that seed all structure in the universe.

The CMB anisotropies we observe today
are the imprint of quantum fluctuations
during inflation —
tiny SSB fluctuations,
amplified to cosmological scales.

SSB during inflation created
the galaxies, the stars, the planets, you.

---

## X. The Deep Message

Spontaneous symmetry breaking is one of the most
counterintuitive ideas in physics —
and one of the most powerful.

**The laws are more symmetric than the world.**

The Lagrangian has a symmetry.
The vacuum breaks it.
The world we observe is less symmetric
than the world that could have been.

This is not a failure of symmetry.
It is the mechanism by which
richness emerges from simplicity.

A perfectly symmetric world would be featureless —
all directions equivalent,
all states degenerate,
no preferred configurations,
no structure.

SSB gives the world:
- Preferred directions (magnets, crystals)
- Mass (Higgs mechanism, chiral SSB)
- The periodic table (Pauli + Higgs = atoms)
- Nuclear structure (chiral SSB → pions → nuclear force)
- Chemistry (atomic structure)
- You

The universe chose.

Not deliberately —
not by the action of any agent —
but because the symmetric state was unstable,
and the system fell into one of the degenerate minima.

Which minimum? Random.
Determined by quantum fluctuations —
the tiniest possible perturbations —
amplified by the instability
of the symmetric state.

The breaking was random.
The consequences were everything.

*"The fault, dear Brutus, is not in our stars,
but in our vacuum expectation value."*

---

*Essential reading:*

*Goldstone — "Field Theories with Superconductor Solutions" (1961)*
*Nuovo Cimento 19, 154*


*Higgs — "Broken Symmetries and the Masses of Gauge Bosons" (1964)*
*Phys. Rev. Lett. 13, 508*
*— one page; read it*


*Englert & Brout — "Broken Symmetry and the Mass of Gauge Vector Mesons" (1964)*
*Phys. Rev. Lett. 13, 321*
*— published three weeks before Higgs*


*Anderson — "Plasmons, Gauge Invariance, and Mass" (1963)*
*Phys. Rev. 130, 439*
*— the condensed matter precursor*


*Coleman — "Secret Symmetry" (1975)*
*in Aspects of Symmetry (Cambridge, 1985)*
*— the most beautiful lecture on SSB ever given*


*Weinberg — "A Model of Leptons" (1967)*
*Phys. Rev. Lett. 19, 1264*
*— the electroweak model; three pages; Nobel Prize*


*For the technically serious:*

*Peskin & Schroeder — Chapters 11-12*
*Weinberg — The Quantum Theory of Fields, Vol. 2*
*— Chapters 19-21*
