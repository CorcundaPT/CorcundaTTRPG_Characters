function toggleMoney (tab) {
    if (document.getElementById(tab+'Tab').style.display == 'table') {
        document.getElementById(tab+'Tab').style.display = 'none';
    } else {
        document.getElementById(tab+'Tab').style.display = 'table';
    }
}