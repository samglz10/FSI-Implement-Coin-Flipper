// TODO: Declare any global variables we need
const coinImage = document.querySelector ("#penny-image")

const headsImage = 'assets\images\penny-heads.jpg'
const tailsImage = 'assets\images\penny-tails.jpg'

const flipButton = document.querySelector ('#flip');
const clearButton = document.querySelector ('#clear');

const statusMsg = document.querySelector ('status-message');

const numHeads = document.querySelector ("#heads")
const perHeads = document.querySelector ("#heads-percent")
const numTails = document.querySelector ("#tails")
const perTails = document.querySelector ("#tails-percent")

let flipsArray = [];

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
  

    // TODO: Add event listener and handler for flip and clear buttons
document.getElementbyId ('flip').addEventListener ('click', () => {
    let flippedHeads = Math.random() < 0.5
}

    // Flip Button Click Handler
    let outcome = Math.round(Math.random());
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

    if (outcome === 0) {
        coinImage.src = tailsImage;
        statusMsg.innerText = "You Flipped Tails!"
    } else if (outcome == 1) {
        coinImage.src = headsImage
        statusMsg.innerText = "You Flipped Heads!"
    }

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        flipsArray.push(outcome);
        let numFlips = flipsArray.length;
        // Make variables to track the percentages of heads and tails
    let heads = 0;
    let tails = 0;

        for (let i = 0, i < numFlips; i++) {
            if (flipsArray[i]===0 ) {
                tails ++
            }
            else{
                heads ++
            }

        }
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

        
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})