
function makeDefaultDiv() {
    const projectGrid = document.getElementById('projects-grid');
    const addProj = document.getElementById('projects-add');
    let div = document.createElement('div');
    let innerDiv = document.createElement('div');
    let arrow = document.createElement('img');
    let x = document.createElement('img');
    let projName = document.createElement('div');

    div.classList.add('projects');
    innerDiv.classList.add('projects-delete');
    arrow.src = "https://img.icons8.com/ios-filled/30/000000/long-arrow-right.png";
    arrow.classList.add('proj-go');
    x.src = "https://img.icons8.com/material/30/000000/multiply--v1.png";
    x.classList.add('proj-del');
    projName.innerHTML = "Default";

    projectGrid.insertBefore(div, addProj);
    div.appendChild(innerDiv);
    innerDiv.appendChild(arrow);
    innerDiv.appendChild(x);
    div.appendChild(projName);

    addProjectMouseEvents(innerDiv);
    goToProject(arrow);
}

function addProjectMouseEvents(div) {
    const projectDivs = document.querySelectorAll('.projects-delete');

    div.addEventListener('mouseover', function () {
        div.style.backgroundColor = "#FAF9F9";
        div.childNodes[0].style.display = "inline";
        div.childNodes[1].style.display = "inline";

    })

    div.addEventListener('mouseout', function () {
        div.style.backgroundColor = "";
        div.childNodes[0].style.display = "none";
        div.childNodes[1].style.display = "none";
    })


}

function goToProject(arrow) {
    

    arrow.addEventListener('click', () => {
        let projDiv = arrow.parentNode.parentNode;
        let projDivs = document.querySelectorAll('.projects');

        projDivs.forEach((div) => {
            if (div.classList.contains('active-project')) {
                div.classList.remove('active-project');
            }
        })
        projDiv.classList.add('active-project');
    })
}

function makeNewProject() {
    const projectGrid = document.getElementById('projects-grid');
    const addProj = document.getElementById('projects-add');

    addProj.addEventListener('click', () => {
        let div = document.createElement('div');
        let innerDiv = document.createElement('div');
        let arrow = document.createElement('img');
        let x = document.createElement('img');
        let projPrompt = prompt("What's the name of your project?", 'Default');
        let projName = document.createElement('div');

        div.classList.add('projects');
        innerDiv.classList.add('projects-delete');
        arrow.src = "https://img.icons8.com/ios-filled/30/000000/long-arrow-right.png";
        arrow.classList.add('proj-go');
        x.classList.add('proj-del');
        x.src = "https://img.icons8.com/material/30/000000/multiply--v1.png";

        if (projPrompt != null) {
            projName.innerHTML = projPrompt;
        }
        projectGrid.insertBefore(div, addProj);
        div.appendChild(innerDiv);
        innerDiv.appendChild(arrow);
        innerDiv.appendChild(x);
        div.appendChild(projName);

        goToProject(arrow);
        addProjectMouseEvents(innerDiv);

    })

}

export { makeDefaultDiv, makeNewProject }