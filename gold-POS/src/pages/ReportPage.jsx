import React from 'react';
import PropTypes from 'prop-types';
import Report from '../components/Report';

function ReportPage({ sales = [] }) {  // Default to empty array if sales is undefined
  return (
    <>
      <div className="page-header">
        <h3>Sales Report</h3>
      </div>
      <Report sales={sales} />
    </>
  );
}

// Add prop type validation
ReportPage.propTypes = {
  sales: PropTypes.array
};

// Add default props
ReportPage.defaultProps = {
  sales: []
};

export default ReportPage;