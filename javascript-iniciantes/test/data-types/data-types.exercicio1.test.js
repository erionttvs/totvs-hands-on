function test() {
    var testContent = document.getElementById('exerc-1').textContent;
    var element = document.getElementsByTagName('h2')[0];

    if(testContent.includes('1')) {
        element.style.color='blue';
    }
}

