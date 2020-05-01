let clearRoom = () => {
    return new Promise((resolve, reject) => {
        let isRoomClear = true;
        
        if(isRoomClear) {
            resolve("Cleaned the room");
        } else {
            reject("Not cleaned the room");
        }
    });
};

let removeGarbage = () => {
    return new Promise((resolve, reject) => {
        let removedGarbage = true;

        if(removedGarbage) {
            resolve("Removed garbage");
        } else {
            reject("Not removed garbage");
        }
    });
};

clearRoom()
    .then(() => {
        return removeGarbage();
    })
    .then(() => {
        console.log("You won icecream");
    })
    // if some of the promises is rejected
    .catch((message) => {
        console.log(`You don't won icecream. The reason is: ${message}`);
    });