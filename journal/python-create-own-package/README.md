# How to create your own python-package

Assuming the following project-structure
```txt
root/
├─ my_package/
│  ├─ __init__.py
│  ├─ functionality.py
├─ testing.py
```

## `my_package/__init__.py`
```py
r"""
here comes the description of the package

eg. functionality and maybe an example code

maybe the license
"""

__author__ = "PlayerG9"  # your name
__copyright__ = "Copyright 2021, PlayerG9"  # your copyright
__credits__ = ["PlayerG9"]  # everyone that helped with this package
__license__ = "MIT"  # license
__version_info__ = (0, 0, 0)  # version-info as tuple (for easy version comparison)
__version__ = '.'.join(str(_) for _ in __version_info__)  # version as string
__maintainer__ = "PlayerG9"  # current maintainer (if the owner changes)
__email__ = None  # maintainer email
__status__ = "Prototype"  # Prototype, Development, Production

# and now the import of important functions, variable or classes from your package
from .functionality import my_function
```

## `my_package/functionality.py`
```py
r"""
a description is always helpful for you file

this way, if the other programmer import this file from your package (from my_package import functionality) and the uses help() on it he get's more information
"""

def my_function():
    print("Hello World")
```

## `testing.py`
```py
import my_package
my_package.my_function()
```


# All Package Attributes for Copy-Paste
```py
__author__ = "NAME"
__copyright__ = "Copyright 2021, NAME"
__credits__ = ["NAME"]
__license__ = "LICENSE"
__version_info__ = (0, 0, 0)
__version__ = '.'.join(str(_) for _ in __version_info__)
__maintainer__ = "NAME"
__email__ = "NAME@provider.com"
__status__ = "Prototype"  # Prototype, Development, Production
```
