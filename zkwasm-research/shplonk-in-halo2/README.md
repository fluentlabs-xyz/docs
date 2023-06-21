---
description: A More Secure and Scalable Alternative to PLONK
---

# SHPlonk in Halo2

In this section, instead of the opening scheme in [GWC19] (the original Plonk paper), we will discuss the scheme proposed in [BDFG20] known as SHPlonk. 

SHPlonk is an improved version of the PLONK protocol, which is a recursive, interactive, polynomial commitment scheme. It is a zero-knowledge proof (ZKP) protocol that allows for the verification of complex mathematical statements without revealing the underlying data. 

SHPlonk is more efficient than PLONK, and it can be used to build more scalable and secure blockchains and has already been implemented in Halo2. The main difference between SHPlonk and PLONK is that SHPlonk uses a **multi-poly commitment scheme**. This means that the prover commits to multiple polynomials, rather than just one. This makes it more difficult for the verifier to cheat, as they would need to guess the values of all the polynomials in order to successfully refute the proof.
