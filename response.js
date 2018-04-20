function myFunction() {
    var x = document.getElementById("siteNav");
    if (x.className === "site-nav") {
        x.className += " responsive";
    } else {
        x.className = "site-nav";
    }
}