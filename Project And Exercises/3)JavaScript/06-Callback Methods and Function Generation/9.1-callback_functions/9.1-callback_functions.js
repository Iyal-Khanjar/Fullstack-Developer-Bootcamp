function isString(s,call){
  if(typeof(s)==="string")
      call(s)
      else
      console.log('not a string');
}
function callBack(str){
console.log(str);
}
isString('2',callBack)

// function isString(s,call){
//   return s===String(s)?call(s):'not a string'
// }
// function call(str){
//   console.log(s===String(s)?s:'not a string');
// }
// isString('im a string',str)

// function firstWordUpperCase(u){
// u=u.split(' ')
//   console.log(u[0].toUpperCase() +" "+ u.slice(1).join(' ')); 
// }
// firstWordUpperCase('hello word ')