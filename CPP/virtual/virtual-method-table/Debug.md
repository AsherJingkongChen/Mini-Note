# The way to debug vtables
> Let the compiler to tell you the imformation

*(Note: Compiled by Homebrew GCC 12.2.0 on MACOSX)*

### -fdump-lang-class & c++filt

1. Use the command `g++ -std=c++11 -fdump-lang-class test.cpp -o _` to compile
2. A file named `_-test.cpp.001l.class` will be created in the current directory, it contains all class information the source code includes
3. Use gcc's tool `c++filt`, to demangle the names in the `*.001l.class` file. Usage: `cat _-test.cpp.001l.class | c++filt -n`
4. The information will be printed out to the console via stdout

### Workflow
```bash
g++ -std=c++11 -fdump-lang-class test.cpp -o _
cat _-test.cpp.001l.class | c++filt -n
```

----
- [Previous - README](./README.md)
- [Next - Discovery](./Discovery.md)
- [Return - README](./README.md)