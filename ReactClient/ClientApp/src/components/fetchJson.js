export const fetchJson = (callback) => {
    fetch('api/SampleData/WeatherForecasts', {
      method : 'GET',
      headers: {
        'Accept': 'application/application/json'
      }
    })
    .then(response => response.json())
    .then(data => callback(data));
};