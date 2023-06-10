// function resizeIframe() {
//   const iframe = document.getElementById('iframe')
//   iframe.height = iframe.contentWindow.document.body.scrollHeight + 50 + "px";
// }
// // (windows).on("resize", resizeIframe)
// window.addEventListener('resize', resizeIframe);

// This loads the nav stuff for each page
//   $.get("../navStuff.html", function (data) {
//     $("#nav-stuff-placeholder").replaceWith(data);
//   });
// console.log("hello world");

function onLoad(){
// This loads the content for page upon refresh, maintains the previous page
var curPage = window.location.href;
if (curPage.includes("#")) {
    curPage = window.location.href.split("#")[1];
} else {
    curPage = "about"
}
navItemOnClick("", curPage);
}


function navItemOnClick(element, itemName) {

    var element = document.getElementById(itemName + '-li')
    if (!element.classList.contains('current-selection')) {
        document.getElementById('about-li').classList.remove("current-selection");
        document.getElementById('work-li').classList.remove("current-selection");
        document.getElementById('projects-li').classList.remove("current-selection");
        element.classList.add("current-selection");
        $("#page-content-placeholder").empty();
        $.get("/html/" + itemName + ".html", function (data) {
            $("#page-content-placeholder").append(data);
        });
    }
}



// Code to run upon loading
onLoad()