
// function mergeSortedArrays (array1, array2) {
//     const mergedArray = [];

//     // check the inputs
//     if(array1.length < 1 || array2.length < 1) {
//         return 'Wrong inputs';
//     }
//     let j = 0;
//     let length = array1.length + array2.length
//     let array2Item = array2[j];

//     for(i = 0; i < array1.length; i++) {
//         var array1Item = array1[i];
//         if(array1Item < array2Item) { 
//             mergedArray.push(array1Item);

//         } else if(array1Item > array2Item){
//             mergedArray.push(array2Item);

//         } else {
//             mergedArray.push(array1Item);
//             mergedArray.push(array2Item);
//         }
//         j++;
//     }
//     return mergedArray;
// }


// console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));




function mergeSortedArrays(array1, array2){
    const mergedArray = [];

    // We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
        return array2;
    }

    if(array2.length === 0) {
        return array1;
    }
      
    let array1Item = array1[0]; // 0
    let array2Item = array2[0]; // 1 
    let i = 1;
    let j = 1;
    
    while (array1Item || array2Item){
        console.log('array1Item : ' + array1Item);
        console.log('array2Item : ' + array2Item);
        console.log('----------')
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    console.log(mergedArray);
    return mergedArray;
  }
  
  mergeSortedArrays([0,3,4,7], [1,2,5,6]); //0 1 2 3 4 5 6 7
  