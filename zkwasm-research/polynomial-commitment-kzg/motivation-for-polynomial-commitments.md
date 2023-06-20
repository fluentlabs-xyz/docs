---
description: Polynomial Commitment Schemes
---

# Motivation for Polynomial Commitments

Polynomial commitment schemes are cryptographic protocols that allow a party to commit to a polynomial function without revealing its coefficients. The committer commits to a polynomial Φ, rather than some arbitrary message $$m$$. Polynomial commitment schemes satisfy the above-mentioned properties of normal commitment schemes, and also achieve an additional property: the committer should be able to “open” certain evaluations of the committed polynomial without revealing the entire thing. For example, the committer should be able to prove that $$Φ(a) = b$$ without revealing exactly what $$Φ(x)$$ is \[1].&#x20;

Polynomial commitments are also an essential component of zkSNARKs because they enable the prover to commit to the polynomial, they wish to prove knowledge of, without revealing the polynomial itself. Namely, we can use it to prove that we have some polynomial which satisfies certain properties (in this case, that it passes through a certain point $$Φ(a) = b$$), without revealing what the polynomial $$Φ(x)$$ is.&#x20;

This is important because it preserves the privacy of the prover's secret information, while still allowing the verifier to verify that the prover knows the polynomial with the required properties. In zkSNARKs, the prover commits to a polynomial using a commitment scheme that enables them to hide the polynomial's coefficients. The commitment scheme allows the prover to create a commitment to the polynomial that is computationally binding and hides the polynomial's coefficients until the prover reveals them later.&#x20;

During the verification phase, the verifier uses the commitment to check that the polynomial satisfies certain properties, without actually seeing the polynomial itself. This ensures that the prover cannot manipulate the polynomial to obtain a false verification result, while maintaining the privacy of the polynomial.
