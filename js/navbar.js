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
console.log("hello world");
// This loads the content for each page
$.get("/html/about.html", function (data) {
    $("#page-content-placeholder").append(data);
});

function navItemOnClick(element, itemName) {

    var element = document.getElementById(itemName + '-li')
    if (!element.classList.contains('current-selection')) {
        document.getElementById('about-li').classList.remove("current-selection");
        document.getElementById('work-li').classList.remove("current-selection");
        document.getElementById('projects-li').classList.remove("current-selection");
        element.classList.add("current-selection");
        $("#page-content-placeholder").empty();
        $.get("/html/"+itemName+".html", function (data) {
            $("#page-content-placeholder").append(data);
        });
    }


}