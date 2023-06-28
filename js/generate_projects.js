// This coe will read work.txt json and generate the html code
// It will then append to 

// import { workData } from "./work_experience";




function generateExpCards() {

    /*
    This function will generate html and place it in the DOM using .innerHTML
    It will also read a file and parse it for a JSON object  

    https://softauthor.com/create-html-element-in-javascript/

    https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file



    */
    var expCards = ""


    for (var i = 0; i < projectData.length; i++) {
        var expJSON= projectData[i];
        var skillsJSON="";
        for(var j = 0; j < expJSON.Skills.length; j++){
            if (expJSON.Skills[j]!=""){
                skillsJSON += `<div class="work-card-skill-item"> `+expJSON.Skills[j]+`</div>`
            }
        }
        var extraImagesJSON=""
        for(var j = 1; j < expJSON.Image.length; j++){
            if (expJSON.Image[j]!=""){
                extraImagesJSON += `<img class="extra-img" src="`+ expJSON.Image[j] +`" alt="" />`
            }
        }

        var expCard = `        <div class="work-card" id="exp-card-`+i+`" 
        onmouseleave="collapseCard('exp-card-`+i+`')">
        <div class="card-top">
            <div class="work-learn-more-sec">
                <img class="work-img" src="`+ expJSON.Image[0] +`" alt="" />
                <div class="learn-more-`+(expJSON.Link!= ""?'show':'hide')+` btn" onclick="window.open('`+expJSON.Link+`')">
                    <p>Learn More</p>
                </div>
            </div>

            <div class="work-content">
                <p class="work-title">`+expJSON.ExpTitle+` <span class="exp-duration"> (`+expJSON.Duration+`)
                    </span>
                </p>
                <p class="work-summary">
                `+expJSON.Summary+`
                </p>
                <div class="work-card-skills">
                `+skillsJSON+`

                </div>

            `+

            (expJSON.HoverExpand?`<div class="expand-on-hover" onclick="expandCard('exp-card-`+i+`')">
            <img src="/assets/down_arrow.png" alt="" class="down-arrow">
        </div>`:'')
            
            +
            `</div>
        </div>
        <div id="bottom-exp-card-`+i+`" class="expand-card-`+(expJSON.HoverExpand?'on':'off')+`">
            <div class="extra-images">
            `+extraImagesJSON+`
            </div>
            <div class="add-details">
                <p>`+expJSON.AddDetails+` </p>
            </div>

        </div>

    </div>`
    expCards+=expCard
    }


    document.getElementById("work-list").innerHTML = expCards;



}


function openAddJobOverlay() {
    document.getElementById("add-job-overlay").style.display = "flex";
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

    var ExpTitle = document.getElementById("exp-title").value;
    var Duration = document.getElementById("Duration").value;
    var Link = document.getElementById("learn-more-link").value;
    var Summary = document.getElementById("Summary").value;
    var AddDetails = document.getElementById("add-details").value;
    var HoverExpand = document.getElementById("hover-expand").checked;
    var Image = document.getElementById("Image").value.split(";");
    var Skills = document.getElementById("Skills").value.split(";");

    var newJob = {
        "ExpTitle": ExpTitle,
        "Duration": Duration,
        "Link": Link,
        "Summary": Summary,
        "AddDetails": AddDetails,
        "HoverExpand": HoverExpand,
        "Image": Image,
        "Skills": Skills,
    }

    document.getElementById("json-display-text").innerHTML = JSON.stringify(newJob);

}

function expandCard(cardID){
    console.log("expanding card "+ cardID);
    // .getElementById(cardID)
    var bottomCard=document.getElementById(  "bottom-"+cardID )
    if(!bottomCard.classList.contains("expand-card-off")){
        document.getElementById(  "bottom-"+cardID ).style.display="flex";
    }
    
}

function collapseCard(cardID){
    var bottomCard=document.getElementById(  "bottom-"+cardID )
    if(!bottomCard.classList.contains("expand-card-off")){
        document.getElementById(  "bottom-"+cardID ).style.display="none";
    }
   
}

// First run 

// generateWorkCards()
generateExpCards()
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