import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffSet] = useState(0);

  // console.log(store.flights);

  /*-Pagination sistemi kurmak icin gerekli degerler;
  -sayfa sayısı
  -sayfada gosterilecek eleman sayısı,
  -ve o an ki sayfada gosterilecek itemler
  
  */

  //sayfa basına gosterilecek items
  const itemsPerPage = 10;

  //sonuncu eleman sayısı
  const endOffSet = itemOffset + itemsPerPage;
  //sayfa basına o anda gosterilecek eleman dizisi
  const currentItems = store.flights.slice(itemOffset, endOffSet);

  const pageCount = Math.ceil(store.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store.flights.length;
    console.log(event);
    setItemOffSet(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Latitude</th>
            <th>Longitute</th>
            <th>Detail information</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lang}</td>

              <td>
                <button onClick={() => openModal(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        pageCount={pageCount}
        nextAriaLabel="next >"
        previousAriaLabel="< prev"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default ListView;
