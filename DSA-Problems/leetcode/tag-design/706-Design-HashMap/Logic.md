# Logic

### Outline Of Structure
|Key|->|Entry| | | | | |
|-|-|-|-|-|-|-|-|
|2|–>|(2,v)| | | | | |
|7|–>|(7,v)| | | | | |
|3|–>|(3,v)|(11,v)| | | | |
| |–>| | | | | | |
|9|–>|(1,v)|(10,v)|(12,v)|(15,v)|(31,v)|(24,v)|
|5|–>|(21,v)| | | | | |
| |–>| | | | | | |
|4|–>|(52,v)|(54,v)|(55,v)| | | |

### Refactor
- Number of buckets is `M`
	- `bucketCount()`
- Number of entries is `n`
	- `numOfEntries, size()`
- Load factor `A = n / M ≤ 1` 
	- `loadFactor() = size() / bucketCount() <= maxLoadFactor()`
	- when `loadFactor()` passes `maxLoadFactor()`, do rehashing

### Functionality design
```mermaid
classDiagram
	class HashMap~Key, Value~ {
		- SizeType numOfEntries
		- std_vector~Bucket~ buckets
		- Hash hasher
		
		+ put(Key, Value)
		+ ValueType get(Key)
		+ remove(Key)
		+ rehash(SizeType)
		- autoRehash()
		
		+ SizeType size()
		+ SizeType bucketCount()
		+ double loadFactor()
		+ double maxLoadFactor()
		
		- SizeType hashedKey(Key)
	}

	class MultiHash~Key~ {
		- GoldRatio$
		+ double invoke_operator(Key)
	}

	Bucket --|> std_vector~Pair(Key, Value)~ : as
	Hash --|> MultiHash : as
	SizeType --|> std_size_t : as
	MyHashMap --|> HashMap : is
	HashMap o-- Bucket : use
	HashMap o-- Hash : use
	HashMap o-- SizeType : use
```

### Flow chart
> TODO


----
[Return README](./README.md)