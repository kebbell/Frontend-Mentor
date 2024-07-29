
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const chartItems = document.querySelectorAll(".chart-item");

  const chartData = [
    { day: "mon", amount: 17 },
    { day: "tue", amount: 24 },
    { day: "wed", amount: 9 },
    { day: "thu", amount: 16 },
    { day: "fri", amount: 17 },
    { day: "sat", amount: 23 },
    { day: "sun", amount: 25 },
  ];

  function chartSetup() {
    let total = chartData.reduce((acc, data) => acc + data.amount, 0);
    let percentage = Math.round((total / 2000) * 100);

    document.querySelector(
      ".chart-total-number"
    ).textContent = `$${total.toFixed(2)}`;
    document.querySelector(
      ".chart-total-percentage-number"
    ).textContent = `${percentage}%`;
  }

  function chartRender() {
    chartItems.forEach((item, index) => {
      const amount = chartData[index].amount;
      item.style.height = `${(amount / 2000) * 100}%`; // Adjust the scale as needed

      const tooltip = item.querySelector(".tooltip");
      if (tooltip) {
        tooltip.textContent = chartData[index].amount;
      }
    });
  }

  window.addEventListener("load", chartSetup); // Adjust the scale as needed
  window.addEventListener("resize", chartRender);

  function reloadPageOnAnyClick(event) {
    if (event.target.classList.contains("chart-item")) {
      window.location.reload();
    }
  }

  document.addEventListener("click", reloadPageOnAnyClick);

  chartItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const tooltip = item.querySelector(".tooltip");
      if (tooltip) {
        tooltip.style.display = "block";
      }
    });
    item.addEventListener("mouseout", function () {
      const tooltip = item.querySelector(".tooltip");
      if (tooltip) {
        tooltip.style.display = "none";
      }
    });
  });

  chartRender();
});