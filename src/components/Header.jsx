import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  // console.log(store.flights.length);

  return (
    <header>
      <div>
        <img src="/logo-f.png" alt="logo" />

        <h2>Flight Radar</h2>
      </div>
      <h4>
        {store.isLoading
          ? "Flight are calculated"
          : `${store.flights.length} flights found`}
      </h4>
    </header>
  );
};

export default Header;
