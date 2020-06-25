let center_block = document.getElementById("centerBlock");
document.getElementById("setRed").addEventListener("click", () => center_block.style.backgroundColor = "#f44336") // сокращенная(аннонимная функция)
                                                                            // function() {center_block.style.backgroundColor = "#f44336"}) // длинный функция
document.getElementById("setBlue").addEventListener("click", () => center_block.style.backgroundColor = "#03a9f4")
document.getElementById('setGreen').addEventListener('click', () => center_block.style.backgroundColor = "#4caf50")
document.getElementById('setDefault').addEventListener("click", () => center_block.style.backgroundColor = "#e0e0e0")
document.getElementById('setOrange').onclick = (event) =>
{center_block.style.backgroundColor = "#ff5722"; console.log(event)};

//       найти элемент      I  id - элемента     I   onclick остается навсегда I ()=> Не заданная функция[упращенный код]