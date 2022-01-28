function evenPositions(array){
	let result="";
	
	let len=array.length;
	
	for(let i=0;i<len;i++){
		if(i%2==0){
			result+=array[i]+" ";
		}
	}
	
	console.log(result);
}



function sumFirstLast(array){
    
    let firstNum=Number(array[0]);
    let lastNum=Number(array[array.length-1]);
    let sum=firstNum+lastNum;
    
    return sum;
}
 
function lastKNumbers(n,k){
    let result=[];
    result.push(1);
    while(result.length!=n){
        let lastK=result.slice(-k);
        let sum = 0;
        for(let i =0;i<lastK.length;i++){
            sum+=lastK[i];
        }
        result.push(sum);
    }
    
    return result;
}
 
function positiveNegativeNumbers(array){
    
    let result=[];
    
    let len=array.length;
    for(let i=0;i<len;i++){
        if(array[i] < 0){
            
            result.unshift(array[i]);
        }else{
            
            result.push(array[i]);
        }
    }
    
    for(let i=0;i<len;i++){
        console.log(result[i]);
    }
    
}
 
function twoSmallestNumbers(array){
    array.sort((a,b)=>a-b);
    let smallestTwo=array.slice(0,2);
    let result=smallestTwo.join(" ");
    console.log(result);
}
 
function biggerHalf(array){
    array.sort((a,b)=>a-b);
    let len=array.length;
    let halflen=Math.ceil(len/2);
 
    let resultArr=array.splice(-halflen);
    return resultArr;
}
 
function pieceOfPie(array,startString,endString){
    
    let startIndex=array.indexOf(startString);
    let endIndex=array.indexOf(endString);
    let result=array.slice(startIndex,endIndex+1);
    
    return result;
    
}
 
function processOddPositions(array){
    let result=[];
    let len=array.length;
    for(let i=0;i<len;i++){
        if(i%2!=0){
            result.unshift(2*array[i]);
        }
    }
    
    let outputString=result.join(" ");
    console.log(outputString);
}


function biggestElementMatrix(matrix){
	
	let max=Number.NEGATIVE_INFINITY; 
	
	for(let i=0;i<matrix.length;i++){
		for(let j=0;j<matrix[i].length;j++){
		     if(matrix[i][j] > max){
				 max=matrix[i][j];
			 }	
		}
	}
	return max;
}

function diagonalSums(matrix){
	let primaryDiagSum=0;
	let secondaryDiagSum=0;
	
	let result="";
	let len=matrix.length;
	
	for(let i=0;i<len;i++){
		for(let j=0;j<matrix[i].length;j++){
			if(i==j){
				primaryDiagSum+=matrix[i][j];
			}
			if(i+j==len-1){
				secondaryDiagSum+=matrix[i][j];
			}
		}
	}
	
	result+=primaryDiagSum+" "+secondaryDiagSum;
	console.log(result);
	
}

function equalNeighborsCount(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length-1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if(col < matrix[row].length-1) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}

