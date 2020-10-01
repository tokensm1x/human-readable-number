module.exports = function toReadable(num) {
    let newStr = '';
    let obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
        fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, 'one hundred': 100, 'two hundred': 200, 'three hundred': 300, 'four hundred': 400, 'five hundred': 500, 'six hundred': 600, 'seven hundred': 700, 'eight hundred': 800, 'nine hundred': 900,
    };

    for (let key in obj) {
        if (num === obj[key]) {
            return key;
        }
    };


    let strNum = num.toString();
    let arr = strNum.split('');

    if (arr.length === 2) {
        arr[0] *= 10;
    } else if (arr.length === 3) {
        arr[0] *= 100;
        arr[1] *= 10;
    }

    if (arr[1] === 10) {
        arr[1] = +arr[1] + +arr[2];
        arr.pop(arr[2]);
    }

    arr = arr.filter(item => item > 0)

    for (let i = 0; i < arr.length; i++) {
        for (let key in obj) {
            if (obj[key] === +arr[i]) {
                newStr = `${newStr} ${key}`;
            }
        }
    }
    return newStr.trim();
}
