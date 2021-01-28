function starOutGrid(grid) {
    const stars = []
    for (let y = 0; y < grid.length; y++){
        const row = grid[y]
        for(let x = 0; x < row.length; x++){
            if (row[x] === '*') {
                const star = {x, y}
                stars.push(star)
            }
        }
    }
    for(let star of stars){
        for(let y = 0; y < grid.length; y++) {
            const row = grid[y]
            row[star.x] = '*'
        }
        const row = grid[star.y]
        for(let x = 0; x < row.length; x++){
            row[x] = '*'
        }
    }
    return grid
}
