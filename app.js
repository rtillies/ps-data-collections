let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// split long string by newline character
let rows = data.split("\n")
console.log(rows);

// split first row to determine headers and number of columns
let headers = rows[0].split(",")
let columnCount = headers.length

console.log(`Number of headers: ${headers.length}`);
console.log(headers);


// for (const row of rows) {
//   let cells = row.split(",")
//   console.log(`${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`);
// }

