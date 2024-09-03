const { windowManager } = require("./dist/index");

console.log(windowManager.requestAccessibility()); // required on macOS
const window = windowManager.getActiveWindow();

console.log(window.getTitle());

const bounds = window.getBounds();
console.log(bounds);

window.setBounds({ x: 0, y: 0 });
console.log("window Status", window.getStatus());
window.maximize();

setTimeout(() => {
  window.setBounds(bounds);
}, 1000);

console.log("Windows list");
windowManager.getWindows().forEach((window) => {
  if (window.isVisible()) {
    console.log(window.getTitle(), window.path);
  }
});

windowManager.on("window-activated", (window) => {
  console.log(window.path);
});

console.log("Monitors list");
windowManager.getMonitors().forEach((monitor) => {
  console.log(monitor.getWorkArea());
});

const status = windowManager.GetWindowPlacement(window.id);
console.log("GetWindowPlacement", status);