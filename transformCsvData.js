const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cellscoloum=[];
let cellscoloumLength;
let cellsRow=[];
cellsRow=str.split("\n");
console.log(cellsRow);
console.log(cellsRow.length);
for(let i=0;i<cellsRow.length;i++)
    {
        cellscoloum[i]=cellsRow[i].split(",");
        cellscoloumLength=cellscoloum[i].length;   
     
    }
console.log(cellscoloumLength);
console.log(cellscoloum);

let firstRow=[];
let finalArray=new Array();
let rowEle="";
for(let i=0;i<cellsRow.length;i++){
    let csv=new Object();
    for(let j=0;j<cellscoloumLength;j++){
        if(i==0){
            firstRow.push(cellscoloum[i][j])
        }
        else
        {
        //csv.cellscoloum[i][j]=cellscoloum[i+1][j+1];
        rowEle=cellscoloum[i][j];
        console.log(rowEle);
        //finalArray.push(csv);
        csv[firstRow[j]]=rowEle;
       
        //csv[rowEle]=rowEle;//Correct way of inserting element
        }
       
    }
    console.log("After one row");
    console.log(csv);
    //finalArray.push(csv);
   let l= Object.keys(csv).length;
   
   if(l!=0){
    finalArray.push(csv)
   }
    //console.log("csv"+i+finalArray);
    //csv.id="5"
}
console.log("Final Array");
console.log(finalArray);

 