export type SortByType = {
  by: string;
  asc: boolean;
};

export enum TableValueTypes {
  DATE = 'DATE',
}

export type TableColumn = {
  title: string;
  valueKey: string;
};

export type TableCellValue = Record<string, string | number>;

export type UseSort = (
  data: Array<TableCellValue>,
  initialSortBy?: string,
) => {
  sortedData: Array<TableCellValue>;
  sortBy: SortByType | null;
  setSort: (param: string) => void;
};
