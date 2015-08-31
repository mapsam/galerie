var galerie = (function(){
  /////////////////////////////////
  // GLOBALS
  /////////////////////////////////
  var rotatorTimer;
  var speed = 500;
  var interval = 3000;
  var items = [];

  /////////////////////////////////
  // Initialize the galerie
  /////////////////////////////////
  function init() {
    var tempitems = document.getElementsByClassName('galerie-item');
    for (var i = 0; i < tempitems.length; i++) {
      items.push(tempitems[i]);
    }

    setDataAttr();
    function setDataAttr() {
      console.log(items);
      for (var e = 0; e < items.length; e++) {
        items[e].setAttribute('data-galerie', e);
      }
    }
  }

  /////////////////////////////////
  // Next item
  /////////////////////////////////
  function next() {
    var s = getState();
      if(s.currentId+1===s.total) {
        rotateBanner(0); // back to the beginning
      } else {
        rotateBanner(s.currentId+1);
      }
  }

  /////////////////////////////////
  // Previous item 
  /////////////////////////////////
  function prev() {
    var s = getState();
    if(s.currentId!==0) {
      rotateBanner(s.currentId-1);
    } else {
      rotateBanner(s.total-1);
    }
  }

  /////////////////////////////////
  // State of the galerie
  /////////////////////////////////
  /*
  Returns the current state of the slider and necessary data when invoked.
  Used in next() and prev() to get data for pushing to the next slide from current.
  Can be used in the API via galerie.state(); to return information for extending the slider
  */
  function getState() {
    var current = document.getElementsByClassName('galerie-current')[0];
    var s = {
      'total': items.length,
      'currentElem': current,
      'currentId': parseInt(current.getAttribute('data-galerie'))
    };
    return s;
  }

  /////////////////////////////////
  // Timed rotate 
  /////////////////////////////////
  function rotate(interval) {
    stopRotation(); // reset
    rotatorTimer = setInterval(function() { next(); }, interval || 5000);
  }
  // stops the rotation
  function stopRotation() {
    clearInterval(rotatorTimer);
  }

  /////////////////////////////////
  // Set banner, requires an ID
  /////////////////////////////////
  function rotateBanner(id){
    var s = getState();
    s.currentElem.className = 'galerie-item';

    var upcoming = getElementByGalerieAttr(items, id);
    upcoming.className += ' galerie-current';
  }

  function getElementByGalerieAttr(array, match) {
    for (var i = 0; i < array.length; i++) {
      var id = array[i].getAttribute('data-galerie');
      if (id == match) return array[i];
    }
  }

  /////////////////////////////////
  // Error handler
  /////////////////////////////////
  function err(message) {
    var e = new Error(message);
    throw e;
  }

  /////////////////////////////////
  // Public Functions
  /////////////////////////////////
  return {
    init: init,
    items: items,
    nextItem: next,
    previousItem: prev,
    getState: getState,
    rotate: rotate,
    stopRotation: stopRotation
  };

})();