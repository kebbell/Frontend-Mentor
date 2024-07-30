
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
  chartSetup();

  function chartRender() {
    chartItems.forEach((item, index) => {
      const amount = chartData[index].amount;
      const scaleFactor = 70 / 2000;
      const height = (amount * scaleFactor).toFixed(2) + "px";
      item.style.height = height;
    });
  }

  chartRender();

  window.addEventListener("load", chartSetup);
  window.addEventListener("resize", chartRender);

  function reloadPageOnAnyClick(event) {
    if (event.target.classList.contains("chart-item")) {
      window.location.reload();
    }
  }

  document.addEventListener("click", reloadPageOnAnyClick);
});

