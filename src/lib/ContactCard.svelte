<script lang="ts">
  import CopyableText from "./CopyableText.svelte";

  export let person: {
    pfp: string;
    name: string;
    description: string;
    phone: string;
    email: string;
  };
</script>

<div class="contact-card">
  <img src={person.pfp} alt="" />

  <div class="contact-info">
    <p class="name">{person.name}</p>
    <p class="description">{person.description}</p>
    <CopyableText text={person.phone} />
    <CopyableText text={person.email} />
  </div>
</div>

<style>
  .contact-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;

    border-radius: 0.5rem;
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  }

  .contact-card img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #f2f2f2;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.075);
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .contact-info .name {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .contact-info .description {
    font-size: 1rem;
    font-weight: 400;
  }
</style>
