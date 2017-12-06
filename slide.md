
### Optimal system architecture in NFV

- Hiroki SHIROKURA
- slank.dev@gmail.com

---

### Outline

- **Motivations & Contribution**
- Background
- System Design
- Evaluation
- Conclusion & Future Work

----

### High Performance Networking

- Line Rate High Performance Networking w/t COTS
  - DPDK/Netmap/XDP
- Flexible Hardware
  - FPGA/P4 asic

Virtualization Environment is standard now.
Today, HPN w/t DPDK is not introduction to NW.

----

### Network Functions Virtualization (NFV)

![](https://i.imgur.com/TUWs52o.png)

----

### Service Function Chaining

![](https://i.imgur.com/ELUp37K.png)

----

### Virtualization Overhead

![](https://i.imgur.com/5mRkxrf.png)

---

### Outline

- Motivations & Contribution
- **Background**
- System Design
- Evaluation
- Conclusion & Future Work

----

### Background

- NFVが次世代スタンダードになり, DPDKは良い
- 仮想化環境(KVM/Docker)を用いてVNFをデプロイする
- 仮想化環境オーバヘッドがあり, ベアメタルの性能の差
- DPDKのシステム構成は多様
- 仮想化を用いるともっと多様 <-- 本研究
  - 仮想化手法
  - 仮想NIC
  - サービスチェイン方式

----

### Data Plane Development Kit (DPDK)

![](https://i.imgur.com/jwq73b0.png)

---

### Outline

- Motivations & Contribution
- Background
- **System Design**
- Evaluation
- Conclusion & Future Work

----

### System Design

![](https://i.imgur.com/VBJfQ8m.png)

----

### System Design

- Compute:
  - VM
  - Container
  - Baremetal
- vNIC:
  - PCI-passthrough
  - PCI-passthrough SR-IOV
  - virtio
- Service-chain:
  - SR-IOV
  - OvS
  - OvS-dpdk

----

### Computing



| Column 1  | Column 2 |
| --------  | -------- |
| VM        | KVM      |
| Container | Docker   |
| Baremetal | Process  |

----

### vNIC

- PCI-passthrough
  - normal
  - SR-IOV
- vNIC
  - vhost-net
  - vhost-user
  - e1000, igb

----

### Service Chain

- SR-IOV
- OvS
- OvS-dpdk
- Original

---

### Outline

- Motivations & Contribution
- Background
- System Design
- **Evaluation**
- Conclusion & Future Work

----

### Experiment

- prepare
  - compare basic elements
- NFV Experiment
  - 3-10 nf chaining

----

![](https://i.imgur.com/GhRTMFD.png)

---

### Outline

- Motivations & Contribution
- Background
- System Design
- Evaluation
- **Conclusion & Future Work**

----

### 最後に

- n(>1)個を両立させるのが大変だと理解
- エナジードリンクとかチョコレートとか買ってください
- 40GbE-NICでもいいので買ってください








