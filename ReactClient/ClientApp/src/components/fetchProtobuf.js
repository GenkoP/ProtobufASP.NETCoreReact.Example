import { Root, Type, Field } from 'protobufjs';

export const protobufFetch = (callback) => {
  const WeatherForecastType = new Type('WeatherForecast');
  WeatherForecastType.add(new Field('dateFormatted', 1, 'string'))
    .add(new Field('temperatureC', 2, 'int32'))
    .add(new Field('summary', 3, 'string'))
    .add(new Field('temperatureF', 4, 'int32'));

  const WeatherForecastResultType = new Type('WeatherForecastResult');
  WeatherForecastResultType.add(new Field('weatherForecasts', 1, 'WeatherForecast', 'repeated'));

  const root = new Root()
    .define('weatherforecastresultpackage').add(WeatherForecastResultType)
    .define('weatherforecastpackage').add(WeatherForecastType);

  const WeatherForecastResult = root.lookupType('weatherforecastresultpackage.WeatherForecastResult');

  fetch('api/SampleData/WeatherForecasts', {
    method: 'GET',
    headers: {
      'Accept': 'application/x-protobuf'
    }
  })
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const data = WeatherForecastResult.decode(new Uint8Array(buffer));
      callback(data);
    });
}