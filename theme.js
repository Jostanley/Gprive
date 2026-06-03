const theme = localStorage.getItem("theme") || "light";

applyTheme(theme);

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("bg-gray-950", "text-white");
    document.body.classList.remove("bg-white", "text-black");
  } else {
    document.body.classList.add("bg-white", "text-black");
    document.body.classList.remove("bg-gray-950", "text-white");
  }
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}