import { AxiosError } from 'axios';

import { useQuery } from '@tanstack/react-query';

import { getServerList, ServerListResponse } from '../api';

export const useServers = () => {
  const { isError, isLoading, isFetching, error, data, isSuccess } = useQuery<
    ServerListResponse,
    AxiosError
  >({
    queryKey: ['serversList'],
    queryFn: getServerList,
  });

  return { isError, isLoading, isFetching, error, data, isSuccess };
};
