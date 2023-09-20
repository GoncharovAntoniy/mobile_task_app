import "./style.scss";

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const price = document.querySelector(".slippers_info_item-right");
const date_time = "2023-09-22T22:37:00";

function timer_func() {
  const date = new Date();
  const newDate = new Date(date_time);
  const difference_date = newDate - date;

  let hour = Math.floor(difference_date / 1000 / 60 / 60);
  let minute = Math.floor((difference_date / 1000 / 60) % 60);
  let second = Math.floor((difference_date / 1000) % 60);

  hours.innerText = hour < 10 ? `0${hour}` : hour;
  minutes.innerText = minute < 10 ? `0${hour}` : minute;
  seconds.innerText = second < 10 ? `0${hour}` : second;

  if (date > newDate) {
    price.innerHTML =
      '<p class="slippers_info_item-right_old-price">R 250.00</p>';
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
  }
}

setInterval(() => {
  timer_func();
}, 1000);

let images = document.querySelectorAll(".images_mini_item");
let image = document.querySelector(".images_item");
let color_slippers = document.getElementById('select_color')


images.forEach((item) => {
    item.addEventListener("click", () => {
        images.forEach(i => {
            i.classList.remove('active')
            image.classList.remove(i.getAttribute('id'))
        })
        
        image.classList.add(item.getAttribute('id'))
        
        image.setAttribute("src", item.getAttribute("src"));

        item.classList.add("active");
  });
});

color_slippers.addEventListener('change', () => {
  let value = color_slippers.value
  image.setAttribute('src', `./${value}.png`)
} )

