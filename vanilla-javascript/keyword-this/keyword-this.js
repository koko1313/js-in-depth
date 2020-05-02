// house (the window object)

this.table = "window table"; // we are in global scope (scope of the window object)

// add garage to the global scope
this.garage = {
    table: 'garage table',
    // "this" inside a method
    cleanTable() {
        console.log("cleaning " + this.table); // this.table is garage.table
    }
}


// "this" inside a object
var johnsRoom = {
    table: "John's table",
    // "this" inside a method
    cleanTable() {
        console.log("cleaning " + this.table); // this.table is johnsRoom.table
    }
}

// console.log(this.johnsRoom.table); // error - jognsRoom.table is (private) in scope of johnsRoom

johnsRoom.cleanTable(); // cleaning John's table
this.garage.cleanTable(); // cleaning garage table


// "this" inside a function
var cleanTable = function() {
    console.log("cleaning " + this.table); // in "strict mode" - "this" id undefined, else it's from the global scope => "window table"
}
cleanTable();


// call cleanTable for "this"
cleanTable.call(this); // cleaning window table
cleanTable.call(this.garage); // cleaning garage table