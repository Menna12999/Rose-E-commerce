export function toQueryString(params: SearchParams){
    const query = new URLSearchParams();
  
    for (const key in params) {
      const value = params[key];
  
      if (typeof value === 'string') {
        query.append(key, value);
      } else if (Array.isArray(value)) {
        for (const item of value) {
          if (item !== undefined) {
            query.append(key, item);
          }
        }
      }
      // undefined values are skipped
    }
  
    return query;
  }
  