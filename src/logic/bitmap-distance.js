class BitmapDistance {
    constructor(matrix) {
        this.directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        this.matrix = matrix
    }

    calculate() {
        const m = this.matrix.length
        const n = this.matrix[0].length
        let queue = []

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[0].length; j++) {
                if (this.matrix[i][j] === 1) {
                    queue.push([i, j])
                    this.matrix[i][j] = 0
                } else this.matrix[i][j] = Infinity
            }
        }

        while (queue.length) {
            const [x, y] = queue.shift()

            for (let dir of this.directions) {
                const row = x + dir[0]
                const col = y + dir[1]

                if (row < 0 || row >= m || col < 0 || col >= n || this.matrix[row][col] <= this.matrix[x][y] + 1)
                    continue
                queue.push([row, col])
                this.matrix[row][col] = this.matrix[x][y] + 1
            }
        }

        return this.matrix
    }
}

module.exports = BitmapDistance
