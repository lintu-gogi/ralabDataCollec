//Fizz Buzz Problem
for(let i=1;i<=100;i++){
    if(i%3===0){
        check3=1;
    }
    if(i%5==0){
        check5=1;
    }
    if(i%3===0 && i%5===0){
        
            console.log("Fizz Buzz");
    }
    else if(i%3===0){
            console.log("Fizz");
    }
    else if(i%5===0){
            console.log("Buzz")
    }
    else
    {
            console.log(i);
    }
    
}
//Next prime number, starting at n and incrementing from there.
let notprime_count=0;
let number=12;
let n=number+1;
if(n===1)
    {
        console.log("Next Prime = "+(n+1));
    }
if(n===2)
    {
        console.log("Next Prime = "+ 3);
    }
while(n>2)
{
    for(let i=2;i<n/2;i++){
        if(n%i===0){
            notprime_count=1;
            break;
        }
    }
    
    if(notprime_count===0)
        {
            console.log("Next Prime = "+ n);
            break;
        }
    n=n+1;
    notprime_count=0;
    
}

//CSV file manipulation
const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cells="";
let cell1,cell2="";
for (let i = 0; i < str.length; i++) {
    
    //Getting the row till the delimiter \n in the variable cells
	if (str[i] !== "\n") {
        cells=cells+str[i];
        
	}
    //Looping again in the row to separate the cells when reaching ','
    else
    {
        cell1= cells;
        
        for(let j=0;j<cell1.length;j++)
            {
                
                if(cell1[j]!==",")
                    {
                        cell2=cell2+cell1[j];
                        
                    }
                if(cell1[j]===",")
                    {
                        cell2= cell2+"  ";
                    }
                if(j===cell1.length-1){
                        console.log(cell2);
                        cell2="";
                    }
            }
            
       
        cells="";
    }
    //Doing the iteration again for the last row
    if(i===str.length-1)
        {
            cell1=cells;
            
            for(let j=0;j<cell1.length;j++)
                {
                    
                    if(cell1[j]!==",")
                        {
                            cell2=cell2+cell1[j];
                            
                        }
                    if(cell1[j]===",")
                        {
                            cell2= cell2+"  ";
                        }
                    if(j===cell1.length-1){
                            console.log(cell2);
                            cell2="";
                        }
                }
        }
    
    
}


