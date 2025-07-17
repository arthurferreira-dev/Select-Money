function getValue(id) {
    const select = document.getElementById(id);
    const Option = select.options[select.selectedIndex]
    var value = Option.value;
    //console.log('Return function \'getValue()\':', value)
    return value;
}

function getInput(id) {
    const InputElement = document.getElementById(id);
    const InputValue = InputElement.value;
    const Input = Number(InputValue);
    //console.log('Return function \'getInput()\':', Input)
    return Input;
}

function dollar(money) {
    let lang = 'pt-BR'
    let din = 'USD'
    let x = Intl.NumberFormat(`${lang}`, {style: "currency", currency: `${din}`}).format(money)
    return x
}

function real(dinheiro) {
    let lang = 'pt-BR'
    let din = 'BRL'
    let x = Intl.NumberFormat(`${lang}`, { style: "currency", currency: `${din}` }).format(dinheiro)
    return x;
}

function euro(dinero) {
    let lang = 'pt-BR'
    let din = 'EUR'
    let x = Intl.NumberFormat(`${lang}`, { style: "currency", currency: `${din}` }).format(dinero)
    return x;
}

function Enviar() {
    let res = document.getElementById('res')
    let dindin = getInput('money-added').toFixed(2)
    let cambioEuro = 6.44
    let cambioDolar = 5.55
    let cambioReal = 0.16

    if (getValue('money-select') === 'real' && getValue('money-convert') === 'realC') {
        res.innerHTML = 'Coloque uma moeda diferente!'
        res.style.display = 'block'
    } else if (getValue('money-select') === 'euro' && getValue('money-convert') === 'euroC') {
        res.innerHTML = 'Coloque uma moeda diferente!'
        res.style.display = 'block'
    } else if (getValue('money-select') === 'dolar' && getValue('money-convert') === 'dolarC') {
        res.innerHTML = 'Coloque uma moeda diferente!'
        res.style.display = 'block'
    }

    if (getValue('money-select') === 'real' && getValue('money-convert') === 'euroC') { // real --> euro
        let Euro = dindin / cambioEuro // correção de intercâmbio
        let euRo = Euro.toFixed(2)
        res.innerHTML = `Com <strong>${real(dindin)}</strong> você pode comprar <strong>${euro(euRo)}</strong>`
        res.style.display = 'block'
    } else if (getValue('money-select') === 'real' && getValue('money-convert') === 'dolarC') { // real --> dolar
        let Dolar = dindin / cambioDolar // correção de intercâmbio
        let dOlar = Dolar.toFixed(2)
        res.innerHTML = `Com <strong>${real(dindin)}</strong> você pode comprar <strong>${dollar(dOlar)}</strong>`
        res.style.display = 'block'
    } else if (getValue('money-select') === 'euro' && getValue('money-convert') === 'realC') { // euro --> real
        let Real = dindin / cambioEuro + 0.01 // correção de intercâmbio
        let rEal = Real.toFixed(2)
        res.innerHTML = `Com <strong>${euro(dindin)}</strong> você pode comprar <strong>${real(rEal)}</strong>`
        res.style.display = 'block'
    } else if (getValue('money-select') === 'dolar' && getValue('money-convert') === 'realC') { // dolar --> real
        let Real = dindin / cambioDolar
        let rEal = Real.toFixed(2)
        res.innerHTML = `Com <strong>${dollar(dindin)}</strong> você pode comprar <strong>${real(rEal)}</strong>`
        res.style.display = 'block'
    } else if (getValue('money-select') === 'euro' && getValue('money-convert') === 'dolarC') { // euro --> dolar
        let Dolar = dindin / 1.16
        let dOlar = Dolar.toFixed(2)
        res.innerHTML = `Com <strong>${euro(dindin)}</strong> você pode comprar <strong>${dollar(dOlar)}</strong>`
        res.style.display = 'block'
    } else if (getValue('money-select') === 'dolar' && getValue('money-convert') === 'euroC') { // dolar --> euro
        let Euro = dindin / 0.86
        let eUro = euro.toFixed(2)
        res.innerHTML = `Com <strong>${dollar(dindin)}</strong> você pode comprar <strong>${euro(eUro)}</strong>`
        res.style.display = 'block'
    }
}