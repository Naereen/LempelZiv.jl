#!/usr/bin/env julia
using LempelZiv
using Test

println("\nTesting Lempel-Ziv algorithm...")

@testset "Lempel-Ziv complexity algorithm" begin
    @test 8 == lempel_ziv_complexity("1001111011000010")
    @test 9 == lempel_ziv_complexity("1001111011000010000010")
    @test 10 == lempel_ziv_complexity("100111101100001000001010")
end
