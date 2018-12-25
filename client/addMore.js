let showMore = () => {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('moreText');
    let buttonText = document.getElementById('readMore');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        buttonText.innerHTML = 'Read More';
        moreText.style.display = 'none';
    } else {
        dots.style.display = 'none';
        buttonText.innerHTML = 'Read Less';
        moreText.style.display = 'inline';
    }
}

module.exports = showMore;