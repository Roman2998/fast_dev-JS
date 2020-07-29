const btn = document.querySelectorAll('button'),
      card = document.querySelectorAll('.card');

let cardCount = document.querySelector('.cardCount').children[0],
    i = 0;

let done = (node) => {
    let div = document.createElement('div'),
        img = document.createElement('img');
    div.append(img);
    div.classList.add('done-ico');
    img.setAttribute('src', 'icons/done_fill.svg');
    node.prepend(div);
};

btn.forEach(item => {
    item.addEventListener('click', function() {
        if (item.innerHTML === 'Добавить') {
            item.innerHTML = 'Удалить из заявки';
            item.classList.add("active");
            item.parentNode.parentNode.classList.add("done");
            done(item.parentNode.parentNode);
            i++;
        } else {
            item.innerHTML = 'Добавить';
            item.classList.remove("active");
            item.parentNode.parentNode.classList.remove("done");
            document.querySelector('.done-ico').remove();
            i--;
        }
        cardCount.textContent = i;
    })
})