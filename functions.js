function isEven(number) {
    return number % 2 == 0;
}
function largestOfThree(a, b, c) {
    return Math.max(a ,b, c);
}
function reverseString(text){
    return text.split("").reverse().join("");
}
//Testing isEven
console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(13));
console.log(isEven(12));
console.log(isEven(-5));

//Testiing largestOfThree
console.log(largestOfThree(8,7,9));
console.log(largestOfThree(11,9,4));
console.log(largestOfThree(4, 5, 2));
//testing reverseString
console.log(reverseString("I am a boy"))
console.log(reverseString("hello"));
console.log(reverseString("p"));

