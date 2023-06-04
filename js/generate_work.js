// This coe will read work.txt json and generate the html code
// It will then append to 

function openAddJobOverlay() {
    document.getElementById("add-job-overlay").style.display = "flex";
    console.log("hello world")
}

function closeAddJobOverlay() {
    document.getElementById("add-job-overlay").style.display = "none";
    document.getElementById("work-form").reset();
    document.getElementById("json-display-text").innerHTML ="Click Generate JSON"
}

function generateJSON() {
    console.log("generating json");

    // document.getElementById("")

    var JobTitle = document.getElementById("JobTitle").value;
    var Company = document.getElementById("Company").value;
    var Duration = document.getElementById("Duration").value;
    var Summary = document.getElementById("Summary").value;
    var Image = document.getElementById("Image").value;

    var newJob = {
        "JobTitle": JobTitle,
        "Company": Company,
        "Duration": Duration,
        "Summary": Summary,
        "Image": Image,
    }

    document.getElementById("json-display-text").innerHTML =JSON.stringify(newJob);

}