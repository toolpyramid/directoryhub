!function(){"use strict";function i(){if($(window).width()>998){var i=$(".header-default").height(),o=$(window).height()-i;$(".listings-list-map__listings-wrap").height(o),$(".listings-list-map__map").height(o)}else $(".listings-list-map__listings-wrap").css("height","auto")}noUiSlider.create($(".listings-list-map__filter-price-range-slider").get(0),{connect:!0,behaviour:"tap",start:[5e4,27e4],orientation:"horizontal",range:{min:[0],max:[3e5]}}),i(),$(".selectable").each(function(){var i=$(this);i.data("selectable-no-search")?i.select2({minimumResultsForSearch:-1}):i.select2()});var o=L.icon({iconUrl:"images/map/building-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),n=L.icon({iconUrl:"images/map/pizza-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),e=L.icon({iconUrl:"images/map/door-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),a=L.icon({iconUrl:"images/map/vine-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),r=L.icon({iconUrl:"images/map/dish-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),c=L.icon({iconUrl:"images/map/food-point.png",iconSize:[42,60],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-1,-93]}),p=L.map("listings-list-map-map").setView([51.505,-.09],13);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(p),p.scrollWheelZoom.disable(),L.marker([51.5,-.09],{icon:o}).addTo(p).bindPopup("I am a green leaf."),L.marker([51.51,-.065],{icon:n}).addTo(p).bindPopup("I am a green leaf."),L.marker([51.52,-.12],{icon:e}).addTo(p).bindPopup("I am a green leaf."),L.marker([51.5,-.045],{icon:a}).addTo(p).bindPopup("I am a green leaf."),L.marker([51.48,-.12],{icon:r}).addTo(p).bindPopup("I am a green leaf."),L.marker([51.48,-.08],{icon:c}).addTo(p).bindPopup("I am a green leaf."),$(window).on("resize",function(){i()})}(jQuery);