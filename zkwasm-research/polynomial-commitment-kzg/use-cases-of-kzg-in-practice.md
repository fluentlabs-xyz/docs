# Use cases of KZG in Practice

* Ethereum’s Proto-Danksharding \[4]
  * The proposal called Proto-Danksharding (EIP-4844) intends to reduce the cost of posting data on Ethereum's Layer 1 for rollups. It suggests the addition of a transaction type known as "blob-carrying transaction" that can accommodate a more substantial data blob, typically around 128 kB. However, the data blob will not be directly accessible by smart contracts on Ethereum's execution layer. Instead, only a commitment to the data blob will be accessible from the execution layer.
  * For its polynomial commitment scheme, Ethereum has chosen KZG. It has been determined by researchers that among the other polynomial commitment schemes, KZG offers the most efficient and refined implementation in the short to medium term, suitable for Ethereum's Danksharding roadmap.
* Scroll’s zkRollups \[5]
  * The rollup will generate a commitment to a collection of polynomials that encapsulate the computation.
  * A verifier can then request evaluations at random points to validate if the computation represented by the polynomials is accurate, thus ensuring the correctness constraints hold.
* Jellyfish \[6]
  * The KZG commitment scheme is utilized in Jellyfish to generate the commitments to the polynomial.
  * During the commitment phase, the prover commits to the polynomial by utilizing the homomorphic properties of KZG, which allow for efficient evaluation of the polynomial at any point without revealing its coefficients.
* Hyperplonk \[7]
  * It uses the multi-linear KZG commitment
