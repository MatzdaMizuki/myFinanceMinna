function filterByCategory(category) {
  // Sort articles by date, newest first
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Clear the archive section
  let archiveSection = document.getElementById("archive-section");
  archiveSection.innerHTML = '';

  // Filter articles by category and display them
  let filteredArticles = category === "all" ? articles : articles.filter(article => article.category === category);

  let row; // Declare it outside the loop so we can append multiple cards to it

  filteredArticles.forEach((article, index) => {
      if (index % 3 === 0) { // If it's the start of a new row or the first element
          row = document.createElement("div");
          row.className = "row justify-content-center";
          archiveSection.appendChild(row);
      }

      let card = document.createElement("div");
      card.className = "card col-12 col-lg-4 bg-light p-3 rounded shadow";

      let cardBody = document.createElement("div");
      cardBody.className = "card-body text-center py-4";

      let imgDiv = document.createElement("div");
      imgDiv.className = "img-container";

      let articleImage = document.createElement("img");
      articleImage.className = "img-fluid";
      articleImage.src = `Images/newsletter/${article.date}.jpg`;
      articleImage.alt = article.title;
      imgDiv.appendChild(articleImage);

      let articleTitle = document.createElement("h4");
      articleTitle.className = "card-title pt-5";
      articleTitle.textContent = article.title;

      let articleDate = document.createElement("p");
      articleDate.textContent = article.date;

      let articleSummary = document.createElement("p");
      articleSummary.textContent = article.description;

      let readMoreButton = document.createElement("a");
      readMoreButton.href = article.link;
      readMoreButton.textContent = "Read More";
      // assign customed design for Read More button.
      readMoreButton.className = "btn custom-btn"; 


      cardBody.appendChild(imgDiv);
      cardBody.appendChild(articleTitle);
      cardBody.appendChild(articleDate);
      cardBody.appendChild(articleSummary);
      cardBody.appendChild(readMoreButton);
      card.appendChild(cardBody);
      row.appendChild(card);
  });

  // Reset button classes to btn-secondary
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
      button.classList.remove("btn-primary");
      button.classList.add("btn-secondary");
  });

  // Highlight the selected category button with btn-primary
  let selectedButtonId = "btn-" + category.replace(/\s+/g, '-');
  let selectedButton = document.getElementById(selectedButtonId);
  selectedButton.classList.remove("btn-secondary");
  selectedButton.classList.add("btn-primary");
}

// Initially display all articles in the archive in descending order by date
filterByCategory("all");
