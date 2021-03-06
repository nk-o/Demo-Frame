(function () {
    'use strict';

    var currentProduct = 'khaki';
    var products = {
        awb: {
            name     : 'AWB',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/jarallax/awb-preview.jpg',
            url      : 'https://wp.nkdev.info/free-advanced-wordpress-backgrounds/',
            download : 'https://nkdev.info/downloads/advanced-wordpress-backgrounds/'
        },
        'visual-portfolio': {
            name     : 'Visual Portfolio',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/visual-portfolio/preview.jpg',
            url      : 'https://wp.nkdev.info/free-visual-portfolio/',
            download : 'https://nkdev.info/downloads/visual-portfolio/'
        },
        docspress: {
            name     : 'DocsPress',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/docspress/preview.jpg',
            url      : 'https://nkdev.info/docs/',
            download : 'https://nkdev.info/downloads/docspress/'
        },
        khaki: {
            name     : 'Khaki',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/230741852/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/khaki/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=19968221&ref=_nK',
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
        godlike: {
            name     : 'Godlike',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/232945805/InlinePreview.__large_preview.jpg',
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
        youplay: {
            name     : 'Youplay',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/216777453/InlinePreview.__large_preview.jpg',
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
        piroll: {
            name     : 'Piroll',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/230736749/Preview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/piroll/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=20672319&ref=_nK',
            demos: {
                minimal_portfolio: {
                    name     : 'Minimal Portfolio',
                    url      : 'https://wp.nkdev.info/piroll/home-minimal-portfolio/?nav=fs'
                },
                masonry_portfolio: {
                    name     : 'Masonry Portfolio',
                    url      : 'https://wp.nkdev.info/piroll/home-masonry-portfolio/?nav=split'
                },
                classic_portfolio: {
                    name     : 'Classic Portfolio',
                    url      : 'https://wp.nkdev.info/piroll/home-classic-portfolio/?nav-fs'
                },
                freelancer_portfolio: {
                    name     : 'Freelancer Portfolio',
                    url      : 'https://wp.nkdev.info/piroll/home-freelancer-portfolio/?footer=light'
                },
                slider_home: {
                    name     : 'Slider Home',
                    url      : 'https://wp.nkdev.info/piroll/home-slider/?nav-fs&footer=light'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://wp.nkdev.info/piroll/fullscreen-slider/'
                },
                agency_portfolio: {
                    name     : 'Agency Portfolio',
                    url      : 'https://wp.nkdev.info/piroll/home-agency-portfolio/?nav=split'
                },
                video_home: {
                    name     : 'Video Home',
                    url      : 'https://wp.nkdev.info/piroll/home-video/?nav-fs'
                },
                creative_dark: {
                    name     : 'Creative Dark',
                    url      : 'https://wp.nkdev.info/piroll/creative-dark/'
                }
            }
        },
        snow: {
            name     : 'Snow',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/229723277/InlinePreview.__large_preview.jpg',
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
        riseapp: {
            name     : 'Riseapp',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/235030366/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/riseapp/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=20796199&ref=_nK'
        },
        musart: {
            name     : 'Musart',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/236036877/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/musart/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=20890063&ref=_nK',
            demos: {
                label: {
                    name     : 'Music Label',
                    url      : 'https://wp.nkdev.info/musart/musart-label/'
                },
                band: {
                    name     : 'Rock Band',
                    url      : 'https://wp.nkdev.info/musart/band/'
                }
            }
        },
        quator: {
            name     : 'Quator',
            tag      : 'WP',
            url      : 'https://wp.nkdev.info/copter/',
            img      : 'https://s3.envato.com/files/238711897/InlinePreview.__large_preview.jpg',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=20953598&ref=_nK'
        },
        umbrella: {
            name     : 'Umbrella',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/219847768/InlinePreview.__large_preview.jpg',
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
        skylith_html: {
            name     : 'Skylith',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/239290731/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/skylith/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=21214857&ref=_nK',
            demos: {
                minimal_split: {
                    name     : 'Minimal Split',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-split.html'
                },
                minimal_classic_agency: {
                    name     : 'Minimal Classic Agency',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-classic-agency.html'
                },
                minimal_freelancer_portfolio: {
                    name     : 'Minimal Freelancer Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-freelancer-portfolio.html'
                },
                minimal_photography: {
                    name     : 'Minimal Photography',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-photography.html'
                },
                minimal_architecture: {
                    name     : 'Minimal Architecture',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-architecture.html'
                },
                minimal_carousel_portfolio: {
                    name     : 'Minimal Carousel Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-carousel-portfolio.html'
                },
                minimal_agency: {
                    name     : 'Minimal Agency',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-agency.html'
                },
                minimal_agency_2: {
                    name     : 'Minimal Agency 2',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-agency-2.html'
                },
                minimal_fullscreen: {
                    name     : 'Minimal Fullscreen',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-fullscreen.html'
                },
                minimal_video: {
                    name     : 'Minimal Video',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-video.html'
                },
                minimal_one_page: {
                    name     : 'Minimal One Page',
                    url      : 'https://html.nkdev.info/skylith/demo-minimal-one-page.html'
                },
                creative_agency: {
                    name     : 'Creative Agency',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-agency.html'
                },
                creative_agency_2: {
                    name     : 'Creative Agency 2',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-agency-2.html'
                },
                creative_portfolio: {
                    name     : 'Creative Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-portfolio.html'
                },
                creative_designer_portfolio: {
                    name     : 'Creative Designer Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-designer-portfolio.html'
                },
                creative_developer_portfolio: {
                    name     : 'Creative Developer Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-developer-portfolio.html'
                },
                creative_business_one_page: {
                    name     : 'Creative Business One Page',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-business-one-page.html'
                },
                creative_freelancer_portfolio: {
                    name     : 'Creative Freelancer Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-freelancer-portfolio.html'
                },
                creative_outline_portfolio: {
                    name     : 'Creative Outline Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-outline-portfolio.html'
                },
                creative_text: {
                    name     : 'Creative Text',
                    url      : 'https://html.nkdev.info/skylith/demo-creative-text.html'
                },
                dark_fullscreen: {
                    name     : 'Dark Fullscreen',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-fullscreen.html'
                },
                dark_photographer: {
                    name     : 'Dark Photographer',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-photographer.html'
                },
                dark_portfolio: {
                    name     : 'Dark Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-portfolio.html'
                },
                dark_creative_agency: {
                    name     : 'Dark Creative Agency',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-creative-agency.html'
                },
                dark_modern_portfolio: {
                    name     : 'Dark Modern Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-modern-portfolio.html'
                },
                dark_split_portfolio: {
                    name     : 'Dark Split Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-split-portfolio.html'
                },
                dark_creative_portfolio: {
                    name     : 'Dark Creative Portfolio',
                    url      : 'https://html.nkdev.info/skylith/demo-dark-creative-portfolio.html'
                }
            }
        },
        godlike_html: {
            name     : 'Godlike',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/196803853/InlinePreview.__large_preview.jpg',
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
        youplay_html: {
            name     : 'Youplay',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/192949810/InlinePreview.__large_preview.jpg',
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
        goodgames_html: {
            name     : 'GoodGames',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/205378368/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/goodgames/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=17704593&ref=_nK'
        },
        khaki_html: {
            name     : 'Khaki',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/223042890/InlinePreview.__large_preview.jpg',
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
        piroll_html: {
            name     : 'Piroll',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/230736749/Preview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/piroll/',
            purchase : 'https://themeforest.net/cart/add_items?item_ids=20372990&ref=_nK',
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
        snow_html: {
            name     : 'Snow',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/220787616/00_Preview2.__large_preview.png',
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
        umbrella_html: {
            name     : 'Umbrella',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/219756952/01_preview%20HTML.__large_preview.jpg',
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
        con: {
            name     : 'Con',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/171119514/InlinePreview.__large_preview.jpg',
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