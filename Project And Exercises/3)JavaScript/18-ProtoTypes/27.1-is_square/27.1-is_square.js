function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.isSquare = () => {
        if (this.a == this.b && this.a == this.c && this.a == this.d) {
            return true
        }
        return false
    }

}
console.log('(4,4,4,4):',new Square(4, 4, 4, 4).isSquare());
console.log('(1,2,3,4):',new Square(1, 2, 3, 4).isSquare());

