!function(){"use strict";$(".selectable").each(function(){var e=$(this);e.data("selectable-no-search")?e.select2({minimumResultsForSearch:-1}):e.select2()});var e=L.map("master-post-application-map").setView([51.505,-.09],13);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),e.scrollWheelZoom.disable()}(jQuery);