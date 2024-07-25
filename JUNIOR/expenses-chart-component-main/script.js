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

  // const chartData = [
  //   { day: "mon", amount: 17 },
  //   { day: "tue", amount: 24 },
  //   { day: "wed", amount: 9 },
  //   { day: "thu", amount: 16 },
  //   { day: "fri", amount: 17 },
  //   { day: "sat", amount: 23 },
  //   { day: "sun", amount: 25 },
  // ];
  // console.log(chartData);


  const chartData = [
    { day: "mon", amount: 17 },
    { day: "tue", amount: 24 },
    { day: "wed", amount: 9 },
    { day: "thu", amount: 16 },
    { day: "fri", amount: 17 },
    { day: "sat", amount: 23 },
    { day: "sun", amount: 25 },
  ];

  // CHART SETUP

  function chartSetup() {
    if (!chartData || !chartData.length) {
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
  
  // CHART RENDER
  
  function chartRender() {
    if (!chartData || !chartData.length) {
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


  chartRender();
});


