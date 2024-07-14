<script lang="ts">
  import CopyIcon from "../../icons/CopyIcon.svelte";

  let features = [{ key: "", values: [""] }];

  $: formatedFeatures = features.reduce((acc: any, feature: any) => {
    if (feature.key === "") return acc;

    acc[feature.key] = feature.values.filter((value: string) => value !== "");
    return acc;
  }, {});

  function handleKeyInput(index: number) {
    if (index === features.length - 1 && features[index].key !== "") {
      features = [...features, { key: "", values: [""] }];
    }
  }

  function handleValueInput(featureIndex: number, valueIndex: number) {
    if (
      valueIndex === features[featureIndex].values.length - 1 &&
      features[featureIndex].values[valueIndex] !== ""
    ) {
      features[featureIndex].values = [...features[featureIndex].values, ""];
    }
    // Ensure there's always an empty feature at the end
    if (
      features[features.length - 1].key !== "" ||
      features[features.length - 1].values.some((v) => v !== "")
    ) {
      features = [...features, { key: "", values: [""] }];
    }
  }

  let copied = false;
  function handleClick() {
    navigator.clipboard.writeText(JSON.stringify(formatedFeatures, null, 4));

    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<main>
  <h1>Features</h1>
  <div>
    <form>
      {#each features as feature, i}
        <div class="feature-container">
          <input
            type="text"
            class="feature-key"
            bind:value={feature.key}
            placeholder="Feature name"
            on:input={() => handleKeyInput(i)}
          />
          <ul>
            {#each feature.values as value, j}
              <li>
                <input
                  type="text"
                  class="feature-value"
                  bind:value={features[i].values[j]}
                  placeholder="Feature value"
                  on:input={() => handleValueInput(i, j)}
                />
              </li>
            {/each}
          </ul>
        </div>
      {/each}
      <!-- Removed the button as new inputs are added dynamically -->
    </form>

    <div class="code-container">
      <pre>{JSON.stringify(formatedFeatures, null, 4)}</pre>
      <button class="copy-icon" on:click={handleClick} class:copied>
        <CopyIcon />
      </button>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main > div {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
  }
  input:focus {
    outline: 2px solid #0080ff;
  }

  .feature-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 3rem;
  }

  .code-container {
    position: relative;

    min-width: 20rem;
  }

  .copy-icon {
    background-color: transparent;
    border: none;

    position: absolute;
    bottom: 1rem;
    right: 1rem;

    cursor: pointer;
  }
  .copy-icon.copied {
    animation: wiggle 0.5s ease-out;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  pre {
    padding: 2rem;
    background-color: hsl(0, 0%, 90%);
    border-radius: 0.75rem;
    border: 1px solid hsl(0, 0%, 80%);

    font-family: monospace;
    font-size: 0.875rem;
  }
</style>
