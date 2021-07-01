let fs = require('fs');

tiles = []
function createTiles(){
     let single_tile = {}
     let n, l;
     const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
     const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
     for (n of numbers) {
         for (l of letters) {
             if ((numbers.indexOf(n) + letters.indexOf(l)) % 2 === 0){
                 single_tile = {
                     'id': n + l,
                     'position': n,
                     'color':"white"
                    };
                    tiles.push(single_tile)
        }
        else{
            single_tile = {
                'id': n + l,
                'position': n,
                'color':"grey"
            };
            tiles.push(single_tile)
        }
    }
}
return tiles
}

let jsonData = JSON.stringify(createTiles());
fs.writeFile('tiles.json', jsonData, function(err){
    if(err){
        console.log(err);
    }
})



// pieces = []

// function createPieces(){
//     single_piece ={}
//     for(let i = 1;i <=24;i++){
//         single_piece = {
//             'id': i,
//             'color':i<=12 ? 'black' : 'red'
//         }
//             pieces.push(single_piece)
//         }
//         return pieces
//     }

// let jsonData = JSON.stringify(createPieces());
// fs.writeFile('pieces.json', jsonData, function(err){
//     if(err){
//         console.log(err);
//     }
// })