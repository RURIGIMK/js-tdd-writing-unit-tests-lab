// Your tests here
// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('returns true for known palindromes', () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
    // Add more known palindromes if needed
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    // Add more non-palindromes if needed
  });

  test('handles uppercase and lowercase combinations', () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("MadaM")).toBe(true);
    // Add more tests for combinations
  });

  test('returns false for empty string input', () => {
    expect(isPalindrome("")).toBe(false);
  });

  test('returns false for non-alphabetic characters input', () => {
    expect(isPalindrome("12321")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(false);
    // Add more tests for non-alphabetic characters input
  });

  test('returns false for non-string input', () => {
    expect(isPalindrome(12321)).toBe(false);
    expect(isPalindrome(["racecar"])).toBe(false);
    // Add more tests for non-string input
  });

  // Bonus: Add tests for error throwing scenarios
  test('throws an error if input has any non-alphabetic characters', () => {
    expect(() => {
      isPalindrome("A man, a plan, a canal, Panama");
    }).toThrow();
  });

  test('throws an error if input is not a string', () => {
    expect(() => {
      isPalindrome(12321);
    }).toThrow();
  });
});
