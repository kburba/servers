type GetFilterMatch = (
  filter: string,
  text?: string | number,
) => {
  parts: Array<string>;
  searchWords: Array<string>;
};

export const getFilterMatch: GetFilterMatch = (filter, text = '') => {
  if (!text || !filter) {
    return { parts: [text.toString()], searchWords: [] };
  }

  const searchWords = filter.toLowerCase().split(' ');
  const searchRx = filter
    .toLowerCase()
    .replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
    .replace(/ /g, '|');

  const parts = text.toString().split(new RegExp(`(${searchRx})`, 'gi'));
  return { parts, searchWords };
};

export const tinyId = () => Math.random().toString(32).slice(2);
