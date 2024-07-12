<script lang="ts">
  import { page } from "$app/stores";

  $: path = $page.url.pathname;
</script>

<header>
  <a href="/"> <h1>Rea Nekretnine</h1></a>
  <nav>
    <ul>
      <li class:active={path === "/"}><a href="/">Naslovnica</a></li>
      <li class:active={path === "/nekretnine" || path.startsWith("/details")}>
        <a href="/nekretnine">Nekretnine</a>
      </li>
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
    gap: 3rem;

    list-style: none;
  }

  nav ul li {
    color: #666666;
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: uppercase;

    transition: color 150ms ease-out;

    position: relative;
  }
  nav ul li::after {
    content: "";
    position: absolute;

    height: 2px;
    background-color: hsl(0, 0%, 10%);
    border-radius: 2px;

    left: 12.5%;
    bottom: -0.5rem;
    width: 75%;
    transform: scaleX(0);

    transition: transform 200ms ease-out;
  }

  nav ul li:hover {
    color: #000;
  }
  nav ul li:hover::after {
    transform: scaleX(0.33);
  }

  nav ul li.active {
    color: #000;
    font-weight: 500;
  }
  nav ul li.active::after {
    transform: scaleX(1);
  }
</style>
