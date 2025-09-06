jQuery(document).ready(function($){
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
  }
  setTimeout(function() {
    if( !getCookie("popup-auto") ) {
      $(".popup-auto").addClass("show");
      document.cookie = "popup-auto=1";
    }
  }, 15000);
    
    function loadMap() {
        $(".map").maphilight({
            fillOpacity: 0.7,
            fillColor: "8b6d20",
            stroke: true,
            strokeColor: "8b6d20",
            strokeOpacity: 0,
            strokeWidth: 0,
            shadow: true,
            shadowX: 0,
            shadowY: 0,
            shadowRadius: 10,
            shadowColor: "f3e062",
            shadowOpacity: 0.9,
            shadowPosition: "outside",
            shadowFrom: false
        });
        $(".map").rwdImageMaps();
    }
     loadMap();
    $(window).resize(function() {
        setMapResponsive();
    });
    function setMapResponsive() {
        $(".section-masterplain-info,.section-floor-plan").each(function() {
            var $mapster = $(this);
            var $map = $mapster.find(".map.maphilighted");
            var $mapContainer = $map.parent();
            var widthMap = $map.width();
            var heightMap = $map.height();
            $mapContainer.css({ width: "100%" });

            var widthContainer = $mapContainer.width();
            var heightContainer = (widthContainer * heightMap) / widthMap;
            $mapContainer.height(heightContainer);
        });
    }

    $(".readmore-matbang").click(function(e) {
      $(".fancybox-close-small").trigger("click");
    });

    var swiper = document.querySelector('.utilities-slide').swiper;
    // var swiper2 = document.querySelector('.utilities-slide2').swiper;
    // Now you can use all slider methods like
    $(".name_utiliti").click(function() {
      var pos = $(this).data("pos");
      swiper.slideTo(pos);
      swiper2.slideTo(pos);
      // alert(pos);
	  console.log(pos);
    })

});