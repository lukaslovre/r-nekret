<script>
  import ContactCard from "$lib/ContactCard.svelte";
  import ContactMap from "./ContactMap.svelte";

  const people = [
    {
      pfp: "https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg",
      name: "John Doe",
      description: "Prodajem stan u Zagrebu",
      phone: "091 123 4567",
      email: "reanekretnine@gmail.com",
    },
    {
      pfp: "https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg",
      name: "John Doe",
      description: "Prodajem stan u Zagrebu",
      phone: "091 123 4567",
      email: "reanekretnine@gmail.com",
    },
  ];
</script>

<div class="two-col-container">
  <div class="col">
    <h1>Kontakt</h1>
    <p>Za informacije nazovite nas od ponedjeljka do petka od 8 do 16 sati.</p>
    <div class="contact-cards-container">
      {#each people as person}
        <ContactCard {person} />
      {/each}
    </div>
  </div>

  <div class="col">
    <h1>Lokacija</h1>
    <p>Antuna Bauera 7, 10 000 Zagreb</p>
    <ContactMap />
  </div>
</div>

<style>
  .two-col-container {
    display: flex;
    gap: 4rem;

    color: #1a1a1a;
  }
  .two-col-container > .col {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-cards-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    /* margin-bottom: 1rem; */
  }
</style>
