function simple_amount(n) {
    var result = [];
    while (result.length < n) {
        for (let a = 2; result.length < n; a++) {
            let q = 0;
            result.forEach(function(elem) {
                if (a % elem == 0) {
                    q++;
                }
            });
            if (q == 0) {
                result[result.length] = a;
            }
        }
    }
    return result;
}


console.log(simple_amount(process.argv[2]));