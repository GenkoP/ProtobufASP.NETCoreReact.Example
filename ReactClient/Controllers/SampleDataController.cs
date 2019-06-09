using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProtoBuf;

namespace ReactClient.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public ActionResult WeatherForecasts()
        {
            var rng = new Random();
            IEnumerable<WeatherForecast> weatherForecasts = Enumerable.Range(1, 10000).Select(index =>
            {
                var weatherForecast = new WeatherForecast();
                weatherForecast.DateFormatted = DateTime.Now.AddDays(index).ToString("d");
                weatherForecast.TemperatureC = index;
                weatherForecast.TemperatureF = 2 + (int)(weatherForecast.TemperatureC / 0.5556);
                weatherForecast.Summary = Summaries[0];

                return weatherForecast;
            }).ToList();

            return this.Ok(new WeatherForecastResult() { WeatherForecasts = weatherForecasts });
        }

        [ProtoContract]
        public class WeatherForecastResult
        {
            [ProtoMember(1)]
            public IEnumerable<WeatherForecast> WeatherForecasts { get; set; }
        }

        [ProtoContract]
        public class WeatherForecast
        {
            [ProtoMember(1)]
            public string DateFormatted { get; set; }

            [ProtoMember(2)]
            public int TemperatureC { get; set; }

            [ProtoMember(3)]
            public string Summary { get; set; }

            [ProtoMember(4)]
            public int TemperatureF { get; set; }
        }
    }
}
