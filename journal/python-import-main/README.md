# Problem with `import main`

## Problem

`main.py`
```py
print("Main is run")

my_list = []

if __name__ == '__main__':
	my_list.append("Hello World")

import module
```
`module.py`
```py
from main import my_list

print(my_list)
```

```terminal
user@pc:~$ python3 main.py
Main is run
Main is run
[]
```

## but why?

## Solution

`main.py`
```
import sys
sys.modules['main'] = sys.modules['__main__']
...
```
