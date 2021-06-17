const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const heartBtn = document.getElementById('heart');
const likesUL = document.querySelector('.likes');
const pauseBtn = document.getElementById('pause');
const submitCommentBtn = document.getElementById('submit')
let isPaused = false;

const buttons = [plusBtn, minusBtn, heartBtn, submitCommentBtn]

const startTimer = () => {
    setInterval(incrementNum, 1000);
}

const incrementNum = () => {
    if (!isPaused) {
    let num = parseInt(counter.innerText) + 1;
    counter.innerText = num;
    }
}

const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1;
    counter.innerText = num;
}

const addLikes = () => {
    // const li = document.createElement('li');
    // let likes = 0;
    // let content = `${counter.innerText} has been liked ${likes} times`;
    // console.log(content);
    // li.innerText = content;
    // likesUL.append(li);
    buildLikesLI(counter);
}

const buildLikesLI = () => {
    const li = document.createElement('li');
    let likes = 1;
    li.id = counter.innerText + 'counter';
    li.innerText = `${counter.innerText} has been liked ${likes} times.`
    if (!document.getElementById(li.id)) {
        likesUL.append(li);
    } else {
        likes++;
        document.getElementById(li.id).innerText = `${counter.innerText} has been liked ${likes} times.`;
    }
}

const pauseCounter = () => {
    if (!isPaused) {
        pauseBtn.innerText = "resume";
        isPaused = true;
        buttons.forEach((btn) => {
            btn.disabled = true;
        });
    } else {
        pauseBtn.innerText = "pause"
        isPaused = false;
        buttons.forEach((btn) => {
            btn.disabled = false;
        });
    }
}

const submitComment = (e) => {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentP = document.createElement('li');
    commentP.innerText = commentInput.value;
    document.getElementById('list').append(commentP);
}

document.addEventListener("DOMContentLoaded", startTimer);
plusBtn.addEventListener("click", incrementNum);
minusBtn.addEventListener("click", decrementNum);
heartBtn.addEventListener("click", addLikes);
pauseBtn.addEventListener("click", pauseCounter);
submitCommentBtn.addEventListener("click", submitComment);