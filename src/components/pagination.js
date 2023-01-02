import React from "react";

function Pagination({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
  paginateFront,
  paginateBack, 
  totalPages
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      {/* <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage - 1 * dataPerPage - 10}{" "}
          </span>
          to
          <span className='font-medium'> {currentPage * dataPerPage} </span>
          of
          <span className='font-medium'> {totalData} </span>
          results
        </p>
      </div> */}
      {/* <nav className="block">
        <ul className="flex justify-end">
          <li>
            {pageNumbers.map((number, index) => (
              <a
                key={index}
                onClick={() => {
                  paginate(number - 1);
                }}
                href="#"
                className={
                  currentPage + 1 === number
                    ? "px-3 py-2 border text-sm font-medium rounded-3xl"
                    : "bg-white text-black px-3 py-2 text-sm font-medium rounded-3xl ml-1"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav> */}

      <div >
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className= {
              currentPage === 0 ? 
              'page-disabled relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50' :
              'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            }
            
            
          >
            <span className="text-black">Previous</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className= {
              currentPage >= totalPages - 1 ? 
              'page-disabled relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50' :
              'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            }
          >
            <span className="text-black">Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
