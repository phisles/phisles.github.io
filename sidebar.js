document.addEventListener("DOMContentLoaded", function () {
    // Create a new div element for the sidebar
    var sidebarDiv = document.createElement("div");
    sidebarDiv.className = "sidebar";
  
    // Add the sidebar content
    sidebarDiv.innerHTML = `
      <a href="https://pisles-misc.carrd.co/" target="_blank">Supplementary Information</a>
      <a href="https://pisles-cert.carrd.co/" target="_blank">View My Certifications</a>
      <a href="https://philipisles.com/gpt-projects.html" target="_blank">Check Out My GPT Projects</a>
    `;
  
    // Append the sidebar to the body
    document.body.prepend(sidebarDiv);
  });
  