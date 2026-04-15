---
layout: post
title: Decoherence — Why Quantum Computers Are Hard
date: 2026-04-09
description: The fragility of quantum information and the war against noise.
tags: research-logs, physics, quantum, EN
---

Last time I introduced superposition and entanglement —
the two gifts quantum mechanics gives us.

Now for the curse: **decoherence.**

---

## What is Decoherence?

A qubit in superposition is in a state:

$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$

where $$|\alpha|^2 + |\beta|^2 = 1$$.

This is a coherent superposition — the amplitudes $$\alpha$$ and $$\beta$$ 
have a definite phase relationship. Quantum computation exploits 
this phase structure through interference.

The problem: **no qubit is truly isolated.**

Every qubit interacts with its environment — stray electromagnetic fields,
thermal photons, vibrations in the substrate, neighboring atoms.
These interactions entangle the qubit with the environment.

When a qubit entangles with the environment, the reduced state of the qubit
— obtained by tracing out the environmental degrees of freedom — 
becomes a **mixed state:**

$$\rho = |\alpha|^2 |0\rangle\langle 0| + |\beta|^2 |1\rangle\langle 1|$$

The off-diagonal terms — the coherences — vanish.
The qubit is no longer in superposition. It has effectively been **measured**
by the environment, without anyone asking it to be.

This is decoherence.

---

## Two Timescales

In practice, decoherence manifests through two characteristic times:

**T₁ — relaxation time:** how long before the qubit loses energy 
and decays from |1⟩ to |0⟩. A dissipative process.

**T₂ — dephasing time:** how long before the phase relationship 
between |0⟩ and |1⟩ is destroyed, even without energy loss.
Always T₂ ≤ 2T₁.

State-of-the-art superconducting qubits today achieve T₁, T₂ 
on the order of **100–500 microseconds.**

A quantum gate takes ~10–100 nanoseconds.

So you have roughly **1000–10000 gate operations** before your qubit 
becomes classical garbage.

For useful quantum computation — say, breaking RSA-2048 with Shor's algorithm —
you need **billions** of reliable gates.

The gap is enormous.

---

## Quantum Error Correction

The solution, in principle, has been known since 1995: **quantum error correction (QEC).**

The idea: encode one logical qubit into many physical qubits,
such that errors on individual physical qubits can be detected and corrected
without ever measuring — and thus collapsing — the logical state.

The canonical example is the **surface code:**
a 2D array of physical qubits where errors are detected by measuring
**stabilizers** — multi-qubit Pauli operators that commute with the logical operators
but anticommute with errors.

An error flips a stabilizer measurement from +1 to -1.
You detect it. You correct it. The logical qubit survives.

But here's the cost: to encode **one** logical qubit with surface code
at a physical error rate of ~0.1%, you need roughly **1000 physical qubits.**

For Shor's algorithm on RSA-2048: ~**20 million physical qubits.**

We have ~1000 today.

---

## Where I Come In

The surface code is not the only game in town.

A newer class of codes — **quantum Low-Density Parity-Check (qLDPC) codes** —
promises dramatically better encoding rates.
Instead of 1000 physical qubits per logical qubit,
some qLDPC codes achieve **10–20 physical qubits per logical qubit**
at comparable error thresholds.

The catch: they require non-local connectivity between qubits —
harder to build in hardware, more complex to decode.

This is the frontier. This is where I work.

More on that soon. 🙂
