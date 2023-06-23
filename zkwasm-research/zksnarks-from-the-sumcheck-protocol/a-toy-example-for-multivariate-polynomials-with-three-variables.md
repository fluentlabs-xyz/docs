# A Toy Example for Multivariate Polynomials (with three variables)

Let 𝑔(𝑋1,𝑋2, 𝑋3) = 2𝑋1 3 + 𝑋1𝑋3 + 𝑋2𝑋3. The sum of 𝑔’s evaluations over the Boolean hypercube is ℍ = 12.

1.  When the Sumcheck protocol is applied to 𝑔, the honest prover’s first message in the protocol is the univariate polynomial 𝑠1(𝑋1) equal to:\
    \\

    <figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
2. The verifier checks that 𝑠1(0) + 𝑠1(1) = 12, and then sends the prover 𝑟1. Suppose that 𝑟1 = 2.
3. The honest prover would then respond with the univariate polynomial 𝑠2(𝑋2) = 𝑔(2, 𝑋2, 0) + 𝑔(2, 𝑋2, 1) = 16 + (16 + 2 + 𝑋2) = 34 + 𝑋2.
4. The verifier checks that 𝑠2(0) + 𝑠2(1) = 𝑠1(𝑟1), which amounts in this example to confirming that 34 + (34 + 1) = 8 (2 3 ) + 4 + 1; indeed, both the left hand side and right hand side equal 69. The verifier then sends the prover 𝑟2. Suppose that 𝑟2 = 3.
5. The honest prover would respond with the univariate polynomial\
   𝑠3 (𝑋3 ) = 𝑔(2,3,𝑋3 ) = 16 + 2𝑋3 + 3𝑋3 = 16 + 5𝑋3, and the verifier confirms that\
   𝑠3(0) + 𝑠3(1) = 𝑠2(𝑟2), which amounts in this example to confirming that 16 + 21 = 37.
6. The verifier picks a random field element 𝑟3. Suppose that 𝑟3 = 6.\
   The verifier confirms that 𝑠3(6) = 𝑔(2,3,6) by making one oracle query to 𝑔 (i.e., both sides are equal to 46).
