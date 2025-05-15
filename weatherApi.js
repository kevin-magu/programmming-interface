async function getWeather(){
    const city = 'Nairobi';
    const apiKey = '20e452e33717426f8e8180400251505';

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();
        console.log(data)
        document.write(data.current.dewpoint_c)
    } catch (error) {
        document.write(error);
    }   
    
}
getWeather()