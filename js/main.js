// Call Elements
let form = document.querySelector("form");
let bill = document.querySelector(".calucate > .bill input[type=text]");
let people = document.querySelector(".calucate > .people > input[type=text]");
let peopleMesg = document.querySelector(".people > div > span");
let tips = document.querySelectorAll(".tip > div");
let tipCustom = document.querySelector(".tip > input");
let result = document.querySelectorAll(".result > div > h1");

// Chose Tips Button
tips.forEach(function(ele){
    ele.addEventListener("click", function(){
        tips.forEach((el) =>el.classList.remove("chosen")) // Remove The Class From All
        ele.classList.add("chosen") // Add To The Clicked One
    })
})
// Write Tips Text, When Write Tip Remove The Clicked One
tipCustom.onfocus = function() {tips.forEach((el) => el.classList.remove("chosen"))} 


form.onsubmit = function(){
    tips.forEach(function(ele){
        // If The User Choose The Tip From Existed Ones Or Wrote It
        if (ele.classList.contains("chosen")) {
            let tipAmount = (((parseFloat(ele.children[0].textContent) / 100) * parseFloat(bill.value) ) / parseFloat(people.value)).toFixed(2);
            let totalPerson = ((parseFloat(tipAmount) + (parseFloat(bill.value)) / parseFloat(people.value)).toFixed(2));
            result[0].textContent = `$${tipAmount}`
            result[1].textContent = `$${totalPerson}`
        }
        else if (tipCustom.value != "") {
            let tipAmount = (((parseFloat(tipCustom.value) / 100) * parseFloat(bill.value) ) / parseFloat(people.value)).toFixed(2);
            let totalPerson = ((parseFloat(tipAmount) + (parseFloat(bill.value)) / parseFloat(people.value)).toFixed(2));
            result[0].textContent = `$${tipAmount}`
            result[1].textContent = `$${totalPerson}`
        }
    })
    // If Number Of People Equal Zero Or Empty
    if (people.value == 0 || people.value == "") {
        peopleMesg.style.visibility= "visible"
        result[0].textContent = `$0.00`
        result[1].textContent = `$0.00`
    }
    else {peopleMesg.style.visibility= "hidden"}

    return false // To Not Submit The Form
}