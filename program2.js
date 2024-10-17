function matchMessage(message, key) {

  function matchHelper(mIndex, kIndex) {
    
    if (mIndex === message.length && kIndex === key.length) return true;

   
    if (kIndex === key.length) return false;

   
    if (key[kIndex] === '*') {
     
      return (mIndex < message.length && matchHelper(mIndex + 1, kIndex)) || matchHelper(mIndex, kIndex + 1);
    }

    
    if (mIndex < message.length && (key[kIndex] === '?' || key[kIndex] === message[mIndex])) {
      return matchHelper(mIndex + 1, kIndex + 1);
    }

   
    return false;
  }

  return matchHelper(0, 0);
}

console.log(matchMessage("aa", "a")); // False
console.log(matchMessage("aa", "*")); // True
console.log(matchMessage("cb", "?a")); // False
