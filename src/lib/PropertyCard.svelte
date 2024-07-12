<script lang="ts">
  import { scale } from "svelte/transition";

  export let property: DbProperty;

  function addCommasToPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<div
  class="property-card"
  in:scale={{ duration: 200, delay: 200, start: 0.8 }}
  out:scale={{ duration: 200, delay: 0, start: 0.8 }}
>
  <div class="img-container">
    <img src={property.slike[0]} alt="" />
  </div>

  <div class="property-data-container">
    <p class="location">{property.grad}</p>
    <p class="price">€ {addCommasToPrice(property.cijena)}</p>
    <div class="basic-data-container">
      <p>{property.kvadratura} m²</p>
      <p>&middot;</p>
      <p>{property.bedrooms || 0} spavaćih soba</p>
      <p>&middot;</p>
      <p>{property.bathrooms || 0} kupaone</p>
    </div>
    <div class="additional-data-container">
      {#each Object.values(property.ostale_info).slice(0, 2) as featureGroup}
        {#each featureGroup as feature}
          <p class="tag">{feature}</p>
        {/each}
      {/each}
    </div>
  </div>

  <a class="more-info-button" href={`/details/${property.id}`}>Više informacija &gt;</a>
</div>

<style>
  .property-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: #fafafa;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.125);
  }

  .property-card .img-container {
    width: 100%;
    height: 20rem;

    position: relative;
  }
  .property-card .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem 0.5rem 0.125rem 0.125rem;
  }

  .property-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0.125rem 0.125rem;
  }

  .location,
  .price,
  .additional-data-container,
  .more-info-button {
    padding: 0 1rem;
  }

  .property-card .property-data-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .property-card .more-info-button {
    background: linear-gradient(90deg, #f2f2f2 0%, #e5e5e5 50%, #f2f2f2 100%);
    padding: 0.5rem 0;
    margin: 0 1rem 1rem;
    border-radius: 0.375rem;
    border: none;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);

    color: #0080ff;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition:
      box-shadow 200ms ease-out,
      transform 200ms ease-out;
  }
  .property-card .more-info-button:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  .property-card .property-data-container .location {
    font-size: 1rem;
    font-weight: 600;
    color: #336699;
    text-transform: uppercase;
  }
  .property-card .property-data-container .price {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  .property-card .property-data-container .basic-data-container {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    border: 1px solid #e6e6e6;
    border-left: none;
    border-right: none;

    font-size: 0.875rem;
    font-weight: 400;
    color: #1a1a1a;
  }
  .property-card .property-data-container .additional-data-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .property-card .property-data-container .additional-data-container .tag {
    background-color: #e6e6e6;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #1a1a1a;
    text-transform: capitalize;
  }
</style>
