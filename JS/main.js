var celTemp , farTemp;

function run(){
navigator.geolocation.getCurrentPosition(function(position){
  var lat=position.coords.latitude;
  var long=position.coords.longitude;
  
  
  
  $.ajax({
    type:"GET",
 url:"http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=44db6a862fba0b067b1930da0d769e98",
    
    success:function(data){
      $("#details").html(JSON.stringify(data.weather[0].icon));
    
    $("#city-name").html("<strong>"+data.name+",&nbsp&nbsp"+data.sys.country+"</strong>");
      
   var tempValue=data.main["temp"];
       celTemp=(tempValue-273.15);
      celTemp=celTemp.toFixed(2);
      farTemp=(celTemp*1.8)+32;
    $("#weather-type").html("<p>"+celTemp+"° <button id='abc' onclick='changetoF()'>C</button></p>");
      $("#abc").addClass("asText");
      var src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
      $("#weather-icon").attr("src",src);
    },
    dataType : "json"
    
  });
});
}

function changetoF(){
    $("#weather-type").html("<p>"+farTemp+" <button id='abc' onclick='changetoC()'>F</button></p>");
      $("#abc").addClass("asText");
}

function changetoC(){
    $("#weather-type").html("<p>"+celTemp+" °<button id='abc' onclick='changetoF()'>C</button></p>");
      $("#abc").addClass("asText");
}

run();