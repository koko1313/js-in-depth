const map = new Map();

map.set("1", "One");
map.set("2", "Two");
map.set("3", "Three");
map.set("1", "Eleven??"); // the item with key "1" is overrided

map.delete("2");


// for-of
for(let [key, value] of map.entries()) {
    console.log(key, value);
}


// spread map to array
const arr = [...map];
console.log(arr);