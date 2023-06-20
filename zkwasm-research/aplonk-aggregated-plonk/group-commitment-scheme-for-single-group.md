# Group Commitment Scheme (for single group 𝔾𝟏)

SnarkPack introduces and utilizes a group commitment scheme as follows.

#### Key Generation: ![](<../../.gitbook/assets/Screenshot 2023-05-06 130112 (2).png>)

1. Generate <img src="../../.gitbook/assets/image (52).png" alt="" data-size="line">
2. Calculate the following 𝑛-dimensional vectors:

<figure><img src="../../.gitbook/assets/image (32).png" alt="" width="371"><figcaption></figcaption></figure>

## Commitment:

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

### Properties

It has the following properties:&#x20;

* **Computationally binding:** it guarantees that the sender cannot change the input vector (or the statement) after committing to it, except with negligible probability.
* **Constant size:** the commitment value is independent of the length of the committed input vector.
* **Doubly homomorphic:** both in the message and the key space. More concretely,

<figure><img src="../../.gitbook/assets/image (53).png" alt=""><figcaption></figcaption></figure>

* **Collapsing property:** it allows to calculate

<figure><img src="../../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>
