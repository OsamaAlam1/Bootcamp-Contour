let arr = [3, 2, 4, 1];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

arr.sort((a, b) => b - a);
console.log(arr); // [4, 3, 2, 1]

let names = [{name: "Ali"}, {name: "ALI"}, {name: "aLi"}, {name: "aLI"}];

function findName(arr, name) {
  let regex = new RegExp(`^${name}$`, "i");
  return arr.find(obj => regex.test(obj.name));
}

function findNameByLastLetter(arr, letter) {
  return arr.find(obj => obj.name.endsWith(letter));
}

console.log(findName(names, "ali")); // {name: "Ali"}
console.log(findNameByLastLetter(names, "i")); // {name: "Ali"}
