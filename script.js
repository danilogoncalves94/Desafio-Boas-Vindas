function clicar() {
    let nome = window.prompt('Qual é o seu nome?')
    if (nome.length == 0) {
        alert('Por favor, insira seu nome.')
    } else {
        let idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
        if (idade.length == 0) {
            alert('Por favor, insira sua idade.')
        } else {
            let idadeReal = Number(idade)
            if (isNaN(idadeReal)) {
                alert(`Por favor, insira uma idade correta.`)
            } else {
                window.alert(`Acabei de conhecer o(a) ${nome}, que tem ${idade} anos de idade!`)
            }
        }
    }            
}