<script lang="ts">
  import Map from "$lib/Map.svelte";
  import type { PageData } from "./$types";
  import HomePropertyList from "./HomePropertyList.svelte";

  export let data: {
    status: number;
    body: {
      properties: Property[];
    };
  };
</script>

<Map />

<HomePropertyList {data} />
