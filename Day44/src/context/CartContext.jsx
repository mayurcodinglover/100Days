import { useContext ,useState} from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider=({children})=>{
    const [cartitem, setCartitem] = useState([]);

    const addToCart=(item)=>{
        setCartitem((prevCart)=>{
            const existingItem=prevCart.find(cartItem=>cartItem.id===item.id);
            if(existingItem){
                return prevCart.map((cartItem)=>{
                    if(cartItem.id===item.id){
                        return {...cartItem,quantity:cartItem.quantity+1}
                    }
                    else{
                        return cartItem;
                    }
                })
            }else{
                return [...prevCart,{...item,quantity:1}]
            }
        })
    }
    const removeFromCart=(itemId)=>{
        setCartitem((prevCart)=>{
            return prevCart.filter(cartItem=>cartItem.id!==itemId);
        })
    }

    const clearCart=()=>{
        setCartitem([]);
    }

    const increaseQuantity=(itemId)=>{
        setCartitem((prevCart)=>{
            return prevCart.map((cartItem)=>{
                if(cartItem.id===itemId){
                    return {...cartItem,quantity:cartItem.quantity+1}
                }
                return cartItem;
            })
        })
    }

    const decreaseQuantity=(itemId)=>{
        setCartitem((prevCart)=>{
            return prevCart.map((cartItem)=>{
                if(cartItem.id===itemId){
                    return {...cartItem,quantity:Math.max(cartItem.quantity-1,1)}
                }
                return cartItem;
            })
        })
    }
    const totalPrice=cartitem.reduce((total,item)=>total+(item.price*item.quantity),0);
    const totalItems=cartitem.reduce((total,item)=>total+item.quantity,0);

    return (
        <CartContext.Provider value={{cartitem,setCartitem,addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity,totalPrice,totalItems}}>
            {children}
        </CartContext.Provider>
    )
}