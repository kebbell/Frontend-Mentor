"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const chartItems = document.querySelectorAll(".chart-item");

  const chartData = [
    { day: "mon", amount: 57.00 },
    { day: "tue", amount: 29.90 },
    { day: "wed", amount: 50.20 },
    { day: "thu", amount: 85.80 },
    { day: "fri", amount: 57.90 },
    { day: "sat", amount: 67.90 },
    { day: "sun", amount: 24.80 },
  ];

  function chartSetup() {
    const maxAmount = Math.max(...chartData.map(data => data.amount));
    chartItems.forEach((item, index) => {
      const amount = chartData[index].amount;
      const height = (amount / maxAmount) * 150; // Increase the multiplier for larger height
      item.style.height = `${height}px`;
      item.dataset.tooltip = `$${amount.toFixed(2)}`;
    });
  }

  chartSetup();

  window.addEventListener("resize", chartSetup);
});


