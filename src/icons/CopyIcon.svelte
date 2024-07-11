<script lang="ts">
  export let color: string = "#0080FF";
  export let size: number = 24;
  export let opacity: number = 1;
</script>

<svg
  style:opacity
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_148_8)">
    <path
      d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="clip0_148_8">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>

<style>
  svg {
    transition: opacity 0.2s ease-out;
  }
</style>
