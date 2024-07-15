<script lang="ts">
  import ContactCard from "$lib/ContactCard.svelte";
  // import MapWithSingleMarker from "$lib/MapWithSingleMarker.svelte";

  import { onMount } from "svelte";
  import type { SvelteComponent } from "svelte";

  let MapComponent: typeof SvelteComponent;

  onMount(async () => {
    const module = await import("$lib/MapWithSingleMarker.svelte");
    MapComponent = module.default as typeof SvelteComponent;
  });



  import TextInformation from "./TextInformation.svelte";
  import Images from "./Images.svelte";

  export let data: { property: DbProperty };
  
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
    <div class="contact-container inside-column">
      <h2>Kontakt</h2>
      <ContactCard person={formatPersonToContactCard(data.property.expand.kontakt)} />
    </div>
  </div>

  <div class="col-2">
    {#if MapComponent}
      <svelte:component this={MapComponent} location={{ lat: data.property.lat, lng: data.property.lon }}>
        <img src={data.property.slike[0]} alt="the real estate office from the outside" />
      </svelte:component>
    {/if}


    {#if data.property.nacrt[0]}
      <img src={data.property.nacrt[0] || ""} alt="tlocrt" class="tlocrt" />
    {/if}
  </div>
</div>

<!-- contact -->
<div class="contact-container outside-column">
  <h2>Kontakt</h2>
  <ContactCard person={formatPersonToContactCard(data.property.expand.kontakt)} />
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

  .contact-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .contact-container.inside-column{
    display: flex;
  }
  .contact-container.outside-column{
    display: none;
  }

  .contact-container h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .two-col-container {
      flex-direction: column;
      /* gap: 2rem; */
    }

    .contact-container.outside-column{
      display: flex;
    }
    .contact-container.inside-column{
      display: none;
    }
    
  }
</style>
