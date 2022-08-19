window.onload = function(){
  chanceUser1()
  chanceUser2()
}

var user1 = document.getElementById('user1')
var user2 = document.getElementById('user2')
var divs = document.querySelectorAll('div')
time = 80

user1.addEventListener('click',getRandom1)
user2.addEventListener('click',getRandom2)
user1.addEventListener('dblclick',restart)
user2.addEventListener('dblclick',restart)
var i = 0
var chances = ['ROCK', 'PAPER', 'SCISSOR']
var images = ['rock.png', 'paper.png', 'scisser.png']
var cancel = false 
var cancelSecond = false
 function chanceUser1 (){
  if(cancel){
    return
  }else{
    if( i < chances.length-1){
      i++
    } else {
      i=0
    }
    // user1.innerText = ''+ chances[i] +''
    user1.style.backgroundImage = 'url('+ images[i] +')'
    setTimeout(chanceUser1,time)
  }
}
function chanceUser2 (){
  if(cancelSecond){
    return
  }else{
    if( i < chances.length-1){
      i++
    } else {
      i=0
    }
    // user2.innerText = ''+chances[i]+''
    user2.style.backgroundImage = 'url('+ images[i] +')'
    setTimeout(chanceUser2,time)
  }
}
function getRandom1(){
  cancel = true
}
function getRandom2(){
  cancelSecond = true
}
function restart(){
  cancel = false
  cancelSecond = false
  chanceUser1()
  chanceUser2()
}