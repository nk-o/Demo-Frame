(function () {
    'use strict';

    var currentProduct = 'khaki';
    var products = {
        awb : {
            name     : 'AWB',
            tag      : 'Free',
            img      : 'https://nkdev.info/wp-content/uploads/edd/2016/11/awb.jpg',
            url      : 'https://wp.nkdev.info/free-advanced-wordpress-backgrounds/',
            download : 'https://nkdev.info/downloads/advanced-wordpress-backgrounds/'
        },
        khaki : {
            name     : 'Khaki',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/230741852/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/khaki/',
            purchase : 'https://themeforest.net/item/khaki-multipurpose-wordpress-theme/19968221?ref=_nK',
            demos: {
                corporate: {
                    name     : 'Corporate',
                    url      : 'https://wp.nkdev.info/khaki/corporate'
                },
                music_label: {
                    name     : 'Music Label',
                    url      : 'https://wp.nkdev.info/khaki/demo-music-label'
                },
                drone: {
                    name     : 'Drone',
                    url      : 'https://wp.nkdev.info/khaki/demo-drone'
                },
                app_landing: {
                    name     : 'App Landing',
                    url      : 'https://wp.nkdev.info/khaki/demo-app-2'
                },
                gallery: {
                    name     : 'Gallery',
                    url      : 'https://wp.nkdev.info/khaki/demo-gallery'
                },
                barber: {
                    name     : 'Barber',
                    url      : 'https://wp.nkdev.info/khaki/demo-barber'
                },
                band: {
                    name     : 'Band',
                    url      : 'https://wp.nkdev.info/khaki/demo-band'
                },
                gaming: {
                    name     : 'Gaming',
                    url      : 'https://wp.nkdev.info/khaki/demo-gaming'
                },
                app_showcase: {
                    name     : 'App Showcase',
                    url      : 'https://wp.nkdev.info/khaki/demo-app'
                }
            }
        },
        godlike : {
            name     : 'Godlike',
            tag      : 'WP',
            img      : 'https://image-tf.s3.envato.com/files/225728054/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/godlike/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=18711623&ref=_nK',
            demos: {
                main: {
                    name     : 'Main',
                    url      : 'https://wp.nkdev.info/godlike/main/'
                },
                game_promo: {
                    name     : 'Game Promo',
                    url      : 'https://wp.nkdev.info/godlike/game-promo/'
                }
            }
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
                    url      : 'https://wp.nkdev.info/youplay/demo-shooter/'
                },
                anime: {
                    name     : 'Anime',
                    url      : 'https://wp.nkdev.info/youplay/demo-anime/'
                },
                light: {
                    name     : 'Light',
                    url      : 'https://wp.nkdev.info/youplay/demo-light/'
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
                    url      : 'https://wp.nkdev.info/snow/demo-one-page-agency/'
                },
                digital_agency: {
                    name     : 'Digital Agency',
                    url      : 'https://wp.nkdev.info/snow/demo-digital-agency/'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://wp.nkdev.info/snow/demo-fullscreen/'
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
                    url      : 'https://wp.nkdev.info/umbrella/demo-light/'
                },
                video_demo: {
                    name     : 'Video',
                    url      : 'https://wp.nkdev.info/umbrella/demo-video/'
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
        piroll_html : {
            name     : 'Piroll',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/230736749/Preview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/piroll/',
            purchase : 'https://themeforest.net/item/piroll-minimal-and-modern-portfolio-html-template/20372990?ref=_nK',
            demos: {
                minimal_portfolio: {
                    name     : 'Minimal Portfolio',
                    url      : 'https://html.nkdev.info/piroll/home-1.html'
                },
                masonry_portfolio: {
                    name     : 'Masonry Portfolio',
                    url      : 'https://html.nkdev.info/piroll/home-2.html'
                },
                classic_portfolio: {
                    name     : 'Classic Portfolio',
                    url      : 'https://html.nkdev.info/piroll/home-3.html'
                },
                freelancer_portfolio: {
                    name     : 'Freelancer Portfolio',
                    url      : 'https://html.nkdev.info/piroll/home-4.html'
                },
                slider_home: {
                    name     : 'Slider Home',
                    url      : 'https://html.nkdev.info/piroll/home-5.html'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://html.nkdev.info/piroll/home-6.html'
                },
                agency_portfolio: {
                    name     : 'Agency Portfolio',
                    url      : 'https://html.nkdev.info/piroll/home-7.html'
                },
                video_home: {
                    name     : 'Video Home',
                    url      : 'https://html.nkdev.info/piroll/home-8.html'
                },
                creative_dark: {
                    name     : 'Creative Dark',
                    url      : 'https://html.nkdev.info/piroll/home-9.html'
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
                one_page_agency: {
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