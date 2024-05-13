let newX = 0, newY = 0, startX = 0, startY = 0;

// const card = document.getElementById('card')
// const card_header = document.getElementById('card-header')

document.addEventListener('DOMContentLoaded', function() {

    const draggableElements = document.querySelectorAll(".draggable");
    draggableElements.forEach((element) => {
        element.addEventListener('mousedown', onMouseDown);
    }); 

    let offsetX = 0;
    let offsetY = 0;
    let draggedElement = null;

    function onMouseDown(e) {
        if(e.target.classList.contains("header")) {
            draggedElement = e.currentTarget;
            const rect = draggedElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            draggedElement.classList.add("dragging");
            bringToFront(draggedElement);
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }
    }

    function onMouseMove(e) {
        if (draggedElement) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        draggedElement.style.left = `${newX}px`;
        draggedElement.style.top = `${newY}px`;
        }
    }

    function onMouseUp() {
        if (draggedElement) {
        draggedElement.classList.remove("dragging");
        draggedElement = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
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

});

function closeTab(divNumber) {
    var cardToClose = document.getElementById("card" + divNumber);
    cardToClose.style.display = "none";
}


// card_header.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY


    card.style.top = (card.offsetTop - newY)+ 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'

    // card.style.top = (card.offsetTop - newY) + 'px'
    // card.style.left = (card.offsetLeft - newX) + 'px'

    console.log({newX, newY})
    console.log({startX, startY})
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)

}