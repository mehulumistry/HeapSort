// heap using swap ---> maxHeap using delete -----> sortHeap



function heapify(arr:number[]): number[] {

let parentIndex = 0;



for(let parentIndex = 0; parentIndex< arr.length; parentIndex++){

    let leftchild = parentIndex+1;
    let rightchild = parentIndex+2;
    if(arr[parentIndex] < arr[leftchild]){
        if(arr[leftchild] < arr[rightchild]){
            swap(arr,rightchild,parentIndex);

        }
        else{
            swap(arr,leftchild,parentIndex);
        }

    }
    else if(arr[parentIndex] < arr[rightchild]){
        swap(arr,rightchild,parentIndex);
    }
    
}




return  arr;

}


function swap(arr:number[],ichild:number,iparent:number){
    let temp = 0;
    temp = arr[iparent];
    
    arr[iparent] = arr[ichild];
    arr[ichild] = temp;

}








function sort(arr1:number[]) : number[]{

    

    while(arr1.length > 0){
       heapify(arr1);
        
    sortHeap.push(arr1.shift());
   
   // heapify(arr1);
    }
   
    return sortHeap;
}



let sortHeap:number[] = [];
let arr = [];
arr = [-2,-3,-6,5,9,59,1200];
let maxHeap:number[] = heapify(arr);
console.log(maxHeap);
let HeapSort:number[] = sort(maxHeap);

console.log(HeapSort);






