import updateBookList from './updateBookList'
import updateShopingCart from './updateShopingCart'


const reducer = (state , action) => {
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShopingCart(state,action)
  }
};

export default reducer;
