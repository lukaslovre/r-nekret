<script lang="ts">
  import HomePropertyNavigation from "./HomePropertyNavigation.svelte";
</script>

<h2>Ponuda nekretnina</h2>

<!-- <li class:active={type === "stan"}><a href="/nekretnine/stan">Stanovi</a></li>
<li class:active={type === "kuca"}><a href="/nekretnine/kuca">Kuće</a></li>
<li class:active={type === "poslovni"}>
  <a href="/nekretnine/poslovni">Poslovni prostori</a>
</li> -->

<HomePropertyNavigation
  options={[
    { label: "Stanovi", url: "/nekretnine/stan" },
    { label: "Kuće", url: "/nekretnine/kuca" },
    { label: "Poslovni prostori", url: "/nekretnine/poslovni" },
    { label: "Zemljišta", url: "/nekretnine/zemljiste" },
  ]}
/>

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
</style>
