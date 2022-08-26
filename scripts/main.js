const person = document.getElementsByName("Type");
const ticket = document.getElementsByName("TType");
const pass = document.getElementsByName("APass");
const token = document.getElementsByName("FTokens");
const number = document.getElementById("amt");
const theForm = document.getElementById("form");
const btnCurrent = document.getElementById("addOrder");
const btnOverall = document.getElementById("placeOrder");
const currentOutput = document.getElementById("currentOrder");
const overallOutput = document.getElementById("overallOrder");
const addFavourite = document.getElementById("addFav");
const orderFavourite = document.getElementById("orderFav");
const loyalty = document.getElementById("loyalty");

let personType = "";
let ticketPrice = 0;
let passPrice = 0;
let durationPrice = 0;
let tokenPrice = 0;
let totalPrice = 0;
let overallPrice = 0;
let overallTickets = 0;
let amtOfTikcet = 0;
let tickettype = "";
let annualpass = "";
let foodtoken = "";
let timetaken = "";

function Ptype(){
    if(this.value == "foreigner"){
        personType = "foreign";
        currentOutput.innerText += `${personType}`;
    }
    if (this.value == "local"){
        personType = "local";
        currentOutput.innerText += `${personType}`;
    }
}
function ticketType(){
    if (personType == "foreign"){
        if(this.value == "adult"){
            ticketPrice = 5000;
            tickettype = "adult ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }else if(this.value == "child"){
            ticketPrice = 2500;
            tickettype = "child ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }else{
            ticketPrice = 0;
            tickettype = "infant ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }
    }else if (personType == "local"){
        if(this.value == "adult"){
            ticketPrice = 1000;
            tickettype = "adult ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }else if(this.value == "child"){
            ticketPrice = 500;
            tickettype = "child ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }else{
            ticketPrice = 0;
            tickettype = "infant ticket(s)";
            currentOutput.innerText += ` ${tickettype}`;
        }
    }
}
function annualDisable(pass){
    console.log("In disable")
    if (pass == "yes"){
        annualpass = "with annual pass.";
        currentOutput.innerText += ` ${annualpass}`;
        document.getElementById("durations").disabled = true;
        document.getElementById("fyes").disabled = true;
        document.getElementById("fno").disabled = true;
    }else{
        annualpass = "without annual pass";
        currentOutput.innerText += ` ${annualpass}`;
        document.getElementById("durations").disabled = false;
        document.getElementById("fyes").disabled = false;
        document.getElementById("fno").disabled = false;
    }
}
function ticketDuration(){
    d = document.getElementById("durations").value
    if (personType == "foreign"){
        switch(d){
            case "3Hrs":
                durationPrice = 0;
                timetaken = "for 3hrs.";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "1/2Day":
                durationPrice = 500;
                timetaken = "for 1/2 a day.";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "FDay":
                durationPrice = 1000;
                timetaken = "for a full day";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "2Day":
                durationPrice = 2000;
                timetaken = "for 2 days";
                currentOutput.innerText += ` ${timetaken}`;
                return;
        }
    }else{
        switch(d){
            case "3Hrs":
                durationPrice = 0;
                timetaken = "for 3hrs.";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "1/2Day":
                durationPrice = 250;
                timetaken = "for 1/2 a day.";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "FDay":
                durationPrice = 500;
                timetaken = "for a full day";
                currentOutput.innerText += ` ${timetaken}`;
                return;
            case "2Day":
                durationPrice = 1000;
                timetaken = "for 2 days";
                currentOutput.innerText += ` ${timetaken}`;
                return;
        }
    }
}
function foodToken(){
    if (this.value == "yes"){
        tokenPrice = 500;
        foodtoken = "with food token.";
        currentOutput.innerText += ` ${foodtoken}`;
    }else{
        foodtoken = "without food token";
        currentOutput.innerText += ` ${foodtoken}`;
    }
}
function annualPass(){
    console.log("check")
    if (personType == "foreign"){
        if(this.value == "yes"){
            passPrice = 15000;
            // disable duration and food token
            annualDisable(this.value);
        }else if(this.value == "no"){
            annualDisable(this.value);
            // choice for food token and duration
            token.forEach(item => item.addEventListener("change", foodToken));
        }
    }

    if(personType == "local"){
        if(this.value == "yes"){
            passPrice = 4500;
            // disable duration and food token
            annualDisable(this.value);  
        }else if(this.value == "no"){
            annualDisable(this.value);
            // choice for food token and duration
            token.forEach(item => item.addEventListener("change", foodToken));
        }

    }
}
function addToOrder(evt){
    evt.preventDefault();
    amtOfTikcet = parseInt(number.value);
    totalPrice = amtOfTikcet * (ticketPrice + passPrice + durationPrice + tokenPrice);
    overallPrice += totalPrice;
    overallTickets += amtOfTikcet;
    overallOutput.innerText += `${amtOfTikcet} ${personType} ${tickettype} ${annualpass} ${timetaken} ${foodtoken}  is LKR.${totalPrice}\n`;
    overallOutput.innerText += `Total cost is LKR.${overallPrice}\n`;
    currentOutput.innerText = "";
    theForm.reset();
}
function placeOrder(evt){
    evt.preventDefault();
    alert("Thank you for your purchase");
    overallPrice = 0;
    overallOutput.innerText = "";
    overallPrice = 0;
    overallTickets = 0;
    theForm.reset();
}
function addToFav(){
    localStorage.removeItem("tickamt");
    localStorage.removeItem("type");
    localStorage.removeItem("ticktype");
    localStorage.removeItem("annpass");
    localStorage.removeItem("duration");
    localStorage.removeItem("food");
    localStorage.removeItem("totamt");
    localStorage.setItem("tickamt", amtOfTikcet);
    localStorage.setItem("type", personType);
    localStorage.setItem("ticktype", tickettype);
    localStorage.setItem("annpass", annualpass);
    localStorage.setItem("duration", timetaken);
    localStorage.setItem("food", foodtoken);
    localStorage.setItem("totamt", totalPrice);
}
function orderToFav(){
    
    overallOutput.innerText += `${localStorage.getItem("tickamt")} ${localStorage.getItem("type")} ${localStorage.getItem("ticktype")} ${localStorage.getItem("annpass")} ${localStorage.getItem("duration")} ${localStorage.getItem("food")}  is LKR.${localStorage.getItem("totamt")}\n`;

}
function loyaltyCal(){
    
}

person.forEach(item => item.addEventListener("change", Ptype));



ticket.forEach(item => item.addEventListener("change", ticketType));



pass.forEach(item => item.addEventListener("change", annualPass));

btnCurrent.addEventListener("click", addToOrder);

btnOverall.addEventListener("click", placeOrder);

addFavourite.addEventListener("click", addToFav);

orderFavourite.addEventListener("click", orderToFav);

loyalty.addEventListener("click", loyaltyCal)

//
