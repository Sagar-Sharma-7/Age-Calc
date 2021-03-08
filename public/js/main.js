// console log github link
console.log("%cBelow is the link of my github", "color:green;background-color:white;");
console.log("chttps://github.com/Sagar-Sharma-7")

// variables
const calculate = document.querySelector("#calculate");
const birthdate = document.querySelector("#birthDate");
const resultDiv = document.querySelector("#heading1");


const date = new Date();
const todayDay = date.getDate(); 
const todayMonth = date.getMonth() + 1; 
const todayYear = date.getFullYear();

// after clicking calculate button
calculate.addEventListener("click", () => {
    const userBirthDate = new Date(birthdate.value);
    const userBirthDay = userBirthDate.getDate();
    const userBirthMonth = userBirthDate.getMonth() + 1;
    const userBirthYear = userBirthDate.getFullYear();
    console.table([userBirthDate, userBirthDay, userBirthMonth, userBirthYear])

    // result
    const ageInDays =  ((todayYear - userBirthYear) * 365) + Math.floor((todayYear - userBirthYear)/ 4) + ((todayMonth  - userBirthMonth) * 31) - parseInt(Math.floor((todayMonth - userBirthMonth) / 2)) +  (todayDay - userBirthDay);
    console.log(ageInDays);


    // animation
    const animation = setInterval(() => {
        const randomDate = Math.floor(Math.random() * 10000);
        resultDiv.innerHTML = randomDate;
    }, 1);


    setTimeout(() => {
        clearInterval(animation);
        
        // if statements
        if(ageInDays < 0){
            resultDiv.innerHTML = "Incorrect Date Of Birth."
        }else if(ageInDays === 0 || ageInDays === 1){
            resultDiv.innerHTML = `${ageInDays} Day Old.`
        }else if(isNaN(ageInDays)){
            resultDiv.innerHTML = `First type or select your Date Of Birth.`;
        }else{
            resultDiv.innerHTML = `${ageInDays} Days Old.`
        }
    }, 1000);
});