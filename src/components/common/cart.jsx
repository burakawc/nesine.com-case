import React from 'react';
import { useAppContext } from '../../context/app';
import '../../styles/cart.scss';

const Cart = () => {
  const { cart } = useAppContext();
  const total = cart.reduce((acc, item) => acc * Number(item.rate), 1);

  return (
    <div className="cart-container">
      <div className="cart-content">
        {cart?.map((item) => (
          <div key={`${item.id}-${item.rate}-${item.matchCode}`} className="item">
            <div>{item.staticVariable}</div>
            <div>
              Kod:
              {item.matchCode}
            </div>
            <div>
              Maç:
              {item.matchInfo}
            </div>
            <div>
              Oran:
              {item.rate}
            </div>
            <div>
              MBS:
              {item.mbs}
            </div>
          </div>
        ))}
        <div className="total">
          Toplam Tutar:
          {total !== 1 && total}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
