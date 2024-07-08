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

  #property-list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
</style>
