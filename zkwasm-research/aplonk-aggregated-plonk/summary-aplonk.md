# Summary: aPlonk

aPlonk introduces and uses the new technique called the multi-polynomial commitment scheme described above, allowing to commit to multiple polynomials simultaneously and use them in the proofs. We expect multilinear polynomials to become more common for arithmetization because it can provide 𝑂(𝑛) interpolation compared to 𝑂(𝑛 log 𝑛) for univariate polynomials. aPlonk eliminates the requirement of using the binding property of group commitments described above (i.e., the commitments <img src="../../.gitbook/assets/image (44).png" alt="" data-size="line">&#x20;

Namely, they show that binding property is unnecessary as long as the underlying polynomial commitment scheme is inner-product binding and inner-product extractable. In this way, they have removed the usage of <img src="../../.gitbook/assets/image (23).png" alt="" data-size="line"> and doubled the performance of the main subprotocol of SnarkPack. This is because of the underlying KZG commitments’ which satisfy both inner-product binding and extractable properties.

### Wasm0 Direction

aPlonk currently supports only BLS curves, and one research and implementation direction is to replace BN curves to integrate with Halo 2, improving Wasm0 proving times. Another research direction is whether folding schemes can be integrated with multilinear commitment schemes improving aPlonk.

