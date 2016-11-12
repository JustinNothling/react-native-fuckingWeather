const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=62328e4464216d93be8e8d5590566f18'

export const fetchWeather = (lat,lon) => {
	const url = rootUrl+'&lat='+lat+"&lon="+lon+"&units=metric"
	console.log(url)

	return fetch(url)
		.then(res => res.json())
		.then(json => ({
			temp: json.main.temp,
			weather: json.weather[0].main
		}))
}