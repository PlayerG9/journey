# Cheat-Sheet for Python

## recommended python-file
always start your file with the shebang
```py
#!/usr/bin/python3
```
followed by the file-encoding
```py
# -*- coding: utf-8 -*-
```
if the script should be runnable then you you should add a `main()`. That makes it possible to start your script in different ways
(eg. import and then a thread)
```py
def main():
    print("Hello World")
```
in the end you should add the `if-main` statement where you either call your `main()` or where you test some functionality of your file.
The code within this if-statement is **only** executed if you directly run this file.
```py
if __name__ == '__main__':
    main()

if __name__ == '__main__':
    function_in_this_file()
```
in the end your file should look something like this
```py
#!/usr/bin/python3
# -*- coding: utf-8 -*-


def main():
    print("Hello World")


if __name__ == '__main__':
    main()
```

## how to create a package
by creating a `__init__.py` in a directory you are able to import it.
<sub>note: by importing anything from this package the code in `__init__.py` is always executed</sub>
```txt
my_package/
├─ __init__.py
```
```py
import my_package

...
```

## how to execute a directory
by creating a `__main__.py` in a directory you are able to start the directory just like a python script.
```txt
my_directory/
├─ __main__.py
```
```console
playerg9@PC:~$ python3 my_directory
```
