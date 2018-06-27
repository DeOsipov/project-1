var svgImgMinus = '<svg width="20"height="20"><circle r="10"cx="10"cy="10"fill="white" /><line x1="4"y1="10"x2="16"y2="10"stroke="black"stroke-width="2" /></svg><span>'
var svgImgPlus = '<svg width="20"height="20"><circle r="10"cx="10"cy="10"fill="white" /><line x1="4"y1="10"x2="16"y2="10"stroke="black"stroke-width="2" /><line x1="10"y1="4"x2="10"y2="16"stroke="black"stroke-width="2" /></svg><span>'

function addOnClick(button, informer, text){
	button.onclick = function (){
	    let className = informer.className;
	    if( className.indexOf(' expanded') == -1 ){
	        className += ' expanded';
	        button.innerHTML = svgImgMinus + text + '</span>';
	    	button.style.fontStyle = 'normal';
	        button.style.textTransform = "uppercase";
	        button.style.fontSize = "25px";
	    } else {
	        className = className.replace(' expanded', '');
	        button.innerHTML = svgImgPlus + text + '</span>';
	        button.style.fontStyle = 'italic';
	        button.style.textTransform = "lowercase";
	        button.style.fontSize = "25px";
		}
		informer.className = className;
		return false;
	}
}