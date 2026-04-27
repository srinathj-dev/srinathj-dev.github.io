
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const toDoContainer = document.getElementById("toDoTasksList");
const progressContainer = document.getElementById("progressTasksList");
const reviewContainer = document.getElementById("reviewTasksList");
const doneContainer = document.getElementById("doneTasksList");



displayCards()

function displayCards() {

    let toDoCount = 0;
    let progressCount = 0;
    let reviewCount = 0;
    let doneCount = 0;

    toDoContainer.innerHTML = "";
    progressContainer.innerHTML = ""
    reviewContainer.innerHTML = ""
    doneContainer.innerHTML = ""

    
    for (let i = 0; i < tasks.length; i++) {

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("taskItem", "w-full", "bg-white", "p-4", "flex", "flex-col", "gap-2", "rounded-xl", "border-[1px]", "border-slate-50","cursor-grab");
        taskContainer.setAttribute("draggable", "true");

        const taskHeadingContainer = document.createElement("div");
        taskHeadingContainer.classList.add("w-full", "flex", "items-center", "justify-between", "gap-1");

        const taskProgressHeadingContainer = document.createElement("div");
        taskProgressHeadingContainer.classList.add("flex", "items-center", "gap-2");

        const taskProgressContainer = document.createElement("div");
        taskProgressContainer.classList.add("taskProgressContainerBorder","rounded-full", "flex", "items-center", "justify-center", "flex-wrap", "w-4", "h-4", "border-2");


        const taskProgress = document.createElement("p");
        taskProgress.classList.add("w-2", "h-2", "rounded-full");


        const headingContainer = document.createElement("div");

        const cardHeading = document.createElement("h3");
        cardHeading.classList.add("text-base", "leading-[20px]", "font-medium", "font-[Inter]", "text-slate-800");

        cardHeading.innerText = tasks[i].tittle;

        const deleteContainer = document.createElement("div");
        deleteContainer.classList.add("border-2", "border-slate-200", "w-4", "h-4", "flex", "flex-col", "items-center", "justify-center", "rounded-md");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("text-[8px]", "text-slate-600", "cursor-pointer", "delete-btn");
        deleteBtn.setAttribute("data-id", tasks[i].id);

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-x");

        deleteBtn.appendChild(deleteIcon)
        deleteContainer.appendChild(deleteBtn)

        const taskBodyContainer = document.createElement("div");
        taskBodyContainer.classList.add("flex", "w-full", "justify-start", "font-[Inter]", "text-[#7c8083]", "text-sm", "font-normal", "leading-[20px]");

        const taskDescriptionContainer = document.createElement("p");
        taskDescriptionContainer.innerText = tasks[i].description;

        taskBodyContainer.appendChild(taskDescriptionContainer)

        taskProgressContainer.appendChild(taskProgress)
        headingContainer.appendChild(cardHeading)

        taskProgressHeadingContainer.appendChild(taskProgressContainer)
        taskProgressHeadingContainer.appendChild(headingContainer)

        taskHeadingContainer.appendChild(taskProgressHeadingContainer)
        taskHeadingContainer.appendChild(deleteContainer)

        taskContainer.appendChild(taskHeadingContainer)
        taskContainer.appendChild(taskBodyContainer)

        let progressPercent;
        let progressColor;
        if (tasks[i].status == "toDo") {
            progressPercent = 0;
            progressColor = "#d8d3e5"
            toDoCount++;

            // taskProgress.style.background = `conic-gradient(#93C5FD ${progressPercent}%, transparent 0)`;
            // taskProgressContainer.style.borderColor = "#d8d3e5";

            toDoContainer.prepend(taskContainer)
        } else if (tasks[i].status == "progress") {
            progressPercent = 33.3;
            progressColor = "#cad9cf"
            progressCount++;
            // taskProgressContainer.style.borderColor = "#cad9cf";
            // taskProgress.style.background = `conic-gradient(${progressColor} ${progressPercent}%, transparent 0)`;
            taskProgressContainer.classList.add("border-red-400");
            progressContainer.prepend(taskContainer)
        } else if (tasks[i].status == "review") {
            progressPercent = 66.3;
            progressColor = "#dad4d3"
            reviewCount++;
            // taskProgressContainer.style.borderColor = "#dad4d3";
            // taskProgress.style.background = `conic-gradient(${progressColor} ${progressPercent}%, transparent 0)`;
            reviewContainer.prepend(taskContainer)
        } else if (tasks[i].status == "done") {
          
            progressColor = "#93C5FD"
            // taskProgressContainer.style.borderColor = "#93C5FD";
            doneCount++;
            taskProgress.classList.add("flex", "items-center", "justify-center", "font-bold")

            // const completedIcon = document.createElement("i");
            // completedIcon.classList.add("text-[10px]", "text-[#93C5FD]", "fa-solid", "fa-check", "font-bold");
            // taskProgress.appendChild(completedIcon);
      
            doneContainer.prepend(taskContainer)
        }

    }

    document.getElementById("toDoCount").innerText = toDoCount;
    document.getElementById("progressCount").innerText = progressCount;
    document.getElementById("reviewCount").innerText = reviewCount;
    document.getElementById("doneCount").innerText = doneCount;
    
}

function addNewCard(tasksid, id, tittle, desc){
    const taskContainer = document.createElement("div");
        taskContainer.classList.add("taskItem", "w-full", "bg-white", "p-4", "flex", "flex-col", "gap-2", "rounded-xl", "border-[1px]", "border-slate-50","cursor-grab");
        taskContainer.setAttribute("draggable", "true");

        const taskHeadingContainer = document.createElement("div");
        taskHeadingContainer.classList.add("w-full", "flex", "items-center", "justify-between", "gap-1");

        const taskProgressHeadingContainer = document.createElement("div");
        taskProgressHeadingContainer.classList.add("flex", "items-center", "gap-2");

        const taskProgressContainer = document.createElement("div");
        taskProgressContainer.classList.add("taskProgressContainerBorder", "rounded-full", "flex", "items-center", "justify-center", "flex-wrap", "w-4", "h-4", "border-2");

        const taskProgress = document.createElement("p");
        taskProgress.classList.add("w-2", "h-2", "rounded-full", "progressContainer");
        

        const headingContainer = document.createElement("div");

        const cardHeading = document.createElement("h3");
        cardHeading.classList.add("text-base", "leading-[20px]", "font-medium", "font-[Inter]", "text-slate-800");

        cardHeading.innerText = tittle;

        const deleteContainer = document.createElement("div");
        deleteContainer.classList.add("border-2", "border-slate-200", "w-4", "h-4", "flex", "flex-col", "items-center", "justify-center", "rounded-md");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("text-[8px]", "text-slate-600", "cursor-pointer", "delete-btn");
        deleteBtn.setAttribute("data-id", id);

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-x");

        deleteBtn.appendChild(deleteIcon)
        deleteContainer.appendChild(deleteBtn)

        const taskBodyContainer = document.createElement("div");
        taskBodyContainer.classList.add("flex", "w-full", "justify-start", "font-[Inter]", "text-[#7c8083]", "text-sm", "font-normal", "leading-[20px]");

        const taskDescriptionContainer = document.createElement("p");
        taskDescriptionContainer.innerText = desc;

        taskBodyContainer.appendChild(taskDescriptionContainer)

        taskProgressContainer.appendChild(taskProgress)
        headingContainer.appendChild(cardHeading)

        taskProgressHeadingContainer.appendChild(taskProgressContainer)
        taskProgressHeadingContainer.appendChild(headingContainer)

        taskHeadingContainer.appendChild(taskProgressHeadingContainer)
        taskHeadingContainer.appendChild(deleteContainer)

        taskContainer.appendChild(taskHeadingContainer)
        taskContainer.appendChild(taskBodyContainer)

        let taskbody =document.getElementById(tasksid)
        taskbody.querySelector(".tasksContainer").prepend(taskContainer)

        let progressPercent;
        let progressColor;
        if(taskbody.id == "toDoContainer") {
            progressPercent = 0;
            progressColor = "#d8d3e5"
            toDoCount++;
            taskProgress.style.background = `conic-gradient(#d8d3e5 ${progressPercent}%, transparent 0)`;
            // taskProgressContainer.style.borderColor = "#d8d3e5";

        } else if(taskbody.id == "progressContainer") {
            progressPercent = 33.3;
            progressColor = "#cad9cf"
            progressCount++;
            taskProgressContainer.style.borderColor = "#cad9cf";
            taskProgress.style.background = `conic-gradient(${progressColor} ${progressPercent}%, transparent 0)`;
            // taskProgressContainer.classList.add("border-red-400");
           
        } else if (taskbody.id == "reviewContainer") {
            progressPercent = 66.3;
            progressColor = "#dad4d3"
            reviewCount++;
            taskProgressContainer.style.borderColor = "#dad4d3";
            taskProgress.style.background = `conic-gradient(${progressColor} ${progressPercent}%, transparent 0)`;
          

        } else if (taskbody.id == "doneContainer") {
            // progressPercent = 100;
            progressColor = "#93C5FD"
            taskProgressContainer.style.borderColor = "#93C5FD";
            doneCount++;
            taskProgress.classList.add("flex", "items-center", "justify-center", "font-bold")

            const completedIcon = document.createElement("i");
            completedIcon.classList.add("text-[10px]", "text-[#93C5FD]", "fa-solid", "fa-check", "font-bold");
            taskProgress.appendChild(completedIcon);
        
        }
}


const columnContainers = document.getElementById("columnsContainer")
let selectedColumn = null;

columnContainers.addEventListener("click", function (event) {
    const openOverlay = event.target.closest(".addTask");


    if (openOverlay) {
        selectedColumn = openOverlay.closest(".taskColumn");
        createTask.classList.remove("hidden")
    }


    const deleteBtn = event.target.closest(".delete-btn");

    if (deleteBtn) {
        const id = Number(deleteBtn.getAttribute("data-id"));
        console.log(this.getAttribute("data-id"))
        tasks = tasks.filter(task => task.id != id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        displayCards();
    }

})


const createTask = document.getElementById("addTaskOverlay");
    createTask.addEventListener("click", function (event) {
    const addTakDetails = event.target.closest("#addTaskValues");
    const mainOverlay = event.target.closest("#overlayMainContainer")
    const closeOverlay = event.target.closest("#closeOverlay")

    // if ( mainOverlay) return;

    const title = document.getElementById("headingInput").value;
    const description = document.getElementById("descriptionInput").value;

    let status;

    if (addTakDetails && title != "") {

        if (selectedColumn.id === "toDoContainer") {
            status = "toDo";
        } else if (selectedColumn.id === "progressContainer") {
            status = "progress";
        } else if (selectedColumn.id === "reviewContainer") {
            status = "review";
        } else if (selectedColumn.id === "doneContainer") {
            status = "done";
        }

        let uId = Date.now()

        tasks.push({
            id: uId,
            tittle: title,
            description: description,
            status: status
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createTask.classList.add("hidden");
        addNewCard(selectedColumn.id, uId, title, description)
    } else if (addTakDetails && title == "") {
        alert("enter heading")
    }
    if (!mainOverlay) {
        createTask.classList.add("hidden");
    }
    if (closeOverlay) {
        createTask.classList.add("hidden");
    }
    console.log(tasks);

});
let dragItem;

let tempItem;

// let deleteBtn = document.getElementById("deleteBtn")
columnContainers.addEventListener("dragstart", function (event) {
    const dragTask = event.target.closest(".taskItem")
    tempItem = dragTask;

    if (dragTask) {
        console.log("d",dragTask)
        const btn = dragTask.querySelector(".delete-btn");
        const id = btn.dataset.id;

       
        dragItem = tasks.find(task => task.id == id);
    }

})


columnContainers.addEventListener("dragover", function (event) {
    event.preventDefault();
    let dropOverArea = event.target.closest(".taskColumn")

    if (!dropOverArea) return;

})

columnContainers.addEventListener("drop", function (event) {
    event.preventDefault();

    let dropArea = event.target.closest(".taskColumn")

    if (dropArea.id === "toDoContainer") {
        dragItem.status = "toDo";
       
    } else if (dropArea.id === "progressContainer") {
        dragItem.status = "progress";
    } else if (dropArea.id === "reviewContainer") {
        dragItem.status = "review";
       
    } else if (dropArea.id === "doneContainer") {
        dragItem.status = "done";
       
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
     dropArea.querySelector(".tasksContainer").prepend(tempItem)
    // displayCards();
    console.log(dragItem.status)

})

