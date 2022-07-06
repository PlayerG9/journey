# How to use `react-router` together with `gh-pages`

after your build, either copy the file or create a symlink from `index.html` to `404.html`.

> Create Symlink (recommended)  
> `ln -sr build.index.html build/404.html`

> Copy-Command (not recommended)  
> `cp build/index.html build/404.html`

## why does this work

github-pages serves static-pages, that means when someone visites your gh-pages it attempts to serve the corrosponding file.

eg. `https://playerg9.github.io/journey` is equivalent to `https://playerg9.github.io/journey/index.html` and would server the `index.html`.

But if you use `react-router` the url get's manipulated and after an page-reload the url looks eg like this
`https://playerg9.github.io/journey/about`
but there is no file called `about` (because everything runs over `index.html`) and gh-pages either loads the `404.html` file (if present) or the gh-pages-404-page.

By linking or copying the `index.html` to `404.html` they are both the same.
That means if gh-pages is unable to find the file for `https://playerg9.github.io/journey/about` it serves the 404-page (`404.html`) which redirects to `index.html` which is your react-app.
