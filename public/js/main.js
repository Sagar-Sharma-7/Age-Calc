const heading = document.querySelector("#heading");
const sub_heading = document.querySelector("#sub_heading");
const dob = document.querySelector("#date");
const cal = document.querySelector(".calculate");
const github = document.querySelector("#github");

// result span
const month_span = document.querySelector("#months");
const week_span = document.querySelector("#weeks");
const day_span = document.querySelector("#days");
const hour_span = document.querySelector("#hours");
const min_span = document.querySelector("#min");
const sec_span = document.querySelector("#sec"); 

// ttext content
heading.innerHTML = "Age Calculator";
sub_heading.innerHTML = "Get your age in different units";
cal.innerHTML = "Calculate";
github.innerHTML = "Contribute to my Github";


$(document).ready(function() {
    $(".hidden_section").css("display", "flex");
    $(".hidden_section").slideUp(1);
});


// functions
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

cal.addEventListener("click", () => {
    const userDOB = new Date(dob.value);
    const birthDay = userDOB.getDate();
    const birthMonth = userDOB.getMonth() + 1;    
    const birthYear = userDOB.getFullYear();
    console.table([userDOB, birthDay, birthMonth, birthYear]);

    const leapYear = Math.floor((year - birthYear) / 4);
    const yearDays = (((year - birthYear) * 365) + leapYear);
    const monthDays = ((month - birthMonth) * 31) - parseInt(Math.floor(month - birthMonth) / 2);
    const dateDays = day - birthDay;

    const ageInMonths = ((year - birthYear) * 12) + (month - birthMonth);
    const ageInDays = yearDays + monthDays + dateDays;
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInHours = ageInDays * 24;
    const ageInMin = ageInHours * 60;
    const AgeInSec = ageInMin * 60;

    // console.log(`month =  ${ageInMonths}, days = ${ageInDays}, hours = ${ageInHours}, min = ${ageInMin}, seconds = ${AgeInSec}`);
    if (dob.value == ""){
        console.log("First Type or select your Date of Birth");
        cal.style.backgroundColor = "red";
        cal.innerHTML = "First Type or Select your Date of Birth."
        setTimeout(() => {
            $(".calculate").css("background-color", "#7C40FF");
            cal.innerHTML = "Calculate";
        }, 1500);
    }else if(ageInDays < 0){
        console.log("Incorrect Date of Birth");
        cal.style.backgroundColor = "red";
        cal.innerHTML = "Incorrect Date of Birth";
        setTimeout(() => {
            $(".calculate").css("background-color", "#7C40FF");
            cal.innerHTML = "Calculate";
        }, 1500);
    }else{
        $(".heading_section").slideUp(150);
        $(".hidden_section").slideDown(150);
        month_span.innerHTML = ageInMonths;
        week_span.innerHTML = ageInWeeks;
        day_span.innerHTML = ageInDays;
        hour_span.innerHTML = ageInHours;
        min_span.innerHTML = ageInMin;
        sec_span.innerHTML = AgeInSec;
    }
});
