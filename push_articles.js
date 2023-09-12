function filterByCategory(category) {
    // Organize the list of articles so that the most recent articles appear first.
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the section of the page where articles are displayed and clear it for new content.
    let archiveSection = document.getElementById("archive-section");
    archiveSection.innerHTML = '';

    // Decide which articles to show: either all of them or only those of a specific category.
    let filteredArticles = category === "all" ? articles : articles.filter(article => article.category === category);

    // Go through each article and create its visual representation on the page.
    filteredArticles.forEach((article) => {
        // Create a visual card for the article.
        let card = document.createElement("div");
        card.className = "card col-12 bg-light p-3 rounded shadow";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body py-4";
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";

        // Display the article's image.
        let imgDiv = document.createElement("div");
        imgDiv.className = "col-12 col-lg-3 img-container position-relative";

        let articleImage = document.createElement("img");
        articleImage.className = "img-fluid";
        articleImage.src = `Images/newsletter/${article.date}.jpg`;
        articleImage.alt = article.title;

        // Create and style the category badge.
        let categoryBadge = document.createElement("span");
        categoryBadge.className = "badge rounded-pill text-bg-secondary position-absolute top-10 start-0 p-1";
        categoryBadge.style = "z-index: 1; font-size: 1em;";
        categoryBadge.textContent = article.category;

        imgDiv.appendChild(articleImage);
        imgDiv.appendChild(categoryBadge);

        let textDiv = document.createElement("div");
        textDiv.className = "col-12 col-lg-9";

        let articleTitle = document.createElement("h3");
        articleTitle.className = "card-title pt-5";
        articleTitle.textContent = article.title;

        let articleDate = document.createElement("p");
        articleDate.textContent = article.date;

        let articleSummary = document.createElement("p");
        articleSummary.className = "lead text-muted";
        articleSummary.textContent = article.description;

        let readMoreButton = document.createElement("button");
        readMoreButton.className = "btn btn-lg mt-3 custom-btn";
        readMoreButton.onclick = function() {
            window.location.href = article.link;
        };
        readMoreButton.textContent = "Read More in Instagram";

        textDiv.appendChild(articleTitle);
        textDiv.appendChild(articleDate);
        textDiv.appendChild(articleSummary);
        textDiv.appendChild(readMoreButton);

        rowDiv.appendChild(imgDiv);
        rowDiv.appendChild(textDiv);

        cardBody.appendChild(rowDiv);
        card.appendChild(cardBody);
        archiveSection.appendChild(card);
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
