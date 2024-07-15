<script lang="ts">
  import { page } from "$app/stores";

  export let options: string[];
  export let countsPerType: Record<PropertyType, number>;
  export let selectedOption: string;

  // let path = $page.url.pathname;
  // let type: PropertyType = figureOutType();

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

<ul class="propertyTypesFilter">
  {#each options as label}
    <li class:active={selectedOption === label}>
      <button
        disabled={countsPerType[figureOutType(label)] === 0}
        type="button"
        on:click={() => (selectedOption = label)}
      >
        {label} ({countsPerType[figureOutType(label)]})
      </button>
    </li>
  {/each}
</ul>

<style>
  .propertyTypesFilter {
    display: flex;
    justify-content: space-around;

    list-style: none;
  }

  .propertyTypesFilter li {
    flex: 1;
    text-align: center;

    color: #808080;
    font-weight: 400;
    font-size: 1.5rem;
    transition: color 200ms ease-out;
  }

  .propertyTypesFilter li.active {
    color: #262626;
    font-weight: 500;
  }
  .propertyTypesFilter li:hover {
    color: #262626;
  }

  .propertyTypesFilter button {
    background: none;
    border: none;
    cursor: pointer;

    color: inherit;
    font: inherit;
  }
  button[disabled] {
    color: hsl(0, 0%, 80%);
    /* default cursor, no change, NOT "not-allowed" */
    cursor: initial;
  }

  @media (max-width: 768px) {
    .propertyTypesFilter {
      flex-direction: column;
      gap: 1rem;
    }

    .propertyTypesFilter li {
      font-size: 1.25rem;
    }
  }
</style>
