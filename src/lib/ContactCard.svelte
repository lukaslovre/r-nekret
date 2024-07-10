<script lang="ts">
  export let person: {
    pfp: string;
    name: string;
    description: string;
    phone: string;
    email: string;
  };
</script>

<div class="contact-card">
  <img
    src="https://www.psychologs.com/wp-content/uploads/2024/01/8-tips-to-be-a-jolly-person.jpg"
    alt=""
  />

  <div class="contact-info">
    <p class="name">{person.name}</p>
    <p class="description">{person.description}</p>
    <p class="copyable">{person.phone}</p>
    <p class="copyable">{person.email}</p>
  </div>
</div>

<style>
  .contact-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;

    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.125);
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
  .contact-info .copyable {
    font-size: 1rem;
    font-weight: 600;
    color: #0080ff;
  }
</style>
