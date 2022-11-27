# Decision

### Array of buckets size
- power of `2` is simple and efficient for a dynamic array

### Hash function scheme

##### "Hashing by multiplication"
> Compared to Hashing by division
- Pros
	- Any size of the array of buckets is allowed, e.g. power of 2
	- Uniformly distributed
- Cons
	- Slightly slower than division
	- More collisions
- References
	-  [Fibonacci Hashing](https://iq.opengenus.org/fibonacci-hashing/)

### Collision resolution scheme

##### "Open hashing"
> Compared to Closed hashing
- Pros
	- Less efforts on handling probing
	- Less sensitive to the load factor
- Cons
	- More cache misses occur during referencing buckets

----
- [Go to previous - Concept](./Concept.md)
- [Go to next - Logic](./Logic.md)
- [Return home - README](./README.md)
