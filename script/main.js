function toggleTab (tab) {
    if (document.getElementById(tab+'Tab').style.display == 'block') {
        document.getElementById(tab+'Tab').style.display = 'none';
    } else {
        document.getElementById(tab+'Tab').style.display = 'block';
    }
}

function toggleWindow (window) {
    if (document.getElementById(window+'Desc').style.display == 'block') {
        document.getElementById(window+'Desc').style.display = 'none';
    } else {
        document.getElementById(window+'Desc').style.display = 'block';
    }
}