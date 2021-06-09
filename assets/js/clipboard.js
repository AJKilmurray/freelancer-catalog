const clipboard = document.querySelector('.clipboard');
const popupConfirmation = document.querySelector('.hide-clipboard');

export function copy(item) {
    const getText = (item.textContent);
    clipboard.value = getText;
    clipboard.select();
    clipboard.setSelectionRange(0, 99999)
    document.execCommand("copy");
    confirmCopy(getText);
}

function confirmCopy(copiedText) {
    popupConfirmation.classList.add('show-popup-clipboard')
    popupConfirmation.innerHTML = `<p>${copiedText} has been copied to your clipboard.</p>`;
    setTimeout(() => {
        popupConfirmation.classList.remove('show-pop-clipboard');
    }, 8000);
}