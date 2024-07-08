<script lang="ts">
  export let data: { slug: string };

  console.log(data.slug);
</script>

<div class="images-container">
  <div>
    <img src="https://picsum.photos/200/300" alt="" />
  </div>

  <div class="other-photos">
    <img src="https://picsum.photos/150/300" alt="" />
    <img src="https://picsum.photos/151/300" alt="" />
  </div>
</div>

<div class="two-col-container">
  <div class="col-1">
    <p class="price">€ 819,000</p>
    <p class="location">Zagreb, Crveni križ</p>
    <p class="description">
      Welcome to your dream home! This beautifully updated 3-bedroom, 2.5-bathroom
      property offers the perfect blend of modern convenience and historic charm. Nestled
      in the heart of downtown Springfield, this home is just steps away from local shops,
      restaurants, and parks, making it an ideal location for families and professionals
      alike.
    </p>
    <div class="features-container">
      <div class="feature">
        <p class="feature-label">Kvadratura</p>
        <ul class="feature-values">
          <li>160 m2</li>
        </ul>
      </div>

      <div class="feature">
        <p class="feature-label">Sobe</p>
        <ul class="feature-values">
          <li>5 spavaćih soba</li>
          <li>2 kupaone</li>
        </ul>
      </div>
    </div>

    <!-- contact -->
    <div class="contact-container">
      <h2>Kontakt</h2>
      <div class="contact-card">
        <img
          src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
          alt=""
        />

        <div class="contact-info">
          <p class="name">Marija Marić</p>
          <p class="description">Lorem ipsum sa belum de cosic</p>
          <p class="copyable">099 235 9500</p>
          <p class="copyable">reanekretnine@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>

<style>
  .images-container {
    display: flex;
    gap: 4rem;
    height: 20rem;
    margin-bottom: 4rem;
  }
  .images-container > div {
    flex: 1;
  }

  .images-container .other-photos {
    display: flex;
    gap: 1rem;
  }
  .images-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  .two-col-container {
    display: flex;
    gap: 4rem;
    color: #1a1a1a;
  }

  .two-col-container > div {
    flex: 1;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .col-1 .price {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .col-1 .location {
    font-size: 1.125rem;
    font-weight: 600;
    color: #336699;
    text-transform: uppercase;
  }
  .col-1 .description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
  }

  .features-container {
    padding: 2rem 0;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .feature {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-label {
    font-size: 0.875rem;
    font-weight: 400;
    color: #404040;
    text-transform: uppercase;
  }

  ul.feature-values {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-values li {
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .contact-container {
    margin-top: 2rem;
  }
  .contact-container h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .contact-container .contact-card {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;

    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.125);
  }

  .contact-card img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #f2f2f2;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .contact-info .name {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .contact-info .description {
    font-size: 1rem;
    font-weight: 400;
  }
  .contact-info .copyable {
    font-size: 1rem;
    font-weight: 600;
    color: #0080ff;
  }
</style>
