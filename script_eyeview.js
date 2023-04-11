

// function eyeview() {
//   var x = document.getElementById("eyeviewShow");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

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
    var x = document.getElementsByClassName("gm-style-cc");
    var e = document.getElementById("eye_on");
    var y = document.getElementById("eye_off");
    for (let i = 0; i < x.length; i++) {
      if (x[i].style.opacity === "0") {
        x[i].style.opacity = "1";
        e.style.display = "block";
        y.style.display = "none";
      } else {
        x[i].style.opacity = "0";
        e.style.display = "none";
        y.style.display = "block";
      }
    }
  }


  // function eyeview() {
  //   var x = document.getElementsByClassName("gm-style-cc");
  //
  //   for (let i = 0; i < x.length; i++) {
  //     if (x[i].style.opacity === "1") {
  //       x[i].style.opacity = "0.5";
  //
  //     } else {
  //       x[i].style.opacity = "0.5";
  //     }
  //   }
  // }


// overlay_pbeodbbpdamofbpkancdlfnegflmhkph
// .mapsConsumerUiSceneInternalCoreScene__imageryRender
