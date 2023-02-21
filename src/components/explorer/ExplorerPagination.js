import React from 'react';
import Pagination from 'react-js-pagination';

function ExplorerPagination({ handlePageChange, activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed }) {
    return (
        <div className='explorer-pagination'>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      );
}

export default ExplorerPagination;