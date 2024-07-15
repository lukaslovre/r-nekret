<script lang="ts">
  import OtherImages from "./OtherImages.svelte";
  import { page } from "$app/stores";
  import BiggerPicture from "bigger-picture/svelte";
  import "bigger-picture/css";
  import { onMount } from "svelte";

  export let images: string[];

  let galleryUrl = $page.url.pathname + "/gallery";

  let bp;

  onMount(() => {
    bp = BiggerPicture({
      target: document.body,
    });
  });

  function openBiggerPicture(pos: number) {
    bp.open({
      items: document.querySelectorAll(".images-container img"),
      position: pos,
    });
  }
</script>

<!-- on:click|preventDefault={() => {
    openBiggerPicture(0);
  }} -->

<div class="images-container">
  <div class="primary-image">
    <div
      class="img-container"
      on:click|preventDefault={() => {
        openBiggerPicture(0);
      }}
    >
      <img src={images[0]} data-img={images[0]} data-max-zoom="2" alt="" />
    </div>

    <a href={galleryUrl} class="open-gallery">Vidi sve slike</a>
  </div>

  <OtherImages images={images.slice(1)} {openBiggerPicture} />
</div>

<style>
  .images-container {
    display: flex;
    gap: 4rem;
    height: 20rem;
    margin-bottom: 4rem;
  }
  .images-container > div {
    width: 50%;
    height: 100%;
  }

  .img-container {
    width: 100%;
    height: 100%;

    position: relative;
    cursor: pointer;
  }
  .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  .primary-image {
    position: relative;
  }

  .open-gallery {
    display: none;

    position: absolute;
    bottom: 1rem;
    right: 1rem;

    background-color: hsl(0, 0%, 10%);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: hsl(0, 0%, 95%);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .images-container > div {
      width: 100%;
    }

    .open-gallery {
      display: block;
    }
  }
</style>
