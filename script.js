const presentValue = document.getElementById("presentValue");
const interest = document.getElementById("interest");
const periods = document.getElementById("periods");
const futureValue = document.getElementById("futureValue");

const resultFutureValue = () => {
  const FUTURE_VALUE = Number(futureValue.value);
  const PRESENT_VALUE = Number(presentValue.value);
  const INTEREST = Number(interest.value) / 100;
  const PERIODS = Number(periods.value);
  if (!FUTURE_VALUE) {
    futureValue.disabled = true;
    futureValue.value = (PRESENT_VALUE * (1 + INTEREST) ** PERIODS).toFixed(2);
  } else if (!INTEREST) {
    interest.disabled = true;
    const PERIODS = Number(periods.value);
    interest.value = (
      ((FUTURE_VALUE / PRESENT_VALUE) ** (1 / PERIODS) - 1) *
      100
    ).toFixed(2);
  }
};

const calculateFutureValue = document.getElementById("calculateFutureValue");
calculateFutureValue.addEventListener("click", (e) => {
  e.preventDefault();
  resultFutureValue();
});
