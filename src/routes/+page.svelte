<script lang="ts">
  // import Map from "$lib/Map.svelte";
  import HomePropertyList from "./HomePropertyList.svelte";
  import { onMount } from "svelte";
  import type { SvelteComponent } from "svelte";

  export let data: {
    status: number;
    body: {
      properties: Record<PropertyType, DbProperty[]>;
      countsPerType: Record<PropertyType, number>;
    };
  };

  let MapComponent: typeof SvelteComponent;
  let markers: [number, number][] = [];

  onMount(async () => {
    markers = Object.values(data.body.properties).flatMap((properties) => {
      return properties.map((property) => {
        return [property.lat, property.lon] as [number, number];
      });
    });

    const module = await import("$lib/Map.svelte");
    MapComponent = module.default as typeof SvelteComponent;
  });
</script>

{#if MapComponent}
  <svelte:component this={MapComponent} {markers} />
{/if}

<HomePropertyList {data} />
