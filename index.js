// let whichData = document.getElementById("emergyButton").addEventListener("click", initiateEmergency);

function initiateEmergency(){
    // let initiate = document.getElementById("emergyButton").addEventListener("click");
    // if(initiate == "emergency"){
    //     console.log("It works: the emergency call has initiate!");
    // } else{
    //     console.log("Still need to fix somewhere...");
    // }
    console.log("It works: the emergency call has initiate!");
} 
// initiateEmergency();

function firstStep(){
    // const w = window.open("");
    const x = document.getElementById("containter");
    x.innerHTML = `<h1>testing first step</h1>
    <div id="categoriesContainer">
        <button class="emergyCategoryCall"><a href="mentalHealth/">Mental-Health</a></button>
        <button class="emergyCategoryCall"><a href="nonEmergency/">Non-Emergency</a></button>
        <button class="emergyCategoryCall"><a href="emergency/">Emergency</a></button>
    </div><p>and Cancel</p>`;
}