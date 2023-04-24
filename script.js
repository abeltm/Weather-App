 function getweather(){
      var city = document.getElementById("city").value;
     var appid = 'c2aaab2746c6d20f364a6b2535ae5a11';
    var requestWeather = $.ajax({
      dataType: 'json',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      data: {
        q: city,
        units: 'imperial',
        appid: appid
      }
});

requestWeather.done(function(data) {
  //console.log(data.name);
  console.log(data.weather[0]["icon"]);
  var temp = (data.main.temp-32)/ 1.8;
  var img= data.weather[0].icon;
  document.getElementById("search-city").innerHTML ='<div class="location"><img src="img/map.png"/>'+data.name+','+data.sys.country+'</div>'+
                                                    '<div class="temp"><div class="img"><img class="weather-img" src="http://openweathermap.org/img/w/'+img+'.png"/></div><div class="tempV">'+Math.round(temp)+'<span>°C</span></div></div>'+
                                                    '<div class="description">'+data.weather[0].description+'</div>'+
                                                    '<div></div>';
});
 }

function success(position) {
  var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   getcurrentweather(lat, lon);
}
function error() {
  alert('Sorry, no position available.');
}


const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

const watchID = navigator.geolocation.watchPosition(success, error, options);


 function getcurrentweather(latt, lonn){
     var appid = 'c2aaab2746c6d20f364a6b2535ae5a11';
    var requestCurrentWeather = $.ajax({
      dataType: 'json',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      data: {
        lat: latt,
        lon: lonn,
        units: 'imperial',
        appid: appid
      }
});
requestCurrentWeather.done(function(data) {
  var temp = (data.main.temp-32)/ 1.8;
  var c = "°C"; 
  var img= data.weather[0].icon;
  console.log(data.weather[0].icon);
  document.getElementById("current-city").innerHTML ='<div class="location"><img src="img/map.png"/>'+data.name+','+data.sys.country+'</div><div class="temp">'+Math.round(temp)+'<span>°C<span></div><div class="description"><img class="weather-img" src="http://openweathermap.org/img/w/'+img+'.png"/>'+data.weather[0].description+'</div>';
});
}


