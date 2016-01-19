$(document).ready(function(){
	nameCheck();
});
function nameCheck()
{
	$("#firstname").on("change", function()
	{
		var fname=document.getElementById('firstname').value;
		var letters = /^[A-Za-z]+$/;

		if(fname.match(letters))
		{
			$(".error-msg").addClass("hide");
		}
		else
		{
			$(".error-msg").removeClass("hide");
		}
	});
}
function myFunction()
	{
		var fname=document.getElementById('firstname').value;
		var lname=document.getElementById('lastname').value;
		var email=document.getElementById('email').value;
		var pwd=document.getElementById('password').value;

		var lang = document.getElementById("language");
		var item = lang.options[lang.selectedIndex].value;

		var mob=document.getElementById("mobileno").value;
    var date=document.getElementById("bday").value;
		var gen=document.getElementById("gender").value;
		var house=document.getElementById("houseno").value;
		var street=document.getElementById("streetname").value;
		var city=document.getElementById("city").value;
		var pin=document.getElementById("pincode").value;
		
		
		if(fname=="")
			alert("First Name Should not be empty");
		else if(lname=="")
			alert("Last Name Should not be empty");
		else if(email=="")
			alert("Email Should not be empty");
		else if(pwd=="")
			alert("Password Should not be empty");
		else if(item=="")
			alert("Select a Language");	
		else if(mob=="")
			alert("Enter Mobile No");
		else if(date=="")
			alert("Select Date of Birth");
		else if(house=="")
			alert("Enter the House No");
		else if(street=="")
			alert("Enter the street name");
		else if(city=="")
			alert("City should not be empty");
		else if(pin=="")
			alert("Pincode should not be empty");
		
	
		var letters = /^[A-Za-z]+$/;
		var phoneno = /^\d{10}$/;
		var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


		
		if(lname.match(letters))
			true;
		else
		{
			alert("Last name only in characters");
			false;
		}
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))    
    			true; 
		else
		{
    			alert("You have entered an invalid email address!");
    			false;  
		}  
		if(pwd.match(decimal))
			true;
		else
		{
			alert("Password must contain atleast 1 uppercase, 1 lowercase, 1 special symbol, 1 numeric character.");
			false;
		}
		if(mob.match(phoneno))
			true;
		else
		{
			alert("Mobile no is not correct");
			false;
		}	
	}