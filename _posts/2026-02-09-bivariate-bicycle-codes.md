---
layout: post
title: Bivariate Bicycle Codes — A New Hope for qLDPC
date: 2026-02-09
description: Structure, parameters, and why they matter.
tags: research-logs, EN
---

qLDPC codes have been theoretically promising for years.
The question was always: can we find explicit constructions
with good parameters *and* tractable decoding *and* 
some hope of physical implementation?

Bivariate Bicycle (BB) codes, introduced by Bravyi et al. (2024),
are a serious answer to that question.

---

## Construction

BB codes are defined over the group algebra of 
$$\mathbb{Z}_l \times \mathbb{Z}_m$$.

Let $$x$$ and $$y$$ be the cyclic shift operators on 
$$\mathbb{Z}_l$$ and $$\mathbb{Z}_m$$ respectively.
Choose two polynomials:

$$A(x,y), \quad B(x,y) \in \mathbb{F}_2[x,y] / (x^l - 1, y^m - 1)$$

The parity check matrices are:

$$H_X = [A \mid B], \qquad H_Z = [B^T \mid A^T]$$

This gives a CSS code on $$n = 2lm$$ physical qubits.

The commutativity condition $$H_X H_Z^T = 0$$ is automatically satisfied
by construction — a clean algebraic consequence of the bicyclic structure.

---

## Why BB Codes Are Interesting

**1. High encoding rate.**

Surface code encodes $$k=1$$ logical qubit into $$n \sim d^2$$ physical qubits.
BB codes achieve $$k = 2 \cdot \text{rank}(\ker A \cap \ker B^T)$$,
which for well-chosen polynomials gives $$k \sim \Theta(n)$$.

The landmark example from Bravyi et al.: **[[144, 12, 12]]** —
144 physical qubits encoding 12 logical qubits at distance 12.
Surface code needs ~1728 physical qubits for the same parameters.

**2. Low-weight stabilizers.**

All stabilizers have weight exactly 6 — three from $$A$$, three from $$B$$.
This is a hard constraint from the polynomial structure,
and it's what makes BB codes physically plausible.
Compare to hypergraph product codes where stabilizer weights grow with $$n$$.

**3. Quasi-cyclic structure.**

The cyclic structure enables efficient syndrome extraction circuits
and makes BP-OSD decoding particularly effective on these codes.

---

## The Polynomial Choice Problem

Here's what Bravyi et al. didn't fully answer:

Given a group $$\mathbb{Z}_l \times \mathbb{Z}_m$$,
which polynomial pairs $$(A, B)$$ maximize the distance $$d$$?

Shaw & Terhal (2024) explored this more systematically,
introducing the **morphing circuit** framework and identifying
high-performance BB codes in several group sizes.

But their search was not exhaustive.
The polynomial space is large, and distance computation is expensive —
exact distance for a [[72, 12, ?]] code requires solving a 
minimum-weight codeword problem that is NP-hard in general.

So the question remains open:
**Are there BB codes with better parameters than currently known?**

---

## What I'm Working On

Systematic search in groups Shaw & Terhal didn't fully explore.

For $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$ — $$n = 144$$ physical qubits —
I've been running exhaustive searches over polynomial pairs
that include cross-terms: $$x^i y^j$$ monomials Shaw restricted away.

Early results: several **[[72, 12, 7]]** codes 
with polynomial choices outside Shaw's search space.

The trade-off: cross-term polynomials yield stabilizer weight 11
instead of Shaw's weight 9 — more CNOT gates, harder circuits.
Whether the distance gain justifies the circuit cost
depends on the physical error model.

That's the next question.

More soon. 🙂
