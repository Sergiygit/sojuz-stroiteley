import "./footer.min.js";
import "./common.min.js";
let element = document.querySelectorAll(".marker");
function disActiveMapPopUp(el) {
  let disActive = document.querySelectorAll(".map-popup");
  disActive.forEach((element2) => {
    if (el != element2.id) {
      element2.style.display = "none";
    }
  });
}
element.forEach((e) => {
  e.addEventListener("click", function(e2) {
    let elementId = this.getAttribute("data-region");
    let markersValue = this.children.length;
    let activeMarker = this.children[markersValue - 1];
    const rect = activeMarker.getBoundingClientRect();
    const popup = document.getElementById(elementId);
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.top = `${rect.top + window.scrollY}px`;
    document.querySelector(`.${elementId}`).style.display = "block";
    disActiveMapPopUp(elementId);
  });
});
