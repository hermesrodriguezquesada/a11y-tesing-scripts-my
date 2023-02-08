document.addEventListener("keydown",listener);
// This scripts Logs in console which element has 
var listener = (event) => {
  setTimeout(() => {
	  console.clear()
	  console.log("Current Focused Element:")
	  console.log(document.activeElement)
	  /*event.target.className = document.activeElement.className + " current-focused"*/
  }, 55)
}