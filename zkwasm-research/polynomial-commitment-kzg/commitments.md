---
description: Commitment Schemes
---

# Commitments

Many cryptographic protocols rely on commitment schemes, which are essential components. A commitment scheme enables a committer to generate and disclose a value, denoted as:

$$
d=Com(m)
$$

, also known as a commitment, that ties them to a message $$m$$ (binding) without disclosing the message to others (hiding or zero-knowledge). Subsequently, the committer can disclose the commitment by presenting a message  to the public, which she asserts corresponds (completely or partially) to the concealed message $$m$$ linked with the commitment $$d$$. A public verifier can then verify that the message $$m$$∗ aligns with the commitment $$d$$, derived from the hidden message $$m$$, which was previously unknown to the verifier.&#x20;

Commitment schemes can be categorized according to their mathematical structure or type of message $$m$$ which may comprise multiple components and structures, including sets, vectors, functions, and more. For example, here below are some of the types of commitment schemes:&#x20;

* For a single message $$m$$, only a hash function can serve as the commitment primitive (e.g., SHA256, Keccak, Poseidon).
* For a set of messages <img src="../../.gitbook/assets/image (49).png" alt="" data-size="line"> an accumulator can be used as the commitment primitive (e.g., RSA accumulator).
* For a vector of messages<img src="../../.gitbook/assets/image (57).png" alt="" data-size="line">, a Merkle Tree can be used as the commitment primitive.
* For univariate polynomial messages <img src="../../.gitbook/assets/image (55).png" alt="" data-size="line">, Kate Polynomial commitment can be employed.
* For multivariate polynomial messages <img src="../../.gitbook/assets/image (50).png" alt="" data-size="line">, Multivariate Polynomial commitment can serve as the primitive commitment.
* For multilinear polynomial maps <img src="../../.gitbook/assets/image (6).png" alt="" data-size="line">, Multilinear Polynomial commitment can be used as the primitive commitment.
