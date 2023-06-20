# Informal Definition of the Sumcheck protocol

Let 𝔽 be a finite field and a subset ℍ ⊑ 𝔽. Let also 𝑃 be the prover with unbounded computational power and 𝑉 be the verifier with limited computational power, and 𝑓 be an 𝑛-variable polynomial 𝑓: 𝔽 𝑛 → 𝔽 which has a degree 𝑑 where 𝑑 ≪ |𝔽|. Then, 𝑃 wants to convince the verifier 𝑉 such that:

<figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

where 𝑠 is constant (𝑠 ∈ 𝔽). The protocol is denoted as (𝑃(𝑓), 𝑉 𝑓 (𝑠)).

More concretely, in this protocol, there are 𝑛 rounds, corresponding to the number of variables in polynomial 𝑓. During each round, the prover transmits a degree two univariate polynomials to the verifier. To represent 𝑓𝑖 , the prover can use only three field elements, either by sending its coefficients or its evaluations at three designated inputs in 𝔽. The verifier performs simple randomized consistency checks on each message 𝑓𝑖 by evaluating it at a few inputs and ensuring that the results are consistent with previous messages. The verifier can process each message sent by the prover in 𝑂(1) time, and at the end of the protocol, the verifier needs to evaluate 𝑓 at a single point. Throughout the process, it is assumed that any addition or multiplication operation in 𝐹 takes 𝑂(1) time. More formally, the protocol works as follow:

1. The prover 𝑃 prepares the function 𝑓1 (𝑥) = 𝑔(𝑥, 𝑧2, … , 𝑧𝑛 ) and sends it to the verifier 𝑉.
2. 𝑉 checks ∑ 𝑓1 𝑣∈ℍ (𝑣) = 𝑠.
3. 𝑉 randomly selects a number 𝑟1 (∈ 𝔽) and sends it to the prover.
4. 𝑃 replace 𝑥1 with random 𝑟1 and free 𝑧2 by variable 𝑥, then we get 𝑓2(𝑥) = 𝑔(𝑟1, 𝑥, 𝑧3, … , 𝑧𝑛).
5. Repeat Step 1 to 4 with 𝑠 = 𝑓𝑖(𝑟𝑖).
6. When 𝑖 = 𝑛, the equality of 𝑓(𝑟1, 𝑟2, 𝑟3, … , 𝑟𝑛 ) = 𝑓𝑛(𝑟𝑛) is also checked.

The protocol will be successful if all checks are passed.
