(function ($) {
    // getLocation();
})(jQuery);

const weatherApiKey = '78a9b5a9fef7a695cb5c06e4a943c1f7';

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}

function getWeather(position) {
    positionMem = position;
	var theUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${weatherApiKey}&mode=html&lang=en`
	fetch(theUrl)
		.then(
			function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}

				// Examine the text in the response
				response.text().then(function (data) {
					document.getElementById('weather-widget').innerHTML = data;
					console.log(document.getElementById('weather-widget'));
					console.log(document.getElementById('weather-widget').querySelectorAll('div'));
					var allDivs = document.getElementById('weather-widget').querySelectorAll('div');
					// allDivs[0].innerHTML = '<div>Current weather</div>';
					allDivs[0].style.display = 'none';
					allDivs[7].style.display = 'none';
					allDivs[8].style.display = 'none';
					allDivs[9].style.display = 'none';
					allDivs[10].style.display = 'none';
					allDivs[11].style.display = 'none';
					allDivs[11].style['text-align'] = 'right';
					allDivs[11].style['margin-right'] = '15px';
					$("div[title=\"Current Temperature\"]").css("margin-top", '12px');
				});
			}
		)
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
}

var experienceYears = new Date().getFullYear() - 2016;
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
var currentAge = getAge('1990/05/29')