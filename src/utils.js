// src/utils.js

function isPalindrome(str) {
    if (typeof str !== "string") {
      throw new Error("Input is not a string");
    }
  
    if (!/^[A-Za-z]+$/.test(str)) {
      throw new Error("Input contains non-alphabetic characters");
    }
  
    if (str === "") {
      return false;
    }
  
    const cleanStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
  
    return cleanStr === reversedStr;
  }
  
  module.exports = {
    isPalindrome,
  };
  