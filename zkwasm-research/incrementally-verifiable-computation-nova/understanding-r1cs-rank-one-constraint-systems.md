---
description: Rank-One Constraint Systems, the properties, and its advantages.
---

# Understanding R1CS: Rank-One Constraint Systems

## What is R1CS?&#x20;

R1CS or Rank-One Constraint System, is a mathematical construct used to encode polynomial equations in matrices 𝐴, 𝐵, and 𝐶, where each row of the matrices corresponds to a system of equations of the form:&#x20;

$$
𝐴𝑧 × 𝐵𝑧 = 𝐶𝑧.
$$

, where 𝐴, 𝐵, 𝐶 are matrices with few nonzero entries and the product symbol (×) means that the matrices are multiplied entry-wise. The variables in each equation have a maximum degree of two. Moreover, any bounded computation can be expressed as an R1CS, and the same arithmetic circuits can be represented by different R1CSs.

## Application of R1CS&#x20;

R1CS has numerous applications, including in zero-knowledge proof systems such as zkSNARK constructions. It allows for efficient verification of computations without revealing any sensitive information. Additionally, R1CS can be used in cryptographic protocols for secure communication.

## Limitations of R1CS&#x20;

While R1CS is a powerful tool, it has some limitations. One of the main limitations is that it does not work well with folding schemes. A folding scheme is a cryptographic protocol that allows for the efficient verification of multiple computations with a single proof. However, R1CS is not well-suited for this purpose.

### Overcoming these limitations &#x20;

Folding protocols, which use vector and polynomial commitments, can overcome these limitations and provide efficient verification of multiple computations with a single proof. In the next section, we describe how Folding protocols work and present their advantages.

