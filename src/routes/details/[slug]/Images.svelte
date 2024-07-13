<script lang="ts">
  import OtherImages from "./OtherImages.svelte";

  export let images: string[];
</script>

<!-- on:click|preventDefault={() => {
    openBiggerPicture(0);
  }} -->

<div class="images-container">
  <div>
    <div class="img-container">
      <img src={images[0]} data-img={images[0]} data-max-zoom="2" alt="" />
    </div>
  </div>

  <OtherImages images={images.slice(1)} />
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
</style>
