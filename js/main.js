let allDays = [];
let searchInput = document.getElementById("searchLocation");
searchInput.addEventListener("input", function (e) {
    let cname = (e.target.value);
    getData(cname);

})
async function getData(name) {
    var apiResp = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=d8fcb0a71b7346bfb10150941240301&q=${name}&days=3`
    );
    var finalResult = await apiResp.json();
    allDays = finalResult;
    displayCurrentDay();
    secondDay();
    Thirday();
}
getData("cairo");

function displayCurrentDay() {
    let dateString = allDays.forecast.forecastday[0].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString('default', {
        weekday: 'long'
    });
    let daynumber = dateObject.getDate();
    let month = dateObject.toLocaleDateString('default', {
        month: 'long'
    });
    document.querySelector(".dayName").innerHTML = day;
    document.querySelector(".dayDate").innerHTML = daynumber + month;
    document.querySelector(".location").innerHTML = allDays.location.name;
    document.querySelector(".degree").innerHTML = allDays.current.feelslike_c + "°C";
    document.querySelector(".discription").innerHTML = allDays.current.condition.text;
    let imgElement = document.querySelector(".img2");
    imgElement.src = allDays.current.condition.icon
}

function secondDay() {
    let dateString = allDays.forecast.forecastday[1].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString("default", {
        weekday: "long"
    });
    document.querySelector(".dayNameSecond").innerHTML = day;
    let imgElement = document.querySelector(".second-Image");
    imgElement.src = allDays.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".secondDegree").innerHTML = allDays.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.querySelector(".secondDegree31").innerHTML = allDays.forecast.forecastday[1].day.mintemp_c + "°C";
    document.querySelector(".secondDiscription").innerHTML = allDays.forecast.forecastday[1].day.condition.text;
}

function Thirday() {
    let dateString = allDays.forecast.forecastday[2].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString("default", {
        weekday: "long"
    });
    document.querySelector(".dayNameThird").innerHTML = day;
    let imgElement = document.querySelector(".thirdImage");
    imgElement.src = allDays.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".thirdDegree").innerHTML = allDays.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.querySelector(".thirdDegree41").innerHTML = allDays.forecast.forecastday[2].day.mintemp_c + "°C";
    document.querySelector(".thirdDiscription").innerHTML = allDays.forecast.forecastday[2].day.condition.text;
}