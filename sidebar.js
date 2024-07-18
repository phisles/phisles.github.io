document.addEventListener("DOMContentLoaded", function () {
    var sidebarDiv = document.createElement("div");
    sidebarDiv.className = "sidebar";
    sidebarDiv.innerHTML = `
        <a href="https://pisles-misc.carrd.co/" target="_blank">Supplementary Information</a>
        <a href="https://pisles-cert.carrd.co/" target="_blank">View My Certifications</a>
        <a href="https://philipisles.com/gpt-projects.html" target="_blank">Check Out My GPT Projects</a>
        <a href="https://philipisles.com/nasa.html" target="_blank">NASA API</a>
        <a href="https://github.com/phisles?tab=repositories" target="_blank">Git Projects</a>
        <a href="https://philipisles.com/index.html" target="_blank">Home</a>
    `;
    document.body.prepend(sidebarDiv);
});
