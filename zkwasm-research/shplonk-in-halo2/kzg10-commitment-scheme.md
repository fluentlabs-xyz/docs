---
description: Background on KZG10 Commitment Scheme
---

# KZG10 Commitment Scheme

We will focus on the KZG commitment scheme \[KZG10] that is used in Plonk, although there are some other similar ones: Structured Reference String (SRS):

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

where 𝜏 is a randomly selected value that must be kept secret. We could also add more 𝜏 powers to the second group, however we do not need them for our purpose. For a polynomial 𝑃(𝑡) its KZG commitment is defined as:

<figure><img src="../../.gitbook/assets/image (54).png" alt=""><figcaption></figcaption></figure>

Next, we want to explain how to “reveal” a commitment - that is, show that a polynomial that we committed to has the value y at the point 𝑥 for some elements 𝑥, 𝑦 in the field. This is done as follows:

1. The prover computes <img src="../../.gitbook/assets/image (29).png" alt="" data-size="line"> and sends commitment to it.&#x20;
2. Next the verifier checks: <img src="../../.gitbook/assets/image (17).png" alt="" data-size="line">
3. Let’s put it in a slightly simpler form and using the bilinearity form we can write as:

<figure><img src="../../.gitbook/assets/image (55).png" alt=""><figcaption></figcaption></figure>

This is a very convenient way of representing the check, because you can notice that in these equations the right term in the pairing is always constant (𝐻0 and 𝐻1 respectively), which means that we can, potentially, batch these equations together. Namely, if we had multiple such equations, for multiple polynomials, we could add them up with random coefficients and only then check. Moreover, this addition would be only cheap 𝐺1 operations.&#x20;

We can see that in these equations the term on the right of the pairing is always the same (𝐻0 and 𝐻1 respectively). This means that we can batch these equations together.
