const makeBlueButton = document.getElementById("make-blue");
const makeYellowButton = document.getElementById('make-yellow');
// makeBlueButton.onclick = makeBlue;
makeYellowButton.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = 'red';
}
function makeBlue() {
    // document.body.style.backgroundColor = 'lightblue';
}
