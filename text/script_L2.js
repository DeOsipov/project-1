var svgCircle = '<svg width="20"height="20"><circle r="10"cx="10"cy="10"fill="white" />';
var svgVertLine = '<line x1="10"y1="4"x2="10"y2="16"stroke="black"stroke-width="2" />';
var svgHorLine = '<line x1="4"y1="10"x2="16"y2="10"stroke="black"stroke-width="2" />';
var svgEnd = '</svg>';
var svgImgPlus = svgCircle + svgVertLine + svgHorLine + svgEnd;
var svgImgMinus = svgCircle + svgHorLine + svgEnd;

var addOnClick = function addOnClick(button, informer, text){
    let className = informer.className;
        if( className.indexOf(' expanded') == -1 ) {
        className += ' expanded';
        button.innerHTML = svgImgMinus + text;
    	button.style.fontStyle = 'normal';
        button.style.textTransform = "uppercase";
        button.style.fontSize = "25px";
    } else {
        className = className.replace(' expanded', '');
        button.innerHTML = svgImgPlus + text;
        button.style.fontStyle = 'italic';
        button.style.textTransform = "lowercase";
        button.style.fontSize = "25px";
	}
	informer.className = className;
	return false;
}