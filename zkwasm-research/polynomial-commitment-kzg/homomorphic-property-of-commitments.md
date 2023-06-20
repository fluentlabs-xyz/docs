# Homomorphic Property of Commitments

Homomorphic commitment is a property of certain types of commitment schemes that allow for mathematical operations to be performed on the commitments in such a way that the result of the operation on the commitments is the commitment to the result of the same operation performed on the original values. In other words, if we have two values $$a$$ and $$b$$, and their corresponding commitments $$Com(a)$$ and $$Com(b)$$, and we perform some mathematical operation on $$a$$ and $$b$$ to get $$c$$ (e.g., $$c$$ = $$a$$ + $$b$$), then we can compute a new commitment $$Com(c)$$ to $$c$$ by applying the same operation on the commitments $$Com(a)$$ and $$Com(b)$$.

Formally, a commitment scheme is said to have homomorphic property if:

$$
Com(a+b) = Com(a)  * Com(b)
$$

This means that given commitments to two values $$a$$ and $$b$$, we can calculate a commitment to their sum ($$a$$ + $$b$$) by multiplying their commitments together. Similarly, homomorphic commitment schemes have also applications in many areas of cryptography, including ZK proofs, secure multiparty computation (MPC), and verifiable computation. Namely, they allow computations to be performed on encrypted data, without revealing the data itself.
