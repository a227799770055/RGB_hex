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



  red_value.innerHTML = `<span>${red_input.value}</span>`
  blue_value.innerHTML = `<span>${blue_input.value}</span>`
  green_value.innerHTML = `<span>${green_input.value}</span>`


  input_slider.addEventListener('mouseover', event => {
    if (event.target.matches("input")) {
      body.style = `background-color:rgb(${red_input.value},${green_input.value},${blue_input.value})`
      red_value.innerHTML = `<span>${red_input.value}</span>`
      blue_value.innerHTML = `<span>${blue_input.value}</span>`
      green_value.innerHTML = `<span>${green_input.value}</span>`
      color_panel.innerHTML = `<h1 style="background-color:rgb(145, 136, 136, 0.5)">RGB ={${red_input.value},${green_input.value},${blue_input.value}}</h1>`
    }
  })
})()

