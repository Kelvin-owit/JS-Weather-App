// alert("working");
function load() {
  var loc = city.value;

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=e756d1a82d19413cb2e82334232002&q=${loc}&aqi=no`
  )
    .then((x) => x.json())
    .then((y) => {
      console.log(y);
      currentWeather.innerHTML = y.current.condition.text;
      icon.src = y.current.condition.icon;
    });
}
