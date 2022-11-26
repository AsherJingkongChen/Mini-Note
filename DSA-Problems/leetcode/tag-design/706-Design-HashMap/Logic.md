# Logic

### Outline Of Structure
|Key|->|Entry|
|-|-|-|-|-|-|-|-|
|2|–>|(2,v)|
|7|–>|(7,v)|
|3|–>|(3,v)|(11,v)|
| |–>|
|9|–>|(1,v)|(10,v)|(12,v)|(15,v)|(31,v)|(24,v)|
|5|–>|(21,v)|
| |–>|
|4|–>|(52,v)|(54,v)|(55,v)|

- Number of buckets is `M`
- Number of entries is `n`

### Functionality design
```mermaid
classDiagram
	class HashMap~Key, Value, Hash~ {
		- Bucket[] buckets
		- Hash hasher
		- numOfEntries
		
		+ put(Key, Value)
		+ Value get(Key)
		+ remove(Key)
		+ resize(Size)

		+ size()
		+ bucketCount()
		+ loadFactor()
		+ rehash()
		- hash(Key)
	}

	class Hash~Key~ {
		- const GoldRatio
		+ float invoke_operator(Key)
	}

	Bucket --|> std_vector~Pair(Key, Value)~ : Is
	HashMap o-- Bucket : Has
	HashMap o-- Hash : Has
```

### Flow chart
> TODO