import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import SalesForm from '../components/SalesForm';
import SalesList from '../components/SalesList';

function SalesPage({ inventory = [], sales = [], setSales }) {
  const handleSave = (sale) => {
    setSales([...sales, sale]);
  };

  return (
    <>
      <div className="page-header">
        <h3>Sales Transactions</h3>
      </div>
      <Card className="card-custom p-3">
        <SalesForm inventory={inventory} onSave={handleSave} />
        <div className="mt-3">
          <SalesList sales={sales} />
        </div>
      </Card>
    </>
  );
}

// Add prop type validation
SalesPage.propTypes = {
  inventory: PropTypes.array,
  sales: PropTypes.array,
  setSales: PropTypes.func.isRequired
};

// Add default props
SalesPage.defaultProps = {
  inventory: [],
  sales: []
};

export default SalesPage;