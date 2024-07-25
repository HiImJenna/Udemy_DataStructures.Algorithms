
function mergeSortedArrays (array1, array2) {
    const mergedArray = [];
    for(i = 0; i < array1.length; i++) {
        mergedArray.push(array1[i]);
    }

    for(j = 0; j < array2.length; j++) {
        mergedArray.push(array2[j]);
    }
    console.log(mergedArray)
    return mergedArray;
}


mergeSortedArrays([0,3,4,31], [3,4,6,30]);