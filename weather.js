function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "cff9be77a7e7a27901b229714e32702d"
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
}

    
function onGeoError(){
        alert("Can't find you.")
    }

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);