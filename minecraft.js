'use strict'




const matrix = [
    [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 6, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 6, 6, 0, 0],
    [0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 0, 0, 6, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0],
    [0, 0, 0, 0, 4, 4, 4, 0, 4, 4, 4, 0, 0, 0, 4, 4, 4, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 4, 4, 4, 0, 0, 0, 4, 4, 4, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 5, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 5, 5, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


const matrixContainer = document.querySelector(".matrix")

const materials = {
    0: 'sky',
    1: 'ground',
    2: 'grass',
    3: 'wood',
    4: 'leaves',
    5: 'diamond',
}

function drawTextures() {
    //Creating divs(elements) inside matrixContainer(".matrix")
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const div = document.createElement("div");
            div.classList.add('element')
            matrixContainer.appendChild(div)
            //Finding values in object and their amount
            const valueMaterial = materials[matrix[row][col]]
            switch (matrix[row][col]) {
                //Add classes to div(div) in specific position in 2D array
                case 1:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                case 2:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                case 3:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                case 4:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                case 5:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                case 0:
                    div.classList.add(valueMaterial)
                    div.setAttribute('indexI', row)
                    div.setAttribute('indexJ', col)
                    break;
                default:
                    break;
            }
        }
    }

}
drawTextures()





//TOOLS
const axe = document.querySelector('.axe')
const pickaxe = document.querySelector('.pickaxe')
const shovel = document.querySelector('.shovel')
const tiles = document.querySelectorAll('.element')
//Inventory Blocks
const woodInv = document.querySelector('.woodInv')
const leavesInv = document.querySelector('.leavesInv')
const groundInv = document.querySelector('.groundInv')
const diamondInv = document.querySelector('.diamondInv')

//span
const woodSpan = document.querySelector('.woodInv > span')
const leavesSpan = document.querySelector('.leavesInv > span')
const groundSpan = document.querySelector('.groundInv > span')
const diamondSpan = document.querySelector('.diamondInv > span')

const tools = [axe, pickaxe, shovel]
//Inventory Counter
const bag = {

    woodCount: 0,
    leavesCount: 0,
    groundCount: 0,
    diamondCount: 0,

}
// ---------------------------------------------------------------Pick Tool and Destroy blocks --------------------------------------------------
shovel.addEventListener('click', (e) => {
    e.currentTarget.setAttribute('id', 'active')
    pickaxe.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')


    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {

            if ((e.currentTarget.classList.contains('grass') ||
                e.currentTarget.classList.contains('ground')) &&
                shovel.getAttribute('id') === 'active') {
                e.currentTarget.classList.remove('ground', 'grass')
                e.currentTarget.classList.add('sky')
                groundSpan.innerHTML = ++bag.groundCount

            }

        })
    })
})
pickaxe.addEventListener('click', (e) => {
    e.currentTarget.setAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')

    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('diamond') &&
                pickaxe.getAttribute('id') === 'active') {

                e.currentTarget.classList.remove('diamond')
                e.currentTarget.classList.add('sky')
                diamondSpan.innerHTML = ++bag.diamondCount

            }

        })
    })
})
axe.addEventListener('click', (e) => {
    e.currentTarget.setAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')
    pickaxe.removeAttribute('id', 'active')

    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if ((e.currentTarget.classList.contains('leaves') ||
                e.currentTarget.classList.contains('wood')) &&
                axe.getAttribute('id') === 'active') {

                if (e.currentTarget.classList.contains('wood')) {
                    woodSpan.innerHTML = ++bag.woodCount
                } else if (e.currentTarget.classList.contains('leaves')) {
                    leavesSpan.innerHTML = ++bag.leavesCount
                }


                e.currentTarget.classList.remove('leaves', 'wood')
                e.currentTarget.classList.add('sky')

            }
        })
    })
})

//--------------------------------------------------------------Pick Block and Create--------------------------------------------------


woodInv.addEventListener('click', (e) => {
    console.log(woodInv);
    e.currentTarget.setAttribute('id', 'active')

    pickaxe.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')

    leavesInv.removeAttribute('id', 'active')
    diamondInv.removeAttribute('id', 'active')
    groundInv.removeAttribute('id', 'active')
    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('sky') && (woodSpan.innerHTML > 0) && (woodInv.getAttribute('id') === 'active')) {
                woodSpan.innerHTML = --bag.woodCount
                e.currentTarget.classList.remove('sky')
                e.currentTarget.classList.add('wood')
            }
        })
    })
})
groundInv.addEventListener('click', (e) => {
    console.log(groundInv);
    e.currentTarget.setAttribute('id', 'active')

    pickaxe.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')

    woodInv.removeAttribute('id', 'active')
    leavesInv.removeAttribute('id', 'active')
    diamondInv.removeAttribute('id', 'active')

    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('sky') && (groundSpan.innerHTML > 0) && (groundInv.getAttribute('id') === 'active')) {
                groundSpan.innerHTML = --bag.groundCount
                e.currentTarget.classList.remove('sky')
                e.currentTarget.classList.add('ground')
            }
        })
    })
})
leavesInv.addEventListener('click', (e) => {
    console.log(leavesInv);
    e.currentTarget.setAttribute('id', 'active')

    pickaxe.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')

    woodInv.removeAttribute('id', 'active')
    diamondInv.removeAttribute('id', 'active')
    groundInv.removeAttribute('id', 'active')
    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('sky') && (leavesSpan.innerHTML > 0) && (leavesInv.getAttribute('id') === 'active')) {
                leavesSpan.innerHTML = --bag.leavesCount
                e.currentTarget.classList.remove('sky')
                e.currentTarget.classList.add('leaves')
            }
        })
    })
})
diamondInv.addEventListener('click', (e) => {
    console.log(diamondInv);
    e.currentTarget.setAttribute('id', 'active')
    pickaxe.removeAttribute('id', 'active')
    axe.removeAttribute('id', 'active')
    shovel.removeAttribute('id', 'active')

    woodInv.removeAttribute('id', 'active')
    leavesInv.removeAttribute('id', 'active')
    groundInv.removeAttribute('id', 'active')
    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('sky') && (diamondSpan.innerHTML > 0) && (diamondInv.getAttribute('id') === 'active')) {
                diamondSpan.innerHTML = --bag.diamondCount
                e.currentTarget.classList.remove('sky')
                e.currentTarget.classList.add('diamond')
            }
        })
    })
})

const main = document.querySelector('.main')
const landPage = document.querySelector('#landing-page')
const start = document.querySelector('.start-btn')

start.addEventListener('click', () => {
    landPage.style.display = 'none'
    main.style.display ='flex'
})
































// function pickTool(tools) {
//     tools.forEach(tool => {
//         tool.addEventListener('click', (e) => {
//             if (e.currentTarget)
//                 tool.setAttribute('id', 'activeTool')
//             else {

//                 tool.removeAttribute('id', 'activeTool')
//             }
//             console.log(e.currentTarget);
//             tiles.forEach(tile => {
//                 tile.addEventListener('click', (e) => {
//                     if ((e.currentTarget.classList.contains('grass') ||
//                         e.currentTarget.classList.contains('ground')) &&
//                         (tool.getAttribute('id') === 'activeTool') &&
//                         (tool === shovel)) {
//                         e.currentTarget.classList.remove('ground', 'grass')
//                         e.currentTarget.classList.add('sky')
//                     }
//                     if (e.currentTarget.classList.contains('diamond') &&
//                         (tool.getAttribute('id') === 'activeTool') &&
//                         (tool === pickaxe)) {
//                         console.log(e.currentTarget);
//                         e.currentTarget.classList.remove('diamond')
//                         e.currentTarget.classList.add('sky')
//                     }
//                 })
//             })
//         })
//     })
// }
// pickTool(tools)


