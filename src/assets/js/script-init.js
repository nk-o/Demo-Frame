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
            purchase : 'https://themeforest.net/cart/add_items?item_ids=11959042&ref=_nK',
            demos: {
                dark: {
                    name     : 'Dark',
                    url      : 'https://wp.nkdev.info/youplay/main/'
                },
                shooter: {
                    name     : 'Shooter',
                    url      : 'https://wp.nkdev.info/youplay/demos/shooter/'
                },
                anime: {
                    name     : 'Anime',
                    url      : 'https://wp.nkdev.info/youplay/demos/anime/'
                },
                light: {
                    name     : 'Light',
                    url      : 'https://wp.nkdev.info/youplay/demos/light/'
                }
            }
        },
        snow : {
            name     : 'Snow',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/220224572/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/snow/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=19347252&ref=_nK',
            demos: {
                home_default: {
                    name     : 'Home Default',
                    url      : 'https://wp.nkdev.info/snow/home-1/'
                },
                minimal_portfolio: {
                    name     : 'Minimal Portfolio',
                    url      : 'https://wp.nkdev.info/snow/home-2/'
                },
                slider_home: {
                    name     : 'Slider Home',
                    url      : 'https://wp.nkdev.info/snow/home-3/?navigation_type=side'
                },
                video_home: {
                    name     : 'Video Home',
                    url      : 'https://wp.nkdev.info/snow/home-4/?navigation_type=fullscreen'
                },
                freelancer_portfolio: {
                    name     : 'Freelancer Portfolio',
                    url      : 'https://wp.nkdev.info/snow/home-5/?navigation_type=side'
                },
                minimal_agency: {
                    name     : 'Minimal Agency',
                    url      : 'https://wp.nkdev.info/snow/home-6/?navigation_type=fullscreen&footer_type=2'
                },
                one_page_agency: {
                    name     : 'One Page Agency',
                    url      : 'https://wp.nkdev.info/snow/demos/one-page-agency/'
                },
                digital_agency: {
                    name     : 'Digital Agency',
                    url      : 'https://wp.nkdev.info/snow/demos/digital-agency/'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://wp.nkdev.info/snow/demos/fullscreen/'
                }
            }
        },
        umbrella : {
            name     : 'Umbrella',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/219847768/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/umbrella/landing/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18068692&ref=_nK',
            demos: {
                main_demo: {
                    name     : 'Main',
                    url      : 'https://wp.nkdev.info/umbrella/'
                },
                light_demo: {
                    name     : 'Light',
                    url      : 'https://wp.nkdev.info/umbrella/demos/light/'
                },
                video_demo: {
                    name     : 'Video',
                    url      : 'https://wp.nkdev.info/umbrella/demos/video/'
                },
                studio_no_titles: {
                    name     : 'Studio w/o Titles',
                    url      : 'https://wp.nkdev.info/umbrella/studio/'
                }
            }
        },
        godlike_html : {
            name     : 'Godlike',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/196803853/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/godlike/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17166433&ref=_nK',
            demos: {
                main: {
                    name     : 'Main',
                    url      : 'https://html.nkdev.info/godlike/index-main.html'
                },
                game_promo: {
                    name     : 'Game Promo',
                    url      : 'https://html.nkdev.info/godlike/index-game-promo.html'
                }
            }
        },
        youplay_html : {
            name     : 'Youplay',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/192949810/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/youplay/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=11306207&ref=_nK',
            demos: {
                dark: {
                    name     : 'Dark',
                    url      : 'https://html.nkdev.info/youplay/dark'
                },
                shooter: {
                    name     : 'Shooter',
                    url      : 'https://html.nkdev.info/youplay/shooter'
                },
                anime: {
                    name     : 'Anime',
                    url      : 'https://html.nkdev.info/youplay/anime'
                },
                light: {
                    name     : 'Light',
                    url      : 'https://html.nkdev.info/youplay/light'
                }
            }
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
            purchase : 'https://themeforest.net/cart/add_items?item_ids=16826910&ref=_nK',
            demos: {
                corporate: {
                    name     : 'Corporate',
                    url      : 'https://html.nkdev.info/khaki/demo-corporate.html'
                },
                barber: {
                    name     : 'Barber',
                    url      : 'https://html.nkdev.info/khaki/demo-barber.html'
                },
                quadrocopter: {
                    name     : 'Quadrocopter',
                    url      : 'https://html.nkdev.info/khaki/demo-drone.html'
                },
                music_label: {
                    name     : 'Music Label',
                    url      : 'https://html.nkdev.info/khaki/demo-music-label.html'
                },
                band: {
                    name     : 'Band',
                    url      : 'https://html.nkdev.info/khaki/demo-band.html'
                },
                gaming: {
                    name     : 'Gaming',
                    url      : 'https://html.nkdev.info/khaki/demo-gaming.html'
                },
                app_landing: {
                    name     : 'App Landing',
                    url      : 'https://html.nkdev.info/khaki/demo-app-2.html'
                },
                app_showcase: {
                    name     : 'App Showcase',
                    url      : 'https://html.nkdev.info/khaki/demo-app.html'
                },
                gallery: {
                    name     : 'Gallery',
                    url      : 'https://html.nkdev.info/khaki/demo-gallery.html'
                }
            }
        },
        snow_html : {
            name     : 'Snow',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/220787616/00_Preview2.__large_preview.png',
            url      : 'https://html.nkdev.info/snow/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18880113&ref=_nK',
            demos: {
                home_default: {
                    name     : 'Home Default',
                    url      : 'https://html.nkdev.info/snow/home-1.html'
                },
                minimal_portfolio: {
                    name     : 'Minimal Portfolio',
                    url      : 'https://html.nkdev.info/snow/home-2.html'
                },
                slider_home: {
                    name     : 'Slider Home',
                    url      : 'https://html.nkdev.info/snow/home-3.html'
                },
                video_home: {
                    name     : 'Video Home',
                    url      : 'https://html.nkdev.info/snow/home-4.html'
                },
                freelancer_portfolio: {
                    name     : 'Freelancer Portfolio',
                    url      : 'https://html.nkdev.info/snow/home-5.html'
                },
                minimal_agency: {
                    name     : 'Minimal Agency',
                    url      : 'https://html.nkdev.info/snow/home-6.html'
                },
                onde_page_agency: {
                    name     : 'One Page Agency',
                    url      : 'https://html.nkdev.info/snow/home-7.html'
                },
                digital_agency: {
                    name     : 'Digital Agency',
                    url      : 'https://html.nkdev.info/snow/home-8.html'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://html.nkdev.info/snow/home-9.html'
                }
            }
        },
        umbrella_html : {
            name     : 'Umbrella',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/219756952/01_preview%20HTML.__large_preview.jpg',
            url      : 'https://html.nkdev.info/umbrella/demo.html',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17889537&ref=_nK',
            demos: {
                main: {
                    name     : 'Main',
                    url      : 'https://html.nkdev.info/umbrella/'
                },
                light: {
                    name     : 'Light',
                    url      : 'https://html.nkdev.info/umbrella/light-index.html'
                },
                video: {
                    name     : 'Video',
                    url      : 'https://html.nkdev.info/umbrella/video-index.html'
                },
                studio_no_titles: {
                    name     : 'Studio w/o Titles',
                    url      : 'https://html.nkdev.info/umbrella/studio.html'
                }
            }
        },
        con : {
            name     : 'Con',
            tag      : 'HTML',
            img      : 'https://image-tf.s3.envato.com/files/171119514/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/_con/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=10621512&ref=_nK',
            demos: {
                main: {
                    name     : 'Main',
                    url      : 'https://html.nkdev.info/_con/dashboard.html'
                },
                v1: {
                    name     : 'v1',
                    url      : 'https://html.nkdev.info/_con/dashboard-v1.html'
                },
                angularjs: {
                    name     : 'AngularJS',
                    url      : 'https://html.nkdev.info/_con/angularjs'
                }
            }
        }
    };

    demo_init({
        products: products,
        currentProduct: currentProduct
    });
}());