module.exports = function toReadable(number) {
    let answer = "";

    let numbersMap = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let decimalNumbersMap = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    if (number >= 0 && number < 20) {
        answer = numbersMap[number];
    }
    // if (number >= 14 || number < 20){
    //     answer = numbersMap[Number(number.toString()[1])] + 'teen'
    // }
    else if (number >= 20 && number < 100) {
        answer =
                (Number(number.toString()[1]) > 0)
                ? decimalNumbersMap[Number(number.toString()[0])] + " " + numbersMap[Number(number.toString()[1])]
                : decimalNumbersMap[Number(number.toString()[0])];
    } else if (number >= 100 && number < 1000) {
        answer = numbersMap[Number(number.toString()[0])] + " " + "hundred";
        //+ Number(number.toString()[1]) > 0 ? ' ' + numbersMap[Number(number.toString()[1])] : + ''
        if (Number(number.toString()[1]) >= 2) {

                    if(Number(number.toString()[2]) > 0){
                        answer =  answer + " " + decimalNumbersMap[Number(number.toString()[1])] + " " + numbersMap[Number(number.toString()[2])]
                    }else {
                        answer = answer + " " + decimalNumbersMap[Number(number.toString()[1])]
                    }
                    // (Number(number.toString()[2]) > 0)
                    // ? decimalNumbersMap[Number(number.toString()[0])] + " " + numbersMap[Number(number.toString()[2])]
                    // : decimalNumbersMap[Number(number.toString()[0])];
        } else if (Number(number.toString()[1] + number.toString()[2]) < 20 && Number(number.toString()[1] + number.toString()[2]) > 0) {
            answer =
                answer +
                " " +
                numbersMap[Number(number.toString()[1] + number.toString()[2])]
        }else {
            answer =
            answer +
            ""
        }
    }
    return answer;
};

const toReadable = require("./index");
console.log("toReadable 121", toReadable(121));
console.log("toReadable 111", toReadable(111));
console.log("toReadable 101", toReadable(101));
console.log("toReadable 100", toReadable(100));
console.log("toReadable 22", toReadable(22));
console.log("toReadable 12", toReadable(12));
console.log("toReadable 10", toReadable(10));
console.log("toReadable 5", toReadable(5));
