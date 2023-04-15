import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useQuery } from '@tanstack/react-query';

import { getServerList } from '../../api/api';
import { ServerListResponse } from '../../api/api.types';
import {
  Button,
  ButtonSize,
  Heading,
  HeadingSize,
  Loader,
  Table,
} from '../../components';
import { RouteType } from '../../enums';
import { ErrorText } from '../ErrorText';

const TABLE_COLUMNS = [
  {
    title: 'Name',
    valueKey: 'name',
  },
  {
    title: 'Distance',
    valueKey: 'distance',
  },
];

export const Home = () => {
  const navigate = useNavigate();
  const { isError, isLoading, isFetching, error, data } = useQuery<
    ServerListResponse,
    AxiosError
  >({
    queryKey: ['serversList'],
    queryFn: getServerList,
  });

  const handleLogout = () => {
    navigate(RouteType.Logout);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <Heading noMargin>Servers Company</Heading>
        <Button type="button" onClick={handleLogout} size={ButtonSize.Small}>
          Logout
        </Button>
      </StyledHeader>
      <StyledContent>
        <Heading size={HeadingSize.Small}>Servers</Heading>
        {isError && <ErrorText>{error?.message}</ErrorText>}
        {(isLoading || isFetching) && <Loader />}
        {data && (
          <Table data={data} columns={TABLE_COLUMNS} initialSortBy="distance" />
        )}
      </StyledContent>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 6rem auto;
  grid-template-columns: minmax(1rem, 1fr) minmax(16rem, 48rem) minmax(
      1rem,
      1fr
    );
`;

const StyledHeader = styled.div`
  grid-row: 1;
  grid-column: 2/2;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled.div`
  background-color: var(--palette-dark-blue);
  padding: 2rem 1rem;
  grid-row: 2;
  grid-column: 2/2;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
