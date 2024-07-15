<script lang="ts">
  export let path: string;
  export let toggleHamburger: () => void;
</script>

<nav>
  <ul on:click={toggleHamburger}>
    <button on:click={toggleHamburger}>Close</button>

    <li class:active={path === "/"}><a href="/">Naslovnica</a></li>
    <li class:active={path === "/nekretnine" || path.startsWith("/details")}>
      <a href="/nekretnine">Nekretnine</a>
    </li>
    <li class:active={path === "/kontakt"}><a href="/kontakt">Kontakt</a></li>
  </ul>
</nav>

<style>
  nav ul {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    background-color: #fff;
    z-index: 1001;
    padding: 3rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

    list-style: none;
  }

  nav ul button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    background-color: transparent;
    border: none;
    cursor: pointer;
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
