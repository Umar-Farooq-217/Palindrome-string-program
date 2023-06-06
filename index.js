
// Palindrome Checker: Create a program that takes a string input from the user and checks **************************************
// if it is a palindrome (i.e., the string reads the same forwards and backwards).******************************************
//  The program should then display the result on the webpage.*******************************************************


document.getElementById("btn").addEventListener("click", function() {
    var inputString = document.getElementById("inp").value;
    var isPalindrome = checkPalindrome(inputString);
    var resultText = isPalindrome ? "The string is a palindrome." : "The string is not a palindrome.";
    document.getElementById("result").textContent = resultText;
});

function checkPalindrome(inputString) {
    var reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}
