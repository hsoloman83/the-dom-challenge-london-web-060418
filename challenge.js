const timer = document.getElementById('counter')
const subtract = document.getElementById('-')
const add = document.getElementById('+')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
let form = document.getElementById('comment-form')
let isPaused = false
const comments = document.getElementById('list')
let likes = {}
const likeList = document.getElementsByClassName('likes')[0]


var intervalID = window.setInterval(incrementTimer, 1000)

function incrementTimer(){
  if (!isPaused){
    ++timer.innerText
  }
}

function decrementTimer(){
  --timer.innerText
}

function pauseCounter(){
  if(isPaused){
    isPaused = false
  }else{
    isPaused = true
  }
}

function addLike(){
  let currentTime = timer.innerText
  if(likes[currentTime]){
    likes[currentTime][0]++
    const like = document.getElementById(currentTime)
    like.innerText = `${currentTime} has been liked ${likes[currentTime][0]} times`
  }else{
    const like = document.createElement('li')
    like.setAttribute("id", currentTime)
    likes[currentTime] = [1, `${currentTime} has been liked 1 time`]
    like.innerText = likes[currentTime][1]
    likeList.append(like)
  }
}

function addComment(text){
  const comment = document.createElement('p')
  comment.innerText = text
  comments.append(comment)
}

subtract.addEventListener('click', decrementTimer)
add.addEventListener('click', incrementTimer)
pause.addEventListener('click', pauseCounter)
heart.addEventListener('click', addLike)
form.addEventListener('submit', function(event){
  event.preventDefault()
  let inputText = document.getElementById('add-comment')
  addComment(inputText.value)
  inputText.value = ''
})
