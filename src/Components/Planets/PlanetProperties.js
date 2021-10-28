import VARIABLES from "../../_variables.module.sass";

// Not so elegant way of processing exported nested maps from sass 

const mapPlanets = (map) =>
  Object.keys(map).reduce((memo, key) => {
    if (!key.startsWith("planet")) return memo;
    const value = map[key]
    const values = key.split("-");
    const planet = values[1]
    const continent = values[2]
    const property = values[3]
    if (!memo[planet]) memo[planet] = {}
    if (!memo[planet][continent]) memo[planet][continent] = {}
    memo[planet][continent][property] = value
    return memo;
  }, {});

export default mapPlanets(VARIABLES)