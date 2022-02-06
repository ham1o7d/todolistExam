
function getPosision(gevinArray = [], posision = "") {
  const result = [];
  recursion(gevinArray, posision);
  function recursion(gevinArray = [], posision = "") {
    if (gevinArray.length > 0 && posision) {
      if (posision.toUpperCase() === "ODD") {
        result.push(gevinArray[gevinArray.length - 1]);
        gevinArray.splice(gevinArray.length - 2, 2);
        recursion(gevinArray, posision);
      } else if (posision.toUpperCase() === "EVEN") {
        gevinArray[gevinArray.length - 2] &&
          result.push(gevinArray[gevinArray.length - 2]);
        gevinArray.splice(gevinArray.length - 2, 2);
        recursion(gevinArray, posision);
      }
    }
  }
  return result.reverse();
}

const array = [111, 278, 378, 445, 507, 20, 78];

