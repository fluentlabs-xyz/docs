# SHPlonk

SHPlonk is an optimization on polynomial commitment layer which can work with Plonk and has some advantages such as reducing the workload of the prover and allowing multiple openings of polynomials. It has the following advantages:

* More effective commitment scheme than KZG10 commitment.
* Provides Multi-Polynomial and Multi-Openings.
* It makes the prover do slightly more work, however as a result the verifier does much less work and needs to do less elliptic curve operations.
* They give an opening protocol for multiple points where the number of verifier group operations only depends on the number of polynomials but not the number of points.
  * There is still a dependency in the number of verifier field operations, but these are 3 orders of magnitude cheaper than a scalar multiplication.
* Thus, if we could reduce opening many polynomials at a single point to opening a single polynomial at multiple points we could then use \[BDFG20] to obtain our desired result.
  * In the original PLONK algorithm, there are two Openings, i.e., 𝑧 and 𝑧𝑤. When there are more Openings, this algorithm will have more advantages.
* This approach makes the prover do slightly more work, but the verifier does much less work.
  * Less number of elliptic curve operations o Less gas consumption

## The Protocol

The elliptic curve pairing is assumed to be asymmetric – that means that our pairing is a map on 𝔾1 × 𝔾2 . In this section, we will refer to the chosen generator of each group as <img src="../../.gitbook/assets/image (17).png" alt="" data-size="line"> respectively.

A Structured Reference String 𝑆𝑅𝑆 = 𝐺𝑒𝑛(𝑑,𝑡)

* 𝑑 is the maximum degree of polynomial this SRS can support. In general, the degree is much larger than 𝑡 where 𝑡 is the maximum number of evaluation points. Note that a polynomial commitment scheme is the first step in a ZKP protocol. In the SHPLONK protocol, there are three polynomials to evaluate. The first polynomial will be evaluated at two points, and the others will be evaluated at one point each. This means that in the use of SHPLONK, the value of 𝑡 is expected be four.
* The SRS is of the form:

<figure><img src="../../.gitbook/assets/image (39).png" alt="" width="371"><figcaption></figcaption></figure>

### High Level Flow:

<figure><img src="../../.gitbook/assets/highlevel-SHplonk (3).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>

### The Technical Flow:

<figure><img src="../../.gitbook/assets/highlevel-SHplonk (1).png" alt=""><figcaption></figcaption></figure>
