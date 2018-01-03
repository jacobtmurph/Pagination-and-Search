//Select page div
const header = document.querySelector(".page-header");

//Function to append search bar
function appendSearchBar(headerDiv) {
    
    //Create, set class of, and append search div
    const searchDiv = document.createElement("div");
    searchDiv.setAttribute("class", "student-search");
    
    headerDiv.appendChild(searchDiv);

    //Create, set placeholder of, and append search input
    const searchBar = document.createElement("input");
    searchBar.setAttribute("placeholder", "Search for students...");
    
    searchDiv.appendChild(searchBar);

    //Create, set text content of, and append Search button
    const searchButton = document.createElement("button");
    searchButton.textContent = "Search";

    searchDiv.appendChild(searchButton);
}; //End appendSearchBar

//Function to return search results with a maximum of ten per page
function searchList() {

    //Obtain the text to search for
    const query = header.querySelector("input").value;

    //Initialize search list of students
    const searchArray = [];

    //Loop through students array
    students.forEach(student => {
        //Check to see if students name (h3) or email is equal to the search query
        if (student.querySelector("h3").textContent.toLowerCase().includes(query.toLowerCase()) || 
            student.querySelector(".email").textContent.toLowerCase().includes(query.toLowerCase())) {
                //Append student to searchList array
                console.log(student);
                searchArray.push(student);
            }; //End if loop
    }); //End forEach

    //Check to see if more than ten students were found
    if (searchArray.length === 0) {
        //clear the page
        appendPageLinks([]);

        //Create and display h4
        const noResults = document.createElement("h4");
        noResults.innerText = "Sorry, no students were found for that search...";
        document.querySelector(".page").appendChild(noResults);
    } else {
        //Append and display search results
        appendPageLinks(searchArray);
    };
}; //End searchList


//Append the search bar
appendSearchBar(header);

document.querySelector("button").addEventListener("click", () => {
    searchList();
});