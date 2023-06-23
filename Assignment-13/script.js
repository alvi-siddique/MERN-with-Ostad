// Function to toggle between light and dark modes
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", toggleMode);

// Interactive Visualization
function createBarChart() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const data = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F"],
    datasets: [
      {
        label: "Wins",
        data: [13, 8, 7, 6, 9, 11],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
}


createBarChart();


//league part
const totalPages = 6; 
let currentPage = 1; 

function showPage(page) {
  const pages = document.getElementsByClassName("league-data-page");
  
  for (let i = 0; i < pages.length; i++) {
    if (i + 1 === page) {
      pages[i].style.display = "block";
    } else {
      pages[i].style.display = "none";
    }
  }
  

  const previousPageBtn = document.getElementById("previous-page");
  const nextPageBtn = document.getElementById("next-page");
  
  if (page === 1) {
    previousPageBtn.style.display = "none";
  } else {
    previousPageBtn.style.display = "block";
  }
  
  if (page === totalPages) {
    nextPageBtn.style.display = "none";
  } else {
    nextPageBtn.style.display = "block";
  }
  
  currentPage = page;
}

// Function to navigate to the previous page
function previousPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

// Function to navigate to the next page
function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

showPage(1);