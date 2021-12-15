// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// // Adding a pine tree

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


// // tree
// let tree = document.createElement('img')
// tree.src = 'assets/tree.png'
// tree.style.position = 'fixed'
// tree.style.left = '200px'
// tree.style.bottom = '100px'
// document.body.append(tree)
// // // adding pillar
// let pillar = document.createElement('img')
// pillar.src = 'assets/pillar.png'
// pillar.style.position = 'fixed'
// pillar.style.left = '350px'
// pillar.style.bottom = '100px'
// document.body.append(pillar)
// // adding crate
// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)
// // adding well
// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)
// // adding sword function
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function () {
//     sword.remove()
// })

// // assets/shield.png (165px from the left, 185px from the bottom)
// // assets/staff.png (600px from the left, 100px from the bottom)
// // adding shield
// let shield = document.createElement('img')
// shield.src = 'assets/sheild.png'
// shield.style.position = "fixed"
// shield.style.left = '165px'
// shield.style.bottom = '185px'
// document.body.append(shield)
// // adding staff
// let staff = document.createElement('img')
// staff.src = 'assets/staff.png'
// staff.style.position = 'fixed'
// staff.style.left = '600px'
// staff.style.bottom = '100px'
// document.body.append(staff)
// // other images
// const images = [
//     './assets/tree.png',
//     './assets/pillar.png',
//     './assets/crate.png',
//     './assets/well.png'
// ]
// // // (200px from the left, 300px from the bottom)',
// // // ,(350px from the left, 100px from the bottom)'
// // // (150px from the left, 200px from the bottom)
// // // '500px from the left, 425px from the bottom)'

// function newImage(images , left, bottom) {
//     //     images = document.createElement('img')
//     img = document.createElement('img')
// }
// for (let i = 0; i < images.length; i++) {
//    let img = document.createElement('img')
//     img.src = images[i]
//     img.style.position = 'fixed'
//     img.style.left = left
//     img.style.bottom = bottom
//     document.body.append(images[i])
//     newImage()
// }


// newImage()
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('click', function () {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)