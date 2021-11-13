const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];
const lowercased = array.map(name => name.toLowerCase());
let result = lowercased.join('').split('').reduce(function(o, e) {
    return o[e] = (o[e] || 0) + 1, o
  }, {});
  console.log(result)
  