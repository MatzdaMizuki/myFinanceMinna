function filterByCategory(category) {
    // Organize the list of articles so that the most recent articles appear first.
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the section of the page where articles are displayed and clear it for new content.
    let archiveSection = document.getElementById("archive-section");
    archiveSection.innerHTML = '';

    // Decide which articles to show: either all of them or only those of a specific category.
    let filteredArticles = category === "all" ? articles : articles.filter(article => article.category === category);

    // This will hold the row of articles; a new row is created every 3 articles.
    let row;

    // Go through each article and create its visual representation on the page.
    filteredArticles.forEach((article, index) => {
        // Every third article starts a new row for better visual arrangement.
        if (index % 3 === 0) {
            row = document.createElement("div");
            row.className = "row justify-content-center";
            archiveSection.appendChild(row);
        }

        // Create a visual card for the article.
        let card = document.createElement("div");
        card.className = "card col-12 col-lg-4 bg-light p-3 rounded shadow";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body text-center py-4";

        // Display the article's image.
        let imgDiv = document.createElement("div");
        imgDiv.className = "img-container";
        let articleImage = document.createElement("img");
        articleImage.className = "img-fluid";
        articleImage.src = `Images/newsletter/${article.date}.jpg`;
        articleImage.alt = article.title;
        imgDiv.appendChild(articleImage);

        // Display the article's title.
        let articleTitle = document.createElement("h4");
        articleTitle.className = "card-title pt-5";
        articleTitle.textContent = article.title;

        // Display the article's publication date.
        let articleDate = document.createElement("p");
        articleDate.textContent = article.date;

        // Display a brief summary or description of the article.
        let articleSummary = document.createElement("p");
        articleSummary.textContent = article.description;

        // Create a button to read the full article.
        let readMoreButton = document.createElement("a");
        readMoreButton.href = article.link;
        readMoreButton.textContent = "Read More";
        readMoreButton.className = "btn custom-btn"; // Apply the custom design

        // Add all the elements to the card.
        cardBody.appendChild(imgDiv);
        cardBody.appendChild(articleTitle);
        cardBody.appendChild(articleDate);
        cardBody.appendChild(articleSummary);
        cardBody.appendChild(readMoreButton);
        card.appendChild(cardBody);
        row.appendChild(card);
    });

    // Reset all buttons to the default (gray) color.
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.classList.remove("btn-primary");
        button.classList.add("btn-secondary");
    });

    // Determine which button corresponds to the currently selected category.
    let selectedButtonId = "btn-" + category.replace(/\s+/g, '-');
    let selectedButton = document.getElementById(selectedButtonId);

    // Make sure all category buttons are set to the default (gray) color.
    let categoryButtons = document.querySelectorAll('.newsletter_button');
    categoryButtons.forEach(button => {
        button.classList.remove("btn-custom-selected");
        button.classList.add("btn-secondary");
    });

    // Highlight the button of the currently selected category in green.
    selectedButton.classList.remove("btn-secondary");
    selectedButton.classList.add("btn-custom-selected");
}

// When the page first loads, show all articles by default.
filterByCategory("all");
