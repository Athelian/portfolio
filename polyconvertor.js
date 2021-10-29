const a = "108.512% 382.026%, 105.115% 385.684%, 104.157% 389.168%, 98.931% 390.910%, 92.181% 389.995%, 88.348% 392.913%, 88.784% 397.791%, 92.224% 401.274%, 90.830% 404.758%, 83.688% 406.108%, 75.980% 410.463%, 79.203% 416.211%, 86.911% 425.096%, 92.050% 431.585%, 98.321% 432.673%, 102.240% 438.335%, 106.377% 439.424%, 111.603% 438.335%, 117.265% 438.857%, 122.142% 432.716%, 127.150% 429.450%, 124.624% 424.572%, 127.281% 418.910%, 131.810% 417.647%, 136.513% 426.401%, 139.169% 432.802%, 143.350% 434.196%, 144.308% 439.030%, 144.961% 444.430%, 149.708% 444.736%, 156.676% 444.170%, 160.421% 440.686%, 166.953% 441.862%, 172.136% 445.042%, 176.796% 444.084%, 180.323% 440.730%, 182.022% 435.460%, 183.241% 430.756%, 187.466% 429.493%, 193.171% 428.797%, 196.960% 425.661%, 196.002% 421.219%, 192.300% 414.861%, 191.298% 408.242%, 194.303% 409.330%, 199.268% 412.988%, 200.095% 406.978%, 197.134% 398.748%, 192.300% 395.830%, 183.590% 397.093%, 177.972% 398.748%, 178.799% 394.741%, 186.334% 390.691%, 189.121% 384.768%, 186.726% 382.024%, 183.416% 381.502%, 179.453% 375.667%, 175.359% 367.653%, 174.009% 362.035%, 172.093% 354.806%, 163.034% 352.541%, 152.495% 353.282%, 144.743% 356.025%, 137.165% 355.895%, 133.463% 357.462%, 132.810% 362.819%, 130.502% 366.869%, 123.708% 368.349%, 116.914% 367.696%, 114.126% 370.700%, 111.644% 376.231%, 108.512% 382.026%, 108.512% 382.026%"
let max = 0;
let min = 9999999;

a.split(", ").forEach((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, -1))
  let int1 = parseFloat(splits[0])
  let int2 = parseFloat(splits[1])
  if (int1 > max) max = int1
  if (int1 < min) min = int1
  if (int2 > max) max = int2
  if (int2 < min) min = int2
})

console.log(max)

const b = a.split(", ").map((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, -1))
  let int1 = parseFloat(splits[0])
  int1 = int1 / max
  let int2 = parseFloat(splits[1])
  int2 = int2 / max
  return "" + int1 * 90 + "% " + int2 * 90 + "%"
}).join(", ")

console.log(b)

let xmax = 0;
let xmin = 9999999;
let ymax = 0;
let ymin = 9999999;

a.split(", ").forEach((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, 1))
  let intx = parseFloat(splits[0])
  let inty = parseFloat(splits[1])
  if (intx > xmax) xmax = intx
  if (intx < xmin) xmin = intx
  if (inty > ymax) ymax = inty
  if (inty < ymin) ymin = inty
})

const trueMax = xmax > ymax ? xmax : ymax

// // Should not normalize in both directions... should pick the highest
// const normalized = a.split(", ").map((val) => {
//   let splits = val.split(" ")
//   splits = splits.map((percent) => percent.slice(0, 1))
//   let int1 = parseFloat(splits[0])
//   int1 = parseFloat(((int1  xmin) / (trueMax  xmin)).toPrecision(4))
// let int2 = parseFloat(splits[1])
// int2 = parseFloat(((int2  ymin) / (trueMax  ymin)).toPrecision(4))
// return "" + int1 * 100 + "% " + int2 * 100 + "%"
// }).join(", ")

// console.log(normalized)

