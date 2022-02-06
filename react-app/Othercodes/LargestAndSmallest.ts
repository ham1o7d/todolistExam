

function findLargestAndSmallest(ArrOfNum: number[]) {

  let smallest: number= ArrOfNum[0], largest: number= ArrOfNum[0] ;

  for (let i: number=1; i< ArrOfNum.length; i++){
    ArrOfNum[i]< smallest ? smallest= ArrOfNum[i] :  largest= ArrOfNum[i] 
  }
  return [smallest, largest];
}

console.log(findLargestAndSmallest ( [1, 5, 40, 120, -1, -100, 100]) );