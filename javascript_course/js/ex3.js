//**********QUESTION 1***************//
function celsiusToFahrenheit(celsius){
    var fahrenheit = (9*celsius / 5) + 32;
    return fahrenheit;
}
document.getElementById("convert").onclick = function (temperature) {
   var temperatureCelsius = parseInt(document.getElementById("temp_celsius").value);
   if(temperatureCelsius == ""){
       alert("Temp is Invalid")
   }else{
       document.getElementById("temp_fahr").innerHTML =  celsiusToFahrenheit(temperatureCelsius);

   }
}


//**********QUESTION 2***************//

var currentYear = 2022;

document.getElementById("anos_copa").innerHTML = "";

while (currentYear <= 2050) {
        document.getElementById("anos_copa").innerHTML += '<li>' + currentYear + '</li>';
        currentYear += 4;
}

//**********QUESTION 3***************//

function calcResult(grade1,grade2,absences){

}
document.getElementById("calculate").onclick = function (){
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = parseInt(document.getElementById("absences").value);
    var totalClasses = 20;

    console.log("Grade 1 : " + grade1);
    console.log("Grade 2 : " + grade2);
    console.log("Absences : " + absences);



    if(grade1 == "" || grade2 == "" || absences == "") {
        alert("Insert every Field Jackass")
    }else{
        var average = (grade1 + grade2)/2;
        var presence = ((totalClasses - absences) / totalClasses);
        var result;

        if(average < 6.5 && presence < 0.7){
            result = "student has failed because of insufficient grade and extra absences";
        }else if(average<6.5) {
            result = "Student has failed due to insufficient grade";
        }else if(presence > 6.6){
            result = "Failed due to too many absences";
        }else{
            result = "You are Approved you lucky duck!!!"
        }
        console.log(result);
    }


}
