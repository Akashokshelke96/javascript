console.log("This is ex1.js");
var firstName = "Akash";
var lastName = "kumar";
var birthYear = "1996";
var year = 2022;
console.log("Hello my name is" + firstName + lastName + " , i am " + (year- parseInt(birthYear)) + "years old when i learned Java")
document.getElementById("student_message").innerHTML = "Hello my name is " + firstName + "  " + lastName + " , i am " + (year- parseInt(birthYear)) + "  years old when i learned Java";

var number1 = parseInt(document.getElementById("num_1").innerHTML);
var number2 = parseInt(document.getElementById("num_2").innerHTML);
var average = ((number1 + number2)/2);
document.getElementById("result").innerHTML = average.toFixed(2);

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
var phon3 = phone3.toString();
if(phone1.length==9){
    console.log("this is valid");
}
if(phon3.length==9){
    console.log("this is  also valid");
}
if(phone2.length==9){
    console.log("this phone2 is valid");
}else{
    console.log("it is invalid")
}


console.log(Math.pow(32,6));

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);
console.log( (7+5) / number + 2 );
console.log(typeof pressure);

var urla = document.getElementById("url_1").innerText;
document.getElementById("url_2").innerHTML = urla.replace("","https://");


var urlb = document.getElementById("url_3").innerText;
document.getElementById("url_4").innerHTML = urlb.replace("https://"," ");





