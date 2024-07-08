<script lang="ts">
  export let property: Property;

  function addCommasToPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<div class="property-card">
  <div class="img-container">
    <img src={property.images[0]} alt="" />
  </div>

  <div class="property-data-container">
    <p class="location">{property.location}</p>
    <p class="price">€ {addCommasToPrice(property.price)}</p>
    <div class="basic-data-container">
      <p>{property.squareMeters} m²</p>
      <p>&middot;</p>
      <p>{property.bedrooms} spavaćih soba</p>
      <p>&middot;</p>
      <p>{property.bathrooms} kupaone</p>
    </div>
    <div class="additional-data-container">
      {#each property.features as feature}
        <p class="tag">{feature}</p>
      {/each}
    </div>
  </div>

  <button type="button">Više informacija &gt;</button>
</div>

<style>
  .property-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    border-radius: 0.25rem;
  }

  .property-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  .property-card .property-data-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .property-card button {
    background-color: #f5f5f5;
    padding: 0.5rem 0;
    border-radius: 0.375rem;
    border: none;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);

    color: #0080ff;
    font-size: 1rem;
    font-weight: 600;
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
    padding: 0.75rem 0;
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
