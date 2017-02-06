(function () {
    'use strict';

    var currentProduct = 'godlike';
    var products = {
        awb : {
            name     : 'AWB',
            tag      : 'Free',
            img      : 'https://nkdev.info/wp-content/uploads/edd/2016/11/awb.jpg',
            url      : 'https://wp.nkdev.info/free-advanced-wordpress-backgrounds/',
            download : 'https://nkdev.info/downloads/advanced-wordpress-backgrounds/'
        },
        godlike : {
            name     : 'Godlike',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/218726094/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/godlike/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18711623&ref=_nK'
        },
        youplay : {
            name     : 'Youplay',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/216777453/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/youplay/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=11959042&ref=_nK'
        },
        umbrella : {
            name     : 'Umbrella',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/219847768/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/umbrella/landing/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18068692&ref=_nK'
        },
        godlike_html : {
            name     : 'Godlike',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/196803853/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/godlike/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17166433&ref=_nK'
        },
        youplay_html : {
            name     : 'Youplay',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/192949810/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/youplay/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=11306207&ref=_nK'
        },
        goodgames_html : {
            name     : 'GoodGames',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/205378368/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/goodgames/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17704593&ref=_nK'
        },
        khaki_html : {
            name     : 'Khaki',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/193366232/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/khaki/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=16826910&ref=_nK'
        },
        snow_html : {
            name     : 'Snow',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/220787616/00_Preview2.__large_preview.png',
            url      : 'https://html.nkdev.info/snow/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18880113&ref=_nK'
        },
        umbrella_html : {
            name     : 'Umbrella',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/219756952/01_preview%20HTML.__large_preview.jpg',
            url      : 'https://html.nkdev.info/umbrella/demo.html',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17889537&ref=_nK'
        },
        con : {
            name     : 'Con',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/171119514/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/_con/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=10621512&ref=_nK'
        }
    };

    demo_init({
        products: products,
        currentProduct: currentProduct
    });
}());