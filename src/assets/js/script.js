(function ($) {
    'use strict';

    window.demo_init = function (opts) {
        var products = opts.products || {};
        var currentProduct = opts.currentProduct || '';

        var $productList = $('.demo-products-list');


        /**
         * Append Products in Dropdown
         */
        var menuItems = '';
        $.each(products, function(name, product) {
            menuItems += '<li><a href="#' + name + '">' + product.name + '<span class="demo-label demo-label-' + product.tag.toLowerCase() + '">' + product.tag + '</span></a></li>';
        });
        menuItems = '<span class="demo-products-list-current"></span><ul class="demo-products-list-menu">' + menuItems + '</ul>';
        $productList.html(menuItems);

        // set Dropdown Height if it is larger then Window
        var resizeTimeout;
        var $productListMenu = $productList.find('.demo-products-list-menu');
        $(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                $productListMenu.css({
                    display: 'block',
                    height: ''
                });
                var wndH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                var offset = 10;
                var rect = $productListMenu[0].getBoundingClientRect();
                var bottom = rect.bottom + offset;

                if (bottom > wndH) {
                    $productListMenu.css('height', rect.height - (bottom - wndH));
                }
                $productListMenu.css('display', '');
            }, 100);
        });


        /**
         * Preview Image Container
         */
        var $bar = $('.demo-bar');
        var $previewCont = $('<div class="demo-preview-cont"></div>').appendTo('body');
        var $previewImg = $('<img>').appendTo($previewCont);

        function setPreviewPos ($hovered) {
            $previewImg.attr('style', '');
            var wndW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var offset = 10;
            var w = parseFloat($previewImg.css('width'));
            var l = $hovered[0].getBoundingClientRect().right + offset;
            var t = $bar[0].getBoundingClientRect().bottom + offset;

            // check if width over window
            if (wndW < l + w + offset) {
                w = wndW - l - offset;
            }

            $previewImg.css({
                left: l,
                top: t,
                width: w
            });
        }

        $productList.on('mouseenter', 'li > a', function () {
            var hash = this.hash.replace('#', '');

            if (hash && hash in products) {
                $previewImg.attr('src', products[hash].img);
                setPreviewPos($(this));
                $previewCont.addClass('is-active');
            }
        });
        $productList.on('mouseleave', 'li > a', function () {
            $previewCont.removeClass('is-active');
        });


        /**
         * Load Product Demo
         */
        var $iframe = $('.demo-frame > iframe');
        var $buy_button = $('[href="#buy-action"]');
        var $close_button = $('[href="#close-action"]');
        function loadProduct (id) {
            if (id && id in products) {
                currentProduct = id;

                // update current theme name
                $productList.find('.demo-products-list-current').text(products[id].name);

                // change buttons links and texts
                $buy_button.attr('href', products[id].purchase || products[id].download);
                $buy_button.html(products[id].purchase ? $buy_button.attr('data-purchase') : products[id].download ? $buy_button.attr('data-download') : '');
                $close_button.attr('href', products[id].url);

                // add active class on dropdown menu item
                $productList.find('a')
                    .removeClass('is-active')
                    .filter('[href="#' + id + '"]')
                    .addClass('is-active');

                // update iframe
                $iframe.attr('src', products[id].url);
            }
        }

        // get current product from hash if exists
        var hash = location.hash.replace('#', '');
        loadProduct(hash && hash in products ? hash : currentProduct);

        // hash changed - reload iframe
        $(window).on('hashchange', function() {
            loadProduct(location.hash.replace('#', ''));
        });
    };

}(jQuery));