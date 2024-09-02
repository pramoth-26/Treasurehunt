function storeData() {
    const data = document.getElementById('dataInput').value;
    localStorage.setItem('sharedData', data);
    window.location.href = 'page2.html'; // Redirect to Page 2
}

document.addEventListener('DOMContentLoaded', (event) => {
    const data = localStorage.getItem('sharedData');
    document.getElementById('displayData').innerText = data;
});