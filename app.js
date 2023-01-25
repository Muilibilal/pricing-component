let myCheckbox = document.querySelector(".switch input"),
  duration = document.querySelector(".month"),
  price = document.querySelector(".price .pricefix"),
  switcher = document.querySelector(".switch"),
  range = document.querySelector(".myrange");

let data = [
  {
    range: 1,
    views: "10k",
    monthPrice: 8,
    yearPrice: 72,
  },
  {
    range: 2,
    views: "50k",
    monthPrice: 12,
    yearPrice: 108,
  },
  {
    range: 3,
    views: "100k",
    monthPrice: 16,
    yearPrice: 144,
  },
  {
    range: 4,
    views: "500k",
    monthPrice: 24,
    yearPrice: 216,
  },
  {
    range: 5,
    views: "1M",
    monthPrice: 36,
    yearPrice: 324,
  },
];
let pageViews = document.querySelector(".page-views span");

data.forEach((datum) => {
  // generate price on switch
  switcher.addEventListener("click", refresh);

  // generate price on range
  range.addEventListener("input", refresh);

  function refresh() {
    if (range.value == datum.range) {
      if (myCheckbox.checked == true) {
        price.textContent = datum.yearPrice;
      } else {
        price.textContent = datum.monthPrice;
      }

      pageViews.textContent = datum.views;
    }
  }
  refresh();
});
