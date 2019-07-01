console.log("The house always loses!")
const eleId = document.getElementById('idInput')
const colorSet = document.getElementById('colorInput')

function setCard() {
    const card = document.getElementById(eleId.value)
    card.style.color = colorSet.value
}

