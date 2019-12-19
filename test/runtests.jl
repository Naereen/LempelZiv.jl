#!/usr/bin/env julia
"""Lempel-Ziv complexity for a binary sequence, in naive Julia code.

- How to use it? From Julia, it's easy:

julia> using LempelZiv
julia> s = "1001111011000010"
julia> LempelZiv.lempel_ziv_complexity(s)    # 1 / 0 / 01 / 11 / 10 / 110 / 00 / 010
8


- Note: there is also a Python version, if you need.

- MIT Licensed, (C) 2017 Lilian Besson (Naereen)
  https://GitHub.com/Naereen/LempelZiv.jl
"""

__author__ = "Lilian Besson (Naereen)"
__version__ = "0.0.2"

using LempelZiv
using Base.Test

# write your own tests here
@test 8 == lempel_ziv_complexity("1001111011000010")
