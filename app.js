


//#region State

let notes = 0

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
    notes++
    drawMine()
    console.log('mined notes', notes);
}
    
function buyEquipment(){
    let equipment = clickUpgrades[0]
    equipment.quantity++
    notes -= equipment.price
    drawEquipQuant()
}

//#endregion Logic

//#region Graphics

function drawMine(){
    let notesElem = document.getElementById('vinyl')
    notesElem.innerText = notes.toString()
}

function drawEquipQuant (){
    const equipQuantity = clickUpgrades[0]
    let equipElem = document.getElementById('equipQuantity')
    equipElem.innerText = equipQuantity.quantity
    console.log('increase equip quant', equipQuantity.quantity, notes);
    
}

//#endregion Graphics






