<script lang="ts">
  import { Map, TileLayer, Marker, Popup } from "sveaflet";
</script>

<div id="map">
  <Map
    options={{
      center: [44.815399, 15.966568],
      zoom: 7,
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
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>
</div>

<style>
  #map {
    height: 30rem;
    width: 100%;
    margin-bottom: 9rem;

    background-color: #f1f1f1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.075);
    border-radius: 1.5rem;
  }

  :global(.leaflet-container) {
    border-radius: 1.5rem;
  }
</style>
