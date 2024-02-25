const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("لطفا وزن و قد خود را وارد کنید");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "کمبود وزن دارید";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "وزن متناسب دارید";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "اضافه وزن دارید";
  }
  if (BMI >= 30) {
    status = "  چاقی خطرناک دارید";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `نتیجه: شما <span id="comment">${status}</span>`;
});
