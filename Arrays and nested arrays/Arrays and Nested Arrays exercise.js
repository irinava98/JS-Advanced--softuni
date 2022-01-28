function printArrayWithDelimiter(array,delimiter){
	
	let result="";
	let len=array.length;
	
	for(let i =0;i<len-1;i++){
	    result+=array[i]+delimiter;
	}
    result+=array[len-1];
    
	console.log(result);
}


function printEveryNth(array,n){
	
	let result=[];
	let len=array.length;
	
	for(let i=0;i<len;i+=n){
	
			result.push(array[i]);
	}
	
	return result;
}

function addAndRemove(arrayOfCommands){
	let result=[];	
	
	let len=arrayOfCommands.length;
	
	for(let i=0;i<len;i++){
		
		if(arrayOfCommands[i]=='add'){
			result.push(i+1);
		}
		else if(arrayOfCommands[i]=='remove'){
			result.pop();
		}
	}
	
	if(result.length == 0){
		console.log("Empty");
	}
	else{
		for(let elem of result){
			console.log(elem);
		}
	}
}

function rotateArray(array,numberOfRotations){
	for(let i=0;i<numberOfRotations;i++){
		let currentEl=array.pop();
		array.unshift(currentEl);
	}
	
	let stringResult=array.join(" ");
	console.log(stringResult);
}

function extractIncreasingSubsequence(array){
	
	let result=[];
	let len=array.length;
	
	
	let currentMax=array[0];
	result.push(currentMax);
	
	for(let i=0;i<len-1;i++){
		if(array[i]>=currentMax){
			currentMax=array[i];
			
		}
		if(array[i+1]>=array[i] && array[i+1]>=currentMax){
		   result.push(array[i+1]);
		}
	}
	
	return result;
}

function listOfNames(stringArray){
	
    let result=stringArray.sort((a,b)=>a.localeCompare(b));
	let count=0;
	
	for(let str of result){
		count++;
		console.log(count+'.'+str);
	}
	
}

function sortingNumbers(array){
	
	array.sort((a,b)=>a-b);
	let result=[];
	let i =0;
	
	while(array.length!=0){
		if(i%2==0){
			let currentMin=array.shift();
			result.push(currentMin);
		}
		else {
			let currentMax=array.pop();
			result.push(currentMax);
		}
		i++;
		
	}
	
	return result;
}

function sortByTwoCriteria(arrayOfStrings){
	
	let sortedArray=arrayOfStrings.sort((a,b)=>a.length - b.length || a.localeCompare(b));
	
	
    for(let elem of sortedArray){
        console.log(elem);
    }

}


function magicMatrix(matrix){
	
    let isMagic=true;
	let sums=[];
	
	for(let i=0;i<matrix.length;i++){
		let rowSum=0;
		let colSum=0;
		
		for(let j=0;j<matrix.length;j++){
			rowSum+=matrix[i][j];
			colSum+=matrix[j][i];
		}
		sums.push(rowSum,colSum);
	}
	
	for(let i=0;i<sums.length-1;i++){
		if(sums[i]!=sums[i+1]){
			isMagic=false;
		}
	}
	
	console.log(isMagic);
}


function diagonalAttack(matrixString){
	
	let matrix=[];
	let len=matrixString.length;

	for(let i=0;i<len;i++){
		matrix[i]=matrixString[i].split(" ").map(Number);
		
	}
	
	let primaryDiagonalSum=0;
	let secondaryDiagonalSum=0;
	
	for(let i=0;i<matrix.length;i++){
	    for(let j=0;j<matrix[i].length;j++){
	        if(i==j){
	          
	            primaryDiagonalSum+=matrix[i][j];
	        }
	        if(i+j==len-1){
	            
	            secondaryDiagonalSum+=matrix[i][j];
	        }
	    }
	}
	if(primaryDiagonalSum==secondaryDiagonalSum){
	    for(let i=0;i<matrix.length;i++){
	    for(let j=0;j<matrix[i].length;j++){
	        if(i!=j && i+j!=len-1){
	            matrix[i][j]=primaryDiagonalSum;
	        }
	    }
	 }
	}
	
	for(let i=0;i<matrix.length;i++){
	    console.log(matrix[i].join(" "));
	}
}

