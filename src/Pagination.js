export default function Pagination(props) {
  const currentPage = props.currentPage;
  const totalPages = props.totalPages;
  const setCurrentPage = props.setCurrentPage;

  if (totalPages < 2) return null;

  return (
    <div className="pagination">
      <ul>
        {
          new Array(totalPages).fill(0).map((pageNumber, index) => (
            <li key={index + 1} className={currentPage === index + 1 ? `active` : null}>
              <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}