<script lang="ts">
  import { page } from "$app/stores";

  let path = $page.url.pathname;
</script>

<header>
  <h1>Rea Nekretnine</h1>
  <nav>
    <ul>
      <li class:active={path === "/"}><a href="/">Naslovnica</a></li>
      <li class:active={path === "/nekretnine"}><a href="/nekretnine">Nekretnine</a></li>
      <li class:active={path === "/kontakt"}><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot></slot>
</main>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  h1 {
    width: min-content;
    font-size: 2.5rem;
    font-weight: 400;

    background: linear-gradient(45deg, #000 0%, #526c7a 50%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    text-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
  }

  nav ul {
    display: flex;
    gap: 2.5rem;

    list-style: none;
  }

  nav ul li {
    color: #666666;
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: uppercase;

    transition: color 150ms ease-out;
  }

  nav ul li:hover {
    color: #000;
  }

  nav ul li.active {
    color: #000;
    font-weight: 500;
  }
</style>
