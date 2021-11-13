function steps(N) {
    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j <= i; j++){
            str += '#';
        }
        for (let j = 0; j < N - i - 1; j++){
            str += ' ';
        }
        let arr = str.split();
        arr.unshift("'");
        arr.push("'");
        str = arr.join('');
        console.log(str);
    }

}
steps(3)
