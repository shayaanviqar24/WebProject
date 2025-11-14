document.getElementById("convertBtn").addEventListener("click", convert);

function convert() {
  let temp = document.getElementById("temp").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result = document.getElementById("result");

  if (temp === "") {
    result.innerHTML = "Please enter a value!";
    return;
  }

  temp = parseFloat(temp);
  let converted;

  if (from === to) converted = temp;
  else if (from === "C" && to === "F") converted = (temp * 9/5) + 32;
  else if (from === "C" && to === "K") converted = temp + 273.15;
  else if (from === "F" && to === "C") converted = (temp - 32) * 5/9;
  else if (from === "F" && to === "K") converted = ((temp - 32) * 5/9) + 273.15;
  else if (from === "K" && to === "C") converted = temp - 273.15;
  else if (from === "K" && to === "F") converted = ((temp - 273.15) * 9/5) + 32;

  result.innerHTML = `Converted Value: ${converted.toFixed(2)} °${to}`;
}
