
  function vowel_Count(str) { 
    return str.replace(/[^aeiou]/g, "").length;
 } 
 console.log(vowel_Count("Python")); 
 console.log(vowel_Count("Facebook.com"));
 console.log(vowel_Count("Osama Alam"))
  