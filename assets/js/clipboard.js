const clipboard = document.querySelector('.clipboard-textarea'); // Clipboard textarea element (Hidden behind navbar)
const popupConfirmation = document.querySelector('.clipboard'); // Clipboard Popup

export function copy(item) { // Copies the discord tag to the users clipboard when the button is clicked
    const getText = (item.textContent);
    clipboard.value = getText; // Sets the textarea value to be the value of the username within the profile.
    clipboard.select(); // Selects the value in clipboard
    clipboard.setSelectionRange(0, 99999)
    document.execCommand("copy"); // Executes the copy to the clipboard
    confirmCopy(); // Function to display message
}

function confirmCopy() { // Displays copied to clipboard div (message)
    popupConfirmation.classList.add('show-clipboard')
    setTimeout(() => {
        popupConfirmation.classList.remove('show-clipboard');
    }, 2000);
}