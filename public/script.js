const presentValue = document.getElementById("presentValue");
const interest = document.getElementById("interest");
const periods = document.getElementById("periods");
const futureValue = document.getElementById("futureValue");
const calculateFutureValue = document.getElementById("calculateFutureValue");
const cleanWindow = document.getElementById("cleanWindow");

const resultFutureValue = () => {
  const FUTURE_VALUE = Number(futureValue.value);
  const PRESENT_VALUE = Number(presentValue.value);
  const INTEREST = Number(interest.value) / 100;
  const PERIODS = Number(periods.value);
  if (!PERIODS && !PRESENT_VALUE && !INTEREST && !FUTURE_VALUE) {
    alert("digitar datos.");
  } else if (!FUTURE_VALUE) {
    futureValue.value = (PRESENT_VALUE * (1 + INTEREST) ** PERIODS).toFixed(2);
  } else if (!INTEREST) {
    const PERIODS = Number(periods.value);
    interest.value = (
      ((FUTURE_VALUE / PRESENT_VALUE) ** (1 / PERIODS) - 1) *
      100
    ).toFixed(2);
  } else if (!PRESENT_VALUE) {
    presentValue.value = (FUTURE_VALUE / (1 + INTEREST) ** PERIODS).toFixed(2);
  } else if (!PERIODS) {
    periods.value = (
      Math.log(FUTURE_VALUE / PRESENT_VALUE) / Math.log(1 + INTEREST)
    ).toFixed(0);
  }
};

const cleanAll = () => {
  futureValue.value = null;
  presentValue.value = null;
  interest.value = null;
  periods.value = null;
};

calculateFutureValue.addEventListener("click", (e) => {
  e.preventDefault();
  resultFutureValue();
});

cleanWindow.addEventListener("click", (e) => {
  e.preventDefault();
  cleanAll();
});
