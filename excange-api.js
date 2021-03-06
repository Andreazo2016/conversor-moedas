const showMoedaConversao = document.getElementById('show-moeda')
const inputValue = document.getElementById('input-value')
const select = document.getElementById('moedas')
const result = document.getElementById('show-result')
const btn = document.getElementById('btn-converter')



function calcularConversao(BRL) {
    return Number(BRL) * Number(inputValue.value)
}
function atualizarValoresNatela(BRL) {
    const valorConvertido = calcularConversao(BRL)
    result.innerHTML = `R$ ${valorConvertido.toLocaleString('pt-BR')}`
}
function extrairValorBRL(data) {
    const { BRL } = data.rates

    atualizarValoresNatela(BRL)
}
function buscarDadosPor(quotes) {
    const url = `https://api.exchangeratesapi.io/latest?base=${quotes}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            extrairValorBRL(data)
        })

}
showMoedaConversao.innerHTML = 'USD'


btn.addEventListener('click', function(){
    const { value } = select
    buscarDadosPor(value)
    showMoedaConversao.innerHTML = value
})

