---
layout: post
title: General Relativity — Gravity Is Not a Force
date: 2025-08-08
description: Einstein's greatest achievement — the geometric theory of gravity, spacetime curvature, and why falling is the most natural thing in the universe.
tags: research-logs , physics
---

In 1907, Einstein had what he later called
"the happiest thought of my life."

He was sitting in his chair at the patent office
and imagined a man falling freely from a roof.

The falling man feels no gravity.
He is weightless.
He drops his keys — they fall with him,
hovering beside him.
From his perspective, gravity has vanished.

Einstein realized:
**a freely falling reference frame
is locally equivalent to an inertial frame.**

Gravity can be transformed away —
locally, temporarily —
by choosing the right reference frame.

This is the **equivalence principle.**

From this single thought —
from a man falling off a roof —
Einstein spent eight years
constructing the most beautiful physical theory
ever written.

General Relativity.

---

## I. The Failures of Special Relativity

Special relativity is incomplete.

It describes physics in inertial frames —
frames moving at constant velocity.
It says nothing about accelerated frames.
It says nothing about gravity.

More precisely:
Newtonian gravity is incompatible with special relativity.

Newton's gravitational force:

$$\mathbf{F} = -\frac{Gm_1m_2}{r^2}\hat{r}$$

acts instantaneously across any distance.

Special relativity forbids instantaneous action.
No influence propagates faster than $$c$$.

Gravity must be modified.
The modification must reduce to Newton's law
in the appropriate limit.
It must be consistent with special relativity.

Three candidates for relativistic gravity were proposed.
None worked correctly.

Einstein's approach was different.

He did not try to make gravity fit special relativity.
He rebuilt the framework entirely.

---

## II. The Equivalence Principle — Precise Formulation

The equivalence principle exists in several forms
of increasing strength.

**Weak Equivalence Principle (WEP):**

The trajectory of a freely falling test body
is independent of its internal structure and composition.

Equivalently: inertial mass equals gravitational mass.

$$m_i \mathbf{a} = m_g \mathbf{g}$$

If $$m_i = m_g$$: all bodies fall the same way.
Galileo's experiment from the Tower of Pisa.
Eötvös experiment (1889): confirmed to $$10^{-9}$$.
Modern tests: confirmed to $$10^{-15}$$.

**Einstein Equivalence Principle (EEP):**

In any freely falling frame,
the laws of special relativity hold locally.

No local experiment — mechanical or electromagnetic —
can distinguish a freely falling frame
from an inertial frame in empty space.

**Strong Equivalence Principle (SEP):**

The same holds for all physics,
including gravitational physics.
Self-gravitating bodies fall the same way
as test particles.

The SEP is violated by some alternative gravity theories.
GR satisfies it exactly.

---

## III. Differential Geometry — The Mathematical Language

General relativity is written in the language
of differential geometry.

You cannot understand GR without this language.
Let me build it carefully.

**Manifolds:**

A **manifold** $$\mathcal{M}$$ is a topological space
that locally looks like $$\mathbb{R}^n$$.

Spacetime is a 4-dimensional manifold.
Locally — in a small enough region —
it looks like flat Minkowski space.
Globally, it can be curved.

**Tangent spaces:**

At each point $$p \in \mathcal{M}$$,
there is a **tangent space** $$T_p\mathcal{M}$$
— the space of all tangent vectors at $$p$$.

A tangent vector $$V^\mu$$ at $$p$$
represents a direction and magnitude
in which you can move from $$p$$.

**The metric tensor:**

The fundamental object in Riemannian geometry
is the **metric tensor** $$g_{\mu\nu}$$ —
a symmetric (0,2) tensor field
that assigns an inner product to tangent vectors:

$$ds^2 = g_{\mu\nu}dx^\mu dx^\nu$$

This defines distances, angles, and volumes on the manifold.

In flat Minkowski spacetime:

$$g_{\mu\nu} = \eta_{\mu\nu} = \text{diag}(-1, +1, +1, +1)$$

$$ds^2 = -c^2dt^2 + dx^2 + dy^2 + dz^2$$

In curved spacetime: $$g_{\mu\nu}$$ varies from point to point.
The metric carries all information about the geometry.

**Covariant derivative:**

On a curved manifold,
ordinary partial derivatives do not transform
as tensors.

The **covariant derivative** $$\nabla_\mu$$
corrects for the curvature of the manifold:

$$\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda$$

where $$\Gamma^\nu_{\mu\lambda}$$ are the **Christoffel symbols:**

$$\Gamma^\lambda_{\mu\nu} = \frac{1}{2}g^{\lambda\sigma}
\left(\partial_\mu g_{\nu\sigma} + \partial_\nu g_{\mu\sigma} - \partial_\sigma g_{\mu\nu}\right)$$

The Christoffel symbols encode how basis vectors
change from point to point.
They are not tensors — they vanish in local inertial frames.

**Geodesics:**

A **geodesic** is the straightest possible path
on a curved manifold —
the path of zero covariant acceleration:

$$\frac{d^2x^\mu}{d\tau^2} + \Gamma^\mu_{\alpha\beta}
\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau} = 0$$

where $$\tau$$ is proper time.

This is the equation of motion for a freely falling particle.

In flat spacetime: $$\Gamma = 0$$, straight lines.
In curved spacetime: geodesics are curved —
but they are the straightest possible paths.

**The Riemann curvature tensor:**

The **Riemann tensor** $$R^\rho{}_{\sigma\mu\nu}$$
measures the curvature of the manifold:

$$R^\rho{}_{\sigma\mu\nu} = \partial_\mu\Gamma^\rho_{\nu\sigma}
- \partial_\nu\Gamma^\rho_{\mu\sigma}
+ \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma}
- \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}$$

It has 20 independent components in 4 dimensions.

Physical interpretation:
if you parallel-transport a vector
around a closed loop,
the vector returns rotated.
The rotation is proportional to $$R^\rho{}_{\sigma\mu\nu}$$
times the area of the loop.

Zero Riemann tensor: flat spacetime.
Nonzero Riemann tensor: curved spacetime.

**The Ricci tensor and Ricci scalar:**

Contracting the Riemann tensor:

$$R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}$$

$$R = g^{\mu\nu}R_{\mu\nu}$$

**The Einstein tensor:**

$$G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu}$$

The Einstein tensor is symmetric, (0,2),
and satisfies the contracted Bianchi identity:

$$\nabla^\mu G_{\mu\nu} = 0$$

This is crucial — it guarantees
that the Einstein equations are consistent
with energy-momentum conservation.

---

## IV. The Einstein Field Equations

After eight years of struggle —
involving wrong turns, false starts,
a race against Hilbert,
and the development of entirely new mathematics —

Einstein wrote down his field equations in November 1915:

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

Ten coupled nonlinear partial differential equations.

The left side: the geometry of spacetime.
The right side: the matter and energy content.

John Wheeler's summary:
*"Spacetime tells matter how to move;
matter tells spacetime how to curve."*

**The stress-energy tensor $$T_{\mu\nu}$$:**

Encodes all matter and energy content:
— $$T_{00}$$: energy density
— $$T_{0i}$$: energy flux / momentum density
— $$T_{ij}$$: stress tensor (pressure and shear)

For a perfect fluid:
$$T_{\mu\nu} = (\rho + p/c^2)u_\mu u_\nu + pg_{\mu\nu}$$

**The cosmological constant $$\Lambda$$:**

Einstein introduced $$\Lambda$$ in 1917
to produce a static universe — his "greatest blunder."

After Hubble's discovery of cosmic expansion (1929),
he abandoned it.

In 1998, the discovery of accelerating expansion
rehabilitated $$\Lambda$$ as dark energy.

Current value: $$\Lambda \approx 1.1 \times 10^{-52} \text{ m}^{-2}$$

**The Newtonian limit:**

For weak fields and slow motion:
$$g_{\mu\nu} \approx \eta_{\mu\nu} + h_{\mu\nu}$$, $$|h_{\mu\nu}| \ll 1$$

The Einstein equations reduce to:
$$\nabla^2\Phi = 4\pi G\rho$$

Newton's law of gravity.
GR contains Newtonian gravity
as a weak-field, slow-motion approximation.

---

## V. The Schwarzschild Solution

The Einstein equations are nonlinear —
finding exact solutions is extraordinarily difficult.

The first exact solution was found by
Karl Schwarzschild in 1916 —
while serving on the Russian front in World War I.
He died four months later.

**The Schwarzschild metric:**

For a spherically symmetric, static, vacuum spacetime:

$$ds^2 = -\left(1 - \frac{r_s}{r}\right)c^2dt^2
+ \left(1 - \frac{r_s}{r}\right)^{-1}dr^2
+ r^2d\Omega^2$$

where:
$$r_s = \frac{2GM}{c^2}$$ is the **Schwarzschild radius**

$$d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2$$

This describes spacetime outside a spherical mass $$M$$:
a planet, a star, a black hole.

**Gravitational time dilation:**

A clock at radius $$r$$ runs at rate:

$$d\tau = \sqrt{1 - \frac{r_s}{r}}\,dt$$

At $$r \to \infty$$: $$d\tau \to dt$$ — coordinate time.
Near $$r_s$$: time slows dramatically.
At $$r = r_s$$: time stops.

**The Schwarzschild radius:**

For the Sun: $$r_s = 2.95 \text{ km}$$
For the Earth: $$r_s = 8.87 \text{ mm}$$
For a proton: $$r_s \sim 10^{-54} \text{ m}$$

If you could compress the Sun to a sphere of radius 2.95 km —
it would become a black hole.

**Geodesics in Schwarzschild spacetime:**

The geodesic equation gives planetary orbits.

For nearly circular orbits:
the perihelion precesses at rate:

$$\Delta\phi = \frac{6\pi GM}{c^2 a(1-e^2)}$$

per orbit, where $$a$$ is the semi-major axis
and $$e$$ is the eccentricity.

For Mercury: $$\Delta\phi = 43''$$ per century.

This had been observed and was unexplained for decades.
GR explained it exactly.

---

## VI. Black Holes

At $$r = r_s$$: the metric component $$g_{tt} = 0$$
and $$g_{rr} \to \infty$$.

This is the **event horizon.**

**What happens at the event horizon:**

For an infalling observer:
nothing special — they cross smoothly.
The Schwarzschild coordinates are singular there
but the physics is not.

In Kruskal-Szekeres coordinates —
which cover the full Schwarzschild manifold —
the metric is:

$$ds^2 = \frac{32G^3M^3}{r}e^{-r/2GM}(-dT^2 + dX^2)
+ r^2d\Omega^2$$

No coordinate singularity at $$r = r_s$$.

The event horizon is a null hypersurface —
it moves outward at the speed of light.
Once inside, nothing — not even light —
can escape.

**The singularity:**

At $$r = 0$$: a genuine curvature singularity.
The Kretschner scalar:

$$K = R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}
= \frac{48G^2M^2}{c^4r^6} \to \infty$$

as $$r \to 0$.

The singularity is not a point in space.
It is a moment in time —
for any infalling observer,
it lies in the future.

**The Penrose-Hawking singularity theorems:**

Roger Penrose (1965) proved:
if a trapped surface forms —
a surface from which all light rays converge —
then a singularity must form.

Stephen Hawking extended this to cosmology:
the Big Bang is a singularity.

These theorems show that singularities
are generic — they are not artifacts
of the special symmetry of Schwarzschild.
They are inevitable consequences of GR.

They also show where GR breaks down:
at singularities, the curvature diverges,
and quantum effects must become important.
GR is incomplete.

---

## VII. Gravitational Waves

The linearized Einstein equations —
GR in the weak-field limit —
have wave solutions.

Write $$g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$$
with $$|h_{\mu\nu}| \ll 1$$.

In the **transverse-traceless (TT) gauge:**

$$\Box \bar{h}_{\mu\nu} = -\frac{16\pi G}{c^4}T_{\mu\nu}$$

In vacuum:

$$\Box h_{\mu\nu}^{TT} = 0$$

Wave equation. Solutions: gravitational waves
propagating at speed $$c$$.

**Properties of gravitational waves:**

Gravitational waves are transverse —
they oscillate perpendicular to their direction of travel.

They have two polarizations:
$$+$$ (plus) and $$\times$$ (cross).

A plus-polarized wave stretches space in the x-direction
while compressing in the y-direction,
then vice versa.

The strain — fractional change in length:

$$h = \frac{\Delta L}{L}$$

For the first detected gravitational wave (GW150914):
$$h \sim 10^{-21}$$

A fractional change of $$10^{-21}$.
For a detector 4 km long:
$$\Delta L \sim 4 \times 10^{-18} \text{ m}$$

One thousandth the diameter of a proton.

**The quadrupole formula:**

Gravitational wave luminosity:

$$P = \frac{G}{5c^5}\langle\dddot{Q}_{ij}\dddot{Q}^{ij}\rangle$$

where $$Q_{ij}$$ is the quadrupole moment of the source.

No monopole radiation (mass conservation).
No dipole radiation (momentum conservation).
Only quadrupole and higher.

**Binary pulsar — indirect detection:**

In 1974, Hulse and Taylor discovered
the first binary pulsar: PSR B1913+16.

Two neutron stars orbiting each other.
The orbital period decreases over time —
the system is losing energy.

The rate of energy loss:
exactly matches the GR prediction
for gravitational wave emission.

Hulse and Taylor received the Nobel Prize in 1993
for this indirect confirmation.

**LIGO — direct detection:**

On September 14, 2015, at 09:50:45 UTC,
the LIGO Livingston and Hanford detectors
recorded a signal:

**GW150914** — the merger of two black holes.

Masses: $$36 M_\odot$$ and $$29 M_\odot$$
Final mass: $$62 M_\odot$$
Energy radiated: $$3 M_\odot c^2 \approx 5 \times 10^{47}$$ J
— more power than all stars in the observable universe
combined, for 0.2 seconds.

Distance: 1.3 billion light-years.

The signal lasted 0.2 seconds.
The frequency swept from 35 Hz to 150 Hz.
The peak strain: $$10^{-21}$.

Einstein predicted gravitational waves in 1916.
We detected them in 2015.

99 years.

---

## VIII. The Tests of GR

GR makes specific predictions that differ from Newton.
All have been confirmed.

**1. Perihelion precession of Mercury:**
Predicted: 43'' per century.
Observed: 43.1 ± 0.5'' per century. ✓

**2. Gravitational deflection of light:**
Light bends in a gravitational field.
GR predicts: $$\delta\phi = \frac{4GM}{c^2b}$$
where $$b$$ is the impact parameter.

For light grazing the Sun:
$$\delta\phi = 1.75''$$

Observed by Eddington (1919): $$1.75 \pm 0.09''$$ ✓

This confirmed GR and made Einstein famous worldwide.

**3. Gravitational redshift:**
Light climbing out of a gravitational field loses energy.
$$\frac{\Delta\nu}{\nu} = \frac{\Delta\Phi}{c^2}$$

Pound-Rebka experiment (1959):
measured redshift over 22.5 m height.
Confirmed to 1%. ✓

GPS satellites: gravitational redshift
(clocks run faster at altitude)
combined with special relativistic time dilation
(clocks run slower due to orbital velocity)
gives a net correction of +38.4 microseconds/day.
Without correction: GPS error accumulates at 10 km/day. ✓

**4. Gravitational time delay (Shapiro delay):**
Radar signals passing near the Sun
are delayed by the curved spacetime.

$$\Delta t = \frac{4GM}{c^3}\ln\left(\frac{4r_E r_P}{b^2}\right)$$

Measured to 0.1% precision. ✓

**5. Frame dragging (Lense-Thirring effect):**
A rotating mass drags spacetime around it —
like a ball rotating in honey.

Gravity Probe B (2004-2005):
measured frame dragging by Earth's rotation.
Confirmed to 19%. ✓

**6. Gravitational waves:**
Predicted 1916. Confirmed 2015. ✓

**7. Black holes:**
Event Horizon Telescope (2019):
first image of a black hole shadow —
M87*, mass $$6.5 \times 10^9 M_\odot$$.

Shadow size: consistent with GR prediction. ✓

**8. Strong-field tests — binary pulsars:**
Post-Newtonian parameters measured
to parts per million.
Consistent with GR. ✓

Every prediction of GR has been confirmed.
Not one failure in over a century.

---

## IX. The Cosmological Solutions

Apply GR to the universe as a whole.

Assume: homogeneity and isotropy
(the **cosmological principle**).

The most general metric consistent with this:
the **Friedmann-Lemaître-Robertson-Walker (FLRW) metric:**

$$ds^2 = -c^2dt^2 + a(t)^2\left[\frac{dr^2}{1-kr^2}
+ r^2d\Omega^2\right]$$

where $$a(t)$$ is the **scale factor** —
the size of the universe relative to today —
and $$k = -1, 0, +1$$ is the spatial curvature.

The Einstein equations for this metric
give the **Friedmann equations:**

$$H^2 = \left(\frac{\dot{a}}{a}\right)^2
= \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$

$$\frac{\ddot{a}}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right)
+ \frac{\Lambda c^2}{3}$$

where $$H$$ is the **Hubble parameter**,
$$\rho$$ is the energy density, $$p$$ is pressure.

These equations govern the expansion of the universe.

**The Hubble parameter today:**
$$H_0 \approx 67.4 \text{ km/s/Mpc}$$ (Planck 2018)

**The density parameters:**

$$\Omega_m \approx 0.315$$ (matter — dark + baryonic)
$$\Omega_\Lambda \approx 0.685$$ (dark energy)
$$\Omega_k \approx 0$$ (spatial curvature — flat)
$$\Omega_r \approx 9 \times 10^{-5}$$ (radiation)

The universe is flat, dominated by dark energy,
and expanding at an accelerating rate.

**The Big Bang:**

Extrapolating backward:
$$a \to 0$$ as $$t \to 0$$.

At $$t \approx 10^{-43}$$ s (Planck time):
the energy density exceeds Planck density.
GR breaks down.

The Big Bang singularity is where GR ends.
Quantum gravity must take over.

---

## X. Where GR Fails

GR is, empirically, the most successful theory in physics.

It is also, mathematically, incomplete.

**Singularities:**

The Penrose-Hawking theorems guarantee singularities
inside black holes and at the Big Bang.
At singularities, curvature diverges.
GR breaks down.
Physical quantities become infinite.

A complete theory must resolve singularities.

**Quantum incompatibility:**

GR is a classical theory.
Quantum mechanics is fundamentally probabilistic.

In GR, the spacetime metric is a smooth classical field.
In quantum mechanics, matter fields are quantized operators.

The Einstein equations equate
a classical geometric quantity (left side)
with the expectation value of a quantum operator (right side):

$$G_{\mu\nu} = \frac{8\pi G}{c^4}\langle\hat{T}_{\mu\nu}\rangle$$

This is the **semiclassical approximation** —
used by Hawking to derive Hawking radiation.

It is not fundamental.
A proper quantum theory of gravity
must quantize the metric itself.

**The cosmological constant problem:**

As discussed in the Planck scale essay:
the quantum field theory prediction for $$\Lambda$$
exceeds the observed value by $$10^{122}$$.

This is the worst prediction in physics.
It involves GR and quantum field theory simultaneously —
and we cannot reconcile them.

**Dark matter and dark energy:**

The Friedmann equations fit cosmological data
only if we include:
$$\Omega_{DM} \approx 0.265$$ — unknown matter
$$\Omega_\Lambda \approx 0.685$$ — unknown energy

95% of the universe's content is unknown.

GR tells us it must be there.
It does not tell us what it is.

---

## XI. The Beauty of the Theory

I want to say something about beauty.

The Einstein equations are beautiful.

Not in a superficial sense —
not because they are short
(ten coupled nonlinear PDEs is not short) —
but because of what they express:

**The geometry of spacetime
is determined by its matter content.
The matter moves along geodesics of that geometry.
The geometry and the matter are one system.**

There is no background.
No fixed stage on which physics plays out.
The stage is part of the play.

Spacetime is not a container for physics.
Spacetime is physics.

This is what general relativity discovered —
not just a theory of gravity
but a new conception of what spacetime is:
not absolute, not fixed, not prior to physics —

**dynamic, curved, responsive,
inseparable from the matter and energy
that inhabit it.**

The universe is not a box.
It is a conversation —
between geometry and matter,
between curvature and motion,
between the shape of space
and the paths of things through it.

*"Space is not a rigid, invariable background.
It is a physical object,
which can wave, distort, and curve."*
— Carlo Rovelli

Einstein understood this in 1915.

We are still learning what it means.

---

*Essential reading:*

*Einstein — "The Foundation of the General Theory*
*of Relativity" (1916)*
*Annalen der Physik 49, 769*
*— the original paper*


*Misner, Thorne & Wheeler — Gravitation (1973)*
*— the bible; 1279 pages; essential*


*Carroll — Spacetime and Geometry (2004)*
*— the best modern textbook*


*Wald — General Relativity (1984)*
*— mathematically rigorous; essential for serious study*


*Penrose — The Road to Reality (2004)*
*— the most ambitious book in physics*


*For the historically inclined:*

*Pais — Subtle is the Lord (1982)*
*— the definitive Einstein biography*
