<script lang="ts">
  import { page } from "$app/stores";
  import BiggerPicture from "bigger-picture/svelte";
  import "bigger-picture/css";
  import { onMount } from "svelte";

  export let data: { property: DbProperty };

  console.log(data);

  console.log($page.url.pathname);

  let propertyPageUrl = $page.url.pathname.slice(0, $page.url.pathname.indexOf("/gallery"));
  

  let bp;

  onMount(() => {
    bp = BiggerPicture({
      target: document.body,
    });
  });

  function openBiggerPicture(pos: number) {
    bp.open({
      items: document.querySelectorAll(".img-container img"),
      position: pos,
    });
  }

</script>

<nav>
  <a href={propertyPageUrl}>&lt; Nazad na nekretninu</a>
  <!-- <button on:click={()=>{}}>&lt; Nazad na nekretninu</button> -->
</nav>

<div class="gallery">
  {#each data.property.slike as slika, i}
    <div class="img-container" on:click|preventDefault={() => {
      openBiggerPicture(i);
    }}>
      <img src={slika} alt="" data-img={slika} data-max-zoom="2" />
    </div>
  {/each}
</div>

<style>
  a {
    display: block;
    width: fit-content;
    margin-bottom: 3rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);
    color: black;
    font-weight: 600;

    cursor: pointer;
    transition: transform 200ms ease-out;
  }
  a:hover {
    transform: translateY(-2px);
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
  }

  .img-container {
    position: relative;
    /* overflow: hidden; */
    /* border-radius: 10px; */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);

    transition:
      transform 200ms ease-out,
      box-shadow 200ms ease-out;

    cursor: pointer;
  }
  img:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.075);
  }
</style>
