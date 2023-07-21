/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = Array.from(Array(n), () => Array(m).fill(1));

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[n-1][m-1];
};
