function firstStep(){
    // const w = window.open("");
    const x = document.getElementById("containter");
    x.innerHTML = `<h1>testing first step</h1>
    <div id="categoriesContainer" class="subContainer">
        <button class="emergyCategoryCall">Mental-Health</button>
        <button class="emergyCategoryCall" onclick="initiateNonEmergency();">Non-Emergency</button>
        <button class="emergyCategoryCall" onclick="initiateEmergency();">Emergency</button>
    </div><p>and Cancel</p>`;
}

// EMERGENCY PROCESS
// let whichData = document.getElementById("emergyButton").addEventListener("click", initiateEmergency);

function initiateEmergency(){
    // let initiate = document.getElementById("emergyButton").addEventListener("click");
    // if(initiate == "emergency"){
    //     console.log("It works: the emergency call has initiate!");
    // } else{
    //     console.log("Still need to fix somewhere...");
    // }
    const x = document.getElementById("containter");
    x.innerHTML = `<h1>Emergency first step</h1>
    <div id="stageOfEmergency" class="subContainer">
        <button type="button" class="natureOfEmergency">Someone's hurt</button>
        <button type="button" class="natureOfEmergency">I'm injured</button>
        <button type="button" class="natureOfEmergency">Shooting situation</button>
        <button type="button" class="natureOfEmergency">Report a Fire</button>
        <button type="button" class="natureOfEmergency">Crime in Progress</button>
    </div>`;
    console.log("It works: the emergency call has initiate!");
} 
// initiateEmergency();

// NON-EMERGENCY PROCESS
    function initiateNonEmergency(){
        const x = document.getElementById("containter");
    x.innerHTML = `<h1>Emergency first step</h1>
    <div id="stageOfEmergency" class="subContainer">
        <button type="button" class="natureOfNonEmergency">Need Help</button>
        <button type="button" class="natureOfNonEmergency">Vehicle Accident</button>
        <button type="button" class="natureOfNonEmergency">Report a Crime</button>
        <button type="button" class="natureOfNonEmergency">"Still thinking"</button>
    </div>`;
    console.log("It works: the emergency call has initiate!");
    }
// MENTAL HEALTH PROCESS
    function initiateMentalHealth(){

    }