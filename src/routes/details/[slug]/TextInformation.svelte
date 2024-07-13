<script lang="ts">
  import { formatPriceToString } from "$lib/utils";

  export let property: DbProperty;

  function combineLocation(grad: string, kvart: string, adresa: string): string {
    return `${grad}, ${adresa}`;
  }
</script>

<p class="price">€ {formatPriceToString(property.cijena)}</p>
<p class="location">
  {combineLocation(property.grad, property.kvart, property.adresa)}
</p>
<p class="description">{property.opis}</p>
<div class="features-container">
  <div class="feature">
    <p class="feature-label">Kvadratura</p>
    <ul class="feature-values">
      <li>{property.kvadratura} m²</li>
    </ul>
  </div>

  {#each Object.keys(property.ostale_info) as featureKey}
    <div class="feature">
      <p class="feature-label">{featureKey}</p>
      <ul class="feature-values">
        {#each property.ostale_info[featureKey] as featureValue}
          <li>{featureValue}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  .price {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .location {
    font-size: 1.125rem;
    font-weight: 600;
    color: #336699;
    text-transform: uppercase;
  }
  .description {
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
</style>
