import React from 'react';
import { Table, Card } from 'react-bootstrap';

function SalesList({ sales }) {
  return (
    <Card className="card-custom p-3">
      <Table striped bordered hover className="mb-0">
        <thead className="table-warning">
          <tr>
            <th>Date & Time</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, idx) => (
            <tr key={idx}>
              <td className="align-middle">{sale.date}</td>
              <td>
                {sale.items.map((it, i) => (
                  <div key={i} className="mb-1">
                    💍 {it.name} - {it.weight}g - {it.karat} - ${it.price}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default SalesList;