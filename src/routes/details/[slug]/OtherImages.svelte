<script lang="ts">
  export let images: string[];
  export let galleryUrl: string;
  export let openBiggerPicture: (index: number) => void;

  const classNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
</script>

<div class="other-photos">
  {#each classNames as classNumber, i}
    <div class={classNumber}>
      {#if images[i]}
        <div
          class="img-container"
          on:click|preventDefault={() => {
            openBiggerPicture(i + 1);
          }}
        >
          <img src={images[i]} alt="" data-img={images[i]} data-max-zoom="2" />
          {#if i === 4 && images.length > 7}
            <a href={galleryUrl} class="overlay" on:click|stopPropagation
              >+{images.length - 6}</a
            >
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .other-photos {
    width: 50%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.5rem;
  }
  .other-photos > div {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;

    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  .first {
    /* span 2 columns */
    /* grid-column: span 2; */
    grid-row: span 2;
    grid-column: span 2;
  }
  .second,
  .third {
    grid-row: span 2;
  }
  .fourth,
  .sixth {
    grid-column: span 2;
  }
  .fifth {
    grid-column: span 2;
    grid-row: span 2;
  }

  .other-photos .img-container {
    width: 100%;
    height: 100%;

    position: relative;
    cursor: pointer;
  }
  .other-photos .img-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;
  }

  .other-photos img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  a.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 1rem;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75);

    transition:
      background-color 0.2s ease-out,
      transform 0.2s ease-out;
  }
  a.overlay:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -55%);
  }

  @media (max-width: 768px) {
    .other-photos {
      display: none;
    }
  }
</style>
