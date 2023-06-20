//your JS code here. If required.

function getSize(){
	
	let x=document.documentElement.clientWidth;
	let y=document.documentElement.clientHeight;

	document.getElementById("sizeInfo").innerHTML="<h1>Width: "+x+" and Height: "+y+"</h1>";
}