{
    var lis = document.querySelectorAll('li');
    lis.forEach(function (li) {
        li.addEventListener('click', function () {
            if (li.classList.contains('correct'))
                li.classList.add('correct-style');
            else
                li.classList.add('incorrect-style');
        });
    });
}
