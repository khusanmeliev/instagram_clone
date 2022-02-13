document.getElementById("curtainInput").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Follow") {
        event.target.value = "Follow";
      } else {
        event.target.value = "Following";
      }
    },
    false
  );