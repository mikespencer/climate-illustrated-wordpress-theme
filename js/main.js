(function($){
  "use strict";

  var ads = {

    config: {
      "300x250": "http://placehold.it/300x250&text=300x250+ad"
    },

    init: function(){
      $(".ad").viewable({
        offset: -50, //height of nav
        callback: function(data){
          var $this = $(this);
          var adType = $this.data("ad");

          if(window.console){
            window.console.log("Ad in view:", adType, this, data);
          }

          $("<img/>").attr({
            src: ads.config[adType]
          }).appendTo(this);

        }
      });
    }

  };

  $(ads.init);

})(jQuery);
