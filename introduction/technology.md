---
description: High-Level Wasm(0) Workflow
---

# Technology

Wasm(0) utilizes the Halo 2 framework in order to represent its backend circuits, such as VM, RAM, transaction, signature, and public input circuits. Each element in WASM is represented either 32-bit or 64-bit and then is adapted to use the word encoding of Wasm(0) for both types.&#x20;

Other optimizations, such as lookup tables, and SNARK-friendly hash functions (such as Poseidon or Sinsemilla), are also applied. Some circuits may depend on the execution of other circuits, however, this dependency is being resolved by using Bus Mapping that stores the execution(s) in a key-value fashion.&#x20;

Since several circuits are constructed during the proof generation, the circuit proofs are aggregated to produce a small-sized proof and make the verification much less costly on the Layer 1 chain.

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FFC1DMiUuayu0DbwfgkH0%2Fuploads%2FdbsWh3fHsggEVWmG1sJp%2FR%20(1).png?alt=media&#x26;token=c7fc56bf-6b2c-4a1d-bd4d-e70b318634b2" alt=""><figcaption><p>Wasm(0) Workflow</p></figcaption></figure>
