---
layout: post
title: "Logical Operators, Code Degeneracy, and the Geometry of Quantum Codes"
date: 2026-03-14
description: The deep structure of quantum error correcting codes, the symplectic geometry of Pauli space, the algebraic definition of logical operators, code degeneracy, and why the distance of a code is a geometric quantity.
tags: research-logs,
---

My previous post introduced
quantum error correction through
the stabilizer formalism.
[https://gulfiliz.github.io/blog/2026/qec/](https://gulfiliz.github.io/blog/2026/qec/)

It described what stabilizer codes do.

This post describes what they are:
the mathematical structure underneath,
the symplectic geometry of Pauli space,
the precise definition of logical operators,
the meaning of code degeneracy,
and why finding high-distance codes
is a hard combinatorial problem.

This is the mathematics that
a working quantum error correction researcher
lives in daily.

---

## I. The Symplectic Representation

Every Pauli operator on $$n$$ qubits
can be represented as a binary vector
in $$\mathbb{F}_2^{2n}$$.

**The representation:**

$$P = i^k X^{a_1}Z^{b_1} \otimes \cdots
\otimes X^{a_n}Z^{b_n}
\leftrightarrow
\mathbf{v} = (a_1,...,a_n \mid b_1,...,b_n)
\in \mathbb{F}_2^{2n}$$

Ignoring phases (which are irrelevant
for commutation relations):
each Pauli operator corresponds to
a binary vector of length $$2n$$.

The X-part: first $$n$$ bits.
The Z-part: last $$n$$ bits.

**The symplectic inner product:**

Two Pauli operators commute or anticommute
depending on their symplectic inner product:

$$\langle \mathbf{u}, \mathbf{v} \rangle_s
= \mathbf{a} \cdot \mathbf{b}' + \mathbf{b} \cdot \mathbf{a}'
\pmod{2}$$

where $$\mathbf{u} = (\mathbf{a} \mid \mathbf{b})$$
and $$\mathbf{v} = (\mathbf{a}' \mid \mathbf{b}')$$.

$$\langle \mathbf{u}, \mathbf{v} \rangle_s = 0$$:
operators commute.

$$\langle \mathbf{u}, \mathbf{v} \rangle_s = 1$$:
operators anticommute.

**The symplectic form:**

In matrix notation:

$$\langle \mathbf{u}, \mathbf{v} \rangle_s
= \mathbf{u} \Omega \mathbf{v}^T$$

where:

$$\Omega = \begin{pmatrix} 0 & I_n \\ I_n & 0 \end{pmatrix}$$

This is a symplectic form on $$\mathbb{F}_2^{2n}$$,
and the space $$(\mathbb{F}_2^{2n}, \Omega)$$
is a symplectic vector space.

The entire theory of stabilizer codes
lives in this symplectic geometry.

---

## II. The Stabilizer Code as a Subspace

A stabilizer code with $$m$$ independent generators
corresponds to an $$m \times 2n$$
binary matrix $$H$$,
where the rows are the symplectic representations
of the generators.

**The isotropic condition:**

The stabilizer group is abelian,
all generators commute.
In the symplectic representation:

$$H \Omega H^T = 0 \pmod{2}$$

This is the **isotropic condition**,
the rowspace of $$H$$ is an isotropic subspace
of $$(\mathbb{F}_2^{2n}, \Omega)$$.

An isotropic subspace has the property
that every pair of vectors in it
has zero symplectic inner product.

This is the fundamental algebraic condition
on a stabilizer code.

**The code space:**

The rowspace of $$H$$:

$$S = \text{rowspace}(H) \subseteq \mathbb{F}_2^{2n}$$

with $$|S| = 2^m$$ elements (as a set of vectors)
and $$\dim(S) = m$$.

The code space $$\mathcal{C}$$
is the $$+1$$ eigenspace of all stabilizers,
a $$2^{n-m}$$-dimensional subspace
of the $$2^n$$-dimensional Hilbert space.

The number of encoded logical qubits:

$$k = n - m$$

when the $$m$$ generators are independent.

**The rank of H:**

The effective number of independent stabilizers
is $$\text{rank}(H)$$ over $$\mathbb{F}_2$$.

If the generators are not independent,
if some generator is the product of others,
then $$\text{rank}(H) < m$$
and the code encodes more logical qubits:

$$k = n - \text{rank}(H)$$

This is why computing $$k$$ for a given
polynomial pair in BB codes
requires explicit rank computation,
not just counting generators.

---

## III. The Normalizer and Logical Operators

The stabilizer $$S$$ has a centralizer
in the Pauli group:
the set of all Pauli operators
that commute with every element of $$S$$.

In the symplectic representation,
this is the **symplectic complement** of $$S$$:

$$S^\perp = \{\mathbf{v} \in \mathbb{F}_2^{2n} :
\langle \mathbf{s}, \mathbf{v} \rangle_s = 0
\; \forall \mathbf{s} \in S\}$$

$$= \ker(H\Omega) \pmod{2}$$

**The key inclusion:**

$$S \subseteq S^\perp$$

This follows from the isotropic condition:
every stabilizer commutes with every stabilizer.

The quotient space:

$$S^\perp / S$$

has dimension:

$$\dim(S^\perp) - \dim(S) = 2k$$

To be precise:

$$\dim(S) = n - k$$
$$\dim(S^\perp) = 2n - \dim(S) = n + k$$

(since $$S^\perp$$ is the symplectic complement of $$S$$
in a $$2n$$-dimensional space).

$$\dim(S^\perp/S) = (n+k) - (n-k) = 2k$$

**Logical operators:**

Elements of $$S^\perp \setminus S$$,
operators that commute with all stabilizers
but are not themselves stabilizers,
are the **logical operators.**

For $$k$$ logical qubits,
there are $$k$$ logical X operators
$$\bar{X}_1, ..., \bar{X}_k$$
and $$k$$ logical Z operators
$$\bar{Z}_1, ..., \bar{Z}_k$$
satisfying:

$$[\bar{X}_i, \bar{Z}_j] = 0 \text{ for } i \neq j$$

$$\{\bar{X}_i, \bar{Z}_i\} = 0
\text{ (they anticommute)}$$

$$[\bar{X}_i, S] = 0, \quad [\bar{Z}_i, S] = 0
\text{ for all stabilizers } S$$

In the symplectic picture:
the $$2k$$-dimensional space $$S^\perp/S$$
carries a symplectic structure inherited from $$\Omega$$,
and the logical operators form a symplectic basis
of this quotient space.

**Non-uniqueness of logical operators:**

The logical operators are not unique.
If $$\bar{X}$$ is a logical X operator,
then $$\bar{X} \cdot S$$ for any stabilizer $$S$$
is an equally valid logical X.

The physical operator representing
a logical operation is defined only
up to multiplication by stabilizers.

This is crucial for decoding:
the decoder does not need to
identify the exact error,
only the error up to stabilizer equivalence.

---

## IV. Code Distance, The Geometric Picture

The code distance $$d$$ is defined as:

$$d = \min \{wt(\mathbf{v}) : \mathbf{v} \in S^\perp \setminus S\}$$

where $$wt(\mathbf{v})$$ is the Hamming weight,
the number of nonzero positions.

**Interpretation:**

The minimum-weight logical operator.

If the minimum-weight element of $$S^\perp \setminus S$$
has weight $$d$$,
then any error of weight $$< d/2$$
can be uniquely identified and corrected.

An error of weight $$\geq d/2$$
may map a codeword to another codeword
(after correction), producing a logical error.

**Separate X and Z distances:**

For CSS codes with $$C_2 \subseteq C_1$$,
the distance separates.

Logical X operators correspond to cosets
of $$C_2$$ in $$C_1$$:

$$d_X = \min\{wt(\mathbf{v}) :
\mathbf{v} \in C_1 \setminus C_2\}$$

Logical Z operators correspond to cosets
of $$C_1^\perp$$ in $$C_2^\perp$$:

$$d_Z = \min\{wt(\mathbf{v}) :
\mathbf{v} \in C_2^\perp \setminus C_1^\perp\}$$

$$d = \min(d_X, d_Z)$$

Finding the code distance requires finding
the minimum-weight codeword
in a coset of a binary linear code,
a problem equivalent to
**minimum-weight codeword** in the quotient code.

This is NP-hard in general.

For specific code families,
BB codes in particular,
special structure can be exploited
to compute distance efficiently.

---

## V. Code Degeneracy

A feature of quantum codes
with no classical analogue:
**degeneracy.**

**Definition:**

A code is **degenerate** if the stabilizer group $$S$$
contains a non-identity element
of weight less than $$d$$.

In a non-degenerate code,
all non-identity stabilizers have weight $$\geq d$$.
Different errors of weight $$< d/2$$
produce different syndromes,
and unique decoding is possible.

In a degenerate code,
some stabilizers have weight $$< d$$.

Errors that happen to coincide
with a low-weight stabilizer
produce the zero syndrome,
they are not detected,
but they also do not corrupt the logical state
(since they are stabilizers).

More generally,
different physical errors that differ
by a stabilizer give the same syndrome,
and they require the same correction
(modulo stabilizers).

**The implication for decoding:**

In a degenerate code,
multiple physical errors can correspond
to the same correction.
The decoder does not need to
identify the exact error,
only its equivalence class in $$S^\perp/S$$.

This can be advantageous:
degenerate codes can potentially achieve
better effective thresholds
because the stabilizer structure
automatically absorbs some errors.

**BB codes and degeneracy:**

BB codes are generically degenerate.
The circulant structure of the stabilizer matrix
produces low-weight stabilizers
(products of generators)
that fall below the code distance.

Quantifying the degeneracy,
counting the low-weight stabilizers
and their effect on the effective distance,
is an active area of research.

---

## VI. The Tanner Graph and Belief Propagation

The structure of a stabilizer code
is naturally represented
as a **Tanner graph**,
a bipartite graph connecting
qubits (variable nodes) to stabilizers (check nodes).

**Construction:**

Variable nodes: one per qubit, $$n$$ total.
Check nodes: one per stabilizer generator.

An edge connects qubit $$j$$ to stabilizer $$S_i$$
if $$S_i$$ acts nontrivially on qubit $$j$$.

For a CSS code:
separate Tanner graphs for X-checks and Z-checks.

**The LDPC condition:**

A code is LDPC if:
- Each variable node has degree $$\leq w_c$$ (constant)
- Each check node has degree $$\leq w_r$$ (constant)

In physical terms:
each qubit participates in at most $$w_c$$ stabilizers,
and each stabilizer acts on at most $$w_r$$ qubits.

**Cycles in the Tanner graph:**

The **girth** of the Tanner graph,
the length of the shortest cycle,
is critical for decoding performance.

Belief propagation on a cycle-free graph
(a tree) converges exactly
to the maximum-likelihood solution.

Short cycles cause BP to oscillate
and fail to converge.

For BB codes:
well-chosen polynomial pairs
produce Tanner graphs with girth $$\geq 6$$,
avoiding length-4 cycles.
This is not automatic from the group algebra structure
alone but follows from careful polynomial selection,
exploiting the algebra to rule out short cycles.

Higher girth → better BP performance.

The girth is determined by
the specific polynomial pair $$(a, b)$$.
Different polynomial choices give
different girth values,
affecting decoder performance.

---

## VII. The Polynomial Structure of BB Codes, In Depth

We now examine the algebraic structure
of BB codes more carefully.

**The group algebra:**

$$\mathbb{F}_2[\mathbb{Z}_L \times \mathbb{Z}_M]$$
is the group algebra of $$\mathbb{Z}_L \times \mathbb{Z}_M$$
over $$\mathbb{F}_2$$.

Elements are polynomials
$$f(x, y) = \sum_{i,j} f_{ij} x^i y^j$$
with $$f_{ij} \in \mathbb{F}_2$$
and the relations $$x^L = 1$$, $$y^M = 1$$.

Multiplication is convolution modulo
the group relations.

**The circulant structure:**

Each element $$f(x,y) \in
\mathbb{F}_2[\mathbb{Z}_L \times \mathbb{Z}_M]$$
corresponds to an $$LM \times LM$$ matrix,
a block circulant matrix
with circulant blocks.

The matrix is determined by
the polynomial $$f$$ and the group structure.

**The parity check matrices:**

For polynomials $$a(x,y)$$ and $$b(x,y)$$:

$$H_X = [A \mid B], \quad H_Z = [B^T \mid A^T]$$

where $$A$$ and $$B$$ are the circulant matrices
corresponding to $$a$$ and $$b$$.

The CSS orthogonality condition:

$$H_X H_Z^T = AB + BA = 0 \pmod{2}$$

Since $$A$$ and $$B$$ are elements
of the commutative group algebra
$$\mathbb{F}_2[\mathbb{Z}_L \times \mathbb{Z}_M]$$,
$$AB = BA$$ holds automatically,
and the condition $$AB + BA = 0$$
is satisfied by construction.

In the group algebra:
$$ab + ba = 0$$ with $$ab = ba$$ automatic.

**The number of logical qubits:**

For a CSS code with $$n$$ physical qubits:

$$k = n - \text{rank}(H_X) - \text{rank}(H_Z)$$

For BB codes with $$n = 2LM$$:

$$\text{rank}(H_X) = \text{rank}(H_Z) = \text{rank}([A \mid B])$$

by the CSS symmetry between $$H_X$$ and $$H_Z$$.

Therefore:

$$k = 2LM - 2\,\text{rank}([A \mid B])
= 2(LM - \text{rank}([A \mid B]))$$

The rank of $$[A \mid B]$$
depends on the specific polynomials $$a, b$$
and the group $$\mathbb{Z}_L \times \mathbb{Z}_M$$.

**Computing the rank:**

Over $$\mathbb{F}_2$$, with the circulant structure,
the rank can be computed using
the Smith normal form or
the eigenvalue structure of the circulant matrices.

For the group $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$,
the group algebra decomposes
into a product of simpler components
indexed by divisors of the group orders,
allowing efficient rank computation.

This algebraic structure
is what makes systematic polynomial search
feasible for specific groups.

---

## VIII. Distance Bounds

**Upper bounds:**

The distance of a code
is bounded above by the minimum-weight
logical operator.

Finding low-weight logical operators
provides upper bounds on $$d$$.

For BB codes:
the minimum-weight logical operators
can be found by brute-force search
for small groups,
or by algebraic methods exploiting
the circulant structure.

**Lower bounds:**

Proving $$d \geq d_0$$
requires showing that
no logical operator has weight $$< d_0$$.

This is harder.
It requires ruling out
all low-weight elements of $$S^\perp \setminus S$$.

For small codes: exhaustive search.
For large codes: probabilistic arguments
or structural properties of the code.

**The [[72, 12, 7]] codes:**

In my own research on BB codes
over $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$,
systematic polynomial search yielded
a family of $$[[72, 12, 7]]$$ codes.

These are *end-cycle* codes in the
Shaw-Terhal morphing framework,
where $$n = LM = 72$$
rather than the standard BB length
$$n = 2LM = 144$$.

The construction:

1. Begin with a mid-cycle BB code
   on $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$
   with $$n = 144$$.
2. Apply a morphing reduction
   that halves the qubit count,
   producing an end-cycle code with $$n = 72$$.
3. Enumerate polynomial pairs $$(a, b)$$
   of weight 3.
4. For each pair, compute $$k$$
   (via rank computation)
   and $$d$$ (via logical operator search).
5. Keep pairs with $$k = 12$$ and $$d \geq 7$$.

This yielded thirteen previously uncatalogued
$$[[72, 12, 7]]$$ codes,
with weight-11 stabilizers
(a higher-weight trade-off compared to
Shaw's weight-9 construction in his Table VIII)
in exchange for new polynomial families
not found by Shaw's systematic enumeration.

---

## IX. Automorphisms and Code Equivalence

Two codes are **equivalent**
if one can be obtained from the other
by a combination of:
- Qubit permutations
- Local Clifford operations (single-qubit unitaries)
- Qubit relabeling

Equivalent codes have the same parameters
$$(n, k, d)$$ but are "the same code"
from a fault-tolerance perspective.

**The automorphism group:**

The automorphism group $$\text{Aut}(\mathcal{C})$$
of a stabilizer code:
the set of physical operations
that map the code to itself,
that permute codewords among codewords.

$$\text{Aut}(\mathcal{C}) \leq \mathcal{C}_n$$

where $$\mathcal{C}_n$$ is the Clifford group.

A larger automorphism group
means more structure,
more potential transversal gates,
more symmetries to exploit.

**For BB codes:**

The circulant structure of BB codes
gives a natural automorphism:
the translation symmetry of the group
$$\mathbb{Z}_L \times \mathbb{Z}_M$$.

Translating all qubits by a group element $$g$$:
$$(A, B) \to (g \cdot A, g \cdot B)$$

maps the code to itself.
This translation is an automorphism.

Different polynomial pairs
may have additional automorphisms
beyond the translation symmetry.

The automorphism group determines
which logical gates can be implemented transversally.
The transversal gate group is exactly
the automorphism group
(intersected with the logical Clifford group).

Searching for polynomial pairs
with large or specific automorphism groups
is a way to find codes
with useful transversal gate sets.

---

## X. Topological Codes as Geometric Codes

The surface code and toric code
have a beautiful geometric interpretation
that illuminates their distance properties.

**The toric code as a chain complex:**

The toric code lives on a torus $$T^2$$.
Qubits on edges.
Stabilizers at vertices (X-type stars)
and plaquettes (Z-type faces).

This is a 2D **chain complex**:

$$\mathbb{F}_2^{|F|}
\xrightarrow{\partial_2} \mathbb{F}_2^{|E|}
\xrightarrow{\partial_1} \mathbb{F}_2^{|V|}$$

where $$V, E, F$$ are vertices, edges, faces.

The boundary maps:
- $$\partial_2$$ sends each face
  to the sum of edges on its boundary
- $$\partial_1$$ sends each edge
  to the sum of its endpoints

The stabilizers:
$$H_X = \partial_1$$ (vertex operators / stars)
$$H_Z = \partial_2^T$$ (face operators / plaquettes)

The CSS orthogonality:

$$H_X H_Z^T = \partial_1 \partial_2 = 0$$

follows from the fundamental identity
of a chain complex
(the boundary of a boundary is zero).

The logical operators:

$$k = \dim H_1(T^2; \mathbb{F}_2) = 2$$

For the toric code on a torus: $$k = 2$$.
For the surface code on a planar patch with boundary: $$k = 1$$.

The logical operators correspond to
non-contractible cycles on the torus,
cycles that cannot be deformed to a point.

The distance: the length of the
shortest non-contractible cycle
$$= L$$ (the lattice side length).

This geometric picture makes the distance transparent.
The code distance is a topological invariant
of the underlying surface.

**Hypergraph product codes:**

Tillich & Zémor (2014) generalized this
using the **hypergraph product**
of two classical codes.

Given classical codes with check matrices
$$H_1$$ and $$H_2$$:

$$H_X = [H_1 \otimes I_{n_2} \mid
I_{r_1} \otimes H_2^T]$$

$$H_Z = [I_{n_1} \otimes H_2 \mid
H_1^T \otimes I_{r_2}]$$

The parameters:
$$n = n_1 n_2 + r_1 r_2$$
$$k = k_1 k_2$$
$$d = \min(d_1, d_2)$$

where $$n_i, k_i, d_i, r_i$$ are parameters
of the classical codes.

If both classical codes are LDPC with linear distance:
the hypergraph product code is qLDPC
with linear distance and constant rate.

BB codes share structural features
with hypergraph product codes
(both arise from algebraic constructions
that combine smaller classical codes),
but BB codes are a distinct construction
based on group algebras over abelian groups.
Both are special cases of the broader
**lifted product code** family.

---

## XI. The Quantum Singleton Bound and Its Violations

**Classical Singleton bound:**

A classical $$[n, k, d]$$ code satisfies:

$$k \leq n - d + 1$$

Codes achieving this bound (MDS codes)
are optimal: maximum distance for given rate.

Reed-Solomon codes achieve the Singleton bound.

**Quantum Singleton bound (Knill-Laflamme):**

For any $$[[n, k, d]]$$ quantum code:

$$k \leq n - 2(d-1)$$

The factor of 2 (rather than the classical 1)
reflects the no-cloning theorem
and the need to protect against
both X-type and Z-type errors.

The smallest stabilizer code,
the $$[[5, 1, 3]]$$ code,
saturates this bound:
$$1 \leq 5 - 2(2) = 1$$.

It is an MDS quantum code,
the analogue of the classical $$[3, 1, 3]$$ repetition code
but achieving the optimal rate-distance tradeoff
for quantum codes.

**Degenerate codes and the bound:**

Whether degenerate codes can violate
the quantum Singleton bound
is a subtle and active research question.

The Singleton bound applies to all
$$[[n, k, d]]$$ stabilizer codes,
but degenerate codes can have effective
error correction properties that exceed
what their distance alone would suggest.

For BB codes:
the parameters $$[[144, 12, 12]]$$
give $$k/n = 1/12$$ and $$d = 12$$.

The quantum Singleton bound:

$$k \leq n - 2(d-1) = 144 - 22 = 122$$

So $$k = 12$$ is well below the bound.
The code is far from Singleton-optimal.

But the relevant comparison
is not the Singleton bound.
It is the surface code,
which achieves only $$k = 1$$
for comparable $$n$$ and $$d$$.

Against the surface code,
the BB construction is dramatically better.
Against the Singleton bound,
there is room to grow.

---

## XII. Connecting the Geometry to the Physics

The mathematical structures described here,
symplectic geometry, chain complexes,
quotient spaces, automorphism groups,
are not abstract decorations.

They connect directly to physical questions.

**The symplectic structure**
determines which operators commute,
the fundamental constraint on
what can be measured together.

**The rank of H**
determines how many logical qubits are encoded,
a direct consequence of
the linear algebra of the stabilizer group.

**The quotient space $$S^\perp/S$$**
is the logical Hilbert space,
the space in which quantum information lives.
Its symplectic structure determines
the commutation relations of logical operators.

**Code degeneracy**
determines the decoder's task.
Degenerate codes have a larger equivalence class
of correctable errors,
potentially improving the effective threshold.

**The distance**
is a minimum-weight problem
in a coset of a linear code,
connected to the geometry of
the Tanner graph and the
combinatorics of the stabilizer group.

**The automorphism group**
determines the transversal gate set,
which logical gates can be implemented
without spreading errors.

Finding a code with good parameters
and a useful automorphism group,
for example, one that includes
the logical T gate transversally,
is the goal of the polynomial search.

This is the research program:
systematic search in the space of
polynomial pairs over
specific groups $$\mathbb{Z}_L \times \mathbb{Z}_M$$,
guided by the algebraic structure,
looking for codes with:

$$k \geq k_{target}, \quad
d \geq d_{target}, \quad
\text{Aut}(\mathcal{C}) \supseteq G_{target}$$

The space is finite but large.
The constraints are computationally intensive.
The rewards,
a code that allows
fault-tolerant universal computation
with lower overhead than current approaches,
are significant.

---

*Essential reading:*

*Gottesman. "Stabilizer Codes and Quantum Error Correction" (1997).*
*PhD thesis, Caltech. Chapter 2 for the symplectic formalism.*

*Calderbank, Rains, Shor & Sloane.*
*"Quantum Error Correction via Codes over GF(4)" (1998).*
*IEEE Trans. Inf. Theory 44, 1369.*
*The symplectic / GF(4) connection.*

*Tillich & Zémor.*
*"Quantum LDPC Codes With Positive Rate*
*and Minimum Distance Proportional to the Square Root of the Blocklength" (2014).*
*IEEE Trans. Inf. Theory 60, 1193.*
*Hypergraph product codes.*

*Panteleev & Kalachev.*
*"Quantum LDPC Codes With Almost Linear Minimum Distance" (2022).*
*IEEE Trans. Inf. Theory 68, 213.*

*Bravyi et al.*
*"High-Threshold and Low-Overhead*
*Fault-Tolerant Quantum Memory" (2024).*
*Nature 627, 778.*
*BB code construction and parameters.*

*For the homological perspective:*

*Freedman & Hastings.*
*"Quantum Systems on Non-k-Hyperfinite Complexes" (2013).*
*arXiv:1301.1995.*

*Breuckmann & Eberhardt.*
*"Quantum Low-Density Parity-Check Codes" (2021).*
*PRX Quantum 2, 040101.*
*The best review of qLDPC codes.*

*For distance computation:*

*Leon. "A Probabilistic Algorithm for Computing*
*Minimum Weights of Large Error-Correcting Codes" (1988).*
*IEEE Trans. Inf. Theory 34, 1354.*

*Barg & Zémor on distance bounds for random codes.*

*For automorphisms and transversal gates:*

*Rains. "Quantum Codes of Minimum Distance Two" (1999).*
*IEEE Trans. Inf. Theory 45, 266.*

*Gottesman. "Theory of Fault-Tolerant Quantum Computation" (1998).*
*Phys. Rev. A 57, 127.*
