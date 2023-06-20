---
description: Verifier circuit, speed, cost, memory usage and more.
---

# Advantages of Nova

1. The verifier circuit is simple, with only about 20,000 constraints.
2. It does not need to do expensive FFT calculations, therefore any elliptic curve can work.
   * The only requirement is that it is sufficiently secure (that is, the DLP must be hard).
3. The verification does not use elliptic curve pairings, therefore costly operations and special curves are not needed anymore.
4. Nova's memory usage is minimal, which is highly beneficial when dealing with large circuits. In contrast, Circom and Halo2 require a considerable SRS and may encounter memory issues. This advantage of Nova is particularly significant in low-memory environments.
5. The distinction between R1CS and Plonkish is of great significance. In the case of Halo2 (KZG) with recursive hashing for d=1, Plonkish with lookup tables enables a much faster prover time than R1CS. This has motivated the exploration of alternative folding schemes, including Sangria.
6. Consider the trade-off between constraints and recursive overhead. In the case of SHA256 with d=1, the number of constraints (\~30,000) is not significant enough compared to the recursive overhead (\~10,000) to yield substantial performance improvements. However, as we increase to d=10 and d=100, Nova begins to outperform Halo2 (KZG). This suggests that we should use relatively large circuits for Nova folding.
7. In the case of large circuits, Nova appears to outperform Halo2 (KZG) in terms of speed. Our observations indicate that despite imperfect parallelization, we achieve an improvement of approximately 75% over Halo2 for 10,000 recursive hashes.

