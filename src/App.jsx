import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions/flightAction";
import SideDetails from "./components/SideDetails";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
  }, []);

  const openModal = (id) => {
    setDetailId(id);
    setShowDetail(true);
  };
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Map View
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          List View
        </button>
      </div>

      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}
      {showDetail && (
        <SideDetails detailId={detailId} setShowDetail={setShowDetail} />
      )}
    </>
  );
}

export default App;
