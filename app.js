//#region State

let notes = 0
let autoModifier = 0

let clickUpgrades = [
    {
        name: 'equipment',
        price: 50,
        quantity: 0,
        bonus: 3,
    },
    {
        name: 'producer',
        price: 80,
        quantity: 0,
        bonus: 15,
    },
];

let autoUpgrades = [
    {
        name: 'harrison',
        price: 500,
        quantity: 0,
        bonus: 20,
    },
    {
        name: 'studio',
        price: 2000,
        quantity: 0,
        bonus: 50,
    },
];


//#endregion State

//#region Logic

function mine() {
    notes += calcClickModifier()
    drawMine()
}

function autoMine() {
    notes += calcAutoModifier()
    drawMine()
}


function buyClickUpgrade(itemName) {
    const upgrade = clickUpgrades.find(item => item.name == itemName)


    if (notes < upgrade.price) {
        window.alert('cant buy this bro, get to clickin')
        return
    }

    notes -= upgrade.price
    upgrade.quantity++
    upgrade.price += Math.floor(upgrade.price * Math.random())


    drawClickUpgradeQuant()
    drawClickModifier()
    drawMine()
    drawClickPriceModifier()
    drawClickTotal()
}

function buyAutoUpgrade(itemName) {
    const upgrade = autoUpgrades.find(item => item.name == itemName)

    if (notes < upgrade.price) {
        window.alert('cant buy this bro, get to clickin')
        return
    }

    notes -= upgrade.price
    upgrade.quantity++
    upgrade.price += Math.floor(upgrade.price * Math.random())


    drawAutoUpgradeQuant()
    drawAutoModifier()
    drawMine()
    drawAutoPriceModifier()
    drawAutoTotal()

}

function autoIncrease() {
    for (let i = 0; i < autoUpgrades.length; i++) {
        let upgrade = autoUpgrades[i]
        if (upgrade.quantity > 0) {
            autoModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    }
    drawAutoModifier()
}

function calcClickTotal(){
    let total = 0
    for (let i = 0; i < clickUpgrades.length; i++){
        let upgrade = clickUpgrades[i]
        if (upgrade.quantity > 0){
            total += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    } return total
}

function calcAutoTotal(){
    let total = 0
    for (let i = 0; i < autoUpgrades.length; i++){
        let upgrade = autoUpgrades[i]
        if (upgrade.quantity > 0){
            total += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    } return total
}

function calcClickModifier() {
    let clickModifier = 1
    for (let i = 0; i < clickUpgrades.length; i++) {
        let upgrade = clickUpgrades[i]
        if (upgrade.quantity > 0) {
            clickModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    } return clickModifier
}

function calcAutoModifier() {
    let autoModifier = 0
    for (let i = 0; i < autoUpgrades.length; i++) {
        let upgrade = autoUpgrades[i]
        if (upgrade.quantity > 0) {
            autoModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    } return autoModifier
}


//#endregion Logic

//#region Graphics

function drawMine() {
    let notesElem = document.getElementById('vinyl')
    notesElem.innerText = notes.toString()
}


function drawClickUpgradeQuant() {
    for (let i = 0; i < clickUpgrades.length; i++) {
        const upgrade = clickUpgrades[i]
        const upgradeElem = document.getElementById(upgrade.name + 'Quantity')
        upgradeElem.innerHTML = upgrade.quantity.toString()
    }
}

function drawAutoUpgradeQuant() {
    for (let i = 0; i < autoUpgrades.length; i++) {
        const upgrade = autoUpgrades[i]
        const upgradeElem = document.getElementById(upgrade.name + 'Quantity')
        upgradeElem.innerHTML = upgrade.quantity.toString()
    }
}

function drawClickModifier() {
    let clickModifier = calcClickModifier()
    let ModElem = document.getElementById('clickModifier')
    ModElem.innerText = clickModifier.toString()

}

function drawAutoModifier() {
    let autoModifier = calcAutoModifier()
    let ModElem = document.getElementById('autoModifier')
    ModElem.innerText = autoModifier.toString()
}

function drawClickPriceModifier() {
    for (let i = 0; i < clickUpgrades.length; i++) {
        const upgrade = clickUpgrades[i]
        const priceElem = document.getElementById(upgrade.name + 'Price')
        priceElem.innerText = upgrade.price.toString()
    }
}

function drawAutoPriceModifier() {
    for (let i = 0; i < autoUpgrades.length; i++) {
        const upgrade = autoUpgrades[i]
        const priceElem = document.getElementById(upgrade.name + 'Price')
        priceElem.innerText = upgrade.price.toString()
    }
}

function drawClickTotal(){
    for (let i = 0; i < clickUpgrades.length; i++) {
        const upgrade = clickUpgrades[i]
        const totalElem = document.getElementById(upgrade.name + 'Total')
        totalElem.innerText = upgrade.quantity * upgrade.bonus
    }
}

function drawAutoTotal(){
    for (let i = 0; i < autoUpgrades.length; i++) {
        const upgrade = autoUpgrades[i]
        const totalElem = document.getElementById(upgrade.name + 'Total')
        totalElem.innerText = upgrade.quantity * upgrade.bonus
    }
}

setInterval(autoMine, 5000)
//#endregion Graphics






