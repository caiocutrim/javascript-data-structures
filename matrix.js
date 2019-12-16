
const myMatrix = [0, [1, 2, 3,], 2, [4, 5, 6], 3, [7, 8, 9], 4, [10, 11, 12]];



function printMatrix(matrix) {
  for(let i= 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

// printMatrix(myMatrix);

let matrix3x3x3 = []; 
for (let i=0; i<3; i++){ 
  matrix3x3x3[i] = []; 
  for (let j=0; j<3; j++){ 
    matrix3x3x3[i][j] = []; 
    for (let z=0; z<3; z++){ 
      matrix3x3x3[i][j][z] = i+j+z; 
    } 
  } 
} 

for (var i=0; i<matrix3x3x3.length; i++){ 
  for (var j=0; j<matrix3x3x3[i].length; j++){ 
    for (var z=0; z<matrix3x3x3[i][j].length; z++){ 
      console.log(matrix3x3x3[i][j][z]); 
    } 
  } 
} 
