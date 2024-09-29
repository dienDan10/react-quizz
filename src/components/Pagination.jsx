import { useSearchParams } from "react-router-dom";

const DOTS = "dots";

function Pagination({ totalCount, pageSize, siblingCount = 1 }) {
  // get the current page from url
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageRange = paginationRange(
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  );

  // if there is only one page, do not show the pagination
  if (pageRange.length < 2) {
    return null;
  }

  const handleNext = () => {
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
  };

  const handlePrevious = () => {
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  };

  const handlePageChange = (e) => {
    const selectedPage = Number(e.target.textContent);
    if (selectedPage === currentPage) {
      return;
    }
    searchParams.set("page", e.target.textContent);
    setSearchParams(searchParams);
  };

  return (
    <ul className="flex gap-1.5 text-sm items-center">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={handlePrevious}
          className={`w-8 h-8 rounded-full relative leading-[0.5] hover:bg-neutral-100 transition-all duration-300  disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          &larr;
        </button>
      </li>
      {pageRange.map((page, i) =>
        page === "dots" ? (
          <li className="tracking-widest" key={i}>
            ...
          </li>
        ) : (
          <li key={i} onClick={handlePageChange}>
            <button
              className={`w-8 h-8 rounded-full relative leading-[0.5] hover:bg-neutral-100 transition-all duration-300 focus:outline-none  ${
                currentPage === page && "bg-neutral-200 hover:bg-neutral-200"
              }`}
            >
              {page}
            </button>
          </li>
        )
      )}
      <li onClick={handleNext}>
        <button
          disabled={currentPage === Math.ceil(totalCount / pageSize)}
          className={`w-8 h-8 rounded-full relative leading-[0.5] hover:bg-neutral-100 transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          &rarr;
        </button>
      </li>
    </ul>
  );
}

// create a function to calculate the pages to be displayed in the component
function paginationRange(totalCount, pageSize, siblingCount = 1, currentPage) {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  // calculate the mininum page to display: sibling * 2 + currentPage + dot + endPage + startPage
  const minDisplayPages = siblingCount * 2 + 5;

  // CASE 1: totalPageCount smaller than minDisplayPages, we return all the page
  if (totalPageCount < minDisplayPages) {
    return range(1, totalPageCount);
  }

  /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  );

  /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  /*
        Case 2: No left dots to show, but rights dots to be shown
    */
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS, totalPageCount];
  }

  /*
        Case 3: No right dots to show, but left dots to be shown
    */
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  /*
        Case 4: Both left and right dots to be shown
    */
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
}

function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

export default Pagination;
