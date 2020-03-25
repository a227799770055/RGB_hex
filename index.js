(function () {
  const red_input = document.querySelector("#red_input")
  const red_value = document.querySelector("#red_value")
  const blue_input = document.querySelector("#blue_input")
  const blue_value = document.querySelector("#blue_value")
  const green_input = document.querySelector("#green_input")
  const green_value = document.querySelector("#green_value")
  const input_slider = document.querySelector(".slider")
  const color_panel = document.querySelector("#color_panel")
  const body = document.querySelector("body")
  const hex_show = ""
  const hex = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: '5',
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  }



  red_value.innerHTML = `<span>${red_input.value}</span>`
  blue_value.innerHTML = `<span>${blue_input.value}</span>`
  green_value.innerHTML = `<span>${green_input.value}</span>`


  input_slider.addEventListener('mousemove', event => {
    if (event.target.matches("input")) {
      body.style = `background-color:rgb(${red_input.value},${green_input.value},${blue_input.value})`
      red_value.innerHTML = `<span>${red_input.value}</span>`
      blue_value.innerHTML = `<span>${blue_input.value}</span>`
      green_value.innerHTML = `<span>${green_input.value}</span>`
      color_panel.innerHTML = `<h1 style="background-color:rgb(145, 136, 136, 0.5)">RGB = #${hexTransfer(red_input.value)}${hexTransfer(green_input.value)}${hexTransfer(blue_input.value)}</h1>`
    }
  })

  function hexTransfer(value) {
    hex_first = hex[Math.floor(value / 16)]
    hex_second = hex[value % 16]
    return hex_first += hex_second
  }
})()

