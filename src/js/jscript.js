(function Calippo($) {
    'use strict';

    var $boxes = $('.boxes'),
        $currentBox = $boxes.eq(0),
        $nextBox = $boxes.eq(1),
        $prevBox = $boxes.eq(0),
        $nav = $('nav'),
        $currentNav = $nav.find('li').eq(0),
        _hash = window.location.hash.replace('#', '').toLowerCase();


    function nextItem(e) {
        window.location.hash = "";
        if ($nextBox.length > 0) {
            $prevBox = $currentBox;
            $currentBox = $currentBox.next();
            $nextBox = $currentBox.next().length ? $currentBox.next() : "";
            $currentNav = $currentNav.hasClass('selected') ? $currentNav.next().addClass('selected') : $currentNav.addClass('selected');
            $currentNav.siblings().removeClass('selected');
            $prevBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                window.location.hash = "";
                $prevBox.hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInRightBig');
            });
        }
    }

    function prevItem(e) {
        if ($prevBox.length > 0) {
            $nextBox = $currentBox;
            $currentBox = $currentBox.prev();
            $prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
            $currentNav = $currentNav.prev().length ? $currentNav.prev().addClass('selected') : $currentNav.removeClass('selected');
            $currentNav.siblings().removeClass('selected');
            window.location.hash = "";
            $nextBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutRightBig').on('animationend webkitAnimationEnd', function () {
                $nextBox.hide().removeClass('fadeOutRightBig').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInLeftBig');
            });
        }
    }

    function getItem(e) {        
		var $t = $(e.target),
			item = $t.attr('class');
		if ($t.hasClass('selected')) return;			
        $currentBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
            console.log(item);
			$currentBox = $('.boxes.'+item);
            $nextBox = $currentBox.next();
            $prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
            $(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
            $currentBox.show().addClass('fadeInLeftBig');
        });
		$currentNav = $(e.target);
		$currentNav.addClass('selected').siblings().removeClass('selected');
    }
	
	(function hashLinking(){
		if (_hash.length > 0) { //hash navigations.. might want to deep link or sth
            var $hashBox = $("article:contains('" + _hash + "')");
            if ($hashBox.length) {
                $currentNav = $nav.find("li:contains('" + _hash + "')").addClass('selected');
                $nextBox = $hashBox.next();
                $prevBox = $hashBox.prev();
                $currentBox.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                    $currentBox.hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
                    $currentBox = $hashBox;
                    $currentBox.show().addClass('fadeInLeftBig');
                });
            }
        }
	})();	
	
    (function initThoBlud() {
        $boxes.on("swiperight", prevItem);
        $boxes.on("swipeleft", nextItem);
        $nav.on('click', function (event) { getItem(event); });
    })();

})(jQuery);