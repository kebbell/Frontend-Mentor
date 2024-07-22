"use strict";

document.addEventListener("DOMContentLoaded", function() {

  const chartContainer = document.querySelector(".chart-container");
  const chartDays = document.querySelectorAll(".chart-day");
  const chartItems = document.querySelectorAll(".chart-item");
  const chartTotal = document.querySelector(".chart-total");
  const chartTotalAmount = document.querySelector(".chart-total-amount");
  const chartTotalPercentage = document.querySelector(".chart-total-percentage");
  const chartTotalContainer = document.querySelector(".chart-total-container");
  const chartTotalTitle = document.querySelector(".chart-total-title");
  const chartTotalNumber = document.querySelector(".chart-total-number");
  const chartTotalPercentageNumber = document.querySelector(".chart-total-percentage-number");
  const chartTotalPercentageSymbol = document.querySelector(".chart-total-percentage-symbol");

  // CHART DATA

  const scriptElement = document.querySelector("script[type='application/json']");
  let chartData = scriptElement ? JSON.parse(scriptElement.textContent) : null;
  console.log(chartData);

  // CHART SETUP

  function chartSetup() {
    if (!chartData) {
      console.log("chartData is not iterable");
      return;
    }
    let total = 0;
    let percentage = 0;
    for (const data of chartData) {
      total += data.amount;
    }
    percentage = Math.round((total / 2000) * 100);
    chartTotalNumber.textContent = `$${total.toFixed(2)}`;
    chartTotalPercentageNumber.textContent = `${percentage}%`;
  }

  chartSetup();

  if (!chartData) {
    console.log("chartData is not iterable");
    return;
  }

  chartData.forEach((data, index) => {
    const chartItemHeight = (data.amount / 2000) * 200; // Assuming the maximum amount is 2000 and the maximum height is 200px
    chartItems[index].style.height = `${chartItemHeight}px`;
    chartItems[index].setAttribute('data-tooltip', `$${data.amount.toFixed(2)}`);
  });

});

