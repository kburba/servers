import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { getServerList, ServerListResponse } from '../../api';
import {
  Button,
  ButtonSize,
  Heading,
  HeadingSize,
  Loader,
  PageLayout,
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
    <PageLayout
      header={
        <>
          <Heading noMargin>Servers Company</Heading>
          <Button type="button" onClick={handleLogout} size={ButtonSize.Small}>
            Logout
          </Button>
        </>
      }
      content={
        <>
          <Heading size={HeadingSize.Small}>Servers</Heading>
          {isError && <ErrorText>{error?.message}</ErrorText>}
          {(isLoading || isFetching) && <Loader />}
          {data && (
            <Table
              data={data}
              columns={TABLE_COLUMNS}
              initialSortBy="distance"
            />
          )}
        </>
      }
    />
  );
};
