;(function($) {


    var Area = {};

    Area.Menu = (function() {

        var $wrap = $(".wrap_skin"),
            $btnCategory = $(".area_head .btn_cate"),
            $btnCloseCategory =  $(".wrap_sub .btn_close");

        $btnCategory.on("click", function() {
            $wrap.addClass("navi_on");
        });

        $btnCloseCategory.on("click", function() {
            $wrap.removeClass("navi_on");
        })

    })();

    Area.Search = (function() {
        var ON_CLASS = "search_on";


        var $wrap = $(".wrap_skin"),
            $btnSearch = $(".area_head .btn_search"),
            $formSearch = $(".area_head .frm_search"),
            $inputSearch = $(".area_head .area_search .tf_search");

        var showSearch = function() {
            $wrap.addClass(ON_CLASS);
            $inputSearch.focus();
        };

        var hideSearch = function() {
            $wrap.removeClass(ON_CLASS);
        };

        $btnSearch.on("click", function(e) {
            showSearch();
        });

        $inputSearch.on("blur", function(e) {
            if ($inputSearch.val() == $inputSearch.data("value")) {
                hideSearch();
            }
        });

        $(document.body).on("keydown", function(e) {
            if ($wrap.hasClass(ON_CLASS) && e.keyCode == 27) {
                $formSearch[0].reset();
                hideSearch();
            }
        });

    })();

    $.Area = Area;
})(jQuery);
