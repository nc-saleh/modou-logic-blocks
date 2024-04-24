const mobileDisplayKeystrokes = (word) => {
  const keyStrokeRefObj = {
    a: 2,
    b: 3,
    c: 4,
    d: 2,
    e: 3,
    f: 4,
    g: 2,
    h: 3,
    i: 4,
    j: 2,
    k: 3,
    l: 2,
    m: 2,
    n: 3,
    o: 4,
    p: 2,
    q: 3,
    r: 4,
    s: 5,
    t: 2,
    u: 3,
    v: 4,
    w: 2,
    x: 3,
    y: 4,
    z: 5,
  }
  let total = 0
  for (const char of word) {
    if (/[0-9*#]/.test(char)) {
      total += 1
    } else {
      total += keyStrokeRefObj[char]
    }
  }
  return total
}

module.exports = { mobileDisplayKeystrokes }
