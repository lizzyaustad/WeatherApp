$(document).ready(function() {
 
  var lat = 87;
  var lon = 100;
  
  $.get("http://freegeoip.net/json/", function(response) {
    lat = response.latitude;
    lon = response.longitude;
    console.log(lat + "," + lon);
    getWeather(lat, lon);
}, "jsonp");
  
  
  
  var temp;
  var min;
  var max;

  function getWeather(lat, lon) {
    var appId = "01ffc2b8227e5302ffa7f8555ba7738e";
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=" + appId;

    $.get(url, function(json) {
     
      temp = json.main.temp;
      console.log(temp);
      temp = parseFloat((temp).toFixed(1));
      min = json.main.temp_min;
      min = parseFloat((min).toFixed(1));
      max = json.main.temp_max;
      max = parseFloat((max).toFixed(1));
      var place = json.name;
      $('#weather').append(temp);
      $('#low').html(min);
      $('#high').html(max);
      $('#location').append(place);
      var d = json.weather[0].description;
      var m = json.weather[0].main;
      $('#description').append(d);
      if (m == "Snow") {
        var imageUrl = "https://www.harpcolumn.com/wp-content/uploads/2014/11/Snow-row.jpg";
        $('html').css('background-image', 'url("' + imageUrl + '")');
        $('html').css('background-size', 'cover');
      }

      if (m=="Mist") {
        var imageUrl = "http://wheelstreet.in/blog/wp-content/uploads/2015/04/home005-1.jpg";
        $('html').css('background-image', 'url("' + imageUrl + '")');
        $('html').css('background-size', 'cover');
      }

      if (m == "Clear") {
        var imageUrl = "http://p1.pichost.me/i/68/1924612.jpg";
        $('html').css('background-image', 'url("' + imageUrl + '")');
        $('html').css('background-size', 'cover');
      }

      if (m == "Rain") {
        var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rain_on_window_pane_P1320871.jpg";
        $('html').css('background-image', 'url("' + imageUrl + '")');
        $('html').css('background-size', 'cover');
      }

      if (m == "Clouds") {
        var imageUrl = "http://orig14.deviantart.net/5563/f/2010/209/7/8/cloudy_day_stock_3_by_veronicake.jpg";
        $('html').css('background-image', 'url("' + imageUrl + '")');
        $('html').css('background-size', 'cover');
      }
    });
  };

  $('#fahren').click(function() {
    $('#fahren').css("background", "azure");
    $('#cels').css("background", "darkgray");
    $('#weather').html(temp);
    $('#low').html(min);
    $('#high').html(max);
  });
  $('#cels').click(function() {
    $('#fahren').css("background", "darkgray");
    $('#cels').css("background", "azure");
    var ctemp = (temp - 32) * (5 / 9);
    ctemp = parseFloat((ctemp).toFixed(1));
    $('#weather').html(ctemp);
    var cmin = (min - 32) * (5 / 9);
    cmin = parseFloat((cmin).toFixed(1));
    var cmax = (max - 32) * (5 / 9);
    cmax = parseFloat((cmax).toFixed(1));
    $('#high').html(cmax);
    $('#low').html(cmin);
  });
});
