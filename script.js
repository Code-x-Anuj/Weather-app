fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By:- ${data.user.name} `
    })
    .catch(err => {
        const defaultImage = "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDE1NDAxMjR8&ixlib=rb-4.0.3&q=85" ;
        document.body.style.backgroundImage = `url("${defaultImage}")`
        document.getElementById("author").textContent = "By:- Sasha Freemind"
    })
       
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        showCryptoData(data);
    })
    .catch(err => console.error(err))    

    function showCryptoData (data) {
        const cryptoData = document.getElementById("crypto-top");
        cryptoData.innerHTML = `<img src = ${data.image.small}/>  
            <span>${data.name}</span>
        `
        document.getElementById("crypto-data").innerHTML += `
            <p>🎯: $ ${data.market_data.current_price.usd}</p>
            <p>👆: $ ${data.market_data.high_24h.usd}</p>
            <p>👇: $ ${data.market_data.low_24h.usd}</p>
        `
    };

function getCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('timeNow').textContent = timeString;
}

getCurrentTime(); // Initial call to display time immediately
setInterval(getCurrentTime, 1000); // Update every second

navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position);
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    const myLatitude = position.coords.latitude;
    const myLongitude = position.coords.longitude;
    
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&units=metric`)
    .then(res => {
        if(!res.ok){
            throw Error ("Sorry! weather data N/A")
        }
        return res.json();
    })
    .then(data => {console.log(data)
        console.log(data.name)
        // console.log(data.weather[0].icon)
        const imageUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // console.log(imageUrl)
        let temprature = Math.round(data.main.temp)
        document.getElementById("weather-top").innerHTML = `<img src = ${imageUrl} />  ${temprature}° `
        document.getElementById("myPlace").innerHTML = `  <img src = "gps.png" /> ${data.name} `

    })
    .catch(err => console.error(err))
    
});

  
