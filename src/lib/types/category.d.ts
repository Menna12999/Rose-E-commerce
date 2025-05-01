declare type  Category ={
    name: string;
    slug: string;
    image: string;
    productsCount: number;
  } & DataBaseField
  
  declare type CategoriesResponse = {
    categories: Category[];
    metadata:{
      "currentPage": number,
      "totalPages": number,
      "limit": number,
      "totalItems": number
    };
  }