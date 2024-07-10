<script lang="ts">
  import { Map, TileLayer, Marker, Popup } from "sveaflet";

  export let location: { lat: number; lng: number };
</script>

<div id="map">
  <Map
    options={{
      center: [location.lat, location.lng],
      zoom: 13,
    }}
  >
    <TileLayer
      url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
      options={{
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }}
    />
    <Marker latlng={[location.lat, location.lng]}>
      <Popup style="width: 10rem">
        <slot />
      </Popup>
    </Marker>
  </Map>
</div>

<style>
  #map {
    /* height: 30rem; */
    width: 100%;
    aspect-ratio: 1;
    /* margin-bottom: 9rem; */

    background-color: #f1f1f1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
    border-radius: 1.5rem;
  }

  :global(.leaflet-container) {
    border-radius: 1.5rem;
  }
</style>
