export function applyUserTextSettings() {
  const root = document.documentElement;

  const fontSize = localStorage.getItem("fontSize") || "16";
  const fontColor = localStorage.getItem("fontColor") || "default";
  const fontFamily = localStorage.getItem("fontFamily") || "sans-serif";

  root.style.setProperty("--user-font-size", `${fontSize}px`);
  root.style.setProperty("--user-font-family", fontFamily);

  if (fontColor === "default") {
    const themeColor = getComputedStyle(document.body)
      .getPropertyValue("--text-color")
      .trim();
    root.style.setProperty("--user-font-color", themeColor);
  } else {
    root.style.setProperty("--user-font-color", fontColor);
  }
}