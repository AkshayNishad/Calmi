// Temporary type definitions for missing packages
declare module '@reduxjs/toolkit/query/react' {
  export function createApi(config: any): any;
  export function fetchBaseQuery(config: any): any;
  export type FetchBaseQueryError = any;
}

declare module 'react-redux' {
  export function Provider(props: any): any;
  export function useDispatch(): any;
  export function useSelector(selector: any): any;
  export type TypedUseSelectorHook<T> = any;
}

declare module 'zod' {
  export const z: any;
}