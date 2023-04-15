import { useState } from 'react';

import { SortByType, TableCellValue, UseSort } from './types';

export const useSort: UseSort = (data, initialSortBy) => {
  const initialState = initialSortBy
    ? {
        asc: true,
        by: initialSortBy,
      }
    : null;

  const [sortBy, setSortBy] = useState<SortByType | null>(initialState);

  const setSort = (param: string) => {
    setSortBy((currSort) => ({
      asc: currSort?.by === param ? !currSort.asc : true,
      by: param,
    }));
  };

  const sortData = (a: TableCellValue, b: TableCellValue) => {
    if (!sortBy) {
      return 0;
    }

    if (a[sortBy.by] > b[sortBy.by]) return sortBy.asc ? 1 : -1;
    if (a[sortBy.by] < b[sortBy.by]) return sortBy.asc ? -1 : 1;
    return 0;
  };

  const sortedData = data.sort(sortData);

  return { sortedData, sortBy, setSort };
};
