//Valid anagram qes: 242

//using a frequency counter

function validAnagram(s, t) {
  //base case, if not the same length return false immediately
  if (s.length !== t.length) {
    return false;
  }

  //creating 2 hashmaps
  let s_map = new Map();
  let t_map = new Map();

  for (let i = 0; i < s.length; i++) {
    s_map.set(s[i], (s_map.get(s[i]) || 0) + 1); // doing s_map.get(s[i]) --> is giving you the "value" (i.e. occurance of char from the hashmap.) so, you are basically checking the char is already there or not and increasing the occurance of that by 1.
    t_map.set(t[i], (t_map.get(t[i]) || 0) + 1);
  }

  //comparing every char count in both s & t
  for (let key of s_map.keys()) {
    if (s_map.get(key) !== t_map.get(key)) {
      return false;
    }
  }
  return true;
}

// using sort method and comparing the two strings. However this method might have bigger time complexity.
// var isAnagram = function (s, t) {
//   let s_sorted = s.split("").sort();
//   let t_sorted = t.split("").sort();

//   if (s_sorted.join() === t_sorted.join()) {
//     return true;
//   } else {
//     return false;
//   }
// };

console.log(validAnagram("anagram", "nagaram")); //for testing result
