<script lang="ts">
  import ContactCard from "$lib/ContactCard.svelte";
  import MapWithSingleMarker from "$lib/MapWithSingleMarker.svelte";
  import { formatPriceToString } from "$lib/utils";

  import BiggerPicture from "bigger-picture/svelte";
  import "bigger-picture/css";
  import { onMount } from "svelte";

  export let data: { property: DbProperty };
  let bp;

  onMount(() => {
    bp = BiggerPicture({
      target: document.body,
    });
  });

  function openBiggerPicture(pos: number) {
    bp.open({
      items: document.querySelectorAll(".images-container img"),
      position: pos,
    });
  }

  function combineLocation(grad: string, kvart: string, adresa: string) {
    return `${grad}, ${adresa}`;
  }

  function formatPersonToContactCard(person: DbProdavac) {
    return {
      pfp: person.slika,
      name: person.ime,
      description: person.opis,
      phone: person.mobitel,
      email: person.email,
    };
  }
</script>

<div class="images-container">
  <div>
    <div
      class="img-container"
      on:click|preventDefault={() => {
        openBiggerPicture(0);
      }}
    >
      <img
        src={data.property.slike[0]}
        data-img={data.property.slike[0]}
        data-max-zoom="2"
        alt=""
      />
    </div>
  </div>

  <div class="other-photos">
    {#each data.property.slike.slice(1) as photo, i}
      <div
        class="img-container"
        on:click|preventDefault={() => {
          openBiggerPicture(i + 1);
        }}
      >
        <img src={photo} alt="" data-img={photo} data-max-zoom="2" />
      </div>
    {/each}
  </div>
</div>

<div class="two-col-container">
  <div class="col-1">
    <p class="price">€ {formatPriceToString(data.property.cijena)}</p>
    <p class="location">
      {combineLocation(data.property.grad, data.property.kvart, data.property.adresa)}
    </p>
    <p class="description">
      {data.property.opis}
    </p>
    <div class="features-container">
      <div class="feature">
        <p class="feature-label">Kvadratura</p>
        <ul class="feature-values">
          <li>{data.property.kvadratura} m2</li>
        </ul>
      </div>

      {#each Object.keys(data.property.ostale_info) as featureKey}
        <div class="feature">
          <p class="feature-label">{featureKey}</p>
          <ul class="feature-values">
            {#each data.property.ostale_info[featureKey] as featureValue}
              <li>{featureValue}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- contact -->
    <div class="contact-container">
      <h2>Kontakt</h2>
      <ContactCard person={formatPersonToContactCard(data.property.expand.kontakt)} />
    </div>
  </div>
  <div class="col-2">
    <MapWithSingleMarker location={{ lat: data.property.lat, lng: data.property.lon }}>
      <img src={data.property.slike[0]} alt="the real estate office from the outside" />
    </MapWithSingleMarker>

    <img src={data.property.nacrt[0] || ""} alt="tlocrt" class="plan" />
  </div>
</div>

<style>
  :global(.bp-wrap) {
    z-index: 1000;
  }
  .img-container {
    width: 100%;
    height: 20rem;

    position: relative;
    cursor: zoom-in;
  }
  .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }

  .other-photos .img-container::after {
    background: rgba(0, 0, 0, 0.35);
  }

  .img-container img {
    width: 100%;
    min-width: 8rem;
    height: 100%;
    object-fit: cover;
  }

  /* div */

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
    overflow-x: auto;
    overflow-y: hidden;
  }
  .images-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.125);
  }
  .other-photos img {
    box-shadow: none;
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

  /* col 2 */
  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .col-2 img {
    width: 100%;
    height: auto;
    border-radius: 0.25rem;
  }
</style>
