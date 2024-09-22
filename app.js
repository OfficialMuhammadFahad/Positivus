// // For Inspect Element hide
window.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
      (e.ctrlKey && e.shiftKey && e.keyCode == 85) || // Ctrl+Shift+U
      (e.ctrlKey && e.keyCode == 83) || // Ctrl+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 83) || // Ctrl+Shift+S
      (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
      (e.keyCode == 123) || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.altKey && e.metaKey && e.keyCode == 73) || // Option+Cmd+I -- for Mac OS
      (e.altKey && e.metaKey && e.keyCode == 67)  // Option+Cmd+C -- for Mac OS
    ) {
      e.preventDefault();
    }
  });