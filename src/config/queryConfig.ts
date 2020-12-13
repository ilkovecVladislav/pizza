import { ArrayQueryKey } from 'react-query';

const queryConfig = {
  queries: {
    queryFnParamsFilter: (args: ArrayQueryKey): ArrayQueryKey => args.slice(1),
    cacheTime: 5 * 60 * 1000,
  },
};

export default queryConfig;
