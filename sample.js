function setCheckboxFromLocalStorage() {
    var toggleCheckbox = document.getElementById('toggleCheckbox');
    var svgbackground = document.getElementById('svgbackground');
    
    var isChecked = localStorage.getItem('toggleCheckboxStatus');

    if (isChecked === 'true') {
        toggleCheckbox.checked = true;
        svgbackground.style.display = 'block';
    } else {
        toggleCheckbox.checked = false;
        svgbackground.style.display = 'none';
    }
}

window.onload = setCheckboxFromLocalStorage;

document.getElementById('toggleCheckbox').addEventListener('change', function() {
    var svgbackground = document.getElementById('svgbackground');
    
    if (this.checked) {
        svgbackground.style.display = 'block';
        localStorage.setItem('toggleCheckboxStatus', 'true');
    } else {
        svgbackground.style.display = 'none';
        localStorage.setItem('toggleCheckboxStatus', 'false');
    }
});

//   <div id="svgbackground"></div>