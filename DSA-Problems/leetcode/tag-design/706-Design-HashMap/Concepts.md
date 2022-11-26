# Concepts

### General Hash Map
- Has an array with certain size `M`
- Records entries (keys and values), number of entries is `E`
- Load factor `a = E/M ≤ 1`
### Hash function
`Index relates to h(key)`
- Domain (key) and Range (code) of h is defined
- Hashed values are uniformly distributed
	- Use every imformation in any key

**Schemes**
- Hashing by division
	- `h(key) = key mod M`
	- If M approaches power of two, more collisions will occur.
- Hashing by multiplication
	- C is a constant that 0 < C < 1
	- `h(key) = M * (C * key - ⌊C * key⌋)`

### Collision resolution
- Closed Hashing/Open Addressing
	- Closed - All entries are stored in one array
	- Cost skyrockets when load factor approaches 1
	- |a|![[Pasted image 20221126201507.png]]
- Open Hashing/Seperate Chaining
