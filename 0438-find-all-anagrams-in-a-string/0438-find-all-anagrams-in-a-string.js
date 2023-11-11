/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const map = {}
  for (const c of p) {
    map[c] = (map[c] || 0) + 1
  }
  const currentMap = {}
  let count = 0
  const result = []
  for (let i = 0; i < p.length; i++) {
    const c = s[i]
    currentMap[c] = (currentMap[c] || 0) + 1
    if (currentMap[c] <= map[c]) {
      count += 1
    }
  }
  if (count === p.length) {
    result.push(0)
  }

  for (let i = p.length; i < s.length; i++) {
    const c = s[i]
    const prevC = s[i - p.length]
    currentMap[c] = (currentMap[c] || 0) + 1
    if (currentMap[c] <= map[c]) {
      count += 1
    }
    currentMap[prevC] = (currentMap[prevC] || 0) - 1
    if (currentMap[prevC] < map[prevC]) {
      count -= 1
    }
    if (count === p.length) {
      result.push(i - p.length + 1)
    }
  }
  return result
}