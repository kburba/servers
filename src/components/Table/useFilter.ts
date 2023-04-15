import { useState } from 'react';

import { TableCellValue } from './types';

export const useFilter = (data: Array<TableCellValue>) => {
  const [filter, setFilter] = useState('');
  const filteredData = filter
    ? data.filter((item) =>
        JSON.stringify(Object.values(item))
          .toLowerCase()
          .includes(filter.toLowerCase()),
      )
    : data;

  return { filter, setFilter, filteredData };
};
