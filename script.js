let clk = document.querySelectorAll(".box");
let flash_time = document.querySelector(".flash-right");
let flash_date = document.querySelector(".date");
let flash_day = document.querySelector(".day");

setInterval(function () {
  const time = new Date();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ss = time.getSeconds() * 6;
  let mm = time.getMinutes() * 6;
  let hh = time.getHours();
  let month = time.getMonth();
  let year = time.getFullYear();
  let date = time.getDate();
  let day = time.toLocaleString("en-us", { weekday: "long" });
  clk[0].textContent = hh;
  clk[1].style.transform =
    "translate(-15vw,-15vw) rotate(" + -(mm + 270) + "deg)";
  clk[2].style.transform =
    "translate(-22vw,-22vw) rotate(" + -(ss + 271) + "deg)";
  flash_time.textContent = hh + ":" + min + ":" + sec;
  flash_date.textContent = date + ":" + month + ":" + year;
  flash_day.textContent = day;
}, 1000);
