
function makeDefaultDiv(){
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
    x.src = "https://img.icons8.com/material/30/000000/multiply--v1.png";
    projName.innerHTML = "Default";

    projectGrid.insertBefore(div, addProj);
    div.appendChild(innerDiv);
    innerDiv.appendChild(arrow);
    innerDiv.appendChild(x);
    div.appendChild(projName);
}

function addProjectListeners(){
    const projectDivs = document.querySelectorAll('.projects-delete');


    projectDivs.forEach((div) => {
        div.addEventListener('mouseover', function () {
            console.log(div.childNodes)
            div.style.backgroundColor = "#FAF9F9";
            div.childNodes[0].style.display = "inline";
            div.childNodes[1].style.display = "inline";

        })
    })
    projectDivs.forEach((div) => {
        div.addEventListener('mouseout', function () {
            div.style.backgroundColor = "";
            div.childNodes[0].style.display = "none";
            div.childNodes[1].style.display = "none";
        })
    })
}

function makeNewProject(){
    const projectGrid = document.getElementById('projects-grid');
    const addProj = document.getElementById('projects-add');

    addProj.addEventListener('click', ()=>{
        let div = document.createElement('div');
        let innerDiv = document.createElement('div');
        let arrow = document.createElement('img');
        let x = document.createElement('img');
        let projPrompt = prompt("What's the name of your project?", 'Default');
        let projName = document.createElement('div');

        div.classList.add('projects');
        innerDiv.classList.add('projects-delete');
        arrow.src = "https://img.icons8.com/ios-filled/30/000000/long-arrow-right.png";
        x.src = "https://img.icons8.com/material/30/000000/multiply--v1.png";
        
        if (projPrompt != null){
            projName.innerHTML = projPrompt;
        }
        projectGrid.insertBefore(div, addProj);
        div.appendChild(innerDiv);
        innerDiv.appendChild(arrow);
        innerDiv.appendChild(x);
        div.appendChild(projName);

        addProjectListeners();
    })

}

export {makeDefaultDiv, addProjectListeners, makeNewProject}