let obj1={
    name:'iyal'
}
let obj2={
    name:'ilan'
}
let obj3={
    name:'zaid'
}

let names=new Map();
names.set(obj1,{id:101})
names.set(obj2,{id:102})
names.set(obj3,{id:103})
for (let [key,val] of names){
    console.log(key.name+": "+val.id);
}