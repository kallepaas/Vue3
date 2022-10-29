app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Kirjuta arvustus</h3>
        <label for="name">Nimi:</label>
        <input id="name" v-model="name">
  
        <label for="review">Arvustus:</label>      
          <textarea id="review" v-model="review"></textarea>
  
        <label for="rating">Hinnang tootele:</label>
         <select id="rating" v-model,number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
  
        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Palun täitke kõik väljad!')
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})