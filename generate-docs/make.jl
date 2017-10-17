using Documenter
using LempelZiv

makedocs(
    format = :html,
    sitename = "LempelZiv.jl",
    pages = [
        "index.md",
        "About" => "README.md"
    ]
)
