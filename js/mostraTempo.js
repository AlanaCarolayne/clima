function mostraTempo(cidade){
 const secaoTempo = document.querySelector('#mostraClima');
    secaoTempo.innerHTML = ` <div class="temp-cidade">
    <h2 class="clima-cidade"> <i class="fa-solid fa-location-dot"></i> ${cidade.name}, ${cidade.sys.country
    }</h2>
    <h4 class="data-clima">${converteDia(cidade.timezone)}</h4>
</div>
<div class="clima-div">
    <div class="clima-div-img">
        <img src=" https://openweathermap.org/img/wn/${cidade.weather[0].icon}.png" alt="Tempo" class="img-clima">
        <h4 class="situacao-clima">${cidade.weather[0].description}</h4>
    </div>
    <div class="clima-div-info">

        <h2 class="temp-clima">${Math.floor(cidade.main.temp)} °C</h2>
        <h4 class="temp-max"><i class="fa-solid fa-arrow-up"></i> ${Math.floor(cidade.main.temp_max)} °C</h4>
        <h4 class="temp-min"><i class="fa-solid fa-arrow-down"></i> ${Math.floor(cidade.main.temp_min)} °C</h4>
    </div>
</div`



}
