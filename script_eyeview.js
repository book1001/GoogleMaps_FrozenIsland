

function eyeview() {
  var x = document.getElementById("eyeviewShow");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function eyeview() {
//   var x = document.getElementsByClassName("gm-iv-container");
//   for (let i = 0; i < x.length; i++) {
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
// }

// function eyeview() {
//     var x = document.getElementById("map");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

  function eyeview() {
    var x = document.getElementsByClassName("gm-iv-container");
    for (let i = 0; i < x.length; i++) {
      if (x[i].style.opacity === "1") {
        x[i].style.opacity = "0";
      } else {
        x[i].style.opacity = "1";
      }
    }
  }




// overlay_pbeodbbpdamofbpkancdlfnegflmhkph
// .mapsConsumerUiSceneInternalCoreScene__imageryRender
