export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  
  export const initialeState = {
    basket: [],
    user: null,
  };
  
  export default function AppReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "ADD_TO_BASKET":
        return {
          ...state,
          // نضيف العنصر الجديد إلى السلة
          basket: [...state.basket, action.item],
        };
  
      case "REMOVE_FROM_BASKET":
        // تعريف المتغيرات خارج الـ switch لتجنب الخطأ
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        // نسخ السلة
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1); // إزالة العنصر
        } else {
          console.warn(
            `can't remove product {id ${action.id} as it's not in basket!}`
          );
        }
        return {
          ...state,
          basket: newBasket,
        };
  
      // يمكنك إضافة حالات أخرى إذا لزم الأمر
  
      default:
        return state;
    }
  }
  