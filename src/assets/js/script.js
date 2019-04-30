(function ($) {
    'use strict';

    window.demo_init = function (opts) {
        var products = opts.products || {};

        // get product data
        function getProduct (id) {
            id = id.indexOf(".") !== -1 ? id.substring(0, id.indexOf(".")) : id;
            var result = {
                id: id
            };
            return products[id] ? $.extend(result, true, products[id]) : result;
        }

        // get product demo data
        function getProductDemo (id) {
            var demo_id = id.indexOf(".") !== -1 ? id.substring(id.indexOf(".") + 1) : id;
            id = id.indexOf(".") !== -1 ? id.substring(0, id.indexOf(".")) : id;
            var result = {
                id: id,
                demo_id: demo_id
            };
            return products[id] && products[id].demos && products[id].demos[demo_id] ? $.extend(result, true, products[id].demos[demo_id]) : result;
        }


        var hash = location.hash.replace('#', '');

        // remove GET variable
        var getVar = hash.split( '?' );
        hash = getVar[ 0 ];

        var currentProduct = (getProduct(hash).name ? hash : currentProduct) || opts.currentProduct || '';

        // remove frame on iOs devices because of bugs
        var removeFrame = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // support for Elements (remove demo frame)
        removeFrame = removeFrame || 'storefront=envato-elements' === getVar[ 1 ];

        if ( removeFrame ) {
            window.location.href = getProduct(currentProduct).url;
            return;
        }

        var $productList = $('.demo-products-list');

        /**
         * Append Products in Dropdown
         */
        var menuItems = '';
        $.each(products, function(name, product) {
            menuItems += '<li><a href="#' + name + '" target="_top">' + product.name + '<span class="demo-label demo-label-' + product.tag.toLowerCase() + '">' + product.tag + '</span></a></li>';
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
                    $productListMenu.css('height', (rect.height - (bottom - wndH)) + 'px');
                }
                $productListMenu.css('display', '');
            }, 100);
        });


        /**
         * Preview Image Container
         */
        $('body').append('<div class="demo-preview-cont"></div>');
        var $bar = $('.demo-bar');
        var $previewCont = $('.demo-preview-cont');
            $previewCont.append('<img>');
        var $previewImg = $previewCont.find('img');

        // show bar after delay.
        setTimeout(function() {
            $bar.addClass('demo-bar-show');
        }, opts.showDelay);

        function setPreviewPos ($hovered) {
            $previewImg.attr('style', '');
            var wndW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var offset = 10;
            var w = parseFloat($previewImg.css('width'));
            var l = $hovered.closest('.demo-products-list-menu')[0].getBoundingClientRect().right + offset;
            var t = $bar[0].getBoundingClientRect().bottom + offset;

            // check if width over window
            if (wndW < l + w + offset) {
                w = wndW - l - offset;
            }

            $previewImg.css({
                left: l + 'px',
                top: t + 'px',
                width: w + 'px'
            });
        }

        $productList.on('mouseenter', 'li > a', function (e) {
            var hash = this.hash.replace('#', '');

            if (hash && hash in products) {
                $previewImg.attr('src', products[hash].img || '');
                setPreviewPos($(this));
                $previewCont.addClass('is-active');
            }
        });
        $productList.on('mouseleave', 'li > a', function () {
            $previewCont.removeClass('is-active');
        });


        /**
         * Expand / Collapse demo bar.
         */
        $bar.addClass(localStorage && localStorage.getItem('demo-frame-state') || 'demo-bar-show-state-3');
        $('[href="#expand-action"], [href="#collapse-action"]').on('click', function(e) {
            e.preventDefault();

            var newClass = '';

            if ( $bar.hasClass('demo-bar-show-state-1') ) {
                newClass = 'demo-bar-show-state-2';
            } else if ( $bar.hasClass('demo-bar-show-state-2') ) {
                newClass = 'demo-bar-show-state-3';
            } else {
                newClass = 'demo-bar-show-state-1';
            }

            $bar.removeClass('demo-bar-show-state-1');
            $bar.removeClass('demo-bar-show-state-2');
            $bar.removeClass('demo-bar-show-state-3');
            $bar.addClass(newClass);
            
            if ( localStorage ) {
                localStorage.setItem('demo-frame-state', newClass);
            }
        });
        
        // show purchase button when there is no top iframe (Envato iframe)
        if ( top === self ) {
            $('.show-when-no-top-frame')
                .removeClass('hide-state-1')
                .removeClass('hide-state-2')
                .removeClass('hide-state-3');
        }


        /**
         * Detect product demos and add new selector
         */
        var $productDemosList = $('.demo-products-demos-list');
        function updateProductDemos () {
            var productData = getProduct(currentProduct);
            if (productData.demos) {
                var menuItems = '';
                $.each(productData.demos, function(name, product) {
                    menuItems += '<li><a href="#' + productData.id + '.' + name + '" target="_top">' + product.name + '</a></li>';
                });
                menuItems = '<span class="demo-products-list-current"></span><ul class="demo-products-list-menu">' + menuItems + '</ul>';
                $productDemosList.html(menuItems);
            } else {
                $productDemosList.html('');
            }
        }


        /**
         * Load Product Demo
         */
        var $iframe = $('.demo-frame > iframe');
        var $buy_button = $('[href="#buy-action"]');
        var $close_button = $('[href="#close-action"]');
        function loadProduct (id) {
            var productData = getProduct(id);
            var productDemoData = getProductDemo(id);
            if (productData.name) {
                currentProduct = id;

                updateProductDemos();

                var url = productDemoData.url || productData.url;
                var purchase = productDemoData.purchase || productData.purchase;
                var download = productDemoData.download || productData.download;

                // update current theme name
                $productList.find('.demo-products-list-current').text(productData.name);

                // update current demo name
                $productDemosList.find('.demo-products-list-current').text(productDemoData.name || 'Select Demo');

                // change buttons links and texts
                $buy_button.attr('href', purchase || download);
                $buy_button.html(purchase ? $buy_button.attr('data-purchase') : download ? $buy_button.attr('data-download') : '');
                $close_button.attr('href', url);

                // add active class on dropdown menu item
                $productList.find('a')
                    .removeClass('is-active')
                    .filter('[href="#' + productData.id + '"]')
                    .addClass('is-active');

                // add active class on demo dropdown menu item
                $productDemosList.find('a')
                    .removeClass('is-active')
                    .filter('[href="#' + currentProduct + '"]')
                    .addClass('is-active');

                // update iframe
                $iframe.attr('src', url);
            }
        }

        // fix iframe height calculation (on ios it is wrong calculated if no js)
        function calculateIframeHeight() {
            $iframe[0].style.height = ( window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ) + 'px';
        }
        $(window).on('resize', calculateIframeHeight);
        $(window).on('load', calculateIframeHeight);
        $(document).on('ready', calculateIframeHeight);
        calculateIframeHeight();

        // load default product
        loadProduct(currentProduct);

        // hash changed - reload iframe
        $(window).on('hashchange', function() {
            loadProduct(location.hash.replace('#', ''));
        });
    };

}($));