//Creates an array of all the students on the page
const students = Array.from(document.querySelector(".student-list").children);

//Function to show a maximum of 10 students per page
function showPage(studentList, pageNum) {
    
    //Selects each individual student in the studentList array
    studentList.forEach(student => {
        //Hides all the students
        student.style.display = "none";
        
        //Displays needed students
        if (studentList.indexOf(student) >= pageNum * 10 && studentList.indexOf(student) < pageNum * 10 + 10) {
            student.style.display = "block";
        }; //end if loop
    }); //End forEach
}; //End showPage

//Function to create and manage pagination buttons
function appendPageLinks(studentList) {
    
    //Calculate amount of buttons needed
    const pagesNeeded = Math.ceil(studentList.length / 10);
    
    //Create, and set the class of pagination div
    const newPagDiv = document.createElement("div");
    newPagDiv.setAttribute("class", "pagination");

    //If there is already pagination, clear the div;
    if (document.querySelector(".pagination")) {
        const currentPagDiv = document.querySelector(".pagination"); 
        currentPagDiv.parentNode.removeChild(currentPagDiv);
    } //End if
    
    //Append new Page div
    document.querySelector(".page").appendChild(newPagDiv);


    //Create pagination ul and add it to the pagination div
    const pagList = document.createElement("ul");
    newPagDiv.appendChild(pagList);

    //Create pagination buttons
    for (let i =0; i < pagesNeeded; i++) {
        
        //Create buttons & add them to the ul
        const pagButton = document.createElement("li");
        newPagDiv.appendChild(pagButton);

        //Creates anchor for each button and appends it
        const buttonAnchor = document.createElement("a");
        pagButton.appendChild(buttonAnchor);

        //Set text content of each anchor to the current page number, starting at 1
        buttonAnchor.textContent = String(i + 1);
    }; //End for loop

    //Create an array of all anchors on the page
    const buttonArray = Array.from(document.getElementsByTagName("a"));

    //show firstPage and set first button to active
    showPage(studentList, 0);
    buttonArray[0].setAttribute("class", "active");

    //Selects each indivdual button
    buttonArray.forEach( button => {
        //Add event listener to each list item
        button.parentNode.addEventListener("click", () => {
            //Remove current active class
            document.querySelector(".active").removeAttribute("class");

            //Set clicked button's class to active
            button.setAttribute("class", "active");

            //Show students for button page
            showPage(studentList, button.textContent -1);
        }, false); //End event listener
    }) //End forEach
}; //End appendPageLinks

//Apply pagination
appendPageLinks(students);