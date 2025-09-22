import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { ApiConstants } from '../../../utils/constants/api_constants';
import type { DataQuery, DataResponse } from '../../../utils/validation/schema';
import { responseSchema } from '../../../utils/validation/schema';

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiConstants.API_BASE_URL,
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['DataPlan'],
  endpoints: (builder: any) => ({
    getDataPlan: (builder as any).mutation({
      query: (data: DataQuery) => ({
        url: ApiConstants.QUERY_ENDPOINT,
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: DataResponse): DataResponse => {
        const validation = responseSchema.safeParse(response);
        if (!validation.success) {
          throw new Error('Invalid response structure');
        }
        return validation.data;
      },
      transformErrorResponse: (response: FetchBaseQueryError) => {
        const status = 'status' in response ? response.status : 'UNKNOWN_STATUS';
        const data = 'data' in response ? response.data : 'An unexpected error occurred';
        
        return {
          status: status,
          data: typeof data === 'string' ? data : 'An unexpected error occurred'
        };
      },
      invalidatesTags: ['DataPlan'],
    }),
  }),
});

export const { useGetDataPlanMutation } = dataApi;