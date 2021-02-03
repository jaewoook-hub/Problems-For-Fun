var generate = function(numRows) {
  let rows = [];
  for (let i = 0; i < numRows; i++) {
      if(i === 0){
          rows.push([1]);
      } else {
          let row = [1];
          row[i] = 1;
          for(let j = 1; j < i; j++){
              row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
          }
          rows.push(row);
      }
  }
  return rows;
};