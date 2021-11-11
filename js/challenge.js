


document.addEventListener('DOMContentLoaded', function(){
   clockWork();
})

let i = 0;
const counter = document.querySelector('h1#counter');


function countUp() {
    const counter = document.querySelector('h1#counter');
    i++;
    counter.textContent = i;
};

let theButton = document.querySelector('#pause');
const heart = document.querySelector('#heart');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const submit = document.querySelector('#submit');
const buttonsDisable = [plus, minus, heart, submit]

const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', function(e){
    e.preventDefault();
    const commentList = document.querySelector('#list');
    let commentInput = e.target.firstElementChild.value
    let comment = document.createElement('li');
    comment.textContent = commentInput;
    commentList.append(comment);
    commentForm.reset();
})

function clockWork() {
    const counter = document.querySelector('h1#counter');
    let timer = setInterval(countUp, 1000);
    theButton.addEventListener('click', function() {
        if(theButton.textContent === ' pause ') {
            clearInterval(timer);
            theButton.textContent = ' resume ';
            for (let button of buttonsDisable) {
                button.disabled = true;
            }
        } else if (theButton.textContent === ' resume '){
            timer = setInterval(countUp, 1000);
            theButton.textContent = ' pause ';
            for (let button of buttonsDisable) {
                button.disabled = false;
            }
    };
})}

plus.addEventListener('click', function() {
    i++;
    counter.textContent = i;
})

minus.addEventListener('click', function() {
    i--;
    counter.textContent = i;
})
// Like an individual number
const likedList = document.querySelector('ul.likes');

let clicked = 1;

// Trying to use event

let times = 1;

heart.addEventListener('click', function() {
    const likeList = document.querySelector('ul.likes');
    if(document.getElementById(i)) {
        let alreadyLiked = document.getElementById(i);
        alreadyLiked.textContent = `${i} has been clicked ${times} times.`;
        times++;
        console.log('from if');
    } else {
        let like = document.createElement('li');
        like.id = i;
        like.textContent = `${i} has been clicked ${times} times.`;
        likeList.append(like);
        times++
        console.log('from else');
    }
});