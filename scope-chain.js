let global = "global";

function func() {
    let global = "redefined global";

    console.log(global); // redefined global
}

func();

console.log(global); // global