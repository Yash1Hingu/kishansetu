var suggestionsList = {
    "veg": ["Carrot", "Potato", "Tomato", "Cucumber", "Lettuce", "Onion", "Pepper", "Garlic", "Ginger", "Radish", "Beetroot", "Cabbage", "Spinach", "Peas", "Broccoli", "Cauliflower", "Corn", "Eggplant", "Zucchini", "Mushroom", "Pumpkin", "Celery", "Asparagus", "Brussels Sprouts", "Green Beans", "Kale", "Leek", "Okra", "Parsnip", "Rutabaga", "Squash", "Sweet Potato", "Turnip", "Yam", "Artichoke", "Arugula", "Bok Choy", "Chard", "Chicory", "Collard Greens", "Cress", "Dandelion Greens", "Endive", "Fennel", "Lamb's Lettuce", "Mache", "Mizuna", "Mustard Greens", "Radicchio", "Watercress"],
    "fruits": ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Ice Cream Bean", "Jackfruit", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tangerine", "Ugli Fruit", "Vanilla Bean", "Watermelon", "Xigua", "Yellow Passionfruit", "Zucchini", "Apricot", "Blackberry", "Cantaloupe", "Dragonfruit", "Eggfruit", "Feijoa", "Guava", "Huckleberry", "Imbe", "Jabuticaba", "Kumquat", "Lime", "Mulberry", "Nance", "Olive", "Peach", "Queen Anne's Cherry", "Rambutan", "Soursop", "Tomato", "Uva", "Voavanga", "Wolfberry", "Ximenia"],
    "dryfruits": ["Almond", "Cashew", "Walnut", "Raisin", "Pistachio", "Peanut", "Hazelnut", "Macadamia", "Pecan", "Brazil Nut", "Chestnut", "Pine Nut", "Coconut", "Date", "Fig", "Prune", "Apricot", "Peach", "Pear", "Apple", "Banana", "Cherry", "Blueberry", "Cranberry", "Currant", "Grape", "Kiwi", "Lemon", "Lime", "Mango", "Melon", "Orange", "Papaya", "Pineapple", "Raspberry", "Strawberry", "Watermelon", "Blackberry", "Cantaloupe", "Dragonfruit", "Elderberry", "Feijoa", "Guava", "Huckleberry", "Imbe", "Jabuticaba", "Kumquat", "Lychee", "Mulberry"],
    "All": ["Carrot", "Potato", "Tomato", "Cucumber", "Lettuce", "Onion", "Pepper", "Garlic", "Ginger", "Radish", "Beetroot", "Cabbage", "Spinach", "Peas", "Broccoli", "Cauliflower", "Corn", "Eggplant", "Zucchini", "Mushroom", "Pumpkin", "Celery", "Asparagus", "Brussels Sprouts", "Green Beans", "Kale", "Leek", "Okra", "Parsnip", "Rutabaga", "Squash", "Sweet Potato", "Turnip", "Yam", "Artichoke", "Arugula", "Bok Choy", "Chard", "Chicory", "Collard Greens", "Cress", "Dandelion Greens", "Endive", "Fennel", "Lamb's Lettuce", "Mache", "Mizuna", "Mustard Greens", "Radicchio", "Watercress", "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Ice Cream Bean", "Jackfruit", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tangerine", "Ugli Fruit", "Vanilla Bean", "Watermelon", "Xigua", "Yellow Passionfruit", "Zucchini", "Apricot", "Blackberry", "Cantaloupe", "Dragonfruit", "Eggfruit", "Feijoa", "Guava", "Huckleberry", "Imbe", "Jabuticaba", "Kumquat", "Lime", "Mulberry", "Nance", "Olive", "Peach", "Queen Anne's Cherry", "Rambutan", "Soursop", "Tomato", "Uva", "Voavanga", "Wolfberry", "Ximenia", "Almond", "Cashew", "Walnut", "Raisin", "Pistachio", "Peanut", "Hazelnut", "Macadamia", "Pecan", "Brazil Nut", "Chestnut", "Pine Nut", "Coconut", "Date", "Fig", "Prune", "Apricot", "Peach", "Pear", "Apple", "Banana", "Cherry", "Blueberry", "Cranberry", "Currant", "Grape", "Kiwi", "Lemon", "Lime", "Mango", "Melon", "Orange", "Papaya", "Pineapple", "Raspberry", "Strawberry", "Watermelon", "Blackberry", "Cantaloupe", "Dragonfruit", "Elderberry", "Feijoa", "Guava", "Huckleberry", "Imbe", "Jabuticaba", "Kumquat", "Lychee", "Mulberry"]
};


function showSuggestions(value) {
    var category = document.getElementById("category").value;
    var suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    if (value.length > 0) {
        var filteredSuggestions = suggestionsList[category].filter(function (suggestion) {
            return suggestion.toLowerCase().startsWith(value.toLowerCase());
        });
        filteredSuggestions.forEach(function (suggestion) {
            var div = document.createElement("div");
            div.innerHTML = suggestion;
            suggestions.appendChild(div);
            div.onclick = function () {
                document.getElementById("searchBar").value = suggestion;
                suggestions.innerHTML = "";
            };
        });
    }
}