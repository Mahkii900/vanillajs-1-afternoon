console.log("The house always loses!")
const eleId = document.getElementById('idInput')
const colorSet = document.getElementById('colorInput')

function setCard() {
    const card = document.getElementById(eleId.value)
    card.style.color = colorSet.value
}

function resetCards() {
    document.getElementById('diamonds').style.color = 'gray'
    document.getElementById('hearts').style.color = 'gray'
    document.getElementById('clubs').style.color = 'gray'
    document.getElementById('spades').style.color = 'gray'
}