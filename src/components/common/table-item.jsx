import React from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../../context/app';

const matchResulstType = '1';
const doubleResulstType = '2';
const upperLowerResulstType = '5';

const TableItem = ({
  matchCode,
  matchTime,
  matchInfo,
  staticVariable,
  matchResult,
  lowerUpperResult,
  doubleResult,
}) => {
  const [matchActive, setMatchActive] = React.useState();
  const [upperLowerActive, setUpperLowerActive] = React.useState();
  const [doubleActive, setDoubleActive] = React.useState();
  const { cart, addToCart, deleteItem } = useAppContext();

  const match = {
    matchInfo,
    matchCode,
    staticVariable,
  };

  const actionToCart = (matchItem, index) => {
    switch (matchItem.id) {
      case matchResulstType:
        setMatchActive((prev) => (prev === index ? '' : index));
        break;
      case doubleResulstType:
        setDoubleActive((prev) => (prev === index ? '' : index));
        break;
      case upperLowerResulstType:
        setUpperLowerActive((prev) => (prev === index ? '' : index));
        break;
      default:
        break;
    }

    const action = cart.findIndex((item) => item.matchCode === matchItem.matchCode
      && item.rate === matchItem.rate
      && item.id === matchItem.id);

    if (action > -1) {
      deleteItem(action);

      return;
    }

    addToCart(matchItem);
  };

  return (
    <div className="table-item">
      <div className="match-info">
        <div>{matchCode}</div>
        <div>{matchTime}</div>
        <div>{matchInfo}</div>
      </div>
      <div>Yorumlar</div>
      <div>{staticVariable}</div>
      <div className={`${matchActive === 1 ? 'active' : ''}`} onClick={() => actionToCart({ ...matchResult.host, ...match }, 1)} aria-hidden="true">
        {matchResult.host.rate}
      </div>
      <div className={`${matchActive === 2 ? 'active' : ''}`} onClick={() => actionToCart({ ...matchResult.draw, ...match }, 2)} aria-hidden="true">{matchResult.draw.rate}</div>
      <div />
      <div className={`${upperLowerActive === 1 ? 'active' : ''}`} onClick={() => actionToCart({ ...lowerUpperResult.lower, ...match }, 1)} aria-hidden="true">{lowerUpperResult.lower.rate}</div>
      <div className={`${upperLowerActive === 2 ? 'active' : ''}`} onClick={() => actionToCart({ ...lowerUpperResult.upper, ...match }, 2)} aria-hidden="true">{lowerUpperResult.upper.rate}</div>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className={`${doubleActive === 1 ? 'active' : ''}`} onClick={() => actionToCart({ ...doubleResult.x1, ...match }, 1)} aria-hidden="true">{doubleResult.x1.rate}</div>
      <div className={`${doubleActive === 2 ? 'active' : ''}`} onClick={() => actionToCart({ ...doubleResult.x12, ...match }, 2)} aria-hidden="true">{doubleResult.x12.rate}</div>
      <div className={`${doubleActive === 3 ? 'active' : ''}`} onClick={() => actionToCart({ ...doubleResult.x2, ...match }, 3)} aria-hidden="true">{doubleResult.x2.rate}</div>
      <div />
      <div />
      <div>3</div>
    </div>
  );
};

const itemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  mbs: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
});

TableItem.propTypes = {
  matchCode: PropTypes.string.isRequired,
  matchTime: PropTypes.string.isRequired,
  matchInfo: PropTypes.string.isRequired,
  staticVariable: PropTypes.number.isRequired,
  matchResult: PropTypes.shape({
    draw: PropTypes.shape(itemType.isRequired).isRequired,
    host: PropTypes.shape(itemType.isRequired).isRequired,
  }).isRequired,
  lowerUpperResult: PropTypes.shape({
    lower: PropTypes.shape(itemType.isRequired).isRequired,
    upper: PropTypes.shape(itemType.isRequired).isRequired,
  }).isRequired,
  doubleResult: PropTypes.shape({
    x1: PropTypes.shape(itemType.isRequired).isRequired,
    x12: PropTypes.shape(itemType.isRequired).isRequired,
    x2: PropTypes.shape(itemType.isRequired).isRequired,
  }).isRequired,
};

export default React.memo(TableItem);
