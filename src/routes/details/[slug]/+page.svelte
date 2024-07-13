<script lang="ts">
  import ContactCard from "$lib/ContactCard.svelte";
  import MapWithSingleMarker from "$lib/MapWithSingleMarker.svelte";

  import BiggerPicture from "bigger-picture/svelte";
  import "bigger-picture/css";
  import { onMount } from "svelte";
  import TextInformation from "./TextInformation.svelte";
  import Images from "./Images.svelte";

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

<Images images={data.property.slike} />

<div class="two-col-container">
  <div class="col-1">
    <TextInformation property={data.property} />

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

    <img src={data.property.nacrt[0] || ""} alt="tlocrt" class="tlocrt" />
  </div>
</div>

<style>
  :global(.bp-wrap) {
    z-index: 1000;
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
