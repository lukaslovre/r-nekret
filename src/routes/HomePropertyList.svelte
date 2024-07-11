<script lang="ts">
  import PropertyCard from "$lib/PropertyCard.svelte";
  import HomePropertyNavigation from "./HomePropertyNavigation.svelte";

  export let data: {
    status: number;
    body: {
      properties: DbProperty[];
      countsPerType: Record<PropertyType, number>;
    };
  };

  let selectedOption = "Stanovi";
</script>

<section id="home-property-list">
  <h2>Ponuda nekretnina</h2>

  <HomePropertyNavigation
    options={["Stanovi", "Kuće", "Poslovni prostori", "Zemljišta"]}
    countsPerType={data.body.countsPerType}
    bind:selectedOption
  />

  <section id="property-list-container">
    {#each data.body.properties as property}
      <PropertyCard {property} />
    {/each}
  </section>

  <a href="/nekretnine" class="see-all-link">Vidi sve nekretnine &gt;</a>
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
    gap: 4rem;
  }

  .see-all-link {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0080ff;
    text-align: center;
    margin-top: 2rem;
  }
  .see-all-link:hover {
    text-decoration: underline;
  }
</style>
