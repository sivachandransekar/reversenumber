var number=prompt("Enter the number");
var numberLen=number.length;
var reverseNumber;
document.write("The Number is "+number+"<br>");
for(var i=numberLen-1;i>=0;i--){
	reverseNumber=number[i];
	document.write(reverseNumber );
}