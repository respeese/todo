

function openForm() {
    document.getElementById("todoForm").style.display = "block";
}

function closeForm() {
    let title = document.getElementById('form-title');

    if (title.value == "") {
        alert('Please enter a title.') ;
    } else {
        document.getElementById("todoForm").style.display = "none";
    }
}

export { openForm, closeForm }