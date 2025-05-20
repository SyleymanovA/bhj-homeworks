document.addEventListener ('DOMContentLoaded', function () {
    const book = document.getElementById ('book');
    const fontSizeControl = document.querySelectorAll ('.font-size');
    fontSizeControl.forEach (control => {
        control.addEventListener ('click', function (e) {
            e.preventDefault ();
            fontSizeControl.forEach (item => {
                item.classList.remove ('font-size_active');
            });
            this.classList.add ('font-size_active');
            const size = this.dataset.size;
            book.classList.remove ('book_fs-small','book_fs-big');
            if (size === 'small') {
                book.classList.add ('book_fs-small');
            } else if (size === 'big') {
                book.classList.add ('book_fs-big');
            }
        });
    });
});