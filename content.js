const svgDiv = document.createElement('div');
svgDiv.id = 'svgbackground';
document.body.appendChild(svgDiv);

function setSvgBackground(isChecked) {
    const svgbackground = document.getElementById('svgbackground');
    if (isChecked) {
        svgbackground.style.display = 'block';
    } else {
        svgbackground.style.display = 'none';
    }
}

chrome.storage.local.get(['toggleCheckboxStatus'], function(result) {
    setSvgBackground(!!result.toggleCheckboxStatus);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.toggleCheckboxStatus) {
        setSvgBackground(!!changes.toggleCheckboxStatus.newValue);
    }
});