//*************Question 1*************//
var cel = parseInt(document.getElementById("celsius_1").innerHTML);
function convert(cel){
    return ((9*cel)/5) + 32;
}
document.getElementById("fahr_1").innerHTML = convert(cel);

var cel2 = parseInt(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = convert(cel2);

var cel3 = parseInt(document.getElementById("celsius_3").innerHTML);

document.getElementById("fahr_3").innerHTML = convert(cel3);

//*************Question 2*************//

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

document.getElementById("best_students").innerHTML = classification.slice(-3,);

//*************Question 3*************//
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];

function calc(){
     return (course["5_stars_reviews"]) / (course["5_stars_reviews"] + course["4_stars_reviews"]+course["3_stars_reviews"]+course["2_stars_reviews"]+course["1_stars_reviews"]) * 100;
}
document.getElementById("reviews_5_stars").innerHTML = calc().toFixed(0) + "%";


//*************Question 4*************//

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

var last = shoppingList[7];
shoppingList.unshift(last);
//shoppingList.unshift(shoppingList.pop()); because the pop() method also returns the removed item so we can also use it as an input for push.
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);



