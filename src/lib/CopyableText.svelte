<script lang="ts">
  import CopyIcon from "../icons/CopyIcon.svelte";

  export let text: string = "";

  let timeout: number = 2000;
  let copied: boolean = false;
  let hovering: boolean = false;

  const copyText = () => {
    if (copied) return;

    navigator.clipboard.writeText(text);

    copied = true;

    setTimeout(() => {
      copied = false;
    }, timeout);
  };
</script>

<button
  type="button"
  on:click={copyText}
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
>
  <p class="copyable">{copied ? "Kopirano!" : text}</p>
  <CopyIcon opacity={hovering ? 1 : 0} />
</button>

<style>
  button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .copyable {
    font-size: 1rem;
    font-weight: 600;
    color: #0080ff;
  }
</style>
