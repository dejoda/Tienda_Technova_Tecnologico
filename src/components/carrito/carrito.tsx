import {
  IconShoppingCartFilled,
  IconTrashFilled,
  IconX,
} from "@tabler/icons-react";
import { useCart } from "../../context/CartContext";
import "./carrito.css";

const Carrito = ({ isOpen = false, onClose = () => {} }) => {
  const { cart, increase, decrease, removeFromCart, total } = useCart();

  return (
    <>
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={onClose} />

      <aside className={`carrito-drawer ${isOpen ? "open" : ""}`}>
        <div className="carrito-header">
          <h3>Tu carrito</h3>
          <button className="close-btn" onClick={onClose}>
            <IconX stroke={2} />
          </button>
        </div>

        <div className="carrito-body">
          {cart.length === 0 ? (
            <p className="empty">
              <IconShoppingCartFilled />
              <span>Tu carrito está vacío</span>
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-info">
                  <h4 className="cart-name">{item.name}</h4>

                  <div className="cart-middle">
                    <span className="cart-price">S/ {item.price}</span>
                    <span className="cart-subtotal">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="cart-actions">
                    <div className="cart-qty">
                      <button onClick={() => decrease(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increase(item.id)}>+</button>
                    </div>

                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IconTrashFilled />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="carrito-footer">
            <div className="total">
              <span>Total:</span>
              <strong>S/ {total.toFixed(2)}</strong>
            </div>

            <button className="checkout-btn">Finalizar compra</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Carrito;
