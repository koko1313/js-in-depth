(function(num) {
    return num;
})(5);

// another way
(function(num) {
    return num;
}(5));


// if we not return any value back, we can do this
// all the fourth are the same
!function() {console.log("Hey")}();
~function() {console.log("Hey")}();
-function() {console.log("Hey")}();
+function() {console.log("Hey")}();