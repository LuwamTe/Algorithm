function pushAllZeroes(array) {
    let noneZeroes=0;
    let x=array.length-1;
   let  arr1=[];
   for (let i = 0; i < array.length; i++) {
   if (array[i]!==0) {
    arr1[noneZeroes]=array[i]
    noneZeroes++
   }else{
    arr1[x]=0
    x--
   }
   }
   return arr1;
}
console.log(pushAllZeroes([0,0,0,3,5,7]));