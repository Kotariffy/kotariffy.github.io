
let offsetX = 0;
let offsetY = 0;
let draggedElement = null;

document.addEventListener('DOMContentLoaded', function() {
    const draggableElements = document.querySelectorAll(".draggable");
    draggableElements.forEach((element) => {
        element.addEventListener('mousedown', mouseDown);
    }); 
});

function mouseDown(e) {
    if(e.target.classList.contains("header")) {
        draggedElement = e.currentTarget;
        const rect = draggedElement.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        draggedElement.classList.add("dragging");
        bringToFront(draggedElement);
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    }
}

function mouseMove(e) {
    if (draggedElement) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    draggedElement.style.left = `${newX}px`;
    draggedElement.style.top = `${newY}px`;
    }
}

function mouseUp() {
    if (draggedElement) {
    draggedElement.classList.remove("dragging");
    draggedElement = null;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
    }
}

function bringToFront(element) {
    const divs = document.querySelectorAll(".draggable");
    let highestZIndex = 0;

    divs.forEach((div) => {
        const zIndex = parseInt(window.getComputedStyle(div).zIndex, 10);
        if (!isNaN(zIndex) && zIndex > highestZIndex) {
            highestZIndex = zIndex;
        }
    });
    element.style.zIndex = highestZIndex + 1;
}


function closeTab(divNumber) {
    var cardToClose = document.getElementById("card" + divNumber);
    cardToClose.style.display = "none";
}
