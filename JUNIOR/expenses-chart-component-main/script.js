"use strict";

const c = document.querySelector(".chart-container");
const cd = document.querySelectorAll(".chart-day");
const ci = document.querySelectorAll(".chart-item");
const ct = document.querySelector(".chart-total");
const cat = document.querySelector(".chart-total-amount");
const ctp = document.querySelector(".chart-total-percentage");
const ctc = document.querySelector(".chart-total-container");
const ctt = document.querySelector(".chart-total-title");
const catn = document.querySelector(".chart-total-number");
const ctpn = document.querySelector(".chart-total-percentage-number");
const ctps = document.querySelector(".chart-total-percentage-symbol");

// CHART DATA

const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// CHART SETUP



const chartSetup = () => {
  let total = 0;
  let percentage = 0;
  for (let i = 0; i < chartData.length; i++) {
    total += chartData[i].amount;
  }
  percentage = Math.round((total / 2000) * 100);
  ctpn.textContent = percentage;
  ctps.textContent = "%";
  catn.textContent = `$${total.toFixed(2)}`;
};

chartSetup();
