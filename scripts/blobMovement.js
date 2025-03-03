const blob = document.getElementById("blob");

export function blobMovement() {
  window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 2500, fill: "forwards" });
  }
}
