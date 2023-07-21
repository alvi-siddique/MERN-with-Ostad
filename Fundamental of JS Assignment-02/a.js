function findMostFrequentChar(s) {
    const charCount = {};
    
    // Step 1: Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    let maxCount = 0;
    let smallestChar = null;
  
    // Step 2: Find the lexicographically smallest character(s) with maximum count
    for (let char in charCount) {
      const count = charCount[char];
      
      if (count > maxCount || (count === maxCount && char < smallestChar)) {
        maxCount = count;
        smallestChar = char;
      }
    }
  
    return smallestChar;
  }
  
  // Example usage:
  const s = "bangladessssssssdddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdddddddddddsssssssssssssssssssh";
  console.log(findMostFrequentChar(s)); // Output: "a"
  
  