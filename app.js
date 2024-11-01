


//#region State

let notes = 0
// let clickModifier = 1
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

function mine(){
    // notes += calcClickModifier()
    notes += calcAutoModifier()
    drawMine()
}


function buyClickUpgrade(itemName){
    const upgrade = clickUpgrades.find(item => item.name == itemName)
    upgrade.quantity++
    notes -= upgrade.price

    drawClickUpgradeQuant()
    drawClickModifier()
}

function buyAutoUpgrade(itemName){
    const upgrade = autoUpgrades.find(item => item.name == itemName)
    upgrade.quantity++
    notes -= upgrade.price

    drawAutoUpgradeQuant()
    drawAutoModifier()
}

// function buyHarrison(){
//     let harrison = autoUpgrades[0]
//     harrison.quantity++
//     notes -= harrison.price
//     drawHarrisonQuant()
//     autoIncrease()
// }
// function buyStudio(){
//     let studio = autoUpgrades[1]
//     studio.quantity++
//     notes -= studio.price
//     drawStudioQuant()
//     autoIncrease()

// }


function autoIncrease (){
    for(i = 0; i < autoUpgrades.length; i++){
        let upgrade = autoUpgrades[i]
        if(upgrade.quantity > 0){
        autoModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    }
    console.log('auto increase', autoModifier);
    drawAutoModifier()
}

function calcClickModifier(){
    let clickModifier = 1
    for(i = 0; i < clickUpgrades.length; i++){
        let upgrade = clickUpgrades[i]
        if(upgrade.quantity > 0){
        clickModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        } 
    } return clickModifier
}

function calcAutoModifier(){
    let autoModifier = 0
    for(i = 0; i < autoUpgrades.length; i++){
        let upgrade = autoUpgrades[i]
        if(upgrade.quantity > 0){
        autoModifier += Math.floor(upgrade.quantity * upgrade.bonus)
        }
    } return autoModifier
}

//#endregion Logic

//#region Graphics

function drawMine(){
    let notesElem = document.getElementById('vinyl')
    notesElem.innerText = notes.toString()
}


function drawClickUpgradeQuant(){
    for(let i = 0; i < clickUpgrades.length; i++) {
        const upgrade = clickUpgrades[i]
        const upgradeElem = document.getElementById(upgrade.name + 'Quantity')
        upgradeElem.innerHTML = upgrade.quantity.toString()
        console.log('upgradeElm', upgradeElem);
    }
    
}

function drawAutoUpgradeQuant(){
    for(let i = 0; i < autoUpgrades.length; i++) {
        const upgrade = autoUpgrades[i]
        const upgradeElem = document.getElementById(upgrade.name + 'Quantity')
        upgradeElem.innerHTML = upgrade.quantity.toString()
}
}

// function drawHarrisonQuant (){
//     const HarrisonQuantity = autoUpgrades[0]
//     let HarrisonElem = document.getElementById('harrisonQuantity')
//     HarrisonElem.innerText = HarrisonQuantity.quantity.toString()
    
// }
// function drawStudioQuant (){
//     const StudioQuantity = autoUpgrades[1]
//     let StudioElem = document.getElementById('studioQuantity')
//     StudioElem.innerText = StudioQuantity.quantity.toString()
// }


function drawClickModifier(){
    let clickModifier = calcClickModifier()
    let ModElem = document.getElementById('clickModifier')
    ModElem.innerText = clickModifier.toString()
 
}

function drawAutoModifier(){
    let autoModifier = calcAutoModifier()
    let ModElem = document.getElementById('autoModifier')
    ModElem.innerText = autoModifier.toString()
    console.log('auto increase', autoModifier);
}

//#endregion Graphics






