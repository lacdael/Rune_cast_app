
Rune Cast is an exploration of the Anglo-Saxon futhorc: a small web application for studying rune meanings, casting spreads, and combining individual runes into bindrunes. The project sits between a reference book and a visual experiment. The runes are most useful when they can be read as both language and shape, so the application keeps those two sides together.

# Rune casting

The main application presents the rune row with its names, upright meanings, and reversed meanings. Individual runes can be cast on their own or arranged in a three-rune spread representing the past, present, and future.

The rune artwork is stored as SVG assets. This keeps the source shapes crisp at different sizes and allows the same rune to be displayed upright, reversed, or flipped where the tradition requires it.

# Bindrune generator

The bindrune generator combines two runes, rotating one and binding them together, displaying the variations.

# Publishing to GitHub Pages

Every push to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy-pages.yml`. Gatsby builds the site with the project
path prefix and the generated `public/` directory is published to the
`pages` branch.

GitHub Pages should use the `pages` branch and the repository root as its
publishing directory. The published site is available at
`https://lacdael.github.io/Rune_cast_app/`.
