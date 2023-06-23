---
description: A Brief on Plonkish Protocols
---

# Plonkish Protocols

Plonkish protocols, generally, look like this:

1. The prover sends commitments to some polynomials.
2. The verifier responds with some challenges.
3. The prover and the verifier repeat this for a number of rounds.
4. The prover opens these polynomials in some points, and the verifier checks some equations on these openings.

<figure><img src="../../.gitbook/assets/SHplonk.png" alt=""><figcaption></figcaption></figure>

The equations are usually meant to apply to the polynomials and their rotations, where <img src="../../.gitbook/assets/image (13).png" alt="" data-size="line"> and μ is a primitive root of unity of order 𝑛. Therefore, in general, to verify these equations, the verifier chooses a challenge point 𝑥 and prover reveals the values of the polynomials <img src="../../.gitbook/assets/image (43).png" alt="" data-size="line"> at points <img src="../../.gitbook/assets/image (41).png" alt="" data-size="line"> for <img src="../../.gitbook/assets/image (9).png" alt="" data-size="line"> where <img src="../../.gitbook/assets/image (6).png" alt="" data-size="line"> is the set of all rotated versions of <img src="../../.gitbook/assets/image (43).png" alt="" data-size="line"> in the constraint.

## Notations

<figure><img src="../../.gitbook/assets/shplonk-notation.png" alt=""><figcaption></figcaption></figure>
