// This coe will read work.txt json and generate the html code
// It will then append to 

// import { workData } from "./work_experience";


var filterType = "clear"; //clear, fullstack, mathematics, research

function generateWorkCards() {

    /*
    This function will generate html and place it in the DOM using .innerHTML
    It will also read a file and parse it for a JSON object  

    https://softauthor.com/create-html-element-in-javascript/

    https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file



    */
    var workCards = ""


    for (var i = 0; i < workData.length; i++) {
        var jobJSON= workData[i];
        if(filterType!="clear"){
            if (jobJSON.ExpType!=filterType){
                continue
            }
        }
        var skillsJSON="";
        for(var j = 0; j < jobJSON.Skills.length; j++){
            if (jobJSON.Skills[j]!=""){
                skillsJSON += `<div class="work-card-skill-item"> `+jobJSON.Skills[j]+`</div>`
            }
        }
        var jobCard = `<div class="work-card">
        <img class="work-img" src="`+jobJSON.Image+`" alt="" />
        <div class="work-content">
            <p class="work-title">`+jobJSON.JobTitle+` </p>
            <p class="work-location">`+jobJSON.Company + ' ('+ jobJSON.Duration+`)</p>
            <p class="work-summary">
            `+jobJSON.Summary+`
            </p>
            <div class="work-card-skills">`
            +skillsJSON+
            `
            </div>
    
        </div>
    </div>`;
        workCards+=jobCard
    }


    document.getElementById("work-list").innerHTML = workCards;



}

function filterFor(expType){
    console.log("setting filter to "+expType)
    filterType=expType;
    generateWorkCards();
}


function openAddJobOverlay() {
    document.getElementById("add-job-overlay").style.display = "flex";
    console.log("hello world")
}

function closeAddJobOverlay() {
    document.getElementById("add-job-overlay").style.display = "none";
    document.getElementById("work-form").reset();
    document.getElementById("json-display-text").innerHTML = "Click Generate JSON"
}

function appendToSkills(skill) {
    document.getElementById("Skills").value += (skill + ";")
}

function generateJSON() {
    console.log("generating json");

    // document.getElementById("")

    var JobTitle = document.getElementById("JobTitle").value;
    var Company = document.getElementById("Company").value;
    var Duration = document.getElementById("Duration").value;
    var Summary = document.getElementById("Summary").value;
    var Image = document.getElementById("Image").value;
    var ExpType = document.getElementById("exp-type").value;
    var Skills = document.getElementById("Skills").value.split(";");

    var newJob = {
        "JobTitle": JobTitle,
        "Company": Company,
        "Duration": Duration,
        "Summary": Summary,
        "Image": Image,
        "ExpType": ExpType,
        "Skills": Skills,
    }

    document.getElementById("json-display-text").innerHTML = JSON.stringify(newJob);

}

// First run 

generateWorkCards()
// import workData from '../datafiles/work_experience' assert { type: 'json' }
// console.log(workData)
// const fs=require('fs')
// fs.readFile('work_experience.txt','utf-8', (err, jsonString)=>{
//     if (err) throw err;
//     console.log(jsonString)
// })
// console.log("im trying to read a file", JSON.stringify(workData));
for (var i=0; i<workData.length; i++){
    console.log(JSON.stringify(workData[i]))
}

// const reader = new FileReader("datafiles/work_experience.js");

// console.log(reader.result);