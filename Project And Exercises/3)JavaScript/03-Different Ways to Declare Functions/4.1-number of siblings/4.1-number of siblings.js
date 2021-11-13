let numSiblings="How many siblings do you have?"
function sibling(x){
console.log(numSiblings)
if(x === 1){
    console.log("1 sibling!")  
}
 else if(x > 1){
    console.log("More than 1 sibling")  
 }
 else{
    console.log("No siblings")   
 }
}
sibling(1)