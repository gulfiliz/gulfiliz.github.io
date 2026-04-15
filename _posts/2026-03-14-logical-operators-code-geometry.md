---
layout: post
title: Logical Operators, Code Degeneracy, and the Geometry of Quantum Codes
date: 2026-03-14
description: The deep structure of quantum error correcting codes — the symplectic geometry of Pauli space, the algebraic definition of logical operators, code degeneracy, and why the distance of a code is a geometric quantity.
tags: research-logs,
---

The previous essay introduced
quantum error correction through
the stabilizer formalism.

It described what stabilizer codes do.

This essay describes what they are —
the mathematical structure underneath:
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

This is a symplectic form on $$\mathbb{F}_2^{2n}$$ —
the space $$(\mathbb{F}_2^{2n}, \Omega)$$
is a symplectic vector space.

The entire theory of stabilizer codes
lives in this symplectic geometry.

---

## II. The Stabilizer Code as a Subspace

A stabilizer code with $$m$$ independent generators
corresponds to an $$m \times 2n$$
binary matrix $$H$$ —
the rows are the symplectic representations
of the generators.

**The isotropic condition:**

The stabilizer group is abelian —
all generators commute.
In the symplectic representation:

$$H \Omega H^T = 0 \pmod{2}$$

This is the **isotropic condition** —
the rowspace of $$H$$ is an isotropic subspace
of $$(\mathbb{F}_2^{2n}, \Omega)$.

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
is the $$+1$$ eigenspace of all stabilizers —
a $$2^{n-m}$$-dimensional subspace
of the $$2^n$$-dimensional Hilbert space.

The number of encoded logical qubits:

$$k = n - m$$

when the $$m$$ generators are independent.

**The rank of H:**

The effective number of independent stabilizers
is $$\text{rank}(H)$$ over $$\mathbb{F}_2$$.

If the generators are not independent —
if some generator is the product of others —
then $$\text{rank}(H) < m$$
and the code encodes more logical qubits:

$$k = n - \text{rank}(H)$$

This is why computing $$k$$ for a given
polynomial pair in BB codes
requires explicit rank computation —
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

$$= \text{rowspace}(H\Omega)^\perp$$

Explicitly:

$$S^\perp = \ker(H\Omega) \pmod{2}$$

**The key inclusion:**

$$S \subseteq S^\perp$$

This follows from the isotropic condition:
every stabilizer commutes with every stabilizer.

The quotient space:

$$S^\perp / S$$

has dimension:

$$\dim(S^\perp) - \dim(S)
= (n + k) - (n - k) = 2k$$

Wait — let me be precise.

$$\dim(S) = n - k$$
$$\dim(S^\perp) = 2n - (n-k) = n + k$$

(since $$S^\perp$$ is the symplectic complement of $$S$$
in a $$2n$$-dimensional space, and
$$\dim(S^\perp) = 2n - \dim(S)$$)

$$\dim(S^\perp/S) = (n+k) - (n-k) = 2k$$

**Logical operators:**

Elements of $$S^\perp \setminus S$$ —
operators that commute with all stabilizers
but are not themselves stabilizers —
are the **logical operators.**

For $$k$$ logical qubits,
there are $$k$$ logical X operators
$$\bar{X}_1, ..., \bar{X}_k$$
and $$k$$ logical Z operators
$$\bar{Z}_1, ..., \bar{Z}_k$$
satisfying:

$$[\bar{X}_i, \bar{Z}_j] = 0 \text{ for } i \neq j$$

$$\{\bar{X}_i, \bar{Z}_i\} \neq 0
\text{ (they anticommute)}$$

$$[\bar{X}_i, S] = 0, \quad [\bar{Z}_i, S] = 0
\text{ for all stabilizers } S$$

In the symplectic picture:
the $$2k$$-dimensional space $$S^\perp/S$$
carries a symplectic structure inherited from $$\Omega$$ —
the logical operators form a symplectic basis
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
identify the exact error —
it only needs to identify the error
up to stabilizer equivalence.

---

## IV. Code Distance — The Geometric Picture

The code distance $$d$$ is defined as:

$$d = \min \{wt(\mathbf{v}) : \mathbf{v} \in S^\perp \setminus S\}$$

where $$wt(\mathbf{v})$$ is the Hamming weight —
the number of nonzero positions.

**Interpretation:**

The minimum-weight logical operator.

If the minimum-weight element of $$S^\perp \setminus S$$
has weight $$d$$,
then any error of weight $$< d/2$$
can be uniquely identified and corrected.

An error of weight $$\geq d/2$$
may map a codeword to another codeword
(after correction) — a logical error.

**Separate X and Z distances:**

For CSS codes, the distance separates:

$$d_X = \min\{wt(\mathbf{v}) :
\mathbf{v} \in C_1 \setminus C_2^\perp\}$$

$$d_Z = \min\{wt(\mathbf{v}) :
\mathbf{v} \in C_2 \setminus C_1^\perp\}$$

$$d = \min(d_X, d_Z)$$

Finding the code distance requires finding
the minimum-weight codeword
in a coset of a binary linear code —
a problem equivalent to
**minimum-weight codeword** in the quotient code.

This is NP-hard in general.

For specific code families —
BB codes in particular —
special structure can be exploited
to compute distance efficiently.

---

## V. Code Degeneracy

A feature of quantum codes
with no classical analogue:
**degeneracy.**

**Definition:**

A code is **degenerate** if there exists
an error $$E \notin S$$ —
not a stabilizer —
with the same syndrome as the identity
(i.e., $$E \in S^\perp$$)
but with weight $$< d$$.

Equivalently:
there exist elements of $$S^\perp \setminus S$$
with weight less than $$d$$.

Wait — this would contradict the definition of $$d$$.

Let me be more careful.

**The precise definition:**

A code is degenerate if there exists
an error $$E$$ with $$wt(E) \leq \lfloor (d-1)/2 \rfloor$$
that is in the stabilizer group $$S$$ —
a low-weight stabilizer.

Equivalently: $$S$$ contains elements
of weight $$< d$$.

In a non-degenerate code:
all stabilizers have weight $$\geq d$$.
Different errors of weight $$< d/2$$
produce different syndromes —
unique decoding is possible.

In a degenerate code:
some stabilizers have weight $$< d$$.
Errors of weight $$< d/2$$ that are stabilizers
produce the zero syndrome —
they are not detected.
But they also do not corrupt the logical state
(since they are stabilizers).

**The implication for decoding:**

In a degenerate code,
multiple physical errors can correspond
to the same correction —
the decoder does not need to
identify the exact error,
only its equivalence class in $$S^\perp/S$$.

This can be advantageous:
degenerate codes can potentially achieve
better effective thresholds
because the stabilizer structure
automatically corrects some errors.

**BB codes and degeneracy:**

BB codes are generically degenerate —
the circulant structure of the stabilizer matrix
produces low-weight stabilizers
(products of generators)
that fall within the correction radius.

Quantifying the degeneracy —
counting the low-weight stabilizers
and their effect on the effective distance —
is an active area of research.

---

## VI. The Tanner Graph and Belief Propagation

The structure of a stabilizer code
is naturally represented
as a **Tanner graph** —
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
— Each variable node has degree $$\leq w_c$$ (constant)
— Each check node has degree $$\leq w_r$$ (constant)

In physical terms:
each qubit participates in at most $$w_c$$ stabilizers,
and each stabilizer acts on at most $$w_r$$ qubits.

**Cycles in the Tanner graph:**

The **girth** of the Tanner graph —
the length of the shortest cycle —
is critical for decoding performance.

Belief propagation on a cycle-free graph
(a tree) converges exactly
to the maximum-likelihood solution.

Short cycles cause BP to oscillate
and fail to converge.

For BB codes:
the Tanner graph has girth $$\geq 6$ —
no cycles of length 4.
This is a consequence of the
group algebra structure.

Higher girth → better BP performance.

The girth is determined by
the specific polynomial pair $$(a, b)$$ —
different polynomial choices give
different girth values,
affecting decoder performance.

---

## VII. The Polynomial Structure of BB Codes — In Depth

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
corresponds to an $$LM \times LM$$ matrix —
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

$$H_X H_Z^T = AB^T + BA^T = 0 \pmod{2}$$

In the group algebra:
$$ab^* + ba^* = 0$$
where $$f^*(x,y) = f(x^{-1}, y^{-1})$$
is the "conjugate" polynomial.

**The number of logical qubits:**

$$k = 2\dim\ker\begin{pmatrix}H_X \\ H_Z\end{pmatrix}
- 2(n - \text{rank}(H_X) - \text{rank}(H_Z))$$

More precisely:

$$k = n - \text{rank}(H_X) - \text{rank}(H_Z)
+ \text{rank}(H_X \cap \ker H_Z)$$

Wait — the correct formula for a CSS code:

$$k = k_1 + k_2 - n$$

where $$k_1 = n - \text{rank}(H_Z)$$
and $$k_2 = n - \text{rank}(H_X)$$.

Therefore:

$$k = n - \text{rank}(H_X) - \text{rank}(H_Z)$$

For BB codes with $$n = 2LM$$:

$$k = 2(LM - \text{rank}(A))
+ 2(LM - \text{rank}(B)) - 2LM$$

No — let me be careful.
$$H_X = [A \mid B]$$ has dimensions
$$LM \times 2LM$$.
$$\text{rank}(H_X) \leq LM$$.

The formula:

$$k = 2LM - \text{rank}(H_X) - \text{rank}(H_Z)$$

Since $$H_X = [A \mid B]$$ and $$H_Z = [B^T \mid A^T]$$
and both have the same rank by the CSS structure:

$$k = 2(LM - \text{rank}([A \mid B]))$$

The rank of $$[A \mid B]$$
depends on the specific polynomials $$a, b$$
and the group $$\mathbb{Z}_L \times \mathbb{Z}_M$$.

**Computing the rank:**

Over $$\mathbb{F}_2$$, with the circulant structure,
the rank can be computed using
the Smith normal form or
the eigenvalue structure of the circulant matrices.

For the group $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$:

The group algebra decomposes as:

$$\mathbb{F}_2[\mathbb{Z}_{12} \times \mathbb{Z}_6]
\cong \prod_{d_1 | 12, d_2 | 6}
\mathbb{F}_2[\mathbb{Z}_{d_1} \times \mathbb{Z}_{d_2}]^{m(d_1,d_2)}$$

where the product is over divisors
and $$m(d_1, d_2)$$ are multiplicities.

The rank of $$[A \mid B]$$ decomposes
into contributions from each component —
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

This is harder — it requires ruling out
all low-weight elements of $$S^\perp \setminus S$$.

For small codes: exhaustive search.
For large codes: probabilistic arguments
or structural properties of the code.

**The distance of [[72, 12, 7]] codes:**

For the specific family of BB codes
in $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$
with $$n = 144$$ physical qubits:

Codes with $$k = 12$$ and $$d = 7$$
are found by:

1. Enumerating polynomial pairs $$(a, b)$$
   of weight 3 over $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$
2. For each pair, computing $$k$$
   (via rank computation)
3. For pairs with $$k = 12$$,
   computing $$d$$ (via logical operator search)
4. Keeping pairs with $$d \geq 7$$

Wait — the group order is $$LM = 12 \times 6 = 72$$,
so $$n = 2 \times 72 = 144$$.

But codes with parameters $$[[72, 12, 7]]$$
have $$n = 72$$ — half the standard BB code length.

The resolution:
BB codes can also be constructed
with $$n = LM$$ by using
a different matrix structure —
or the $$[[72, 12, 7]]$$ codes
come from a group of order 36,
not 72.

For $$\mathbb{Z}_{12} \times \mathbb{Z}_6$$
with $$LM = 72$$:

Standard BB code: $$n = 2 \times 72 = 144$$.

The $$[[72, 12, 7]]$$ codes arise from
a different construction —
possibly from a subgroup of order 36,
or from a modified CSS structure
that uses a single circulant
rather than the $$[A \mid B]$$ structure.

The precise construction
and the novelty of specific polynomial pairs —
their relationship to Shaw & Terhal's
Table VIII constructions —
is the active research question.

---

## IX. Automorphisms and Code Equivalence

Two codes are **equivalent**
if one can be obtained from the other
by a combination of:
— Qubit permutations
— Local Clifford operations (single-qubit unitaries)
— Qubit relabeling

Equivalent codes have the same parameters
$$(n, k, d)$$ but are "the same code"
from a fault-tolerance perspective.

**The automorphism group:**

The automorphism group $$\text{Aut}(\mathcal{C})$$
of a stabilizer code:
the set of physical operations
that map the code to itself —
that permute codewords among codewords.

$$\text{Aut}(\mathcal{C}) \leq \mathcal{C}_n$$

where $$\mathcal{C}_n$$ is the Clifford group.

A larger automorphism group
means more structure —
more potential transversal gates,
more symmetries to exploit.

**For BB codes:**

The circulant structure of BB codes
gives a natural automorphism:
the translation symmetry of the group
$$\mathbb{Z}_L \times \mathbb{Z}_M$$.

Translating all qubits by a group element $$g$$:
$$(A, B) \to (g \cdot A, g \cdot B)$$

maps the code to itself —
this translation is an automorphism.

Different polynomial pairs
may have additional automorphisms
beyond the translation symmetry.

The automorphism group determines
which logical gates can be implemented transversally —
the transversal gate group is exactly
the automorphism group
(intersected with the logical Clifford group).

Searching for polynomial pairs
with large or specific automorphism groups
is a way to find codes
with useful transversal gate sets.

---

## X. Topological Codes as Geometric Codes

The surface code — and toric code —
have a beautiful geometric interpretation
that illuminates their distance properties.

**The toric code as a chain complex:**

The toric code lives on a torus $$T^2$$.
Qubits on edges. Stabilizers on plaquettes (Z) and vertices (X).

This is a 2D **chain complex**:

$$\mathbb{F}_2^{|V|} \xrightarrow{\partial_1}
\mathbb{F}_2^{|E|} \xrightarrow{\partial_2}
\mathbb{F}_2^{|F|}$$

where $$V, E, F$$ are vertices, edges, faces.

The boundary maps $$\partial_1, \partial_2$$ are
the vertex-edge and edge-face incidence matrices.

The stabilizers:
$$H_X = \partial_2^T$$ (face operators)
$$H_Z = \partial_1$$ (vertex operators)

The CSS orthogonality:
$$H_X H_Z^T = \partial_2^T \partial_1^T
= (\partial_1 \partial_2)^T = 0$$

follows from $$\partial_1 \partial_2 = 0$$ —
the fundamental identity of a chain complex
(the boundary of a boundary is zero).

The logical operators:
$$k = 2\dim H_1(T^2; \mathbb{F}_2) = 4$$

Wait — for the toric code: $$k = 2$$.
For the surface code: $$k = 1$$.

The logical operators correspond to
non-contractible cycles on the torus —
cycles that cannot be deformed to a point.

The distance: the length of the
shortest non-contractible cycle
$$= L$$ (the lattice side length).

This geometric picture makes the distance transparent:
the code distance is a topological invariant
of the underlying surface.

**Hypergraph product codes:**

Tillich & Zémor (2014) generalized this
using the **hypergraph product**
of two classical codes:

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

BB codes are related to hypergraph product codes —
the specific circulant structure
is a special case of the
hypergraph product construction
for cyclic codes.

---

## XI. The Quantum Singleton Bound and Its Violations

**Classical Singleton bound:**

A classical $$[n, k, d]$$ code satisfies:
$$k \leq n - d + 1$$

Codes achieving this bound (MDS codes)
are optimal — maximum distance for given rate.

Reed-Solomon codes achieve the Singleton bound.

**Quantum Singleton bound:**

For a non-degenerate $$[[n, k, d]]$$ code:

$$k \leq n - 4(d-1)$$

This is more restrictive than the classical bound —
quantum codes pay a higher overhead
for a given distance.

**Degenerate codes and the bound:**

Degenerate codes can potentially
violate the quantum Singleton bound —
their effective distance,
accounting for the degeneracy,
may exceed what non-degenerate codes achieve.

Whether degenerate codes actually
improve the encoding rate
is a subtle and active research question.

For BB codes:
the parameters $$[[144, 12, 12]]$$
give $$k/n = 1/12$$ and $$d = 12$$.

The quantum Singleton bound:
$$k \leq n - 4(d-1) = 144 - 44 = 100$$

So $$k = 12$$ is well below the bound —
the code is far from Singleton-optimal.

But the relevant comparison
is not the Singleton bound —
it is the surface code,
which achieves $$k = 1$$
for comparable $$n$$ and $$d$$.

---

## XII. Connecting the Geometry to the Physics

The mathematical structures described here —
symplectic geometry, chain complexes,
quotient spaces, automorphism groups —
are not abstract decorations.

They connect directly to physical questions.

**The symplectic structure**
determines which operators commute —
the fundamental constraint on
what can be measured simultaneously.

**The rank of H**
determines how many logical qubits are encoded —
a direct consequence of
the linear algebra of the stabilizer group.

**The quotient space $$S^\perp/S$$**
is the logical Hilbert space —
the space in which quantum information lives.
Its symplectic structure determines
the commutation relations of logical operators.

**Code degeneracy**
determines the decoder's task:
degenerate codes have a larger equivalence class
of correctable errors —
potentially improving the effective threshold.

**The distance**
is a minimum-weight problem
in a coset of a linear code —
connected to the geometry of
the Tanner graph and the
combinatorics of the stabilizer group.

**The automorphism group**
determines the transversal gate set —
which logical gates can be implemented
without spreading errors.

Finding a code with good parameters
and a useful automorphism group —
for example, one that includes
the logical T gate transversally —
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
The rewards — a code that allows
fault-tolerant universal computation
with lower overhead than current approaches —
are significant.

---

*Essential reading:*
*Gottesman — "Stabilizer Codes and Quantum Error Correction" (1997)*
*PhD thesis, Caltech — Chapter 2 for the symplectic formalism*
*Calderbank, Rains, Shor & Sloane —*
*"Quantum Error Correction via Codes over GF(4)" (1998)*
*IEEE Trans. Inf. Theory 44, 1369*
*— the symplectic/GF(4) connection*
*Tillich & Zémor —*
*"Quantum LDPC Codes With Positive Rate*
*and Minimum Distance Proportional to the Square Root of the Blocklength" (2014)*
*IEEE Trans. Inf. Theory 60, 1193*
*— hypergraph product codes*
*Panteleev & Kalachev —*
*"Quantum LDPC Codes With Almost Linear*
*Minimum Distance" (2022)*
*IEEE Trans. Inf. Theory 68, 213*
*Bravyi et al. —*
*"High-Threshold and Low-Overhead*
*Fault-Tolerant Quantum Memory" (2024)*
*Nature 627, 778*
*— BB code construction and parameters*
*For the homological perspective:*
*Freedman & Hastings —*
*"Quantum Systems on Non-k-Hyperfinite Complexes" (2013)*
*arXiv:1301.1995*
*Breuckmann & Eberhardt —*
*"Quantum Low-Density Parity-Check Codes" (2021)*
*PRX Quantum 2, 040101*
*— the best review of qLDPC codes*
*For distance computation:*
*Leon — "A Probabilistic Algorithm for Computing*
*Minimum Weights of Large Error-Correcting Codes" (1988)*
*IEEE Trans. Inf. Theory 34, 1354*
*Barg & Zemor — distance bounds for random codes*
*For automorphisms and transversal gates:*
*Rains — "Quantum Codes of Minimum Distance Two" (1999)*
*IEEE Trans. Inf. Theory 45, 266*
*Gottesman — "Theory of Fault-Tolerant Quantum Computation" (1998)*
*Phys. Rev. A 57, 127*
