(function () {
    'use strict';

    var currentProduct = 'skylith';
    var products = {
        ghostkit: {
            name     : 'Ghost Kit',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/ghostkit/preview.png',
            url      : 'https://ghostkit.io/',
            download : 'https://wordpress.org/plugins/ghostkit/'
        },
        'lazy-blocks': {
            name     : 'Lazy Blocks',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/lazy-blocks/preview.png',
            url      : 'https://lazyblocks.com/',
            download : 'https://wordpress.org/plugins/lazy-blocks/'
        },
        awb: {
            name     : 'Advanced Backgrounds',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/jarallax/awb-preview.jpg',
            url      : 'https://wpbackgrounds.com/',
            download : 'https://wordpress.org/plugins/advanced-backgrounds/'
        },
        'visual-portfolio': {
            name     : 'Visual Portfolio',
            tag      : 'Free',
            img      : 'https://a.nkdev.info/visual-portfolio/preview.jpg',
            url      : 'https://visualportfolio.co/',
            download : 'https://wordpress.org/plugins/visual-portfolio/'
        },
        skylith: {
            name     : 'Skylith',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/259157417/01_preview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/skylith/',
            purchase : 'https://1.envato.market/5Gxj9',
            demos: {
                main: {
                    name     : 'Main',
                    url      : 'https://wp.nkdev.info/skylith/'
                },
                classic_agency: {
                    name     : 'Classic Agency',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-classic-agency/'
                },
                minimal_photography: {
                    name     : 'Minimal Photography',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-photography/'
                },
                minimal_split_portfolio: {
                    name     : 'Minimal Split Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-split/'
                },
                creative_outline_portfolio: {
                    name     : 'Creative Outline Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-portfolio-outline/'
                },
                dark_creative_agency: {
                    name     : 'Dark Creative Agency',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-creative-agency/'
                },
                architecture_interior: {
                    name     : 'Architecture & Interior',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-architecture/'
                },
                designer_portfolio: {
                    name     : 'Designer Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-designer-portfolio/'
                },
                minimal_agency: {
                    name     : 'Minimal Agency',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-agency/'
                },
                dark_portfolio: {
                    name     : 'Dark Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-portfolio/'
                },
                minimal_portfolio: {
                    name     : 'Minimal Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-freelancer-portfolio/'
                },
                digital_agency_fullscreen: {
                    name     : 'Digital Agency Fullscreen',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-fullscreen-slider/'
                },
                creative_portfolio_text: {
                    name     : 'Creative Portfolio Text',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-text/'
                },
                creative_agency: {
                    name     : 'Creative Agency',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-agency/'
                },
                creative_portfolio: {
                    name     : 'Creative Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-portfolio/'
                },
                creative_freelancer: {
                    name     : 'Creative Freelancer',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-freelancer-portfolio/'
                },
                minimal_agency_2: {
                    name     : 'Minimal Agency 2',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-agency-v2/'
                },
                video_gallery: {
                    name     : 'Video Gallery',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-video-gallery/'
                },
                dark_photographer: {
                    name     : 'Dark Photographer',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-photographer/'
                },
                minimal_one_pages: {
                    name     : 'Minimal One Page',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-one-page/'
                },
                business_one_page: {
                    name     : 'Business One Page',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-business-one-page/'
                },
                minimal_shop: {
                    name     : 'Minimal Shop',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-shop/'
                },
                creative_agency_2: {
                    name     : 'Creative Agency 2',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-agency-v2/'
                },
                creative_developer_portfolio: {
                    name     : 'Creative Developer Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-creative-developer-portfolio/'
                },
                dark_fullscreen_agency: {
                    name     : 'Dark Fullscreen Agency',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-fullscreen/'
                },
                photographer_fullscreen: {
                    name     : 'Photographer Fullscreen',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-photo-slideshow/'
                },
                dark_fullscreen_portfolio: {
                    name     : 'Dark Fullscreen Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-split-portfolio/'
                },
                modern_dark_portfolio: {
                    name     : 'Modern Dark Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-modern-portfolio/'
                },
                carousel_portfolio: {
                    name     : 'Carousel Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-minimal-carousel-portfolio/'
                },
                modern_fullscreen_portfolio: {
                    name     : 'Modern Fullscreen Portfolio',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-creative-portfolio/'
                },
                fullscreen_slider: {
                    name     : 'Fullscreen Slider',
                    url      : 'https://wp.nkdev.info/skylith/demo-dark-photographer-slider/'
                },
            }
        },
        khaki: {
            name     : 'Khaki',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/230741852/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/khaki/',
            purchase : 'https://1.envato.market/nvBno',
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
            purchase : 'https://1.envato.market/61DGV',
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
            purchase : 'https://1.envato.market/OZW1z',
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
            purchase : 'https://1.envato.market/3aL7X',
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
        // mimilism: {
        //     name     : 'Mimilism',
        //     tag      : 'WP',
        //     img      : 'https://s3.envato.com/files/252286659/00_Preview_WP.__large_preview.jpg',
        //     url      : 'https://wp.nkdev.info/mimilism/',
        //     purchase : 'https://1.envato.market/B5AeB',
        //     demos: {
        //         home_1: {
        //             name     : 'Minimal Agency',
        //             url      : 'https://wp.nkdev.info/mimilism/home-1/'
        //         },
        //         home_2: {
        //             name     : 'Portfolio 2 Columns',
        //             url      : 'https://wp.nkdev.info/mimilism/home-2/'
        //         },
        //         home_3: {
        //             name     : 'Portfolio 3 Columns',
        //             url      : 'https://wp.nkdev.info/mimilism/home-3/'
        //         },
        //         home_4: {
        //             name     : 'Digital Agency',
        //             url      : 'https://wp.nkdev.info/mimilism/home-4/'
        //         },
        //         home_5: {
        //             name     : 'Portfolio 4 Columns',
        //             url      : 'https://wp.nkdev.info/mimilism/home-5/'
        //         },
        //         home_6: {
        //             name     : 'Minimal Agency 2',
        //             url      : 'https://wp.nkdev.info/mimilism/home-6/'
        //         },
        //         home_7: {
        //             name     : 'Agency Portfolio',
        //             url      : 'https://wp.nkdev.info/mimilism/home-7/'
        //         },
        //         home_8: {
        //             name     : 'Minimal Portfolio',
        //             url      : 'https://wp.nkdev.info/mimilism/home-8/'
        //         },
        //         home_9: {
        //             name     : 'Digital Agency 2',
        //             url      : 'https://wp.nkdev.info/mimilism/home-9/'
        //         },
        //         home_10: {
        //             name     : 'Fullscreen Slider',
        //             url      : 'https://wp.nkdev.info/mimilism/home-10/'
        //         },
        //         home_11: {
        //             name     : 'Freelancer Portfolio',
        //             url      : 'https://wp.nkdev.info/mimilism/home-11/'
        //         },
        //         home_12: {
        //             name     : 'Home & Video',
        //             url      : 'https://wp.nkdev.info/mimilism/home-12/'
        //         },
        //         home_13: {
        //             name     : 'Fullscreen Slider 2',
        //             url      : 'https://wp.nkdev.info/mimilism/home-13/'
        //         },
        //         home_14: {
        //             name     : 'Dark Portfolio',
        //             url      : 'https://wp.nkdev.info/mimilism/home-14/'
        //         },
        //         home_15: {
        //             name     : 'Portfolio 1 Column',
        //             url      : 'https://wp.nkdev.info/mimilism/home-15/'
        //         },
        //     }
        // },
        snow: {
            name     : 'Snow',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/229723277/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/snow/',
            purchase : 'https://1.envato.market/RoWRa',
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
        musart: {
            name     : 'Musart',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/236036877/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/musart/',
            purchase : 'https://1.envato.market/vvO2O',
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
            purchase : 'https://1.envato.market/4AqdM'
        },
        umbrella: {
            name     : 'Umbrella',
            tag      : 'WP',
            img      : 'https://s3.envato.com/files/219847768/InlinePreview.__large_preview.jpg',
            url      : 'https://wp.nkdev.info/umbrella/landing/',
            purchase : 'https://1.envato.market/NJmNv',
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
            purchase : 'https://1.envato.market/yvBrv',
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
        amdesk_html: {
            name     : 'Amdesk',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/257525009/InlinePreview.__large_preview.png',
            url      : 'https://html.nkdev.info/amdesk/',
            purchase : 'https://1.envato.market/YY0dm'
        },
        godlike_html: {
            name     : 'Godlike',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/196803853/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/godlike/',
            purchase : 'https://1.envato.market/MVWQ3',
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
            purchase : 'https://1.envato.market/7VQbr',
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
            purchase : 'https://1.envato.market/L1WDL'
        },
        khaki_html: {
            name     : 'Khaki',
            tag      : 'HTML',
            img      : 'https://s3.envato.com/files/223042890/InlinePreview.__large_preview.jpg',
            url      : 'https://html.nkdev.info/khaki/',
            purchase : 'https://1.envato.market/DmJLo',
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
            purchase : 'https://1.envato.market/QXWKM',
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
            purchase : 'https://1.envato.market/9Zre0',
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
            purchase : 'https://1.envato.market/ryBg5',
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
            purchase : 'https://1.envato.market/j4B1v',
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
        // 5 seconds delay, after it demo bar will be shown.
        showDelay: 5000,
        products: products,
        currentProduct: currentProduct
    });
}());