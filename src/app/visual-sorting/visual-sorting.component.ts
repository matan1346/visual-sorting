import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-sorting',
  templateUrl: './visual-sorting.component.html',
  styleUrls: ['./visual-sorting.component.css']
})
export class VisualSortingComponent implements OnInit {

  numbers: Array<number> = [7,9,12,15,19,22,24,27,30,34,37,40,43,46,49,53,56,59,62,65,69,73,76,79,83,87,89,93];
  sortingTypes:Array<object> = [
    {'name': 'Selection Sort','value': 0},
    {'name': 'Bubble Sort','value': 1},
    {'name': 'Insertion Sort','value': 2},
    {'name': 'Merge Sort','value': 3},
    {'name': 'Quick Sort','value': 4},
    {'name': 'Heap Sort', 'value': 5}
    
  ];
  sortSwapTracker:Array<object> = [];
  selectedType:number = 0;
  items:Array<object> = [];
  delaySpeed:number = 50;
  isSorted:boolean = false;
  constructor() { }


  ngOnInit(): void {
    this.shuffleArray(this.numbers);
    this.isSorted = false;
    /*for(let i = 1;i <= 28;++i)
      this.numbers.push(this.getRandomInt(20,90));
*/
    for(let i =0;i < this.numbers.length;i++)
    {
      this.items.push({
        'number': this.numbers[i],
        'color': 'red'
      })
    }

    //this.bubbleSort(this.items);
  }

resetItems(){
  for(let i = 0;i < this.items.length;i++)
    this.items[i]['color'] = 'red';
}

shuffleItems(){
  this.resetItems();
  this.shuffleArray(this.items);
  this.isSorted = false;
}

registerSwap(i:number, j:number){
  this.sortSwapTracker.push({'i': i,'j': j});
}

performSortSwapSteps(arr:Array<object>){

  console.log(this.sortSwapTracker);

  for(let i = 0;i < this.sortSwapTracker.length;++i)
    {
      let moveIndex = this.sortSwapTracker[i];
      let temp = arr[moveIndex['i']];
      arr[moveIndex['i']] = arr[moveIndex['j']]
      arr[moveIndex['j']] = temp;
    }
}


  sortItems(){
    if(this.isSorted) return;

    this.isSorted = true;
    
    switch(Number(this.selectedType))
    {
      case 0:
        this.SelectionSort(this.items);
        break;
      case 1:
        this.BubbleSort(this.items);
        break;
      case 2:
          this.InsertionSort(this.items);
          break;
      case 3:
          this.MergeSort(this.items);
          break;
      case 4:
        this.QuickSort(this.items);
      case 5:
        this.heapSort(this.items);
        break;
      default:
        alert("sorting type doesn't exists");
    }

    
   }

    sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


  onChangeType(val:number):void{
    //alert(val);
    this.selectedType = val;
  }


 swapNumbers(arr: Array<object>, index1:number, index2:number, delayTime:number = 0){
  let temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
  arr[index1]['color'] = 'red';
}

SelectionSort = async(arr: Array<object>) => {

    for(let i = 0;i < arr.length;i++)
    {
      let small = i;
      for(let j = i + 1;j < arr.length;j++)
      {
        if(arr[j]['number'] < arr[small]['number'])
          small = j;
        
      }
      await this.sleep(this.delaySpeed)
      arr[small]['color'] = "yellow";
      arr[i]['color'] = "blue";
      await this.sleep(this.delaySpeed)
      this.swapNumbers(arr, small, i, this.delaySpeed);
      arr[i]['color'] = "green";
      
    }
}

BubbleSort = async(arr: Array<object>) => {

  for(let i = 0;i < arr.length;i++)
  {
    for(let j = 1;j < arr.length-i;j++)
    {
      if(arr[j]['number'] < arr[j-1]['number'])
      {
        await this.sleep(this.delaySpeed)
        arr[j-1]['color'] = "blue";
        arr[j]['color'] = "yellow";
        await this.sleep(this.delaySpeed)
        this.swapNumbers(arr, j-1, j, this.delaySpeed);
        arr[j]['color'] = "red";
      }
      
    }
    arr[arr.length-i-1]['color'] = "green";
    
    
  }
}


InsertionSort = async(arr: Array<object>) => {
  for(let i =1;i < arr.length;i++)
  {
      let key = arr[i];
      key['color'] = 'green';
      let j = i-1;
      while(j >= 0 && arr[j]['number'] > key['number'])
      {
        await this.sleep(this.delaySpeed);
        arr[j+1]['color'] = "blue";
        arr[j]['color'] = "yellow";
        await this.sleep(this.delaySpeed)
        this.swapNumbers(arr, j+1, j, this.delaySpeed);
        arr[j+1]['color'] = "green";
        arr[j]['color'] = "green";
        --j;
      }
        arr[j+1] = key;
        arr[j+1]['color'] = 'green';
  }
}

//[2,3,4,5]

// merge (left:Array<object>, right:Array<object>, trackLeft: number, trackMiddle:number,trackRight: number){//mid:number){//left:Array<object>, right:Array<object>) {
  

//   let i,g, j, c:Array<number> = [];
//   i = trackLeft;
//   j = trackMiddle+1;
//   g = trackLeft;
  
  
//   let resultArray = [], leftIndex = 0, rightIndex = 0;

//   // We will concatenate values into the resultArray in order
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       resultArray.push(left[leftIndex]);
      
//       leftIndex++; // move left array cursor
//     } else {
//       resultArray.push(right[rightIndex]);
//       this.registerSwap(trackLeft , trackMiddle++)
//       rightIndex++; // move right array cursor
//     }

//     trackLeft++;
//   }

//   // We need to concat here because there will be one element remaining
//   // from either left OR the right
//   return resultArray
//           .concat(left.slice(leftIndex))
//           .concat(right.slice(rightIndex));
  
  
  
  
  
// //   while (i <= m && j <= r) {
// //     console.log(j);
// //     if (arr2[i]['number'] < arr2[j]['number']) {
// //         c.push(arr2[i]['number']);
// //         this.registerSwap(i++ , g++)
        
// //     }
// //     else  {
// //         c.push(arr2[j]['number']);
// //         this.registerSwap(j++ , g++)
// //     }
// // }
// // while (i <= m) {
// //     c.push(arr2[i++]['number']);
// // }
// // while (j <= r) {
// //     c.push(arr2[j++]['number']);
    
// // }
// // console.log(c);
// // for (let i = l, k = 0; i < c.length; i++)  {
// //     arr2[i]['number'] = c[k++];
    
// // }

  
  
  
// }


// mergeSort (unsortedArray:Array<object>, trackLeft:number, trackRight: number) {
//   /// No need to sort the array if the array only has one element or empty
//   if (unsortedArray.length <= 1) {
//     return unsortedArray;
//   }
//   // In order to divide the array in half, we need to figure out the middle
//   const middle = Math.floor(unsortedArray.length / 2);

//   // This is where we will be dividing the array into left and right
//   const left = unsortedArray.slice(0, middle);
//   const right = unsortedArray.slice(middle);

//   // Using recursion to combine the left and right
//   return this.merge(
//     this.mergeSort(left, trackLeft, middle), this.mergeSort(right, middle+1, trackRight), trackLeft, middle,trackRight
//   );
// }



// // Merge two subarrays L and M into arr
// merge = async( arr: Array<object>, p: number, q: number, r: number) => {

//   // Create L ← A[p..q] and M ← A[q+1..r]
//   let n1 = q - p + 1;
//   let n2 = r - q;

//   let L:Array<object>, M:Array<object>;

//   for (let i = 0; i < n1; i++)
//       L.push(arr[p + i]);
//   for (let j = 0; j < n2; j++)
//       M.push(arr[q + 1 + j]);

//   // Maintain current index of sub-arrays and main array
//   let i, j, k;
//   i = 0;
//   j = 0;
//   k = p;

//   // Until we reach either end of either L or M, pick larger among
//   // elements L and M and place them in the correct position at A[p..r]
//   while (i < n1 && j < n2) {
//       if (L[i]['number'] <= M[j]['number']) {
//           arr[k] = L[i];
//           i++;
//       } else {
//           arr[k] = M[j];
//           j++;
//       }
//       k++;
//   }

//   // When we run out of elements in either L or M,
//   // pick up the remaining elements and put in A[p..r]
//   while (i < n1) {
//       arr[k] = L[i];
//       i++;
//       k++;
//   }

//   while (j < n2) {
//       arr[k] = M[j];
//       j++;
//       k++;
//   }
// }

// mergeSort(A:Array<object>, p:number, r:number){
//     if (p > r) 
//         return;
//     let q = (p+r)/2;
//     this.mergeSort(A, p, q);
//     this.mergeSort(A, q+1, r);
//     this.merge(A, p, q, r);
// }




merge = async(arr:Array<object>, l:number, m:number, r:number) =>
{
  let i = l;
  let j = m + 1;
  let tempArr:Array<object> = [];
  while(i <= m && j <= r)
  {
    if(arr[i]['number'] <= arr[j]['number'])
    {
      tempArr.push(arr[i]);
      i++;
    }
    else
    {
      tempArr.push(arr[j]);
      j++;
    }
  }

  while(i <= m)
    tempArr.push(arr[i++]);

  while(j <= r)
    tempArr.push(arr[j++]);

  for(let i = 0;i < tempArr.length;i++)
  {
    //await this.sleep(this.delaySpeed);
    

    //arr[l]['color'] = "blue";
    /*
    let targetIndex = tempArr[i];
    let temp = arr[targetIndex];
    arr[targetIndex] = arr[l]*/
    arr[l] = tempArr[i];
    arr[l++]['color'] = 'green';
    //l++;
  }
    
}

mergeSort = async(arr:Array<object>, l:number, r:number) =>
{
  if(l < r)
  {
    let m = Math.floor((l+r)/2)
    
      this.mergeSort(arr, l, m);
    //await this.sleep(this.delaySpeed);
    this.mergeSort(arr, m + 1, r);
    
    this.merge(arr, l, m, r);
    
    
  }
}


MergeSort = async(arr:Array<object>) =>{
  //let test = [];//Object.assign([], arr);
  //arr.forEach(val => test.push(Object.assign({}, val)));
  this.mergeSort(arr, 0, arr.length-1);

  //this.performSortSwapSteps(arr);
}




quicksort(A:Array<object>, lo: number, hi: number){
    if(lo < hi){
        let p = this.partition(A, lo, hi);
        this.quicksort(A, lo, p - 1)
        this.quicksort(A, p + 1, hi)
    }
}

partition(A:Array<object>, lo:number, hi:number){
    let pivot = A[hi];
    let i = lo;
    for(let j = lo; j <= hi;j++)
    {
      if(A[j] <pivot){
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
      }
    }
        
    let temp = A[i];
    A[i] = A[hi];
    A[hi] = temp;
    return i;
}

QuickSort(arr:Array<object>){
  //alert("asd");
  this.quicksort(arr, 0, arr.length-1);
}



/* to create MAX  array */  
heap_root = async(input, i, length) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < length && input[left]['number'] > input[max]['number']) {
        max = left;
    }

    if (right < length && input[right]['number'] > input[max]['number'])     {
        max = right;
    }

    if (max != i) {
        this.swap(input, i, max);
        //await this.sleep(this.delaySpeed);
        input[i]['color'] = "green";
        input[max]['color'] = "blue";
        /*await this.sleep(this.delaySpeed);
        input[i]['color'] = "blue";
        input[max]['color'] = "blue";
        await this.sleep(this.delaySpeed)
        this.swapNumbers(input, i, max, this.delaySpeed);
        input[max]['color'] = "red";
*/


        this.heap_root(input, max, length);
    }
}

 swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

sleep2(seconds) 
{
  let e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}
 heapSort = async(input) => {
    
    let array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        this.heap_root(input, i, array_length);
      }

    for (let i = input.length - 1; i > 0; i--) {
      
        /*this.sleep2(300);
        this.swap(input, 0, i);
*/

        await this.sleep(this.delaySpeed);
        input[0]['color'] = "blue";
        input[i]['color'] = "blue";
        await this.sleep(this.delaySpeed)
        this.swapNumbers(input, 0, i, this.delaySpeed);
        input[i]['color'] = "red";


        array_length--;
      
      
        this.heap_root(input, 0, array_length);
    }
}

shuffleArray(array:Array<any>): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  getRandomInt(min:number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  CalculateHeight(num:number): string {
   
  
    return num + "%";
  }

 

}
