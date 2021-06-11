const clipboard = document.querySelector('.clipboard-textarea');
const popupConfirmation = document.querySelector('.clipboard');

export function copy(item) {
    const getText = (item.textContent);
    clipboard.value = getText;
    clipboard.select();
    clipboard.setSelectionRange(0, 99999)
    document.execCommand("copy");
    confirmCopy();
}

function confirmCopy() {
    popupConfirmation.classList.add('show-clipboard')
    setTimeout(() => {
        popupConfirmation.classList.remove('show-clipboard');
    }, 2000);
}