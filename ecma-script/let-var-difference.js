let x = function () {
    // j declaration gets hoisted here
    
    if(true) {
        // console.log(j); // undefined, because it's declaration gets hoisted but the value assotiation does not
        // console.log(i); // error

        var j = 2;
        let i = 1;
    }

    console.log(j); // 2
    console.log(i); // error
}

x();