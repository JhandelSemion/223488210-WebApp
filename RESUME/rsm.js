function displayWelcomeMessage() {
    var name = prompt("What's your name?:");
    var welcomeMessage = "Welcome, " + name + "!";
    alert(welcomeMessage);
}

function toggleSectionVisibility(sectionId)
{
    var section =
    document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}