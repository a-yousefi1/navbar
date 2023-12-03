let home_button = document.getElementById("home_button");
let about_button = document.getElementById("about_button");
let projects_button = document.getElementById("projects_button").className;
let contact_button = document.getElementById("contact_button").className;

function active_item(button){
    if (home_button.className.includes("active")){
        home_button.classList.remove("active")
        button.classList.add("active")
    } else if (about_button.className.includes("active")){
        about_button.classList.remove("active")
        button.classList.add("active")
    } else if (projects_button.className.includes("active")){
        projects_button.classList.remove("active")
        button.classList.add("active")
    } else if (contact_button.className.includes("active")){
        contact_button.classList.remove("active")
        button.classList.add("active")
    }
}
