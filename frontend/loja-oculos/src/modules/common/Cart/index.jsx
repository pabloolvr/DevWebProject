import { observer } from "mobx-react";
import { globalStore } from "../../../GlobalStore";
import { Link } from "react-router-dom";
import "./style.css";

export const CartComponent = observer(() => {
  
  const {cart} = globalStore;
  
  
  return (
    <div>
      { cart.eachProductListSumLen > 0?
        (<div className="cartItem">
          <div>
            Há {cart.eachProductListSumLen}
            {" "} 
            produto(s) no carrinho!
          </div>
          <Link to="/sacola">Ir para Sacola</Link>
        </div>)
        :(<div></div>)
      }
    </div>
  );
});
