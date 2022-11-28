# Discovery (or example)
> What's the result should be like?

### Code to be compiled

```cpp
struct EntireVirtualBase { 
	virtual void notPureAndBeOverridden() {}
	virtual void Pure() = 0;
	virtual void notBeOverridden() {}
};

struct Derived: EntireVirtualBase { 
	void notPureAndBeOverridden() override {}
	void Pure() override {}
	virtual void unusedVirtualInDerived() {}
	void unusedNonVirtual() {}
};

int main() {
	delete new Derived;
}
```

### Result (Class information)

```cpp
Vtable for EntireVirtualBase
EntireVirtualBase::vtable for EntireVirtualBase: 5 entries
0     (int (*)(...))0
8     (int (*)(...))(& typeinfo for EntireVirtualBase)
16    (int (*)(...))EntireVirtualBase::notPureAndBeOverridden
24    (int (*)(...))__cxa_pure_virtual
32    (int (*)(...))EntireVirtualBase::notBeOverridden

Class EntireVirtualBase
   size=8 align=8
   base size=8 base align=8
EntireVirtualBase (0x0x1105af3c0) 0 nearly-empty
    vptr=((& EntireVirtualBase::vtable for EntireVirtualBase) + 16)

Vtable for Derived
Derived::vtable for Derived: 6 entries
0     (int (*)(...))0
8     (int (*)(...))(& typeinfo for Derived)
16    (int (*)(...))Derived::notPureAndBeOverridden
24    (int (*)(...))Derived::Pure
32    (int (*)(...))EntireVirtualBase::notBeOverridden
40    (int (*)(...))Derived::unusedVirtualInDerived

Class Derived
   size=8 align=8
   base size=8 base align=8
Derived (0x0x110466208) 0 nearly-empty
    vptr=((& Derived::vtable for Derived) + 16)
EntireVirtualBase (0x0x1105af5a0) 0 nearly-empty
      primary-for Derived (0x0x110466208)
```


### Comparison

1. `virtual notPureAndBeOverridden()` - **Override**
	- In base class: `EntireVirtualBase::notPureAndBeOverridden`
	- In derived class: `Derived::notPureAndBeOverridden`
2. `virtual Pure()` - **Defined in derived class**
	- In base class: `__cxa_pure_virtual`
	- In derived class: `Derived::Pure`
3. `virtual notBeOverridden()` - **Defined in base class**
	- In base class: `EntireVirtualBase::notBeOverridden`
	- In derived class: `EntireVirtualBase::notBeOverridden`
4. `virtual unusedVirtualInDerived()`
	- It exists in the Vtable of derived class
5. `unusedNonVirtual()`
	- It does not exist in the Vtable of derived class

### Conclusion

1. A class overriding or declaring virtual functions needs a virtual pointer `(pointer size is 8 on MACOSX)` to access its Vtable
2. Either overridden or non-overridden virtual functions are recorded in the Vtable of derived class, but non-virtual functions are not
3. Pure virtual function has no name in the base class, and derived class must define it

----
[Previous - Debug](./Debug.md)
[Next - README](./README.md)
[Return - README](./README.md)