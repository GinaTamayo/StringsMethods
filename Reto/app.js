document.addEventListener('DOMContentLoaded', function () {

const commentUser = document.getElementById('comment');
const submitComment = document.getElementById('submit-comment');
const btnUpper = document.getElementById('upperCase');
const btnLower = document.getElementById('lowerCase');
const btnCapitalize = document.getElementById('capitalizeText')
const message = document.getElementById('message');
const charactersCounter = document.getElementById('counter')
let charactersLimit = 255;
charactersCounter.textContent = charactersLimit;


btnUpper.addEventListener('click', commentUpperCase);
btnLower.addEventListener('click', commentLowerCase);
btnCapitalize.addEventListener('click', capitalize);
function capitalize() {
    const comment = commentUser.value;
        const capitalizeComment = comment.replace(/\b\w/g, function (text) {
            return text.toUpperCase();
        });
        commentUser.value = capitalizeComment;
}


function decreaseCounter() {
    charactersLimit = 255 - commentUser.value.trim().length;
    charactersCounter.textContent = charactersLimit;
}


function commentUpperCase() {
    commentUser.value = commentUser.value.toUpperCase()
}

function commentLowerCase() {
    commentUser.value = commentUser.value.toLowerCase();
}

commentUser.addEventListener('input', decreaseCounter)


submitComment.addEventListener('click', function () {
    const commentText = commentUser.value.trim();
    if (commentText != '') {
        commentBox(commentText);
        commentUser.value = '';
        charactersCounter.textContent = charactersLimit;
    }
});

function commentBox(comment) {
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `<p><strong>Usuario x:</strong> <span class="green-bold">${comment}</span></p>`;
    message.innerHTML = '';
    message.appendChild(commentItem);
}
});

