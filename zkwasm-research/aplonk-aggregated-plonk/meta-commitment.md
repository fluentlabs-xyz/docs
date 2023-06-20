# Meta-Commitment

To attain a sublinear commitment size, the prover will commit to the commitments μ1, . . . , μ𝑘. Let’s call this commitment Meta-Commitment. Once this meta-commitment is calculated, a value 𝑟 will be sampled by the Verifier (in an interactive protocol or non-interactive through the Fiat-Shamir heuristic). The computation of the aggregated commitment 𝜇̂ will be assigned to the Prover, who will also provide proof to guarantee the correctness of this computation with respect to the meta-commitment.&#x20;

The necessary computation to verify 𝜇̂ can be viewed as an evaluation of a polynomial with coefficients μ𝑖 at 𝑟. Consequently, a polynomial commitment scheme is a suitable choice for the required meta-commitment scheme. One possible option is a modified version of the KZG commitment scheme that utilizes 𝔾𝑡 as the committing space. In this scheme, μ1, . . . , μ𝑘 can be committed to by representing them as <img src="../../.gitbook/assets/image (47).png" alt="" data-size="line"> where 𝜏 is a new secret in the structured reference string (SRS) and is independent of 𝑠. One way to solve the problem of opening commitment 𝑀 at 𝑟 is by using Inner Product Argument (IPA).&#x20;

However, this method is known for its linear verification, which means that its verification complexity is logarithmic in 𝑘, except for a final check that 𝑀 belongs to the group 𝔾𝑡 and corresponds to the commitment of a polynomial <img src="../../.gitbook/assets/image (60).png" alt="" data-size="line"> for some coefficients 𝑢𝑗 where <img src="../../.gitbook/assets/image (26).png" alt="" data-size="line"> The polynomial 𝑔(𝑥) has a factored form and can be evaluated in logarithmic time, which makes it possible to verify the proof of opening of 𝑀 at a random point 𝜌 ∈ ℤ𝑝 instead of the expensive linear check. The proof can be checked by verifying that 𝑀 opens to 𝑔(𝜌).&#x20;

Using the IPA, we can replace the KZG-like proof of opening of an unknown polynomial 𝑓 with a KZG-like proof of opening of a known polynomial 𝑔, which incurs some additional logarithmic complexity checks.

By utilizing the aforementioned methods, it is possible to delegate the calculation of 𝜇̂. To obtain a comprehensive multi-polynomial commitment scheme, a sublinear verification algorithm must be created that receives a commitment to the evaluations as input instead of the evaluations themselves. This can be achieved in a general manner by employing proof for the relation:

<figure><img src="../../.gitbook/assets/image (17).png" alt="" width="563"><figcaption></figcaption></figure>

