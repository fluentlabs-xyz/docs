---
description: The Fundamentals of Nova and Incrementally Verifiable Computation
---

# High-level Overview of Nova

Nova is another technique for Incrementally Verifiable Computation (IVC) that uses a cryptographic primitive called a Folding scheme. In simple terms, it is a proving system that uses Folding schemes and [KZG polynomial commitments](vector-and-kzg-polynomial-commitments.md#what-are-kzg-polynomial-commitments) to achieve IVC, which allows proving that a function 𝐹 was repeatedly applied to some initial state 𝑧, producing a sequence of states 𝑧, 𝐹(𝑧), 𝐹(𝐹(𝑧)), etc.

This section will provide a high-level description of the Nova technique and how it works.

### Incrementally Verifiable Computation (IVC)

To understand Nova better, it is essential to understand IVC. IVC is a technique that allows proving that a function was repeatedly applied to some initial state, producing a sequence of states. The primary goal of IVC is to combine two cases of a given NP problem into one case.

## How Nova Works

Nova takes incremental computations, where each step is an [R1CS](understanding-r1cs-rank-one-constraint-systems.md#what-is-r1cs); the constraint system includes a verification circuit, which has to check the correctness of the execution of the last step. However, instead of verifying the proof <img src="../../.gitbook/assets/Screenshot 2023-04-25 213940 (1).png" alt="" data-size="line">, Nova sees it as an R1CS case and folds it into a current relaxed R1CS. To do this, we have to modify the R1CS to add an error term 𝐸 and a scalar 𝑢 to get a relaxed R1CS, which we can use to make an efficient folding scheme:

<figure><img src="../../.gitbook/assets/image (14) (1).png" alt=""><figcaption></figcaption></figure>

If 𝐸 is the zero vector and 𝑢 = 1, then we have 𝐴𝑧 × 𝐵𝑧 = 𝐶𝑧. Namely, any R1CS can also be seen as a relaxed R1CS. Relaxed R1CS keeps the property that it is NP-complete, which means that we can change any NP problem to it. We want the folding scheme to combine two cases of R1CS with the same matrices 𝐴, 𝐵, 𝐶 into one case. Each R1CS has its own instance-witness pairs (that is, public and private data), 𝑧𝑖 = (𝑤𝑖 , 𝑥𝑖), and we want to make a new 𝑧 = (𝑤, 𝑥) that meets the R1CS system of equations with 𝐴, 𝐵, 𝐶, such that this also means that each 𝑧𝑖 = (𝑤𝑖 , 𝑥𝑖) does so. One way to do this is by having the verifier pick a random 𝑟 and do the following change:

<figure><img src="../../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

This change would work for linear systems of equations, however since the R1CS is nonlinear, we cannot use this simple method. If we put this into the R1CS then we have the following:

<figure><img src="../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>

In the relaxed R1CS, the error term 𝐸 will take all the cross-terms made by adding the linear combination, and 𝑢 will take the extra 𝑟 term on the right-hand side. To do this,

<figure><img src="../../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

and both 𝑢, 𝐸 are added to the instance-witness pair.

The main problem is that the prover has to send the witnesses 𝑤1, 𝑤2 to the verifier so that he can calculate 𝐸. To do this, we see both 𝐸 and 𝑤 as witnesses and hide them using polynomial commitment schemes.
