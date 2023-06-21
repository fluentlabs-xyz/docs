# Multi-Polynomial Commitment Scheme

Developing a multi-polynomial commitment scheme presents a significant obstacle in achieving a commitment size and verification that is sublinear in the number of committed polynomials. The starting point for this method is the KZG polynomial commitment scheme, which is defined over a set of bilinear groups <img src="../../.gitbook/assets/image (67).png" alt="" data-size="line">of prime order 𝑝 that are equipped with a pairing 𝑒. For each 𝑖 in the set {1, 2, 𝑡}, we utilize the implicit notation <img src="../../.gitbook/assets/image (53).png" alt="" data-size="line"> to represent 𝑥𝐺𝑖 ∈ 𝔾𝑖, where 𝐺𝑖 is the designated generator of 𝔾𝑖 and 𝑥 belongs to the set of integers modulo 𝑝.

The KZG commitment scheme is as follows:

### Key generation: <img src="../../.gitbook/assets/image (46).png" alt="" data-size="line">

<figure><img src="../../.gitbook/assets/image (1).png" alt="" width="563"><figcaption></figcaption></figure>

### Commitment:

<figure><img src="../../.gitbook/assets/image (7).png" alt="" width="563"><figcaption></figcaption></figure>

### Verification:

Verification is done with the following equality:

<figure><img src="../../.gitbook/assets/image (34).png" alt="" width="261"><figcaption></figcaption></figure>

Note that KZG enjoys the homomorphic property, which means that if μ1 and μ2 represent commitments to polynomials 𝑓1 and 𝑓2 respectively, then the sum of μ1 and μ2 is a commitment to their sum of polynomials 𝑓1 + 𝑓2. This homomorphic property enables an optimization when verifying multiple commitments μ1, . . . , μ𝑘 that are claimed to evaluate to values 𝑣1, . . . , 𝑣𝑘 at a shared point 𝑧 ∈ ℤ𝑝.

Initially, a random linear combination of the commitments is computed as <img src="../../.gitbook/assets/image (64).png" alt="" data-size="line"> where 𝑟 is a uniformly sampled value from ℤ𝑝. Afterward, it is necessary to confirm that the computed value 𝜇̂ , a linear combination of the commitments, opens to the value <img src="../../.gitbook/assets/image (69).png" alt="" data-size="line"> at the point 𝑧. This technique allows the verifier to verify a single pairing equation rather than 𝑘 equations with a negligible statistical error.
