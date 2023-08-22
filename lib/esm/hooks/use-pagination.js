var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { range } from "lodash";
import { useMemo } from "react";
export var DOTS = "...";
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
export function usePagination(_a) {
    var totalCount = _a.totalCount, page = _a.page, _b = _a.siblingCount, siblingCount = _b === void 0 ? 1 : _b;
    var paginationRange = useMemo(function () {
        var totalPageCount = Math.ceil(totalCount / page.pageSize);
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        var totalPageNumbers = siblingCount + 5;
        /*
            Case 1:
            If the number of pages is less than the page numbers we want to show in our
            paginationComponent, we return the range [1..totalPageCount]
          */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount + 1);
        }
        /*
              Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
          */
        var leftSiblingIndex = Math.max(page.page - siblingCount, 1);
        var rightSiblingIndex = Math.min(page.page + siblingCount, totalPageCount);
        /*
            We do not show dots just when there is just one page number to be inserted between the extremes of sibling
        and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
          */
        var shouldShowLeftDots = leftSiblingIndex > 2;
        var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        var firstPageIndex = 1;
        var lastPageIndex = totalPageCount;
        /*
              Case 2: No left dots to show, but rights dots to be shown
          */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            var leftItemCount = 3 + siblingCount;
            var leftRange = range(1, leftItemCount + 1);
            return __spreadArray(__spreadArray([], leftRange, true), [DOTS, totalPageCount], false);
        }
        /*
              Case 3: No right dots to show, but left dots to be shown
          */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            var rightItemCount = 3 + siblingCount;
            var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount + 1);
            return __spreadArray([firstPageIndex, DOTS], rightRange, true);
        }
        /*
              Case 4: Both left and right dots to be shown
          */
        if (shouldShowLeftDots && shouldShowRightDots) {
            var middleRange = range(leftSiblingIndex, rightSiblingIndex + 1);
            return __spreadArray(__spreadArray([firstPageIndex, DOTS], middleRange, true), [DOTS, lastPageIndex], false);
        }
    }, [totalCount, page.pageSize, siblingCount, page.page]);
    return paginationRange;
}
//# sourceMappingURL=use-pagination.js.map