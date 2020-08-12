"use strict"

/*Capstone Project 
Glasers Bake Shop 
Ry 08/07/2020*/

//event listener for validation
window.addEventListener("load", function(){
	document.getElementById("subbut").onclick = submitOrder;
	document.getElementById("name").oninput = validName;
	document.getElementById("zip").oninput = validZip;
	document.getElementById("ccnumber").oninput = validNum;
	document.getElementById("month").onchange = validMonth;
	document.getElementById("year").onchange = validYear;
	document.getElementById("cvv").oninput = validCVV;
});

//def for submitOrder function() 
function submitOrder(){
	validName();
	validZip();
	validNum();
	validMonth();
	validYear();
	validCVV();
	thankOrder();
}

function validName(){
	var orderName = document.getElementById("name");
   if(orderName.validity.valueMissing){
      orderName.setCustomValidity("please enter your name.");
   }else {
      orderName.setCustomValidity("");
   }
}

function validZip(){
	var orderZip = document.getElementById("zip");
	if(orderZip.validity.valueMissing){
		orderZip.setCustomValidity("Please enter your zip.")
	}else{
		orderZip.setCustomValidity("")
	}
}

function validNum(){
	var orderCCnum = document.getElementById("ccnumber");
	if(orderCCnum.validity.valueMissing){
		orderCCnum.setCustomValidity("please enter your card number")
	}else{
		orderCCnum.setCustomValidity("")
	}
}

function validMonth(){
	var orderMonth = document.getElementById("month");
	if(orderMonth.validity.valueMissing){
		orderMonth.setCustomValidity("please choose a valid month")
	}else{
		orderMonth.setCustomValidity("")
	}
}

function validYear(){
	var orderYear = document.getElementById("year");
	if(orderYear.validity.valueMissing){
		orderYear.setCustomValidity("please enter a vaild year")
	}else{
		orderYear.setCustomValidity("")
	}
}

function validCVV(){
	var orderCVV = document.getElementById("cvv");
	if(orderCVV.validity.valueMissing){
		orderCVV.setCustomValidity("please enter your cvv code")
	}else{
		orderCVV.setCustomValidity("")
	}
}
function thankOrder(){
window.alert("Thank you for your order!").addEventListener("submit", onsubmit);
}