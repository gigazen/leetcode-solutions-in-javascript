/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const N = dominoes.length;
  const force = new Array(N).fill(0);

  // Populate forces going from left to right
  let f = 0;
  for (let i = 0; i < N; i++) {
    if (dominoes[i] === "R") {
      f = N;
    } else if (dominoes[i] === "L") {
      f = 0;
    } else {
      f = Math.max(f - 1, 0);
    }
    force[i] += f;
  }

  // Populate forces going from right to left
  f = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (dominoes[i] === "L") {
      f = N;
    } else if (dominoes[i] === "R") {
      f = 0;
    } else {
      f = Math.max(f - 1, 0);
    }
    force[i] -= f;
  }

  return force.map((f) => (f === 0 ? "." : f > 0 ? "R" : "L")).join("");
};