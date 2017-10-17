var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Documentation",
    "title": "Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Documentation-1",
    "page": "Documentation",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#LempelZiv.lempel_ziv_complexity-Tuple{Any}",
    "page": "Documentation",
    "title": "LempelZiv.lempel_ziv_complexity",
    "category": "Method",
    "text": "lempel_ziv_complexity(binary_sequence)\n\nReturns the Lempel-Ziv complexity for a binary sequence, in naive Julia code.\n\nHow to use it? From Julia, it's easy:\n\njulia> using LempelZiv\njulia> s = \"1001111011000010\"\njulia> LempelZiv.lempel_ziv_complexity(s)  # 1 / 0 / 01 / 1110 / 1100 / 0010\n6\n\nMIT Licensed (C) 2017 Lilian Besson (Naereen) See Naereen/LempelZiv.jl\n\n\n\n"
},

{
    "location": "index.html#Functions-1",
    "page": "Documentation",
    "title": "Functions",
    "category": "section",
    "text": "lempel_ziv_complexity(binary_sequence)"
},

{
    "location": "index.html#Index-1",
    "page": "Documentation",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "README.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "README.html#Julia-implementation-of-Lempel-Ziv-Complexity-1",
    "page": "About",
    "title": "Julia implementation of Lempel-Ziv Complexity",
    "category": "section",
    "text": "This repository contains a small, simple and efficient implementation of the Lempel-Ziv complexity algorithm."
},

{
    "location": "README.html#Examples-1",
    "page": "About",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "README.html#Simple-usage-1",
    "page": "About",
    "title": "Simple usage",
    "category": "section",
    "text": "If the LempelZiv.jl file is accessible in your PATH or in Julia's path:julia> import LempelZiv\njulia> s = \"1001111011000010\"\njulia> LempelZiv.lempel_ziv_complexity(s)  # 1 / 0 / 01 / 1110 / 1100 / 0010\n6"
},

{
    "location": "README.html#Documentation-1",
    "page": "About",
    "title": "Documentation",
    "category": "section",
    "text": "See this file."
},

{
    "location": "README.html#Demo-on-a-[Jupyter-notebook](https://www.Jupyter.org/)-1",
    "page": "About",
    "title": "Demo on a Jupyter notebook",
    "category": "section",
    "text": "See this notebook: on nbviewever, which also shows the Python implementations."
},

{
    "location": "README.html#Install-and-build-1",
    "page": "About",
    "title": "Install and build",
    "category": "section",
    "text": ""
},

{
    "location": "README.html#Manually-?-1",
    "page": "About",
    "title": "Manually ?",
    "category": "section",
    "text": "Easy!Clone this repository, go in the folder, test, and if it works, use the src/LempelZiv.jl file.$ cd /tmp/\n$ git clone https://GitHub.com/Naereen/LempelZiv.jl\n$ cd LempelZiv.jl/src/\n$ julia LempelZiv.jl test     # should pass\n$ # use this file if you want"
},

{
    "location": "README.html#With-Pkg-?-1",
    "page": "About",
    "title": "With Pkg ?",
    "category": "section",
    "text": "This project is hosted on the METADATA.jl package repository.$ julia\njulia> Pkg.install(\"LempelZiv\")  # should work\n# now test it\n$ julia -E \"import LempelZiv; 6 == LempelZiv.lempel_ziv_complexity(\\\"1001111011000010\\\")\"  # test"
},

{
    "location": "README.html#Python-implementation-?-1",
    "page": "About",
    "title": "Python implementation ?",
    "category": "section",
    "text": "The Python :snake: package is published here: Naereen/Lempel-Ziv_Complexity, and see here for its documentation.(Image: lempel_ziv_complexity in pypi) (Image: PyPI implementation) (Image: PyPI pyversions)"
},

{
    "location": "README.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": ""
},

{
    "location": "README.html#Language?-1",
    "page": "About",
    "title": "Language?",
    "category": "section",
    "text": "Julia version 0.5 at least."
},

{
    "location": "README.html#:scroll:-License-?-[![GitHub-license](https://img.shields.io/github/license/Naereen/LempelZiv.jl.svg)](https://github.com/Naereen/badges/blob/master/LICENSE)-1",
    "page": "About",
    "title": ":scroll: License ? (Image: GitHub license)",
    "category": "section",
    "text": "MIT Licensed (file LICENSE). © Lilian Besson, 2017.(Image: Maintenance) (Image: Ask Me Anything !) (Image: Analytics)(Image: ForTheBadge uses-badges) (Image: ForTheBadge uses-git)(Image: forthebadge made-with-julia) (Image: ForTheBadge built-with-science)"
},

]}
