import { toQueryString } from "../utils/convert-search-params";

export async function fetchProducts(searchParams:SearchParams){
    
  const response = await fetch (`${process.env.API}/products?${toQueryString(searchParams).toString()}`)
  const payload:APIResponse<PaginatedResponse<{products:Product[]}>> = await response.json();

  return payload
}