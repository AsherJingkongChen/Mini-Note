# Code

### C++

```cpp
template<class Key>
struct MultiHash {
  double operator()(const Key& key) const noexcept {
    return (goldRatio() * key) - std::size_t(goldRatio() * key);
  }

private:
  static constexpr double goldRatio() { return 0.618033988749894; }
};

template<class Key, class Value, Value None>
class HashMap {
public: // definition
  struct Entry { 
    Entry(Key k, Value v): key(k), value(v) {}
    Key key; Value value; 
  };
  using Bucket = std::vector<Entry>;
  using SizeType = std::size_t;
  using Hash = MultiHash<Key>;

private: // data
  SizeType __entryCount;
  std::vector<Bucket> buckets;
  Hash hasher;

public: // properties
	inline SizeType entryCount() const { 
    return __entryCount; 
  }

	inline SizeType bucketCount() const { 
    return buckets.size(); 
  }

	inline double loadFactor() const { 
    return static_cast<double>(entryCount()) / bucketCount(); 
  }

  static constexpr double maxLoadFactor() { return 1.0; }
  static constexpr double minLoadFactor() { return 0.2; }
  static constexpr SizeType defaultBucketCount() { return 64; }

public: // modifier
  void put(const Key& key, const Value& value) {
    tryRehashUp();

    Bucket& bucket = buckets[address(key)];
    auto place = findEntry(bucket, key);

    if (place == bucket.end()) { 
      bucket.emplace_back(key, value); 
      __entryCount += 1;
    
    } else {
      place->value = value;
    }
  }
  
  Value get(const Key& key) {
    Bucket& bucket = buckets[address(key)];
    auto place = findEntry(bucket, key);

    if (place == bucket.end()) { 
      return None;
    
    } else {
      return place->value;
    }
  }
  
  void remove(const Key& key) {
    tryRehashDown();

    Bucket& bucket = buckets[address(key)];
    auto place = findEntry(bucket, key);

    if (place != bucket.end()) { 
      bucket.erase(place);
      __entryCount -= 1;
    }
  }

public: // constructors
  HashMap(): 
    __entryCount(), buckets(defaultBucketCount()) {
// works on some test
    std::ios_base::sync_with_stdio(0); 
    std::cin.tie(0); std::cout.tie(0);
  }

private: // utilities
  typename Bucket::iterator 
  findEntry(Bucket& bucket, const Key& key) const {
    return std::find_if(bucket.begin(), bucket.end(),
                        [&](const Entry& entry) { 
                          return entry.key == key; 
                        });
  }

	SizeType address(const Key& key) const {
    return bucketCount() * hasher(key);
  }

  SizeType address(const Key& key, SizeType bucketCount) const {
    return bucketCount * hasher(key);
  }

  void rehash(SizeType newBucketCount) {
    std::vector<Bucket> newBuckets(newBucketCount);
    for (auto& bucket: buckets) {
      for (auto& entry: bucket) {
        SizeType newAddress = address(entry.key, newBucketCount);
        newBuckets[newAddress].emplace_back(entry.key, entry.value); 
      }
    }
    buckets.swap(newBuckets);
  }

  void tryRehashUp() {
    if (loadFactor() > maxLoadFactor()) {
      rehash(bucketCount() << 1);
    }
  }

  void tryRehashDown() {
    if (loadFactor() < minLoadFactor() && 
        bucketCount() > defaultBucketCount()) {

      rehash(bucketCount() >> 1);
    }
  }
  
};

class MyHashMap: public HashMap<int, int, -1> { 
  using HashMap::HashMap; 
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */
```

----
- [Previous - Logic](./Logic.md)
- [Next - README](./README.md)
- [Return - README](./README.md)