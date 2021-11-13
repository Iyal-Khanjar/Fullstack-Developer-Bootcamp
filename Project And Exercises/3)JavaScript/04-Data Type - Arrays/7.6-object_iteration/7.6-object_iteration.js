let info = {
    name: 'Iyal',
    age: 'twentyFour'
}
function swap(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
      ret[obj[key]] = key;
    });
    return ret;
}

console.log('Before ',info);
info = swap(info);
console.log('After ',info);