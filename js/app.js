console.table(countries);

//=============== 1 =======================
function getData(arr, [a, b, c]) {
    let info = arr.map(function(country) {
        return {A: country[a], B: country[b], C: country[c]};
    })
    return info;
}

console.table(getData(countries, ["name", "capital", "region"]));

//=============== 2 =======================
function getSort(arr, str) {
    let sorted = arr.sort(function(countryA, countryB) {
        if (typeof(countryA[str]) == "string") {
            return countryA[str] - countryB[str];
        } else if (typeof(countryA[str]) == "number") {
            return countryB[str] - countryA[str];
        }
    })
    return sorted;
}

console.table(getSort(countries, "area"));
//console.table(getSort(countries, "alpha2Code"));

//=============== 3 =======================
function getAvarage(arr, str) {
    let count = 0;
    let sum = arr.reduce(function(acc, el) {
        if (typeof(el[str]) == "number") {
            return acc + el[str];
        }
    }, 0)
    return sum / arr.length;
}

let avgStr = "population";
console.log(avgStr + ": " + getAvarage(countries, avgStr));