import { FC } from 'react';

type Props = {
  parts: Array<string>;
  searchWords: Array<string>;
};

export const TextMatchingFilter: FC<Props> = ({ parts, searchWords }) => {
  return (
    <span>
      {parts.length > 0 &&
        parts.map((part) => {
          const isMatchingPart =
            searchWords.length > 0
              ? searchWords.indexOf(part.toLowerCase()) > -1
              : false;
          return (
            <span
              key={part}
              {...(isMatchingPart && {
                style: { backgroundColor: 'var(--palette-very-light-blue)' },
              })}
            >
              {part}
            </span>
          );
        })}
    </span>
  );
};
