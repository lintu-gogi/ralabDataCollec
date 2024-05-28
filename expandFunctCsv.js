//Expanding Functionality Using Arrays
const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cellscoloum=[];
let cellscoloumLength;
let cellsRow=[];
cellsRow=str.split("\n");
console.log(cellsRow);
console.log("No of rows = " +cellsRow.length);
for(let i=0;i<cellsRow.length;i++)
    {
        cellscoloum[i]=cellsRow[i].split(",");
        cellscoloumLength=cellscoloum[i].length;   
     
    }
console.log("No of cloumns = " +cellscoloumLength);
console.log("Final Array");
console.log(cellscoloum);
