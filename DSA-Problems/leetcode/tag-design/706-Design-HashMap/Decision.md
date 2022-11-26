# Decision

### Array of buckets size
- power of `2` is easy and efficient for a dynamic array

### Hash function scheme

###### Hashing by multiplication
> Compared to Hashing by division
- Pros
	- Any size of the array of buckets is allowed
	- Uniformly distributed
	- Make a good use of memory
- Cons
	- Slightly slower than division
	- More collisions
- References
	-  [Fibonacci Hashing](https://iq.opengenus.org/fibonacci-hashing/)

### Collision resolution scheme

###### Open hashing
> Compared to Closed hashing
- Pros
	- Less efforts on handling probing
- Cons
	- More cache misses due to referencing buckets
	- Higher complexity, depends on the bucket size

----
[Return README](./README.md)
