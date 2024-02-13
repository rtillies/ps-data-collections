// let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

// split long string by newline character
let rows = data.split("\n")
// console.log(rows);

// split first row to determine headers and number of columns
let headers = rows[0].split(",")
let columnCount = headers.length

// console.log(`Number of headers: ${columnCount}`);
// console.log(headers);

// create two-dimensional array
let bigArray = [];

for (const row of rows) {
  let cells = row.split(",")
  bigArray.push([...cells])
  // console.log(`${cells}`);
}
console.log(bigArray);

// create array of objects
let objectArray = []

let upperKeys = rows[0].split(",")
let keys = [];

upperKeys.forEach((key) => {
  keys.push(key.toLowerCase())
});

// console.log(keys);

// i: iterate through rows after header
// j: iterate through columns
// add column value to each object
// add the object to the object array
for(i = 1; i < rows.length; i++) {
  let obj = {};
  let values = rows[i].split(",")
  for(j = 0; j < keys.length; j++) {
    // console.log(keys[j]);
    // console.log(rows[i]);
    // console.log(values[j]);
    obj[keys[j]] = values[j];
  }
  objectArray.push(obj)
}

console.log(objectArray);

// Part 4: Sorting and manipulating data

// Remove last element
objectArray.pop()

// Insert object at index 1
const newObject48 = {
  id: "48", name: "Barry", occupation: "Runner", age: "25"
}
objectArray.splice(1, 0, newObject48);

console.log(objectArray);
