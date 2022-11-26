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

Buffer Size = `M`
Max bucket size = `B`
Number of keys < `N` = `B * M`

### Pseudocode
**Hash Function**
```cpp
Float goldRatio = 0.6180339;

SizeType hash(SizeType bufferSize, Number key) {
	return bufferSize * 
	
}
```