//=============== 1 =======================
function getArrSum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var array = [3, 7, 2, 0, 1, 8, 9];
alert("Sum = " + getArrSum(array));
//=============== 2 =======================
function getWordsLength(str) {
    var sum = 0;
    var strArr = String(str).split(" ");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "") {
            sum = sum;
        } else {
            sum++;
        }
    }
    return sum;
}

var line = "ZA WARUDO toki wo tomare"
alert("Words number: " + getWordsLength(line));
//=============== 3 =======================
function getReversedStr(str) {
    var temp = "";
    var tempLine = [];
    for (let i = 0; i < str.length; i++) {
        tempLine.unshift(str[i]);
    }

    return tempLine.join("");
}

/*or
function getReversedStr(str) {
    var strArr = Array.from(str.split(""));
    return strArr.reverse().join("");
}
*/

alert("Reversed: " + getReversedStr(line));
//=============== 4 =======================
function getMostFrequentChar(str) {
    var tempChar = "";
    var maxChar= "";
    var count;
    var max = 0;
    for (let i = 0; i < str.length; i++) {
        count = 0;
        for (let j = 0; j < str.length; j++) {
            tempChar = str[i];
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (max === count) {
            max = max;
            maxChar = maxChar;
        } else if (count > max) {
            max = count;
            maxChar = tempChar;
        }
    }
    return maxChar;
}

alert("Most frequent char: " + getMostFrequentChar(line));