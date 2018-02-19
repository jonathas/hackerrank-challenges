let btn5 = document.querySelector('#btn5');
const btns = document.getElementsByTagName('button');
const btnArray = Array.from(btns).filter(btn => btn.innerHTML != 5);

btn5.addEventListener('click', () => {
    let first = btnArray[0].innerHTML;
    btnArray[0].innerHTML = btnArray[3].innerHTML;
    btnArray[3].innerHTML = btnArray[5].innerHTML;
    btnArray[5].innerHTML = btnArray[6].innerHTML;
    btnArray[6].innerHTML = btnArray[7].innerHTML;
    btnArray[7].innerHTML = btnArray[4].innerHTML;
    btnArray[4].innerHTML = btnArray[2].innerHTML;
    btnArray[2].innerHTML = btnArray[1].innerHTML;
    btnArray[1].innerHTML = first;
});