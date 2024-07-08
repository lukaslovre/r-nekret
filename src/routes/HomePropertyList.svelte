<script lang="ts">
  import PropertyCard from "$lib/PropertyCard.svelte";
  import HomePropertyNavigation from "./HomePropertyNavigation.svelte";

  export let data: {
    status: number;
    body: {
      properties: Property[];
    };
  };
</script>

<section id="home-property-list">
  <h2>Ponuda nekretnina</h2>

  <HomePropertyNavigation
    options={[
      { label: "Stanovi", url: "/nekretnine/stan" },
      { label: "Kuće", url: "/nekretnine/kuca" },
      { label: "Poslovni prostori", url: "/nekretnine/poslovni" },
      { label: "Zemljišta", url: "/nekretnine/zemljiste" },
    ]}
  />

  <section id="property-list-container">
    {#each data.body.properties as property}
      <PropertyCard {property} />
    {/each}
  </section>
</section>

<style>
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #404040;

    text-align: center;
    margin: 0 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #bfbfbf;
  }

  #home-property-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  #property-list-container {
    margin-top: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 4rem 4rem;
  }
</style>
