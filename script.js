const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

 function addTask()                                 // function to add a task 
 {
     if(inputBox.value === '')
     {
        alert("Please enter the task before adding");
     }
     else
     {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");  
        span.innerHTML = "\u00d7";                          //using span to add the cross mark
        li.appendChild(span);
     }
     inputBox.value = "";                                   //clearing text box everytime task is added
     saveData();                                            //saving updated data
 }

 listContainer.addEventListener('click',function(e){        //function to check the tasks and delete the tasks.

    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();                                         //saving updated data
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();                                         //saving updated data
    }
 },false);


 function saveData()                                            //function to save the data in the browser
 {
    localStorage.setItem("data", listContainer.innerHTML);      //stores all contents of listcontainer in the browser.
 }
 
function showTask()                                             //function to show the saved task everytime browser is opened
{
    listContainer.innerHTML = localStorage.getItem("data");     //getting data from localStorage
}

showTask();                                                     //loads saved data

