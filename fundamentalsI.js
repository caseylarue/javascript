#1)

var x = [3, 5, 'Dojo', 'rocks', {name: 'Michael', title: 'Sensei'}];

for ( index in x ) {
   console.log( x[index] + ": " +typeof(x[index]) );
}

for ( prop in x ) {           // prop will be the key
      console.log( x[prop]);  // alternative syntax to above line
}

var x = [3, 5, 'Dojo', 'rocks', {name: 'Michael', title: 'Sensei'}];
var counter = 0;
while ( x[counter] !== undefined ) {
 console.log( x[counter] + ": " +typeof(x[counter]) );
 counter++;
}

Returns:

"3: number"
"5: number"
"Dojo: string"
"rocks: string"
"[object Object]: object"
3
5
"Dojo"
"rocks"
[object Object] {
  name: "Michael",
  title: "Sensei"
}

"3: number"
"5: number"
"Dojo: string"
"rocks: string"
"[object Object]: object"


////////#2

var x = [3, 5, 'Dojo', 'rocks', {name: 'Michael', title: 'Sensei'}];
x.push(100);
console.log(x);

Returns
// [3, 5, "Dojo", "rocks", [object Object] {
//   name: "Michael",
//   title: "Sensei"
// }, 100]


///////// #3

var x = [3, 5, 'Dojo', 'rocks', {name: 'Michael', title: 'Sensei'}];
x.push([1,23,4]);
console.log(x);

returns: 
[3, 5, "Dojo", "rocks", [object Object] {
  name: "Michael",
  title: "Sensei"
}, [1, 23, 4]]

///// #4

var sum = 0;

for( var x = 1; x < 501; x++){
      sum = sum + x;
  }

console.log(sum);

///// #5

var start = Date.now(); 
var sum = 0;
for( var x = 1; x < 1000001; x++){
      sum = sum + x;
  }
var end = Date.now();
var elapsed = end - start;
console.log(sum + " time elapsed: " + elapsed);

// returns: 125250