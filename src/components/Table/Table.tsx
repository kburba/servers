import styled from 'styled-components';

import { TextMatchingFilter } from './TextMatchingFilter';
import { TableCellValue, TableColumn } from './types';
import { useFilter } from './useFilter';
import { useSort } from './useSort';
import { getFilterMatch, tinyId } from './utils';

type TableProps = {
  columns: TableColumn[];
  data: Array<TableCellValue>;
  initialSortBy?: string;
};

type TableType = ({ columns, data, initialSortBy }: TableProps) => JSX.Element;

export const Table: TableType = ({ columns, data, initialSortBy }) => {
  const { filter, filteredData, setFilter } = useFilter(data);
  const { sortedData, sortBy, setSort } = useSort(filteredData, initialSortBy);

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => {
              const columnIsSorted = sortBy && sortBy.by === column.valueKey;
              const sortIcon = !columnIsSorted
                ? null
                : (sortBy.asc && String.fromCharCode(8595)) ||
                  (!sortBy.asc && String.fromCharCode(8593));
              return (
                <StyledTh
                  key={`${column.title}-${column.valueKey}`}
                  onClick={() => setSort(column.valueKey)}
                  isSorted={columnIsSorted}
                >
                  {column.title} {sortIcon}
                </StyledTh>
              );
            })}
          </tr>
        </thead>
        <StyledTBody>
          {sortedData.map((item) => {
            return (
              <tr key={tinyId()}>
                {columns.map((column) => {
                  const getCellValue = (): string | number | JSX.Element => {
                    if (filter) {
                      const { parts, searchWords } = getFilterMatch(
                        filter,
                        item[column.valueKey],
                      );
                      const filteredCellValue = (
                        <TextMatchingFilter
                          parts={parts}
                          searchWords={searchWords}
                        />
                      );
                      return filteredCellValue;
                    }
                    return item[column.valueKey];
                  };
                  const cellValue = getCellValue();
                  return (
                    <td key={`${column.valueKey}-${column.title}`}>
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </StyledTBody>
        <StyledTFoot>
          <tr>
            <td colSpan={2}>Showing {sortedData.length} results</td>
          </tr>
        </StyledTFoot>
      </StyledTable>
    </div>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTBody = styled.tbody`
  > tr > td {
    padding: 1rem;
  }
`;

const StyledTh = styled.th<{ isSorted: boolean | null }>`
  color: ${(props) =>
    props.isSorted
      ? 'var(--palette-bright-green)'
      : 'var(--palette-very-light-blue)'};
  cursor: pointer;
  font-family: 'Comfortaa', sans-serif;
  margin: 0;
  border-bottom: 1px solid var(--palette-bright-green);
  user-select: none;
  padding: 1rem;
  text-align: left;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  margin-bottom: 1rem;
`;

const StyledTFoot = styled.tfoot`
  tr td {
    color: var(--palette-very-light-blue);
    font-size: 0.875rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
`;
