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
                    function: updateSvgBackground,
                    args: [toggleCheckbox.checked]
                });
            });
        });
    });
});

function updateSvgBackground(isChecked) {
    var svgbackground = document.getElementById('svgbackground');
    if (isChecked) {
        svgbackground.style.display = 'block';
    } else {
        svgbackground.style.display = 'none';
    }
}