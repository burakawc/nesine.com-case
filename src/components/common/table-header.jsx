import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ title, isFirstElement, index }) => (
  <div className={`table-item ${isFirstElement ? 'header' : ''}`}>
    <div className="title">
      {index !== undefined && <div className="index">{index}</div>}
      {title}
    </div>
    <div className="comments">Yorumlar</div>
    <div />
    <div>1</div>
    <div>x</div>
    <div>2</div>
    <div>Alt</div>
    <div>Üst</div>
    <div>H1</div>
    <div>1</div>
    <div>x</div>
    <div>2</div>
    <div>H-2</div>
    <div>1-X</div>
    <div>1-2</div>
    <div>X-2</div>
    <div>Var</div>
    <div>Yok</div>
    <div>+99</div>
  </div>
);

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isFirstElement: PropTypes.bool,
  index: PropTypes.number,
};

TableHeader.defaultProps = {
  isFirstElement: false,
  index: undefined,
};

export default React.memo(TableHeader);
