// let map;


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "692883d4f6edd5a7",
    center: { lat: 41.2036433, lng: 8.224576 },
    // center: { lat: 42.384077153489905, lng: -71.01260612182787 },
    zoom: 3,
    // zoom: 18,

    // center: { lat: -50.8523641, lng: -12.9344826 },
    // zoom: 9,
    // center: { lat: 41.6923581, lng: -71.646424 },
    // zoom: 9,

    mapTypeControl: false,
    fullscreenControl: false,
    // streetViewControl: false
  });

  const streetView = map.getStreetView();

  streetView.addListener("position_changed", () => {
    document.getElementById("latitude").value = streetView.getPosition().lat();
    document.getElementById("longitude").value = streetView.getPosition().lng();
  });

  // Street View: Add Resource
  var isVisible = false;
  google.maps.event.addListener(streetView, 'visible_changed', function() {
    var visible = this.getVisible();
    if (isVisible != visible) {
      console.log("gm-style가 hidden되지 않음");
      // document.getElementById('eyeviewShow').style.visibility="hidden";
    }
    isVisible = visible;
  });

  // name
  // latitude, longitude
  // image url
  // scaledsize width, height
  const markers = [
    // [
    //   "TimeZone",
    //   41.82427189668529,
    //   -71.40837622147686,
    //   "./icons/Pegman_G.png",
    //   20,
    //   38,
    //
    //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    //   '<div id="bodyContent">' +
    //   "also referred to as <b>Ayers Rock</b>, is a large " +
    //   "sandstone rock formation in the southern part of the " +
    //   "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    //   "south west of the nearest large town, Alice Springs; 450&#160;km " +
    //   "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    //   "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    //   "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    //   "Aboriginal people of the area. It has many springs, waterholes, " +
    //   "rock caves and ancient paintings. Uluru is listed as a World " +
    //   "Heritage Site.</p>" +
    //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //   "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    //   "(last visited June 22, 2009).</p>" +
    //   "</div>" +
    //   "</div>"
    // ],
    // [
    //   "TimeZone TimeZone",
    //   41.82368022966021,
    //   -71.41174944593011,
    //   "circle.svg",
    //   30,
    //   30,
    //   "TimeZone"+
    //   '<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"><img src="palm-tree.png" class="info-image"></a>'+
    //   '<button id="myBtn">Open Modal</button>'
    // ],
    // [
    //   "WarpZone",
    //   41.831444,
    //   -71.4112178,
    //   "./icons/MarioPipe.png",
    //   25,
    //   26,
    //   '<a href="https://www.google.com/maps/@41.831444,-71.4112178,3a,75y,233.61h,79.89t/data=!3m6!1e1!3m4!1skpvEQjPGO3k6avCNVaxICA!2e0!7i16384!8i8192" target="_blank"><img src="./images_warpzone/WarpZone1.gif" class="info-image"></a>'
    // ],
    // [
    //   "WarpZone",
    //   41.8235661,
    //   -71.4117534,
    //   "./icons/MarioPipe.png",
    //   25,
    //   26,
    //   '<a href="https://www.google.com/maps/@41.8235661,-71.4117534,3a,90y,103.86h,109.85t/data=!3m6!1e1!3m4!1s-UGZ007LoDLvLZYCJg45IA!2e0!7i16384!8i8192" target="_blank"><img src="./images_warpzone/WarpZone2.gif" class="info-image"></a>'
    // ],
    // [
    //   "WarpZone",
    //   41.8224676,
    //   -71.4132381,
    //   "./icons/MarioPipe.png",
    //   25,
    //   26,
    //   '<a href="https://www.google.com/maps/@41.8224676,-71.4132381,3a,57.3y,224.8h,118.74t/data=!3m6!1e1!3m4!1sV_HdSbNcFezCtvMFW89tTg!2e0!7i13312!8i6656" target="_blank"><img src="./images_warpzone/WarpZone3.gif" class="info-image"></a>'
    // ],
    // [
    //   "WaterMark",
    //   41.818375,
    //   -71.4027188,
    //   "circle.svg",
    //   30,
    //   30,
    //   '<a href="https://www.google.com/maps/@41.818375,-71.4027188,3a,75y,243.63h,154.25t/data=!3m6!1e1!3m4!1s8YgMDjwScrvAhuFDumo6Sg!2e0!7i16384!8i8192" target="_blank"><img src="./images_watermark/WaterMark1.gif" class="info-image"></a>'
    // ],
    // [
    //   "Harshal",
    //   41.8194957117166,
    //   -71.3967197080279,
    //   "./icons/Pegman_G.png",
    //   20,
    //   38,
    //
    //   '<h1 id="firstHeading" class="firstHeading">Harshal</h1>' +
    //   '<div id="bodyContent">' +
    //   "Snippets of movement in the first snow, taken from my bedroom window." +
    //   '<a href="https://www.instagram.com/tv/CYc0Hp9BF-F/?utm_medium=copy_link" target="_blank"><img src="./images_story/Harshal_Instagram1.png" class="info-image"></a>'
    // ],

    // [
    //   "Tamagawa Aqueduct Greenway",
    //   35.7040744,
    //   139.5577317,
    //   "./icons/Pegman_G.png",
    //   20,
    //   38,
    //   '<h1 id="firstHeading" class="firstHeading">Tamagawa Aqueduct Greenway</h1>' +
    //   '<div id="bodyContent">' +
    //   "Street View - Mar 2013" +
    //   '<a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,90y,287.43h,75.43t/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656" target="_blank"><img src="./images_story/Harshal_Instagram1.png" class="info-image"></a>'
    // ],

    [
      "Blur",
      37.2676367,
      127.8751133,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">김민지</div>' +
      '<div id="bodyContent">' +
      "May 2021" +
      '<a href="https://www.google.com/maps/@37.2676367,127.8751133,3a,90y,25.14h,92.94t/data=!3m7!1e1!3m5!1sAF1QipMcBQNwqDOPaWsjox-saLwI0yIahlAKb5lu9USN!2e10!3e12!7i8704!8i4352" target="_blank"><img src="./frozen_blur/김민지_May 2021.png" class="info-image"></a>'
    ],
    [
      "Blur",
      -33.3580011,
      20.478434,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Andrew N</div>' +
      '<div id="bodyContent">' +
      "May 2014" +
      '<a href="https://www.google.com/maps/@-33.3580011,20.478434,3a,50.9y,30.47h,92.03t/data=!3m7!1e1!3m5!1sAF1QipO0rj-ajBgp6O1nivb_tHqpSZTJAlLy4S6xRewr!2e10!3e12!7i8226!8i4112" target="_blank"><img src="./frozen_blur/Andrew N_May 2014.png" class="info-image"></a>'
    ],
    [
      "Blur",
      -27.2311486,
      20.7941648,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Northern Cape</div>' +
      '<div id="bodyContent">' +
      "Sep 2021" +
      '<a href="https://www.google.com/maps/@-27.2311486,20.7941648,3a,72.9y,42h,82.26t/data=!3m6!1e1!3m4!1sDutwHGw3_iHX31ndtSYLBg!2e0!7i16384!8i8192" target="_blank"><img src="./frozen_blur/Northern Cape_Sep 2021.png" class="info-image"></a>'
    ],
    [
      "Human",
      39.9415245,
      -88.4557266,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Ivesdale</div>' +
      '<div id="bodyContent">' +
      "May 2016" +
      '<a href="https://www.google.com/maps/@39.9415245,-88.4557266,3a,25.1y,252.62h,87.09t/data=!3m7!1e1!3m5!1sAF1QipPoYUeBeuryR39sw9f-gxCSFNfstPJO25-sq3Oe!2e10!3e12!7i7168!8i3584" target="_blank"><img src="./frozen_human/Ivesdale_May 2016.png" class="info-image"></a>'
    ],
    [
      "Human",
      41.3484982,
      -70.6370221,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Trustees of Reservations</div>' +
      '<div id="bodyContent">' +
      "Aug 2016" +
      '<a href="https://www.google.com/maps/@41.3484982,-70.6370221,3a,90y,80.58h,29.84t/data=!3m7!1e1!3m5!1sAF1QipNIBQdfVCPMIIcBdB5hFFwUnNKaqMNzlQoPweft!2e10!3e12!7i8704!8i4352" target="_blank"><img src="./frozen_human/Trustees of Reservations_Aug 2016.png" class="info-image"></a>'
    ],
    [
      "Human",
      35.7040744,
      139.5577317,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Tamagawa Aqueduct Greenway</div>' +
      '<div id="bodyContent">' +
      "Mar 2013" +
      '<a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,73.7y,288.78h,70.92t/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/Tamagawa Aqueduct Greenway_Mar 2013.png" class="info-image"></a>'
    ],
    [
      "Human",
      60.3609214,
      5.3690603,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">44 Rugdeveien</div>' +
      '<div id="bodyContent">' +
      "Jul 2009" +
      '<a href="https://www.google.com/maps/@60.3609214,5.3690603,3a,50.4y,1.38h,66.41t/data=!3m6!1e1!3m4!1sCBp3BuT0mcC0tUW-HtDV2Q!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/44 Rugdeveien_Jul 2009.png" class="info-image"></a>'
    ],
    [
      "Human",
      40.4568816,
      -80.0119884,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">416 Sampsonia Way</div>' +
      '<div id="bodyContent">' +
      "May 2008" +
      '<a href="https://www.google.com/maps/@40.4568816,-80.0119884,3a,72.4y,253.99h,74.15t/data=!3m6!1e1!3m4!1sj6BRmF69TJpMMz7GNIRcTA!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/416 Sampsonia Way_May 2008.png" class="info-image"></a>'
    ],
    [
      "Human",
      60.354619,
      5.3683956,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">92 Nattlandsveien</div>' +
      '<div id="bodyContent">' +
      "Jun 2009" +
      '<a href="https://www.google.no/maps/@60.354619,5.3683956,3a,21.9y,31.79h,74.28t/data=!3m6!1e1!3m4!1stHnKIJPbFMYDge5DwCd-cw!2e0!7i13312!8i6656?hl=no" target="_blank"><img src="./frozen_human/92 Nattlandsveien_Jun 2009.png" class="info-image"></a>'
    ],
    [
      "Human",
      48.3732369,
      -123.5868789,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">1293 Liberty Dr</div>' +
      '<div id="bodyContent">' +
      "Jun 2014" +
      '<a href="https://www.google.com/maps/@48.3732369,-123.5868789,3a,49.1y,180.4h,61.43t/data=!3m6!1e1!3m4!1sQBjl4XW3gK09XWq_mje_kw!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/1293 Liberty Dr_Jun 2014.png" class="info-image"></a>'
    ],
    [
      "Human",
      41.3207417,
      -88.6605304,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">2649 Hiawatha Pioneer Trl</div>' +
      '<div id="bodyContent">' +
      "Sep 2015" +
      '<a href="https://www.google.com/maps/@41.3207417,-88.6605304,3a,51.8y,188.56h,74.24t/data=!3m6!1e1!3m4!1sD_Ilm6pVaxjcGHfNgBygNA!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/2649 Hiawatha Pioneer Trl_Sep 2015.png" class="info-image"></a>'
    ],
    [
      "Human",
      35.0381061,
      135.772809,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Shimogammo-jinja Shrine</div>' +
      '<div id="bodyContent">' +
      "Sep 2011" +
      '<a href="https://www.google.com/maps/@35.0381061,135.772809,2a,90y,141.71h,77.56t/data=!3m6!1e1!3m4!1sH4YvLg9EV--wUGxhekYx5A!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_human/Shimogammo-jinja Shrine_Sep 2011.png" class="info-image"></a>'
    ],
    [
      "Human",
      -1.8536861,
      103.5583225,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Pondok Pesantren AL MUTTAQIN</div>' +
      '<div id="bodyContent">' +
      "Oct 2021" +
      '<a href="https://www.google.com/maps/@-1.8536861,103.5583225,0a,99y,157.97h,85.61t/data=!3m4!1e1!3m2!1sAF1QipM_JcCuZZyNvgALYh5UshR0QCcydfxp21-QmKjN!2e10?source=apiv3" target="_blank"><img src="./frozen_human/Pondok Pesantren AL MUTTAQIN_Oct 2021.png" class="info-image"></a>'
    ],
    [
      "Human",
      -31.3301421,
      148.9958266,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Breadknife</div>' +
      '<div id="bodyContent">' +
      "Jul 2018" +
      '<a href="https://www.google.com/maps/@-31.3301421,148.9958266,3a,54.7y,52.65h,69.23t/data=!3m7!1e1!3m5!1sAF1QipPYKTRpFDZa-DPUBl1ehy-_QsJVKBRxxqDhU9hm!2e10!3e12!7i8000!8i4000" target="_blank"><img src="./frozen_human/Breadknife_Jul 2018.png" class="info-image"></a>'
    ],
    [
      "Human",
      4.4747132,
      101.0877901,
      "./icons/MarioPipe.png",
      25,
      26,
      // "./icons/Pegman_G.png",
      // 20,
      // 38,
      '<div id="firstHeading" class="firstHeading">Kellie Castle</div>' +
      '<div id="bodyContent">' +
      "Dec 2018" +
      '<a href="https://www.google.com/maps/@4.4747132,101.0877901,3a,90y,231.28h,76.33t/data=!3m7!1e1!3m5!1sAF1QipODUXpiYuZGF9cS5TwpnnCJjSAQrpDuiIb4LKi6!2e10!3e12!7i7776!8i3888" target="_blank"><img src="./frozen_human/Kellie Castle_Dec 2018.png" class="info-image"></a>'
    ],
    [
      "object",
      41.8685588,
      -72.0505481,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Frog Rock Seasonal Park</div>' +
      '<div id="bodyContent">' +
      "Jun 2021" +
      '<a href="https://www.google.com/maps/@41.8685588,-72.0505481,3a,71.3y,6.56h,96.95t/data=!3m7!1e1!3m5!1sAF1QipMx26jksbnQ2RvV2Yh0euhEuKgmV2GMIiqYuzLh!2e10!3e12!7i4608!8i2304" target="_blank"><img src="./frozen_object/Frog Rock Seasonal Park_Jun 2021.png" class="info-image"></a>'
    ],
    [
      "object",
      45.3608304,
      -72.9356831,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Chocolats Colombe</div>' +
      '<div id="bodyContent">' +
      "Sep 2013" +
      '<a href="https://www.google.com/maps/@45.3608304,-72.9356831,3a,50.1y,102.83h,92.25t/data=!3m7!1e1!3m5!1sAF1QipPnbw7VbBJ-IzU8NPEHa6c8akqVPsg5k5JGam7K!2e10!3e12!7i13312!8i6656" target="_blank"><img src="./frozen_object/Chocolats Colombe_Sep 2013.png" class="info-image"></a>'
    ],
    [
      "object",
      41.6552779,
      -70.1175281,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Belmont Condominium Trust</div>' +
      '<div id="bodyContent">' +
      "Sep 2021" +
      '<a href="https://www.google.com/maps/@41.6552779,-70.1175281,3a,73.7y,121h,86.24t/data=!3m7!1e1!3m5!1sAF1QipN1xeQQNUmY4M397H4oAuXLhtZPHcm84sqxq13E!2e10!3e12!7i8704!8i4352" target="_blank"><img src="./frozen_object/Belmont Condominium Trust_Sep 2021.png" class="info-image"></a>'
    ],
    // [
    //   "object",
    //   41.2410954,
    //   -70.0071493,
    //   "./icons/MarioPipe.png",
    //   25,
    //   26,
    //   '<div id="firstHeading" class="firstHeading">Tom Nevers Field</div>' +
    //   '<div id="bodyContent">' +
    //   "Sep 2016" +
    //   '<a href="https://www.google.com/maps/@41.2410954,-70.0071493,3a,84.9y,23.91h,62.58t/data=!3m7!1e1!3m5!1sAF1QipMpAxBFjuPo6I5YRXcMyTki346JsDulVF3v9ysO!2e10!3e12!7i6920!8i3460" target="_blank"><img src="./frozen_object/Tom Nevers Field_Sep 2016.png" class="info-image"></a>'
    // ],
    [
      "object",
      33.8563969,
      134.0196523,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">国道439号</div>' +
      '<div id="bodyContent">' +
      "Aug 2012" +
      '<a href="https://www.google.com/maps/@33.8563969,134.0196523,3a,20.2y,168.22h,82.29t/data=!3m6!1e1!3m4!1sE3BK5vy1GNKLq_n4TspUVg!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_object/国道439号_Aug 2012.png" class="info-image"></a>'
    ],
    [
      "object",
      51.4573475,
      157.101822,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Kurile Lake</div>' +
      '<div id="bodyContent">' +
      "Dec 2013" +
      '<a href="https://www.google.ca/maps/@51.4573475,157.101822,3a,43.1y,63.48h,46.1t/data=!3m8!1e1!3m6!1s-0ovAqd5Q9yU%2FVBU-GaKm5HI%2FAAAAAAAABIY%2F66C2jQoZfYQ0lDJIwRA6i039O6Z71A7TQCJkC!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-0ovAqd5Q9yU%2FVBU-GaKm5HI%2FAAAAAAAABIY%2F66C2jQoZfYQ0lDJIwRA6i039O6Z71A7TQCJkC%2Fw203-h100-k-no-pi-0-ya97.499985-ro-0-fo100%2F!7i6000!8i3000" target="_blank"><img src="./frozen_object/Kurile Lake_Dec 2013.png" class="info-image"></a>'
    ],
    [
      "object",
      -24.2216351,
      -66.3166631,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">155 Maipú</div>' +
      '<div id="bodyContent">' +
      "Apr 2014" +
      '<a href="https://www.google.no/maps/@-24.2216351,-66.3166631,3a,83.3y,268.58h,68.87t/data=!3m6!1e1!3m4!1sTpuvMM_g_ofj0HTOnroFzw!2e0!7i13312!8i6656?hl=en" target="_blank"><img src="./frozen_object/155 Maipú_Apr 2014.png" class="info-image"></a>'
    ],
    [
      "object",
      45.6980456,
      24.2723214,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">E68</div>' +
      '<div id="bodyContent">' +
      "Aug 2012" +
      '<a href="https://www.google.com/maps/@45.6980456,24.2723214,3a,39.1y,271.28h,101.2t/data=!3m6!1e1!3m4!1s-EDX68YR1nbbz7iqY4WTBA!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_object/E68_Aug 2012.png" class="info-image"></a>'
    ],
    [
      "object",
      51.5333142,
      -0.5434415,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">A412</div>' +
      '<div id="bodyContent">' +
      "Aug 2008" +
      '<a href="https://www.google.com/maps/@51.5333142,-0.5434415,3a,30.5y,95.28h,86.11t/data=!3m6!1e1!3m4!1sAdfm_RUd1L5MgUhMHZpNmA!2e0!7i13312!8i6656?hl=en" target="_blank"><img src="./frozen_object/A412_Aug 2008.png" class="info-image"></a>'
    ],
    [
      "object",
      40.5930677,
      -73.7860804,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">316 Beach 56th St</div>' +
      '<div id="bodyContent">' +
      "Jul 2018" +
      '<a href="https://www.google.com/maps/@40.5930677,-73.7860804,3a,35.1y,9.13h,79.06t/data=!3m6!1e1!3m4!1sugITBURK4kqH1Fb8FooARA!2e0!7i16384!8i8192" target="_blank"><img src="./frozen_object/316 Beach 56th St_Jul 2018.png" class="info-image"></a>'
    ],
    [
      "object",
      26.0633981,
      -173.9610293,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Lisianski Island</div>' +
      '<div id="bodyContent">' +
      "Jul 2013" +
      '<a href="https://www.google.com/maps/@26.0633981,-173.9610293,3a,58.9y,249.72h,106.98t/data=!3m6!1e1!3m4!1sp0fi0VLg4lnxls5clrfsSQ!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_object/Lisianski Island_Jul 2013.png" class="info-image"></a>'
    ],
    [
      "object",
      39.8099649,
      109.9821967,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">亿利澳斯特酒店</div>' +
      '<div id="bodyContent">' +
      "Mar 2021" +
      '<a href="https://www.google.com/maps/@39.8099649,109.9821967,3a,90y,313.38h,111.77t/data=!3m7!1e1!3m5!1sAF1QipOU43E-uvhfNrs1GMch0zIJZDnnVjQrvbAGjsbp!2e10!3e12!7i10240!8i5120" target="_blank"><img src="./frozen_object/亿利澳斯特酒店_Mar 2021.png" class="info-image"></a>'
    ],
    [
      "watermark",
      36.0869756,
      -120.8966745,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Pine Valley Rd</div>' +
      '<div id="bodyContent">' +
      "Apr 2012" +
      '<a href="https://www.google.com/maps/@36.0869756,-120.8966745,3a,15y,60.37h,130.79t/data=!3m6!1e1!3m4!1sFP8YFT88LQZosRrsXFpr3g!2e0!7i13312!8i6656" target="_blank"><img src="./frozen_watermark/Pine Valley Rd_Apr 2012.png" class="info-image"></a>'
    ],
    [
      "WarpZone",
      -50.8523641,
      -12.9344826,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Col·legi Sant Antoni Maria Claret</div>' +
      '<div id="bodyContent">' +
      "Feb 2021" +
      '<a href="https://www.google.com/maps/@-50.8523641,-12.9344826,3a,90y,255.98h,97.54t/data=!3m8!1e1!3m6!1sAF1QipPo3uTH3DkmoqUBRKTaujapjQ1cDvb1ULkB0ZO8!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPo3uTH3DkmoqUBRKTaujapjQ1cDvb1ULkB0ZO8%3Dw203-h100-k-no-pi-20-ya255.00003-ro-0-fo100!7i8704!8i4352" target="_blank"><img src="./frozen_warpzone/Col legi Sant Antoni Maria Claret_Feb 2021.png" class="info-image"></a>'
    ],
    [
      "hole",
      34.7420642,
      -90.131565,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">First time out in new boat</div>' +
      '<div id="bodyContent">' +
      "Jun 2016" +
      '<a href="https://www.google.com/maps/@34.7420642,-90.131565,3a,90y,306.14h/data=!3m7!1e1!3m5!1sAF1QipOooX2vY5IpwSVuv7Rtun28DQLmPpLBb2wpKa5M!2e10!3e12!7i7168!8i3234" target="_blank"><img src="./frozen_hole/First time out in new boat_Jun 2016.png" class="info-image"></a>'
    ],
    [
      "hole",
      41.6073884,
      -71.9266828,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Hopeville Pond State Boat Launch</div>' +
      '<div id="bodyContent">' +
      "Oct 2017" +
      '<a href="https://www.google.com/maps/@41.6073884,-71.9266828,3a,73.7y,46.73h,116.87t/data=!3m7!1e1!3m5!1sAF1QipP771-KJ4WSpp_s0GDHkGJOotBFdnLJxMSSZIVZ!2e10!3e12!7i8704!8i4352" target="_blank"><img src="./frozen_hole/Hopeville Pond State Boat Launch_Oct 2017.png" class="info-image"></a>'
    ],
    [
      "hole",
      39.8790269,
      -74.5303301,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">Pakim Pond</div>' +
      '<div id="bodyContent">' +
      "May 2020" +
      '<a href="https://www.google.com/maps/@39.8790269,-74.5303301,3a,45.9y,348.72h,82.75t/data=!3m7!1e1!3m5!1sAF1QipPWdUz8kIpyfTSzrzHW3-gwk5XYoK0Dgf2at0Pz!2e10!3e12!7i8704!8i4352" target="_blank"><img src="./frozen_hole/Pakim Pond_May 2020.png" class="info-image"></a>'
    ],
    [
      "hole",
      37.6604978,
      126.9801221,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">북한산 인수봉</div>' +
      '<div id="bodyContent">' +
      "Oct 2018" +
      '<a href="https://www.google.com/maps/@37.6604978,126.9801221,3a,90y,198.69h,167.29t/data=!3m7!1e1!3m5!1sAF1QipNwG30wdDcrkzKrui0QqJTnytmMoKbnPOxKQw3Q!2e10!3e12!7i2080!8i4160" target="_blank"><img src="./frozen_hole/북한산 인수봉_Oct 2018.png" class="info-image"></a>'
    ],
    [
      "hole",
      38.184119,
      100.276148,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">卓尔山风景区</div>' +
      '<div id="bodyContent">' +
      "Jul 2018" +
      '<a href="https://www.google.com/maps/@38.184119,100.276148,3a,90y,178.99h,94.05t/data=!3m7!1e1!3m5!1sAF1QipPgjBJt4tmKipnYGQJCvDl7UYOVmtaWwG62wHVC!2e10!3e12!7i5656!8i2828" target="_blank"><img src="./frozen_hole/卓尔山风景区_Jul 2018.png" class="info-image"></a>'
    ],
    [
      "hole",
      23.7111303,
      77.0936784,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">The Dark Room Studio</div>' +
      '<div id="bodyContent">' +
      "Oct 2020" +
      '<a href="https://www.google.com/maps/@23.7111303,77.0936784,3a,90y,293.72h,82.51t/data=!3m7!1e1!3m5!1sAF1QipM1S7ddqqUCVScmPdyZCN3if14yO-5lrJJ1pdk!2e10!3e12!7i10240!8i5120" target="_blank"><img src="./frozen_hole/The Dark Room Studio_Oct 2020.png" class="info-image"></a>'
    ],
    [
      "hole",
      26.2298952,
      78.1688813,
      "./icons/MarioPipe.png",
      25,
      26,
      '<div id="firstHeading" class="firstHeading">VISHWANATH JAWALIKAR</div>' +
      '<div id="bodyContent">' +
      "Oct 2018" +
      '<a href="https://www.google.com/maps/@26.2298952,78.1688813,3a,90y,173.48h,138.22t/data=!3m7!1e1!3m5!1sAF1QipOd3GluH3ud8RdU0peVSoYAL7bLCid4XIKYuf88!2e10!3e12!7i8192!8i4096" target="_blank"><img src="./frozen_hole/VISHWANATH JAWALIKAR_Oct 2018.png" class="info-image"></a>'
    ],

  ];


  for (let i = 0; i<markers.length; i++){
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],

      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4],currMarker[5]) //Size(pixel,pixel)
      },
      animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[6],
      maxWidth: 400
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}





const mapcheck = document.getElementById('mapsConsumerUiSceneInternalCoreScene__widget-scene-canvas widget-scene-canvas');

if (!mapcheck.classList.contains('mapsConsumerUiSceneInternalCoreScene__widget-scene-canvas widget-scene-canvas')) {
  console.log('Element does NOT have class');
} else {
  console.log('Element has class');
}
