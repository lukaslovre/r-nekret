<script lang="ts">
  import { page } from "$app/stores";

  export let options: { label: string; url: string }[];

  let path = $page.url.pathname;
  let type: PropertyType = figureOutType();

  function figureOutType() {
    const parts = path.split("/");
    if (parts.length > 2) {
      return parts[2] as PropertyType;
    }
    return "stan";
  }
</script>

<ul class="propertyTypesFilter">
  {#each options as { label, url }}
    <li class:active={url === type}><a href={url}>{label}</a></li>
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
  }

  .propertyTypesFilter li.active {
    color: #262626;
    font-weight: 500;
  }
</style>
