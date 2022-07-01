/*var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    kyky: 55,
};
console.log(i);
console.log(a);
console.log(a['kyky']);
console.log(a['foo2']);*/

/*let person = {
    name: 'Jack',
    age: 18,
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';
console.log(person);
console.log(newPerson);*/

/*function billboard(name, price = 30) {
    let sum = 0;
    for (let i of name) {
        sum += price;
    }
    console.log(sum);
}

billboard('Sanja', 50);*/
/*function sumOfDifferences(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log(arr);
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum = sum + (arr[i - 1] - arr[i]);
    }
    return sum;
}
sumOfDifferences([1]);*/
/*function eachCons(array, n) {
    let arr = [];

    for (let i = 0; i < array.length - (n - 1); i++) {
        arr.push(array.slice(i, i + n));
    }
    console.log(arr);
}
eachCons([3, 5, 8, 13], 2);*/

/*const stringToNumber = function (str) {
    // put your code here
    console.log(+str);

    return null;
};

stringToNumber('222');*/

/*function between(a, b) {
    let arr = [a];
    while (b > a) {
        a += 1;
        arr.push(a);
    }
    return arr;
}

between(2, 5);*/

/*function isNarcissistic(n) {
    let str = n.toString();
    let l = str.length;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i] ** l;
    }
    console.log(sum);
    if (sum === n) {
        return true;
    } else {
        return false;
    }
}
isNarcissistic(153);*/
/*
function countPositivesSumNegatives(input) {
    let n1 = 0;
    let n2 = 0;
    let array = [];
    let arr = [];
    if (input !== null) {
        if (input.length > 0) {
            for (let n of input) {
                if (n >= 1) {
                    n1 += 1;
                } else if (n < 0) {
                    n2 += n;
                }
            }
            if (n1 !== 0) {
                arr.push(n1);
            }
            if (n2 !== 0) {
                arr.push(n2);
            }

            return arr;
        } else {
            for (let k = 0; k < arguments.length; k++) {
                array.push(arguments[k]);
            }

            for (let n of array) {
                if (n >= 1) {
                    n1 += 1;
                } else if (n < 0) {
                    n2 += n;
                }
            }
            if (n1 !== 0) {
                arr.push(n1);
            }
            if (n2 !== 0) {
                arr.push(n2);
            }

            return arr;
        }
    } else if (input === null) {
        return (arr = []);
    }
}

countPositivesSumNegatives(-11, 66, 88);*/

/*function getDivisorsCnt(n) {
    let arr = [];
    let num = 0;
    let count = 0;
    while (num < n) {
        num++;
        arr.push(num);
    }

    for (let i of arr) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
getDivisorsCnt(30);*/

/*function squareDigits(num) {
    let str = num.toString();
    let x = '';
    for (let n of str) {
        x += n ** 2;
    }
    return +x;
}

squareDigits(9119);*/

/*function bingo(a) {
    let x = 0;
    for (let el of a) {
        if (el === 2 || el === 7 || el === 9 || el === 14 || el === 15) x++;
    }
    if (x >= 5) {
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]);*/
/*
function encode(str, n) {
    let obj = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };
    let arr1 = [];
    let arr2 = [];

    for (let l = 0; l < str.length; l++) {
        arr1.push(obj[str.toUpperCase()[l]]);
    }

    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i] + +n.toString()[i % n.toString().length]);
    }
    return arr2;
}

encode('b', 222);*/

/*function squareIt(int) {
    let x = Math.sqrt(int.toString().length);
    let c = 0;
    if (int === 1) {
        return int.toString;
    }
    if (Number.isInteger(x)) {
        let str = int.toString().slice(0, x);

        while (x < int.toString().length) {
            c = c + Math.sqrt(int.toString().length);
            x = x + Math.sqrt(int.toString().length);
            str = str + '\n' + int.toString().slice(c, x);
        }
        return str;
    } else {
        return 'Not a perfect square!';
    }
}

squareIt(2033933157358920);*/

// function sumTwoSmallestNumbers(numbers) {
//        return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1]
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

// function isCoprime(x, y) {
//     arr1 = [];
//     arr2 = [];
//     for (let i = 1; i <= x; i++) {
//         if (x % i === 0) {
//             arr1.push(i);
//         }
//     }
//     for (let i = 1; i <= y; i++) {
//         if (y % i === 0) {
//             arr2.push(i);
//         }
//         7;
//     }
//     let res = true;
//     for (let j = 1; j < arr1.length; j++) {
//         if (arr2.includes(arr1[j])) {
//             res = false;
//         }
//     }
//     if (res === true) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isCoprime(20, 27);

// function triangular(n) {
//     console.log(n);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }
//let sum = n;
// arr.forEach((el) => {
//     sum += el;
// });

//     console.log(sum);
// }

// triangular(6);

// function sumStrings(a, b) {
//     let sum = BigInt(a) + BigInt(b);
//     console.log(`${sum}`);
// }

// sumStrings('712569312664357328695151392', '8100824045303269669937');

// function towerBuilder(nFloors) {
//     let star = '*    ';
//     let arr = ['*'];
//     //star += '*';
//     for (let i = 1; i < nFloors; i++) {
//         star = `${' ' + star + '*'}`;
//         arr.push(`${star}${'   '}`);
//     }
//     console.log(arr);
// }

// towerBuilder(10);
// function candiesToBuy(kids) {
//     console.log(!kids);
//     // let arr = [];
//     // let x = kids;
//     // let control;
//     // for (let i = 1; i <= kids; i++) {
//     //     arr.push(i);
//     // }
//     // function check(x) {
//     //     for (let j = 0; j < arr.length; j++) {
//     //         if (x % arr[j] > 0) {
//     //             return (control = false);
//     //         }
//     //     }
//     // }

//     // check(x);
//     // while (control === false) {
//     //     x++;
//     //     control = true;
//     //     check(x);
//     // }
//     // return x;
// }

// candiesToBuy(4);

// function dontGiveMeFive(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         if ((i % 2 !== 0 && i % 5 === 0) || (i > 49 && i < 60)) {
//             sum += 0;
//         } else {
//             sum += 1;
//         }
//     }
//     return sum;
// }
// dontGiveMeFive(40, 70);
// function vowelIndices(word) {
//     let arr = word.toLowerCase().split('');
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (vowels.includes(arr[i])) {
//             result.push(i + 1);
//         }
//     }

//     return result.sort((a, b) => a - b);
// }
// vowelIndices('supercalifragilisticexpialidocious');

// Two Sum

// function twoSum(numbers, target) {
//     let numbersCopy = numbers.slice();
//     let arr = [];
//     let result = [0,0];
//     let x;
//     let y;
//     numbers.forEach(element => {
//         if (element === target) {
//             return result=[numbers.indexOf(element), numbers.indexOf(element)];
//         } else {
//             x = target - element;
//             y = target - x;
//             if (
//                 numbers.includes(x)
//             ) {
//                 numbers.splice(numbers.indexOf(x), 1);
//                 numbers.forEach(element => {
//                     y = target - x;
//                     if (
//                         numbers.includes(y) && arr.length<2
//                     ) {
//                         arr.push(x, y)
//                     }
//                 });
//             }
//             arr.forEach(element => {
//                 result.push(numbersCopy.indexOf(element))
//             });

//         }
//     })
//     return result;
// }

// twoSum([0,0], 4)

// function alternate(n, firstValue, secondValue){
//     let arr = []
//     while (arr.length<n-1) {
//     arr.push(firstValue)
//     arr.push(secondValue)
//     }
//     if (arr.length < n) {
//         arr.push(firstValue)
//     }
//         return arr;
// }

// alternate(20, 'blue', 'red')

// function evensAndOdds(num) {
//     if (num % 2 == 0) {
//        return num.toString(2);

//     } else {
//         return num.toString(16);
//     }
// }

// evensAndOdds(44564)

// function xor(a, b) {
//     if (a == true && b !== true) {
//         return true;
//     } else if (b == true && a !== true) {
//         return true;
//     } else if (a == true && b == true) {
//         return false;
//     } else if (a == false && b == false) {
//         return false;
//     }
// }

// xor(false, true)

// function arrayDiff(a, b) {
//     for (let i = 0; i < a.length; i++) {
//         while (b.includes(a[i])) {
//             if (b.includes(a[i])) {
//                 console.log(a.splice(i,1));
//             }
//         }
//     }

//     console.log(a);
//     return a
// }
// arrayDiff(['8i',-12,-3,4,-5,-2,'8p',6,6,44],['8i',-12,-3,4,-5,-2,'8p',6,6])

// function spongeMeme(sentence) {
//     let str=''
//     for (let i = 0; i < sentence.length; i++) {
//         if (i % 2 !== 0) {
//             letter = sentence[i].toLowerCase();
//         }
//         if (i % 2 == 0) {
//             letter = sentence[i].toUpperCase();
//         }
//       str = str+letter
//     }
//    console.log(str);
// }

// spongeMeme('stop Making spongebob Memes!')

// var number = function (array) {
//     let arr=[];
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//        element=`${i+1}: ${array[i]}`
//         arr.push(element)
//     }
//     console.log(arr);
//     return arr
// }

// number(["a", "b", "c"])

// function evenNumbers(array, number) {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==0) {

//             arr.push(array[i])
//         }
//     }
//     return arr.splice(arr.length-number);
// }

// evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)

// function solution(str, ending) {
//     let arr1=[];
//     let arr2 = []
//     for (let i = 0; i < ending.length; i++) {
//         arr1.push(ending[i]);
//         arr2.push(str[str.length-1-i])
//     }
//    return arr1.sort().toString() == arr2.sort().toString();
// }

// solution('ccccsdz', 'sdz')

// const sequenceSum = (begin, end, step) => {
//     if (begin>end) {
//         return 0
//     }
//     let sum=0;
//     for (let i = begin; i <= end; i+=step) {
//         sum+=i
//     }
//     return sum
// };

// sequenceSum (1, 5, 1)

// function evaporator(content, evap_per_day, threshold) {
//     let day = 0;
//     let remainder = (threshold / 100) * content;

//     while (content > remainder) {
//         content -= (evap_per_day / 100) * content;
//         day += 1;
//     }
//     return day;
// }

// evaporator(10, 10, 5);

// function last(x) {
//     // let arr = x.split(' ');
//     // let arr1 = [];
//     // let arr2 = [];
//     // let arr3 = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     arr1.push([...arr[i]].reverse());
//     // }
//     // arr1.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
//     // for (let i = 0; i < arr.length; i++) {
//     //     arr2.push(arr1[i].reverse());
//     // }
//     // for (let i = 0; i < arr2.length; i++) {
//     //     arr3.push(arr2[i].join(''));
//     // }
//     // return arr3

//     console.log(
//         x
//             .split(' ')
//             .sort(
//                 (a, b) =>
//                     a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
//             )
//     );
// }
// last('what time are we climbing up the volcano');
// function generatePairs(m, n) {
//     let arr=[]
//     for (let i = m; i <= n; i++) {
//         for (let j = n; j >= m; j--) {
//             if (i <= j) {
//                 arr.push([i, j])
//             }
//         }
//     }
//     console.log(arr.sort());
//    return arr.sort();
// }

// generatePairs(-5, -2)

// function getMiddle(s)
// {
//     if (s.length % 2 === 0) {
//      return s[(s.length/2)-1] + s[(s.length/2)];
//  } else {return s[(s.length-1)/2]}
// }

// getMiddle('df4a')
// function head(arr) {
// return arr[0]
// }
// head([1,2,3])

// function tail (arr) {
//     let array=[]
//     for (let i = 1; i < arr.length; i++) {
//         array.push(arr[i])
//     }
//     return array;
// }
// tail([1,2,3])
// function init(arr) {
//     let array=[]
//     for (let i = 0; i < arr.length-1; i++) {
//         array.push(arr[i])
//     }
//     return array;
// }
// init ([1,2,3])
// function last (arr) {
//     return arr[arr.length-1]
// }
// last ([1,2,3])

// function movie(card, ticket, perc) {
//     let n = 0;
//     let sumA = 0;
//     let sumB = card;
//     let discountTicket = ticket;
//    while (sumB>=sumA) {
//     discountTicket = discountTicket * perc
//     sumB += Math.floor(discountTicket)
//     sumA += ticket
//     n+=1
//    }
//     return n-1;
// };

// movie(500, 15, 0.9)

// String.prototype.toJadenCase = function () {
//     let newStr = '';
//     this.split(' ').forEach(element => {
//         newStr+=(element[0].toUpperCase());
//         for (let i = 1; i < element.length; i++) {
//             newStr+=(element[i])
//         }
//         newStr+=' '
//     });
//    return newStr.slice(0,newStr.length-1);
// }

// let str='ddd fff gggg';
// str.toJadenCase()

// function getCount(str) {
//     let vowelsCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'e' || str[i] === 'a'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u') {
//             vowelsCount+=1
//         }
//     }
//     return vowelsCount;
// }

// getCount('fffae')
// sort((a, b) => a - b)

// return masked string
// function maskify(cc) {
//     let str = '';
//     if (cc.length > 4) {
//         for (let i = 0; i < cc.length-4; i++) {
//             str+='#'
//         }
//         return str+=cc.slice(cc.length-4, cc.length);
//     } else {
//         return cc
//     }

// }

// maskify('4556364607935616')

// function bitMarch(n) {
//     let x = 9 - n;
//     let arr = []
//     let arrRow = []
//     while (arrRow[0]!==1) {
//         x -= 1
//         arrRow = [];
//         for (let i = 0; i < x; i++) {
//             arrRow.push(0)
//         }
//         for (let i = x; i < x+n; i++) {
//             arrRow.push(1)
//         }
//         for (let i = x+n; i < 8; i++) {
//             arrRow.push(0)
//         }
//         arr.push(arrRow)
//     }

// 	return arr;
// }

// bitMarch(7)

// function lastManStanding(n){
//     let arr = [];
//     let arr1 =[]
//     for (let i = 1; i < n+1; i++) {
//        arr.push(i)
//     }

//     while (arr.length!==1) {
//         for (let j = 1; j < arr.length; j += 2) {
//             arr1.push(arr[j])
//         }
//     arr = arr1.reverse()
//     arr1 = []
//     }
//     return arr[0];
// }

// lastManStanding(1000)

// function stringMerge(string1, string2, letter){
//     return string1.slice(0,string1.indexOf(letter))+string2.slice(string2.indexOf(letter))
// }

// stringMerge("person","here", "e")

// function pattern(n){
//     var output = "1\n";
//     let x=1;
//     while (x < n) {
//         ++x
//         output += "1";
//         for (let i = 0; i < x - 1; i++) {
//             output+='*'
//         }
//         output+=`${x}\n`
//     }

//     return output.slice(0,output.length-1);
// }

//    pattern(5)

// function accum(s) {
//     let str = ""
//     console.log(s.indexOf('Z'));
//     for (let i = 0; i < s.length; i++) {
//         str += '-'
//         str+=s[i].toUpperCase()
//         for (let j = 0; j < i; j++) {
//             str += s[i].toLowerCase()
//         }
//     }
// return str.slice(1,str.length);
// }
// accum("ZpglnRxqenU")

// function dropCap(n) {
//     let str = '';
//     let arr = n.split(' ')
//     if (n === '') {
//         return ['']
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '') {
//             str +=` `;
//         } else if (arr[i].length>2) {
//             str +=`${arr[i][0].toUpperCase()}`;
//         } else if (arr[i].length <= 2) {
//             if (arr[i][0]===' ') {
//                 str += ' '
//             }
//             str +=`${arr[i][0].toLowerCase()}`;
//         }

//         for (let j = 1; j < arr[i].length-1; j++) {
//             if (arr[i][0]===' ') {
//                 str += ' '
//             }
//             str+=`${arr[i][j].toLowerCase()}`
//         }
//         str+=`${arr[i][arr[i].length-1].toLowerCase()} `
//     }
//     console.log(str);
// return str.trim();
// }

// dropCap('')

// var maxSubArray = function (nums) {
//     let prev = 0;
//     let max = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         let curr = nums[i];
//         prev = Math.max(prev + curr, curr);
//         console.log(prev);
//         max = Math.max(prev, max);
//         console.log(max);
//     }
// };
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// function stat(strg) {
//     let arr = []
//     let re = /[,]\s*|[,]/
//   strg.split(re).forEach(element => {
//     elArr = element.split('|')
//     arr.push(elArr[0]*60*60+elArr[1]*60+elArr[2]*1)
//   });
//     console.log(arr.sort((a, b) => a - b));

//     let range = arr[arr.length - 1] - arr[0];
//     let mean = arr.reduce((a,b) => {
//        return a+b
//     }) / arr.length;
//     let median;
//     if (arr.length%2===0) {
//         median = (arr[arr.length/2-1]+arr[arr.length/2])/2
//     } else {
//         median = arr[(arr.length-1)/2]
//     }
//     let result = 'Range: ' + `${parseInt(range / 3600)}`.padStart(2, '0') + '|' + `${parseInt(range % 3600 / 60)}`.padStart(2, '0') + '|' + `${parseInt(range % 60)}`.padStart(2, '0') + ' Average: ' + `${parseInt(mean / 3600)}`.padStart(2, '0') + '|' + `${parseInt(mean % 3600 / 60)}`.padStart(2, '0') + '|' + `${parseInt(mean % 60)}`.padStart(2, '0') + ' Median: ' + `${parseInt(median / 3600)}`.padStart(2, '0') + '|' + `${parseInt(median % 3600 / 60)}`.padStart(2, '0') + '|' + `${parseInt(median % 60)}`.padStart(2, '0');
//     console.log(result);
//     return result;
// }

// stat("02|15|59, 2|47|16, 02|17|20,2|32|34, 2|17|17, 2|22|00, 2|31|41")

// function sortTwisted37(array) {
//     let arr = []
//     let arr1=[]

//     array.forEach(element => {
//         if (element.toString().includes('3') && element.toString().includes('7')) {
//             arr.push(+element.toString().replace(/3/gi, 'x').replace(/7/gi, '3').replace(/x/gi, '7'))
//         } else if (element.toString().includes('3')) {
//             arr.push(+element.toString().replace(/3/gi, '7'))
//         } else if (element.toString().includes('7')) {
//             arr.push(+element.toString().replace(/7/gi, '3'))
//         } else {
//             arr.push(element);
//        }
//     });

//     arr.sort((a, b) => a - b);
//     arr.forEach(element => {
//         if (element.toString().includes('3') && element.toString().includes('7')) {
//             arr1.push(+element.toString().replace(/3/gi, 'x').replace(/7/, '3').replace(/x/gi, '7'))
//         } else if (element.toString().includes('3')) {
//             arr1.push(+element.toString().replace(/3/gi, '7'))
//         } else if (element.toString().includes('7')) {
//             arr1.push(+element.toString().replace(/7/gi, '3'))
//         } else {
//             arr1.push(element);
//        }
//     });
//     console.log(arr1);
//     return arr1;
// }

// sortTwisted37([ -29,
//     -21,
//     -19,
//     -11,
//     -10,
//     -8,
//     -4,
//     0,
//     0,
//     7,
//     14,
//     15,
//     13,
//     20,
//     21,
//     22,
//     71,
//     73,
//     78,
//     40,
//     45,
//     50,
//     56,
//     59,
//     60,
//     67,
//     63,
//     68 ])

// function xx(list) {
//     let step = Math.min(Math.abs(list[1] - list[0]), Math.abs(list[list.length - 1] - list[list.length - 2]))
//     console.log(step);
//     let arr = []
//     let i = list[0];
//     if (list[0]<list[list.length - 1]) {
//         while (i<list[list.length - 1]) {
//             i+=step
//             arr.push(i)
//             }
//     } else {
//         while (i>list[list.length - 1]) {
//             i-=step
//             arr.push(i)
//             }
//     }

//     console.log(arr);

//     for (let j = 0; j < arr.length; j++) {
//         if (!list.includes(arr[j])) {
//             console.log(arr[j]);
//             return arr[j]

//         }
//     }
// }

// xx([ 1, -5, -8, -11 ])

// function xx(params) {
//     let arr= []
//     for (let i = 0; i < params.length; i++) {
//        arr.push(params.slice(i,params.length).reduce((a,b) => a+b))
//     }
//     console.log(arr);
// }

// xx([0,1,3,6,10])

// let block = document.querySelector('.red');

// function order(words) {
//     let arr = [];
//     let str = '';
//     words.split(' ').forEach((el) => {
//         for (const i of el) {
//             if (i > 0) {
//                 arr.push(i + el);
//             }
//         }
//     });
//     arr.sort();
//     for (const word of arr) {
//         str += word.slice(1, word.length) + ' ';
//     }
//     console.log(str.trim());
//     return str;
// }

// order('wor2ds wor3ds wo1ds word9s');

// function reindeers(presents) {
//     if (presents > 180) {
//         return new Error('throws an error');
//     }
//     return Math.ceil(presents / 30) + 2;
// }

// reindeers(1555);

// function isSquare(n) {
//     if (n < 0 || Math.sqrt(n) / Math.floor(Math.sqrt(n)) > 1) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(isSquare(0));
// function solution(str) {
//     let arr = [];
//     if (str.length % 2 !== 0) {
//         for (let i = 0; i < str.length - 1; i += 2) {
//             arr.push(str.slice(i, i + 2));
//         }
//         arr.push(str[str.length - 1] + '_');
//     } else {
//         for (let i = 0; i < str.length - 1; i += 2) {
//             arr.push(str.slice(i, i + 2));
//             str.slice(i, i + 2);
//         }
//     }
//     return arr;
// }
// solution('sdfhhjw');

// function alphanumeric(string) {
//     if (/\w/.test(string)) {
//         if (/\s/.test(string) || /\_/.test(string)) {
//             return false;
//         }
//         return true;
//     } else {
//         return false;
//     }
// }

// alphanumeric('dd_');

// function Mormons(startingNumber, reach, target) {
//     if (startingNumber >= target) {
//         return 0;
//     }
//     let x = 0;
//     let mormons = startingNumber;
//     while (mormons < target) {
//         mormons = mormons + mormons * reach;
//         x++;
//     }
//     return x;
// }

// Mormons(40, 2, 121);
