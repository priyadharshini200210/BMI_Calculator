var h,w,b;
function cal(){
          h=document.getElementById("height").value;
          w=document.getElementById("weight").value;
          h/=100;
          h*=h;
          b=w/h;
          b=b.toFixed(1);
          // document.write(b);
          if (b <= 18.4) {
		   document.getElementById("bmi").innerHTML="You are Underweight";
	} else if (b >= 18.5 && b <= 24.9) {
		// document.write("hi");
		document.getElementById("bmi1").innerHTML=b;
		document.getElementById("bmi").innerHTML="You are Underweight";
	} else if (b >= 25 && b<= 29.9) {
		document.getElementById("bmi").innerHTML="You are Underweight";
	} else if (b >= 30) {
		document.getElementById("bmi").innerHTML="You are Underweight";
	}
	

	if (w === 0 ) {
		document.getElementById("bmi").innerHTML="You are Underweight";
	} 
	else if (h === 0){
		document.getElementById("bmi").innerHTML="You are Underweight";
	}
	else{

		document.getElementById("bmi").innerHTML="You are Underweight";
	}
	if (w < 0) {
		document.getElementById("bmi").innerHTML="You are Underweight";
	}
         
        }