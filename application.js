
function showApplicationForm() {
  var applicationForm = document.getElementById("application-form-container");
  applicationForm.style.display = "block";
}

function goBack() {
  window.location.href = document.referrer;
}


const jobListings = [
  { title: "Job Title 1", description: "Description of Job Title 1" },
  { title: "Job Title 2", description: "Description of Job Title 2" },
  { title: "Job Title 3", description: "Description of Job Title 3" }
];

function searchJobs() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const jobListingsContainer = document.getElementById("jobListings");
  jobListingsContainer.innerHTML = "";

  jobListings.forEach(job => {
      if (job.title.toLowerCase().includes(searchTerm)) {
          const jobBox = document.createElement("div");
          jobBox.classList.add("job-box");
          jobBox.innerHTML = `
              <div class="job-title">${job.title}</div>
              <div class="job-description">${job.description}</div>
              <button class="apply-btn">Apply</button>
          `;
          jobListingsContainer.appendChild(jobBox);
      }
  });

  if (jobListingsContainer.innerHTML === "") {
      jobListingsContainer.innerHTML = "<p>No similar job openings right now. Try looking for something new.</p>";
  }
}
