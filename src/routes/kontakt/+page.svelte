<script lang="ts">
  import ContactCard from "$lib/ContactCard.svelte";
  // import MapWithSingleMarker from "$lib/MapWithSingleMarker.svelte";
  import { onMount } from "svelte";
  import type { SvelteComponent } from "svelte";

  export let data: { prodavaci: DbProdavac[] };

  let MapComponent: typeof SvelteComponent;

  onMount(async () => {
    const module = await import("$lib/MapWithSingleMarker.svelte");
    MapComponent = module.default as typeof SvelteComponent;
  });

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

<div class="two-col-container">
  <div class="col">
    <h1>Kontakt</h1>
    <p>Za informacije nazovite nas od ponedjeljka do petka od 8 do 16 sati.</p>
    <div class="contact-cards-container">
      {#each data.prodavaci as person}
        <ContactCard person={formatPersonToContactCard(person)} />
      {/each}
    </div>
  </div>

  <div class="col">
    <h1>Lokacija</h1>
    <p>Antuna Bauera 7, 10 000 Zagreb</p>

    {#if MapComponent}
      <svelte:component this={MapComponent} location={{ lat: 45.815399, lng: 15.966568 }}>
        <img
          style="width: 100%;"
          class="popup-image"
          src="https://artprojectsforkids.org/wp-content/uploads/2021/06/Draw-a-House.jpg"
          alt="the real estate office from the outside"
        />
      </svelte:component>
    {/if}
    <!-- 
    <MapWithSingleMarker location={{ lat: 45.815399, lng: 15.966568 }}>

    </MapWithSingleMarker> -->
  </div>
</div>

<style>
  .two-col-container {
    display: flex;
    gap: 4rem;

    color: #1a1a1a;
  }
  .two-col-container > .col {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-cards-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    /* margin-bottom: 1rem; */
  }

  @media (max-width: 768px) {
    .two-col-container {
      flex-direction: column;
    }

    .contact-cards-container {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
