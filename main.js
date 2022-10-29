const app = Vue.createApp({
    data() {
        return {
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
        }
    }
})