const key = '9cfb4b9e68d23eb3844f85fdaacf69fc';
const linguagem = 'pt_br'
const cidade = []
async function buscaCidade(cidade) {
    const res =  await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=${linguagem}&units=metric`);
    cidade =  await res.json();
    console.log(cidade);

    mostraTempo(cidade)
}