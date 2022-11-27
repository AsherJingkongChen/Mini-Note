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
	- `entryCount()`
- Load factor `A = n / M` 
	- `loadFactor() = entryCount() / bucketCount()`
	- when `loadFactor() > maxLoadFactor()`, call rehash to double size up
	- when `loadFactor() < minLoadFactor()`, call rehash to halve size down

### Functionality design
```mermaid
classDiagram
	class HashMap~Key, Value, Value None~ {
		- SizeType __entryCount
		- std::vector~Bucket~ buckets
		- Hash hasher
		
		+ put(Key, Value)
		+ ValueType get(Key)
		+ remove(Key)
		
		+ SizeType entryCount()
		+ SizeType bucketCount()
		+ double loadFactor()
		+ double maxLoadFactor()
		+ double minLoadFactor()
		+ SizeType defaultBucketCount()

		- Bucket::iterator findEntry(Bucket, Key)
		- SizeType address(Key)
		- rehash(SizeType)
		- tryRehashUp()
		- tryRehashDown()
	}

	class MultiHash~Key~ {
		- GoldRatio$
		+ double invoke_operator(Key)
	}
	
	class Entry {
		+ key
		+ value
	}

	Bucket --|> std_vector~Entry~ : as
	std_vector~Entry~ o-- Entry : use
	Hash --|> MultiHash : as
	SizeType --|> std_size_t : as
	MyHashMap --|> HashMap : is
	HashMap o-- Bucket : use
	HashMap o-- Hash : use
	HashMap o-- SizeType : use
```

### Flow chart

##### put(Key, Value)
```mermaid
graph TD
	FIND("findEntry(Bucket, Key)")
	ADDR("address(Key)")
	
	subgraph "put(Key, Value)"
		ADDR -->|Bucket| FIND
		FIND -->|Entry| COND{"Found or not"}
		COND -->|True| T_val("Entry.value = value")
		COND -->|False| T_new("Bucket.emplace_back(key, value)")
	end
```

##### get(Key)
```mermaid
graph TD
	FIND("findEntry(Bucket, Key)")
	ADDR("address(Key)")
	
	subgraph "get(Key)"
		ADDR -->|Bucket| FIND
		FIND -->|Entry| COND{"Found or not"}
		COND -->|True| T_val("return Entry.value")
		COND -->|False| T_new("return None")
	end
```

##### remove(Key)
```mermaid
graph TD
	FIND("findEntry(Bucket, Key)")
	ADDR("address(Key)")
	
	subgraph "remove(Key)"
		ADDR -->|Bucket| FIND
		FIND -->|Entry| COND{"Found or not"}
		COND -->|True| T_val("Bucket.erase(Entry)")
		COND -->|False| T_new(" ")
	end
```

----
- [Previous - Decision](./Decision.md)
- [Next - Code](./Code.md)
- [Return - README](./README.md)