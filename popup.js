document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    
    chrome.storage.local.get(['toggleCheckboxStatus'], function(result) {
        toggleCheckbox.checked = !!result.toggleCheckboxStatus;
    });

    toggleCheckbox.addEventListener('change', function() {
        chrome.storage.local.set({toggleCheckboxStatus: this.checked}, function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    function: updatemaziaj,
                    args: [toggleCheckbox.checked]
                });
            });
        });
    });
});

function updatemaziaj(isChecked) {
    var maziaj = document.getElementById('maziaj');
    if (isChecked) {
        maziaj.style.display = 'block';
    } else {
        maziaj.style.display = 'none';
    }
}