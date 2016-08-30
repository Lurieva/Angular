'use strict';

class HomeController {
    constructor($timeout) {
        "ngInject"
        this.name = 'home';
        this.slideIndex = 0;
        this.$timeout = $timeout;
        this.slides = [
            {'image': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTG6kAqaoNziHJnsOoL_o8mO9qeFuOaNPpAaX7itCNFKhqa6ns_Wg',
                'alt': 'Img1'
            },
            {'image': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQs-B_upyjE_7nnmg9U2etV1iz-80VPWgdtduWI6xP4s8TCTlPq',
                'alt': 'Img2'
            },
            {'image': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSgn0ioHQxhtoJX8aaUrCw33VPbmd8Eb2vF4IioN9ezd5PeUfFVg',
                'alt': 'Img3'
            }
        ];
        this.total = this.slides.length;
        this.play();
    }

    next() {
        this.slideIndex = (this.slideIndex === this.total - 1) ? 0 : this.slideIndex + 1;
    }

    play() {
      let _this = this;

        this.$timeout(function() {
            _this.next();
            _this.play();
        }, 1000);
    }

}

HomeController.$inject = ['$timeout'];


export default HomeController;
