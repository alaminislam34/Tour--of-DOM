const makeRedButton = document.getElementById('make-red');
const makeBlueButton = document.getElementById('make-blue');
const makeYellowButton = document.getElementById('make-yellow');
makeRedButton.onclick = makeRed;
makeBlueButton.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
makeYellowButton.onclick = makeYellow;
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

// use this option sometimes

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor= 'goldenrod';
})

function makeChange(){
    const change= document.getElementById('changeHobe');
    changeHobe.innerText = 'Best of luck tumi click korso..';
}
document.getElementById('click-me').addEventListener('click', function(){
    const changeText = document.getElementById('changeHobe');
    changeText.innerText = 'Click kor noyto tore khaici.'
})

document.getElementById('button').addEventListener('click', function(){
    const inputField = document.getElementById('input-text');
    const inputText = document.getElementById('update-text');
    inputText.innerText = inputField.value;
    inputField.value = "";
})

document.getElementById('btn').addEventListener('click', function(){
    const newComment = document.getElementById('new-comment');
    const commentBox = newComment.value;
    const para = document.createElement('p');
    para.innerText = commentBox;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(para);
    newComment.value = '';
})

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const 
})
document.getElementById('delete-text').addEventListener('click', function(){
    const text = document.getElementById('text-delete');
    text.style.display = 'none';
})




