import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import * as XLSX from 'xlsx';

function Report({ sales }) {
  const exportExcel = () => {
    const wb = XLSX.utils.book_new();
    const data = sales.flatMap((sale) => 
      sale.items.map((it) => ({
        Date: sale.date,
        ItemID: it.id,
        Name: it.name,
        Weight: it.weight,
        Karat: it.karat,
        Price: it.price,
        MakingCharges: it.makingCharges
      }))
    );
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "sales_report.xlsx");
  };

  return (
    <>
      <Card className="card-custom p-3">
        <h3 className="text-center text-dark mb-3">Sales Report</h3>
        <Button variant="custom" onClick={exportExcel} className="mb-3">Export to Excel</Button>
        <Table striped bordered hover>
          <thead className="table-warning">
            <tr>
              <th>Date</th>
              <th>Item ID</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Karat</th>
              <th>Price</th>
              <th>Making Charges</th>
            </tr>
          </thead>
          <tbody>
            {sales.flatMap((sale, idx) => 
              sale.items.map((it, i) => (
                <tr key={`${idx}-${i}`}>
                  <td>{sale.date}</td>
                  <td>{it.id}</td>
                  <td>{it.name}</td>
                  <td>{it.weight}</td>
                  <td>{it.karat}</td>
                  <td>{it.price}</td>
                  <td>{it.makingCharges}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
}

export default Report;