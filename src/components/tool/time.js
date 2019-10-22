function countDown (time) {
  var nowTime = +new Date()
  var inputTime = +new Date(time)
  var times = (inputTime - nowTime) / 1000
  if(times > 0) {
  var hour = parseInt(times / 60 / 60 % 24)
  hour = hour < 10 ? '0' + hour : hour 
  var min = parseInt(times / 60 % 60)
  min = min < 10 ? '0' + min : min 
  var sec = parseInt(times % 60)
  sec = sec < 10 ? '0' + sec : sec 
  if(document.getElementById('hour')){
    document.getElementById('hour').innerHTML = hour
    document.getElementById('min').innerHTML = min
    document.getElementById('sec').innerHTML = sec
  }
  setTimeout(function () {
    countDown(time)
  }, 1000)
  }else {
  hour = min = sec = 0
  hour = min = sec =  '0' + hour
  document.getElementById('hour').innerHTML = hour
  document.getElementById('min').innerHTML = min
  document.getElementById('sec').innerHTML = sec
  } 
}

export default countDown