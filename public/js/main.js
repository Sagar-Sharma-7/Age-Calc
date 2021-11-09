const heading = document.querySelector("#heading");
const sub_heading = document.querySelector("#sub_heading");
const dob = document.querySelector("#date");
const cal = document.querySelector(".calculate");
const github = document.querySelector("#github");


// ttext content
heading.innerHTML = "Age Calculator";
sub_heading.innerHTML = "Get your age in different units";
cal.innerHTML = "Calculate";
github.innerHTML = "Contribute to my Github";

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
    const ageInWeeks = ageInDays / 7;
    const ageInHours = ageInDays * 24;
    const ageInMin = ageInHours * 60;
    const AgeInSec = ageInMin * 60;

    // console.log(`month =  ${ageInMonths}, days = ${ageInDays}, hours = ${ageInHours}, min = ${ageInMin}, seconds = ${AgeInSec}`);
    if (dob.value == ""){
        console.log("First Type or select your Date of Birth");
    }else if(ageInDays < 0){
        console.log("Incorrect Date of Birth");
    }else{
        console.log(ageInDays);
    }

});
