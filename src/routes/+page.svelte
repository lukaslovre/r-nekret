<script lang="ts">
  // import Map from "$lib/Map.svelte";
  import HomePropertyList from "./HomePropertyList.svelte";
  import { onMount } from "svelte";
  import type { SvelteComponent } from "svelte";

  export let data: {
    status: number;
    body: {
      properties: Property[];
    };
  };

  let MapComponent: typeof SvelteComponent;

  onMount(async () => {
    const module = await import("$lib/Map.svelte");
    MapComponent = module.default as typeof SvelteComponent;
  });
</script>

{#if MapComponent}
  <MapComponent />
{/if}

<HomePropertyList {data} />
