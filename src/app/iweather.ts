export interface Iweather {
    clouds: number;
    time: number;
    date?: string;
    humitidy: number;
    temp: number;
    tempMin: number;
    tempMax: number;
    name: string;
    description: string;
    windDirection: string;
    windSpeed: number;
    forcast?: Array<Iweather>;
}


/* var temp = x.main.temp - 273.15;
var temp2 = 9 / 5;
temp = temp * temp2;
temp = temp + 32;

temp = parseInt(temp, 10);

        d = new Date(x.list[i].dt * 1000);
        gh = d.getHours();
*/
