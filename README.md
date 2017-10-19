# Julia implementation of Lempel-Ziv Complexity

This repository contains a small, simple and efficient implementation of the [Lempel-Ziv complexity](https://en.wikipedia.org/wiki/LempelZiv.jl) algorithm.

## Examples
### Simple usage
If the [`LempelZiv.jl`](src/LempelZiv.jl) file is accessible in your PATH or in Julia's path:

```julia
julia> import LempelZiv
julia> s = "1001111011000010"
julia> LempelZiv.lempel_ziv_complexity(s)  # 1 / 0 / 01 / 1110 / 1100 / 0010
6
```

### Documentation
See [this file](https://naereen.github.io/LempelZiv.jl/docs/index.html).

> The documentation is generated with [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl) but I don't master it very well yet.
> Sorry if the documentation is incomplete!

- Reference: [this short lecture note by Peter Shor (Oct.2005)](https://math.mit.edu/~shor/PAM/lempel_ziv_notes.pdf).

## Demo on a [Jupyter notebook](https://www.Jupyter.org/)
See this notebook: [on nbviewever](https://nbviewer.jupyter.org/github/Naereen/LempelZiv.jl/blob/master/Short_study_of_the_Lempel-Ziv_Complexity.ipynb), which also shows the [Python implementations](https://github.com/Naereen/Lempel-Ziv_Complexity).

----

## Install and build
### Manually ?
Easy!

Clone this repository, go in the folder, test, and if it works, use the [src/LempelZiv.jl](src/LempelZiv.jl) file.

```bash
$ cd /tmp/
$ git clone https://GitHub.com/Naereen/LempelZiv.jl
$ cd LempelZiv.jl/src/
$ julia LempelZiv.jl test     # should pass
$ # use this file if you want
```

## With Pkg ?
This project [is hosted](https://github.com/Naereen/LempelZiv.jl/issues/1) on [the METADATA.jl package repository](https://pkg.julialang.org/LempelZiv.jl/).

```bash
$ julia
julia> Pkg.install("LempelZiv")  # should work
# now test it
$ julia -E "import LempelZiv; 6 == LempelZiv.lempel_ziv_complexity(\"1001111011000010\")"  # test
```

----

## Python implementation ?

The Python :snake: package is published here: [Naereen/Lempel-Ziv_Complexity](https://github.com/Naereen/Lempel-Ziv_Complexity),
and see [here for its documentation](https://naereen.github.io/Lempel-Ziv_Complexity/docs/index.html).

[![lempel_ziv_complexity in pypi](https://img.shields.io/pypi/v/lempel_ziv_complexity.svg)](https://pypi.org/project/LempelZiv.jl/)
![PyPI implementation](https://img.shields.io/pypi/implementation/lempel_ziv_complexity.svg)
![PyPI pyversions](https://img.shields.io/pypi/pyversions/lempel_ziv_complexity.svg)

----

## About
### Language?
[Julia](https://www.julialang.org/) version 0.5 at least.

### :scroll: License ? [![GitHub license](https://img.shields.io/github/license/Naereen/LempelZiv.jl.svg)](https://github.com/Naereen/badges/blob/master/LICENSE)
[MIT Licensed](https://lbesson.mit-license.org/) (file [LICENSE](LICENSE)).
© [Lilian Besson](https://GitHub.com/Naereen), 2017.

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/LempelZiv.jl/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![Analytics](https://ga-beacon.appspot.com/UA-38514290-17/github.com/Naereen/LempelZiv.jl/README.md?pixel)](https://GitHub.com/Naereen/LempelZiv.jl/)

[![made-for-julia](https://img.shields.io/badge/Made%20for-Julia-1abc9c.svg)](https://www.julialang.org/)
[![ForTheBadge uses-badges](http://ForTheBadge.com/images/badges/uses-badges.svg)](http://ForTheBadge.com)
[![ForTheBadge uses-git](http://ForTheBadge.com/images/badges/uses-git.svg)](https://GitHub.com/)
[![ForTheBadge built-with-science](http://ForTheBadge.com/images/badges/built-with-science.svg)](https://GitHub.com/Naereen/)
