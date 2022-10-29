app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- vbind:src võib lühendada :src; coding challenge'ist mitteaktiivne toote tuhmiks -->
        <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <!-- challenge'i lahendus, ei mõelnud ise välja -->
        <p v-if="onSale">{{ saleMessage }}</p>
        <!-- Coding challenge'is loodud -->
        <p v-if="inStock">On saadaval</p>
        <p v-else>Pole saadaval</p>
        <p>Saatmine: {{ shipping }}€</p>
        <!-- Coding challenge'is lingi lisamine tootele -->
        <a :href="url" target="_blank">Vaata videot sokkidest</a>
        <!-- tooteinfo lisamine -->
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <!-- Coding challenge'ist, ise ei leidnud töötavat lahendust -->
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        <!-- värvide lisamine -->
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
        <!-- Lisa ostukorvi ja eemalda ostukorvist nupud-->
        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Lisa ostukorvi</button>
        <button class="button" v-on:click="removeFromCart">Eemalda ostukorvist</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,

  data() {
    return {
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
        // Lesson 11
        reviews: []
    }
},
methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    // challenge'i lahendus
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
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
            return this.brand + ' ' + this.product + ' on müügil'
        }
        return ''
    },
    shipping() {
        if (this.premium) {
            return 'tasuta'
        }
        return 2.99
    }
}
})