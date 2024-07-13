<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import MobileNav from "./MobileNav.svelte";

  $: path = $page.url.pathname;

  let hamburgerOpen = false;

  function toggleHamburger() {
    hamburgerOpen = !hamburgerOpen;
  }

  // get the screen width and switch a mobile variable on/off
  let screenWidth: number;
  $: mobile = screenWidth <= 768;

  onMount(() => {
    screenWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      screenWidth = window.innerWidth;
    });
  });
</script>

<header>
  <a href="/"> <h1>Rea Nekretnine</h1></a>

  <button class="hamburger" on:click={toggleHamburger}>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>

  {#if hamburgerOpen}
    <div class="mobile-nav-container">
      <MobileNav {path} {toggleHamburger} />
    </div>
  {/if}

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
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 3rem;
    margin-bottom: 5rem;
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

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;

    padding: 0.5rem 0.25rem; /* ispadne width: 2rem height: 1.5rem */
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 200ms ease-out;
  }
  .hamburger:hover {
    background-color: #f5f5f5;
  }
  .hamburger .line {
    width: 100%;
    height: 3px;
    background-color: #1f1f1f;
    border-radius: 2px;
  }

  .mobile-nav-container {
    display: none;
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

  @media (max-width: 768px) {
    header {
      margin-top: 2rem;
      margin-bottom: 4rem;
    }

    h1 {
      font-size: 2rem;
    }

    .hamburger {
      display: flex;
    }

    .mobile-nav-container {
      display: block;
    }

    nav {
      display: none;
    }
  }
</style>
