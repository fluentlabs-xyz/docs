# Bilinear Pairing Property of Commitments

Bilinear pairing combines two elements from different groups and returns a result in a third group. Specifically, let <img src="../../.gitbook/assets/image (39).png" alt="" data-size="line">be three cyclic groups of prime order p, and let g be a generator of <img src="../../.gitbook/assets/image (21).png" alt="" data-size="line"> A bilinear pairing is a map e: <img src="../../.gitbook/assets/image (70).png" alt="" data-size="line"> that satisfies the following properties:

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Pairings are also used in zkSNARKs primarily for their ability to enhance homomorphic commitments to make our homomorphic commitments even more powerful, enabling us to perform a range of operations:

$$
Com(f(x)) = Com(t(x)) Com(h(x)) = Com(t(x) h(x))
$$
