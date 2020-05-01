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


/**
 * Clear the room, then remove the garbage, then win icecream
 */
clearRoom()
    .then(() => {
        return removeGarbage();
    })
    .then(() => {
        console.log("You won icecream");
    })
    // if some of the promises is rejected
    .catch((message) => {
        console.log(`Don't won icecream. The reason is: ${message}`);
    });

/**
 * Clear room and remove garbage parallel, and then say it's all ready
 */
Promise.all([clearRoom(), removeGarbage()])
    .then(() => {
        console.log("All promises are resolved");
    })
    // if not resolved some of the promises
    .catch(() => {
        console.log("Don't won icecream. Not resolved all the promises");
    });

/**
 * Clear the room OR remove the garbage, when ready with one of them say one promise is ready
 */
Promise.race([clearRoom(), removeGarbage()])
    .then(() => {
        console.log("One promise is ready");
    })
    // if not resolved all the promises
    .catch(() => {
        console.log("No one of the promises is resolved");
    });