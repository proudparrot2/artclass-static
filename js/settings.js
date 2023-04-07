function updateTabNames() {
  const tabNameInput = document.getElementById("tabname")
  localStorage.setItem('tabname', tabNameInput.value)
  localStorage.setItem("cloaktype", "clickoff")
}

function updateFavicon() {
  const faviconInput = document.getElementById("faviconInput")
  localStorage.setItem('favicon', faviconInput.value)
  localStorage.setItem("cloaktype", "clickoff")
}

function resetCloak() {
  localStorage.setItem("favicon", "icon.png")
  localStorage.setItem("tabname", "Art Class")
}

function updateBareServer() {
  localStorage.setItem("bareserver", document.querySelector("#bareInput").value)
  document.querySelector("#bareInput").value = ""
}

var originalTab = document.title
var originalFavicon = document.querySelector("link[rel~='icon']").href

document.addEventListener('visibilitychange', (event) => {
  if (document.title != originalTab) {
    document.title = originalTab
    document.querySelector("link[rel~='icon']").href = originalFavicon
  } else {
    document.title = localStorage.getItem("tabname")
    document.querySelector("link[rel~='icon']").href = localStorage.getItem("favicon")
  }
});