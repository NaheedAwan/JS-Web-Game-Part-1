let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

// Adding a pine tree

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)


// tree
let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '100px'
document.body.append(tree)
// // adding pillar
let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = '100px'
document.body.append(pillar)
// adding crate
let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)
// adding well
let well = document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)
// adding sword function
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

// assets/shield.png (165px from the left, 185px from the bottom)
// assets/staff.png (600px from the left, 100px from the bottom)
let shield = document.createElement('img')
shield.src = 'assets/sheild.png'
shield.style.position = "fixed"
shield.style.left ='165px'
shield.style.bottom = '185px'
document.body.append(shield)

let staff = document.createElement('img')
staff.src = 'assets/staff.png'
staff.style.position = 'fixed'
staff.style.left = '600px'
staff.style.bottom = '100px'
document.body.append(staff)
// other images
// const images = [
//     './assets/tree.png (200px from the left, 300px from the bottom)',
//     './assets/pillar.png (350px from the left, 100px from the bottom)',
//     './assets/crate.png (150px from the left, 200px from the bottom)',
//     './assets/well.png (500px from the left, 425px from the bottom)',
// ]

// // assets/tree.png (200px from the left, 300px from the bottom)
// // assets/pillar.png (350px from the left, 100px from the bottom)
// // assets/crate.png (150px from the left, 200px from the bottom)
// // assets/well.png (500px from the left, 425px from the bottom)

// function newImage(){
//     if (selectedIndex < images.length - 1) {
//     selectedIndex++
// } else {
//     selectedIndex = 0
// }
// }
// newImage()