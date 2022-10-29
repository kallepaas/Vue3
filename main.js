const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            // toote nimi
            product: 'Sokid',
            // bränd
            brand: 'Vue Mastery',
            // eri variantide koguste jaoks
            selectedVariant: 0,
            // video
            url: 'https://www.youtube.com/watch?v=8JVpRtngAJU',
            // toote detailid
            details: ['50% puuvill', '30% vill', '20% polüester'],
            // suuruste variandid
            sizes: ['36-38', '39-41', '42-44'],
            // toote variandid
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'darkblue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            // challenge'i lahedus, ei mõelnud ise välja
            onSale: true,
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
            updateVariant(index) {
                this.selectedVariant = index
            },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        // codechallenge'i lahendus, ei mõelnud ise välja
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' on müügil.'
            }
            return ''
        }
    }
})