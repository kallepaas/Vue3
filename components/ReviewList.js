app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Arvustused:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} hinnang: {{ review.rating }}
          <br/>
          "{{ review.review }}"
        </li>
      </ul>
    </div>
  `
  })