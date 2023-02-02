/*
    Create a function that takes an array as an argument
    and returns the reverse array.
    DO NOT USE THE Array.reverse() METHOD!!

    Example: [1, 2, 3] -> [3, 2, 1]
*/
function reverseArr(arr) {
    var left = 0;
    var right = arr.length-1;
    while (right > left){
        var hold = arr[right];
        arr[right] = arr[left];
        arr[left] = hold;
        left++;
        right--;
    }
    return arr;

}

/*
    Create a function that takes an object as an argument
    and returns the keys of the object in an array.
    DO NOT USE the Object.keys() METHOD!!

    Example:
    {
        name: "Casey",
        age: 10,              
        breed: "Pomeranian",
        friendly: false
    }
    -->
    ["name", "age", "breed", "friendly"]
*/
function objectKeysToArr(object) {
    var keys = [];
    var i = 0;
    for (key in object){
        keys[i] = key;
        i++;
    }
    return keys;

}

/*
    Create a function that takes in two objects as arguments 
    and returns an object that is the combination of the two.
    Make to combine objects in the order they are passed into
    the function. 

    Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    }
*/
function combineObjects(object1, object2) {
    const object3 = new Object();
    const entries1 = Object.entries(object1);
    const entries2 = Object.entries(object2);
    const entries = [...entries1, ...entries2];
    entries.forEach(entry => {
        object3[entry[0]] = entry[1]
    });
    return object3;
}


// DO NOT ALTER THE CODE BELOW (This is for testing purposes only)

console.log(reverseArr([1, 2, 3]))
console.log(reverseArr([2, 4, 6, 8]))
console.log(objectKeysToArr({ name: "Casey", age: 18, breed: "Pomeranian", friendly: false }))
console.log(objectKeysToArr({ 0: "Casey", 1: 18, 2: "Pomeranian", "test 1": false }))
console.log(combineObjects({ name: "Casey", age: 18 }, { breed: "Pomeranian", friendly: false }))
console.log(objectKeysToArr({ 0: "Casey", 1: 18, 2: "Pomeranian" }, { "test 1": false }))
