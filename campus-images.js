/**
 * CAMPUS IMAGES - campus-images.js
 *
 * To add a campus image:
 *   1. Convert your image to a base64 data URI (e.g. using https://www.base64-image.de/)
 *   2. Replace the empty string '' for the relevant campus below with:
 *      'data:image/jpeg;base64,YOUR_BASE64_STRING_HERE'
 *
 * Recommended image size: ~1400 x 800px, JPEG at 80% quality.
 * This file is intentionally separate from index.html so large base64
 * strings don't slow down editing of the main presentation file.
 */

var CAMPUS_IMAGES = {
  dubbo:         '',
  wagga:         '',
  orange:        '',
  bathurst:      '',
  albury:        '',
  portmacquarie: ''
};

/* --- Auto-inject on load --- */
(function () {
  var map = {
    'ci-dubbo':         CAMPUS_IMAGES.dubbo,
    'ci-wagga':         CAMPUS_IMAGES.wagga,
    'ci-orange':        CAMPUS_IMAGES.orange,
    'ci-bathurst':      CAMPUS_IMAGES.bathurst,
    'ci-albury':        CAMPUS_IMAGES.albury,
    'ci-portmacquarie': CAMPUS_IMAGES.portmacquarie
  };

  function inject() {
    Object.keys(map).forEach(function (id) {
      var img = document.getElementById(id);
      if (!img) return;
      if (map[id]) {
        img.src = map[id];
        img.style.display = 'block';
        var ph = img.parentElement.querySelector('.ci-ph');
        if (ph) ph.style.display = 'none';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
