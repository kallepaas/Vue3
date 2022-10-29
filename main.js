const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            // toote nimi
            product: 'Sokid',
            // toote pilt
            image: './assets/images/socks_green.jpg',
            // video
            url: 'https://www.youtube.com/watch?v=8JVpRtngAJU',
            // "Müügil" teade
            onsale: true,
            // laoseis
            inventory: 8,
            // toote detailid
            details: ['50% puuvill', '30% vill', '20% polüester'],
            // suuruste variandid
            sizes: ['36-38', '39-41', '42-44'],
            // toote variandid
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'darkblue', image: './assets/images/socks_blue.jpg'},
            ]
        }
    },
    methods: {
            addToCart() {
                this.cart += 1
        },
        // ise ei osanud kirjutada seda miinusesse minemise piirajat
            removeFromCart() {
                if (this.cart >= 1) {
                    this.cart -=1
                }
        },
            updateImage(variantImage) {
                this.image = variantImage
        },
    }
})