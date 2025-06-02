import React from 'react';
import Report from '../components/Report';

function ReportPage({ sales }) {
  return (
    <>
      <div className="page-header">
        <h3>Sales Report</h3>
      </div>
      <Report sales={sales} />
    </>
  );
}

export default ReportPage;