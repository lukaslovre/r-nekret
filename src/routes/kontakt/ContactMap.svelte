<script lang="ts">
  import { Map, TileLayer, Marker, Popup } from "sveaflet";
</script>

<div id="map">
  <Map
    options={{
      center: [45.815399, 15.966568],
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
    <Marker latlng={[45.815399, 15.966568]}>
      <Popup style="width: 10rem">
        <img
          class="popup-image"
          src="https://artprojectsforkids.org/wp-content/uploads/2021/06/Draw-a-House.jpg"
          alt="the real estate office from the outside"
        />
      </Popup>
    </Marker>
  </Map>
</div>

<style>
  #map {
    /* height: 30rem; */
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 9rem;

    background-color: #f1f1f1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
    border-radius: 1.5rem;
  }

  .popup-image {
    width: 100%;
  }

  :global(.leaflet-container) {
    border-radius: 1.5rem;
  }
</style>
