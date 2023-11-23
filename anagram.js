//Valid anagram 242

//using a frequency counter
function validAnagram(s, t) {
  //base case
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();
  //s frequency
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  //t frequency
  for (let char of t) {
    //if any t char not in map, return false
    if (!map.has(char)) {
      return false;
    }
    //decreasing count of each char
    const newCount = map.get(char) - 1;
    if (newCount === 0) {
      //if the current char frequency is 0, delete that char
      map.delete(char);
    } else {
      map.set(char, newCount);
    }
  }

  //if map has some character still left after traversing the t string then it will return false
  return map.size === 0;
}

// using sort method and comparing the two strings.
var isAnagram = function (s, t) {
  let s_sorted = s.split("").sort();
  let t_sorted = t.split("").sort();

  if (s_sorted.join() === t_sorted.join()) {
    return true;
  } else {
    return false;
  }
};
