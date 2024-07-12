document.addEventListener('DOMContentLoaded', function() {
    const clickableItems = document.querySelectorAll('.clickable');

    clickableItems.forEach(item => {
        item.addEventListener('click', function() {
            const nestedList = this.querySelector('.nested');
            if (nestedList.style.display === 'none' || nestedList.style.display === '') {
                nestedList.style.display = 'block';
            } else {
                nestedList.style.display = 'none';
            }
        });
    });
});
