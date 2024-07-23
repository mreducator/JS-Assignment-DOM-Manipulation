    document.getElementById('filterInput').addEventListener('input', function() {
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
        let namesList = document.getElementById('namesList');
        let names = namesList.getElementsByTagName('li');

        for (let i = 0; i < names.length; i++) {
            let name = names[i].textContent.toUpperCase();
            if (name.indexOf(filterValue) > -1) {
                names[i].style.display = '';
            } else {
                names[i].style.display = 'none';
            }
        }
    });