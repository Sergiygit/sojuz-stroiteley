import "./footer.min.js";
/* empty css           */
import "./common.min.js";
let marker = document.querySelectorAll(".marker");
function disActiveMapPopUp(el) {
  let disActive = document.querySelectorAll(".map-popup");
  disActive.forEach((element) => {
    if (el != element.id) {
      element.style.display = "none";
    }
  });
}
function popupActive(id, x, y) {
  let left = x;
  let top = y;
  const popup = document.getElementById(id);
  if (id == "batken" & window.innerWidth < 1200) {
    popup.children[1].style.transform = "translate(-50px)";
  }
  if (id == "issyk-kul" & window.innerWidth < 1200) {
    popup.children[1].style.transform = "translate(-120px)";
  }
  popup.style.left = `${left + window.scrollX}px`;
  popup.style.top = `${top + window.scrollY}px`;
  document.querySelector(`.${id}`).style.display = "block";
}
marker.forEach((e) => {
  e.addEventListener("click", function(e2) {
    let elementId = this.getAttribute("data-region");
    let markersValue = this.children.length;
    let activeMarker = this.children[markersValue - 1];
    const rect = activeMarker.getBoundingClientRect();
    popupActive(elementId, rect.left, rect.top);
    disActiveMapPopUp(elementId);
  });
});
