# zkSNARKs from the Sumcheck Protocol

In zkSNARKs, the Sumcheck protocol is used as part of the proof system to enable the prover and verifier to agree on the correctness of the computation without revealing any information about the inputs or the computation itself and makes them useful for a wide range of applications in cryptography and beyond. In particular, it is used to compute inner products between vectors that are represented as polynomials. This is important because many cryptographic problems can be reduced to computing inner products between large vectors, so being able to compute these inner products efficiently is a critical component of SNARKs.&#x20;

The Sumcheck protocol was first presented to efficiently evaluate univariate polynomials over a finite field and later was extended to multivariate polynomials. It works by recursively dividing the input vectors into smaller sub-vectors and evaluating the corresponding polynomials on each sub-vector. The evaluation results are then combined in a way that reduces the size of the problem, allowing for efficient computation of the inner product.

## Sumcheck Protocol in Hyperplonk

<figure><img src="../../.gitbook/assets/Sumcheck Protocol in Hyperplonk.png" alt=""><figcaption><p>Figure 1: Hyperplonk</p></figcaption></figure>

In Plonk, the execution trace of a computation is converted into univariate polynomials and then verified using NTTs (Number Theoretic Transform). HyperPlonk is a new variant of Plonk that interpolates the execution trace on a Boolean hypercube instead. This means that the trace is represented by a multivariate polynomial with a linear degree in each variable. The Sumcheck protocol is the core computational problem in HyperPlonk (apart from polynomial commitments), replacing NTTs completely.&#x20;

HyperPlonk has the benefit of avoiding large NTTs, which are a major source of inefficiency in Plonk for large circuits. By using the Boolean hypercube, HyperPlonk does not need univariate polynomials anymore. Instead, it relies on multivariate polynomial operations. Figure 1 illustrates how HyperPlonk is constructed from this framework.
