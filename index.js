window.addEventListener("gamepadconnected", function(e) {
  const gp = navigator.getGamepads()[e.gamepad.index];
  document.getElementById("gamePadConnected").textContent = "GamePad connected";
});

window.addEventListener("gamepaddisconnected", function() {
  document.getElementById("gamePadConnected").textContent = "Waiting for GamePad...";
});
