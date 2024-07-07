<script lang="ts">
  import { page } from "$app/stores";

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

<h2>Ponuda nekretnina</h2>

<ul class="propertyTypesFilter">
  <li class:active={type === "stan"}><a href="/nekretnine/stan">Stanovi</a></li>
  <li class:active={type === "kuca"}><a href="/nekretnine/kuca">Kuće</a></li>
  <li class:active={type === "poslovni"}>
    <a href="/nekretnine/poslovni">Poslovni prostori</a>
  </li>
</ul>

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

  .propertyTypesFilter {
    display: flex;
    justify-content: space-around;

    list-style: none;
  }

  .propertyTypesFilter li {
    color: #808080;
    font-weight: 400;
    font-size: 1.5rem;
  }

  .propertyTypesFilter li.active {
    color: #262626;
    font-weight: 500;
  }
</style>
