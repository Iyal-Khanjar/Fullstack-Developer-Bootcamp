
function teamJohn(a, b, c) {

    function teamMike(d, e, f) {
        function teamMary(g, h, i) {
            let x = (a + b + c) / 3
            let y = (d + e + f) / 3
            let z = (g + h + i) / 3
            if (x > y && x > z) {
                console.log("John's team wins the avg: " + x);

            }
            else if (y > x && y > z) {
                console.log("Mike's team wins the avg: " + y);
            }
            else if (z>x && z>y) {
                console.log("Mary's team wins the avg: " + z);
            }
            else if(x==z && x==y){
                console.log("It's is a draw the avg team's " + y);
            }

        }
        teamMary(97, 134, 105)
    }

    teamMike(116, 94, 123)
}


teamJohn(89, 120, 103)
