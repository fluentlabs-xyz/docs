---
description: KZG Polynomial Commitment Scheme
---

# Polynomial Commitment: KZG

A polynomial can serve as a conventional method to represent an _n_-dimensional vector consisting of field elements <img src="../../.gitbook/assets/image (19).png" alt="" data-size="line"> To represent vector _v_, we can construct a polynomial <img src="../../.gitbook/assets/image (21).png" alt="" data-size="line"> such that it intersects the points <img src="../../.gitbook/assets/image (22).png" alt="" data-size="line"> for <img src="../../.gitbook/assets/image (31).png" alt="" data-size="line">&#x20;

Polynomial commitments provide an efficient means of representing significant elements allowing one party to commit to a polynomial while others can verify some properties about the polynomial, such as its degree or its value at a point, without revealing the polynomial itself.&#x20;

These commitments are one of the most important cryptographic primitives which are used in various applications such as constructing ZK proofs for arithmetic circuits, as they can reduce the proof size and verification cost.
