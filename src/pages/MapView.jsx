import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from "leaflet";
import icon from "./../assets/plane-i.png";

const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);
  // console.log("check store", store);

  const planeIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 20],
  });

  return (
    <div className="leaflet-container">
      <MapContainer center={[41.0082, 28.9784]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lang]}
          >
            <Popup>
              <div className="popup">
                <span>Code: {flight.code}</span>
                <button
                  onClick={() => {
                    // console.log("map id", flight.id);
                    openModal(flight.id);
                  }}
                >
                  Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
