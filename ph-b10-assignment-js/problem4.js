const rajib = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};

function calculateFinalScore(rajib) {
  console.log(rajib);
  if (typeof rajib !== "object") {
    return "Invalid Input";
  } else if (
    typeof rajib.name !== "string" ||
    typeof rajib.testScore !== "number" ||
    typeof rajib.schoolGrade !== "number" ||
    rajib.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  sum = rajib.testScore + rajib.schoolGrade;
  if (rajib.isFFamily === true) {
    sum = sum + 20;
  }
  if (sum > 80) {
    return true;
  } else {
    return false;
  }
}

let admit = calculateFinalScore(rajib);
console.log(admit);
