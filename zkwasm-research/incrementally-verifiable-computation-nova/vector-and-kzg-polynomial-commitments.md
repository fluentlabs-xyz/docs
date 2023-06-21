---
description: 'Vector Commitments and KZG Polynomial Commitments: An Introduction'
---

# Vector and KZG Polynomial Commitments

In the world of cryptography, various primitives exist that allow one to commit to a value and later prove its properties without revealing the value itself. One such primitive is vector commitment. In this section, we will explore vector commitments and their homomorphic variant, KZG polynomial commitments, including their applications in cryptographic protocols such as zkSNARKs and secure multiparty computation.

## What are Vector Commitments?

Vector commitments allow a user to commit to a vector of values and later prove properties about the vector (such as its length or its value at an index) without revealing the vector itself. A homomorphic vector commitment allows one to perform operations on the committed vector, such as addition or scalar multiplication. Polynomial commitment schemes such as Pedersen commitments can do addition homomorphically, making them ideal for supporting operations on committed vectors.

## What are KZG Polynomial Commitments?

A polynomial commitment scheme is a cryptographic primitive that allows one to commit to a given polynomial while keeping it hidden from others, with the ability to reveal the committed polynomial later. It is also possible to verify claimed evaluations of the committed polynomial without revealing the whole polynomial.

KZG polynomial commitments are a specific type of polynomial commitment scheme that uses pairings and polynomial commitments to verify the validity of a degree 𝑛 polynomial using 𝑛 queries. They are based on vector commitments and can be seen as a special case of them. The final construction has a small verifier circuit (about 20,000 constraints in R1CS), making proof generation and verification fast.

### Additive Homomorphism and Succinctness

A polynomial commitment scheme must be additively homomorphic to support operations on committed vectors.

Given two variables 𝑎, 𝑏, we say that the commitment is additively homomorphic if:

$$
𝑐𝑜𝑚(𝑎 + 𝑏) = 𝑐𝑜𝑚(𝑎) + 𝑐𝑜𝑚(𝑏)
$$

, where 𝑐𝑜𝑚(𝑥) is the commitment of 𝑥.

Both KZG and Pedersen commitments are additively homomorphic. Furthermore, the communication and computation costs for the verifier are constant, which allows blockchain nodes to function without extra burden.

The other important property of a polynomial commitment scheme is succinctness, which means the commitment size must be logarithmic in the opening size. For example, if we have a degree 𝑛 polynomial, its commitment should use at most 𝑙𝑜𝑔(𝑛) elements.

