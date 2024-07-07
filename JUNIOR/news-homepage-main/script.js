const logo = document.querySelector(".logo");

logo.addEventListener("click", reloadPage);

document.addEventListener("click", reloadPageOnAnyClick);

function reloadPageOnAnyClick(event) {
  if (event.target !== logo) {
    reloadPage();
  }
}

function reloadPage() {
  window.location.reload();
}

