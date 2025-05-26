declare type CartItem = {
    product: Product;
    price: number;
    quantity: number;
    _id: string;
  };
  declare type Cart = {
    _id?: string;
    user?: string;
    cartItems: CartItem[] | [];
    discount: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
    __v?: number;
  } & DatabaseFields;
  
 declare type Getcart ={
  message:"success";
  numOfCartItems:number;
  cart:Cart;
 }
  
 type Props = {
  items: CartItem[];
  token: string;
};