!function(e){"use strict";e(document).ready(function(){e(".selectable").each(function(){var t=e(this);t.data("selectable-no-search")?t.select2({minimumResultsForSearch:-1}):t.select2()}),noUiSlider.create(e("#filter-properties-price-range-slider").get(0),{connect:!0,behaviour:"tap",start:[800,6200],orientation:"horizontal",range:{min:[0],max:[7e3]}}),e("#testimonials-properties-carousel").owlCarousel({loop:!0,margin:10,center:!0,items:1,autoplay:!0,autoplayHoverPause:!0,dots:!0,navigation:!0}),e(".hero-carousel__items").owlCarousel({loop:!0,center:!0,items:1,autoplay:!0,autoplayHoverPause:!0,dots:!1,nav:!0})})}(jQuery);