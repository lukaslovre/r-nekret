<script lang="ts">
  import Map from "$lib/Map.svelte";
  import type { PageData } from "./$types";
  import HomePropertyList from "./HomePropertyList.svelte";

  export let data: {
    status: 200;
    body: {
      properties: Property[];
    };
  };

  console.log(data.body.properties);
</script>

<Map />

<HomePropertyList />
