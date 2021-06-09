const clipboard = document.querySelector('.clipboard');

export function copy(item) {
    const getText = (item.textContent);

    clipboard.value = getText;
    clipboard.select();
    clipboard.setSelectionRange(0, 99999)
    document.execCommand("copy");
    console.log(clipboard)
    console.log(item);
}