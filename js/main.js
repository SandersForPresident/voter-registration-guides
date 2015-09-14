var map = {};

var $vmap = $('#vmap'),
  $stateSelectContainer = $('.state-select-container'),
  $stateSelect = $('.state-select'),
  $button = $('.guide-link');

map.resize = function () {
  $vmap.height($(window).height() - $stateSelectContainer.height() - 50);
}

map.setButton = function () {
  $button.attr('href', $stateSelect.find('option:selected').data('guide')).addClass('active');
}

map.init = function () {
  map.resize();

  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: null,
    borderColor: '#147FD7',
    color: '#ffffff',
    hoverColor: '#A7B6C5',
    selectedColor: '#F55B5B',
    enableZoom: false,
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      $stateSelect.val(region);
      map.setButton();
    }
  });

  $stateSelect.on('change', function () {
    map.setButton();
  });

  $( window ).resize(function() {
    map.resize();
  });
};


map.init();
