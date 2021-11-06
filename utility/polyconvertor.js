const fs = require("fs")

const a = "48.187 87.385, 47.948 87.893, 47.831 88.087, 46.980 89.326, 46.882 89.611, 46.821 89.922, 46.733 90.193, 46.615 90.449, 46.503 90.773, 46.525 91.140, 46.565 91.320, 46.668 91.438, 46.836 91.549, 46.966 91.720, 46.767 91.874, 46.985 92.185, 47.171 92.368, 47.196 92.552, 47.192 92.736, 46.806 93.080, 46.655 93.270, 46.562 93.500, 46.522 93.736, 46.564 93.950, 46.551 94.163, 46.162 94.136, 45.765 94.005, 45.364 94.062, 44.793 93.816, 44.586 93.772, 44.397 93.675, 43.923 92.910, 43.541 92.587, 43.131 92.334, 42.713 92.319, 42.294 92.348, 41.924 92.192, 41.171 91.671, 40.373 91.252, 40.035 90.980, 39.880 90.797, 39.699 90.675, 39.242 90.554, 38.831 90.270, 38.645 90.250, 38.244 90.284, 38.038 90.264, 37.831 90.163, 37.431 89.830, 37.174 89.367, 37.108 89.162, 37.289 88.633, 37.504 88.124, 37.694 87.982, 37.915 87.879, 38.048 87.728, 38.161 87.543, 38.572 88.076, 38.756 88.206, 38.942 88.177, 39.271 87.986, 39.299 87.776, 39.664 87.510, 40.126 87.505, 40.340 87.554, 40.452 87.794, 40.628 87.869, 40.832 87.900, 41.503 88.356, 41.692 88.431, 41.881 88.443, 42.403 88.252, 42.803 88.179, 43.642 88.285, 44.094 88.170, 44.411 88.157, 44.873 87.981, 45.227 87.688, 45.412 87.615, 45.611 87.593, 46.091 87.612, 46.574 87.679, 46.776 87.610, 46.946 87.417, 47.142 87.331, 47.357 87.388, 47.914 87.059, 48.160 87.036, 48.394 87.163"
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
max = 87.59

const b = a.split(", ").map((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, -1))
  let int1 = parseFloat(splits[0])
  int1 = int1 / max
  let int2 = parseFloat(splits[1])
  int2 = int2 / max
  return "" + (int1 * 100).toFixed(3) + "% " + (int2 * 100).toFixed(3) + "%"
}).join(", ")

fs.writeFile("result.txt", b, err => {
  if (err) throw err;
  console.log('File successfully written to disk');
})

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

