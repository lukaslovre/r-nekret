<script lang="ts">
  import PropertyCard from "$lib/PropertyCard.svelte";
  import HomePropertyNavigation from "./HomePropertyNavigation.svelte";

  export let data: {
    status: number;
    body: {
      properties: Record<PropertyType, DbProperty[]>;
      countsPerType: Record<PropertyType, number>;
    };
  };

  let selectedOption = "Stanovi";

  function figureOutType(label: string): PropertyType {
    switch (label) {
      case "Stanovi":
        return "stan";
      case "Kuće":
        return "kuca";
      case "Poslovni prostori":
        return "poslovni";
      case "Zemljišta":
        return "zemljiste";
      default:
        return "stan";
    }
  }
</script>

<section id="home-property-list">
  <h2>Ponuda nekretnina</h2>

  <HomePropertyNavigation
    options={["Stanovi", "Kuće", "Poslovni prostori", "Zemljišta"]}
    countsPerType={data.body.countsPerType}
    bind:selectedOption
  />

  <section id="property-list-container">
    {#each data.body.properties[figureOutType(selectedOption)] || [] as property (property.id)}
      <PropertyCard {property} />
    {/each}
  </section>

  <a href="/nekretnine" class="see-all-link">Vidi sve nekretnine &gt;</a>
</section>

<style>
  #home-property-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #404040;

    text-align: center;
    margin: 0 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #bfbfbf;
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

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
      margin: 0 1.5rem;
    }
  }

  @media (max-width: 480px) {
    #property-list-container {
      gap: 3rem;

      grid-template-columns: 1fr;
    }
  }
</style>
