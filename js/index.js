$(document).ready(function() {

  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    getWeather(lat, lon);
  });
  var temp;

  function getWeather(lat, lon) {
    var appId = "01ffc2b8227e5302ffa7f8555ba7738e";
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=" + appId;

    $.get(url, function(json) {
      temp = json.main.temp;
      temp = parseFloat((temp).toFixed(1));
      var place = json.name;
      $('#weather').append(temp);
      $('#location').append(place);
      var d = json.weather[0].description;
      $('#description').append(d);
      
    });
  };

  $('#fahren').click(function() {
    $('#weather').html(temp);
  });
  $('#cels').click(function() {
    var ctemp = (temp - 32) * (5 / 9);
    ctemp = parseFloat((ctemp).toFixed(1));
    $('#weather').html(ctemp);
  });
});