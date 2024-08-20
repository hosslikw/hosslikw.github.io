//SECTION - Art Data//
// Get the current page's URL
const currentPageUrl = window.location.href;

// Extract the path and filename from the URL
const currentPagePath = currentPageUrl.split('/').pop();

// Load the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Find the corresponding object in the JSON file
    const currentPageData = data[currentPagePath];

    // Populate the data rows
    const container = document.getElementById('data-container');
    const html = `
      <div class="data-row">
         <div class="left">
            <p>ID</p>
         </div>
         <div class="right">
            <h3>${data.id}</h3>
         </div>
      </div>
      <div class="data-row">
         <div class="left">
            <p>Year</p>
         </div>
         <div class="right">
            <p>${data.year}</p>
         </div>
      </div>
      <div class="data-row">
         <div class="left">
            <p>Concept</p>
         </div>
         <div class="right">
            <p><i>${data.concept}</i></p>
         </div>
      </div>
      <div class="data-row">
         <div class="left">
            <p>About</p>
         </div>
         <div class="right">
            <p><i>${data.about}</i></p>
         </div>
      </div>
      `;
         container.innerHTML = html;
      });
//!SECTION- Art Data//