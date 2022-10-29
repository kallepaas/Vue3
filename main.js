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
            // toote detailid
            details: ['50% puuvill', '30% vill', '20% polüester'],
            // suuruste variandid
            sizes: ['36-38', '39-41', '42-44'],
            // toote variandid
            variants: [
                { id: 2234, color: 'roheline' },
                { id: 2235, color: 'sinine'},
            ]
        }
    }
})