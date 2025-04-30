import React from 'react';
import styles from './style.module.css';

const mockOrders = [
  {
    id: '001',
    customer: 'Alice Johnson',
    products: ['T-shirt', 'Sneakers'],
    total: 89.99,
    status: 'Pending',
    date: '2025-04-30',
  },
  {
    id: '002',
    customer: 'Bob Smith',
    products: ['Backpack'],
    total: 49.99,
    status: 'Shipped',
    date: '2025-04-28',
  },
];

const Orders: React.FC = () => {
  return (
    <div className={styles.ordersContainer}>
      <h1>Order Management</h1>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.products.join(', ')}</td>
              <td>${order.total.toFixed(2)}</td>
              <td className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                {order.status}
              </td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
