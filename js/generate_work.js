// This coe will read work.txt json and generate the html code
// It will then append to 

// import data from '../datafiles/work_experience' assert { type: 'json' }
// console.log(data)


function generateWorkCards() {

    /*
    This function will generate html and place it in the DOM using .innerHTML
    It will also read a file and parse it for a JSON object  

    */
    console.log("hello world")

    var workCards = []

    const reader = new FileReader("/datafiles/work_experience.txt");

    var jobDetails = {
        "JobTitle": JobTitle,
        "Company": Company,
        "Duration": Duration,
        "Summary": Summary,
        "Image": Image,
        "Skills": Skills,
    }


    for (var i = 0; i < 5; i++) {
        var jobCard = `<div class="work-card">
        <img class="work-img" src="/assets/ssnclogo.png" alt="" />
        <div class="work-content">
            <p class="work-title">Full Stack Developer Co-op </p>
            <p class="work-location">SS&C Technologies  (May 2022 - Dec 2022)</p>
            <p class="work-summary">
                Created and optimized SSIS packages in the company Data Warehouse for extraction, loading, and transformation (ETL) of SQL data, ultimately reduced package run time on servers by factor of 3
            </p>
            <div class="work-card-skills">
                <div class="work-card-skill-item"> SQL</div>
                <div class="work-card-skill-item"> HTML</div>
                <div class="work-card-skill-item"> SSIS</div>
                <div class="work-card-skill-item"> ReactJS</div>
            </div>
    
        </div>
    </div>`;
        workCards.push(jobCard)
    }


    document.getElementById("work-list").innerHTML = workCards;



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
    var Skills = document.getElementById("Skills").value.split(";");

    var newJob = {
        "JobTitle": JobTitle,
        "Company": Company,
        "Duration": Duration,
        "Summary": Summary,
        "Image": Image,
        "Skills": Skills,
    }

    document.getElementById("json-display-text").innerHTML = JSON.stringify(newJob);

}

// First run 

generateWorkCards()