const svgDiv = document.createElement('div');
svgDiv.id = 'maziaj';
document.body.appendChild(svgDiv);

function setmaziaj(isChecked) {
    const maziaj = document.getElementById('maziaj');
    if (isChecked) {
        maziaj.style.display = 'block';
    } else {
        maziaj.style.display = 'none';
    }
}

chrome.storage.local.get(['toggleCheckboxStatus'], function(result) {
    setmaziaj(!!result.toggleCheckboxStatus);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.toggleCheckboxStatus) {
        setmaziaj(!!changes.toggleCheckboxStatus.newValue);
    }
});