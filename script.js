const birth = document.getElementById("date");
let btn_ = document.getElementById("btn");
const age_ = document.getElementById("age")

const today = new Date();



function age(event){
    event.preventDefault();
    var birthValue = birth.value;
    if (birthValue == ""){
        alert("please enter the DATE OF BIRTH");
    }
    else{
        var age = calculate_age(birthValue);
    }

    age_.textContent = age;   
}

function calculate_age(birthValue){

    const Birth_ = new Date(birthValue);
    var age = today.getFullYear() - Birth_.getFullYear();
    var month = today.getMonth() - Birth_.getMonth();
    if (age < 0){
        alert("you have not yet born!");
        return;
    }
    if (month < 0 ){
        return age--;
    }
    else if(month == 0 && Birth_.getDate() == today.getDate()){
        prompt("IT'S your BirthDay!!");

        return age
    }

    else{
        return age
    }

}

btn_.addEventListener("click",age);


