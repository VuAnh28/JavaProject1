import React, { useEffect, useState } from "react";
import { getCustomers } from "../services/Customers";

interface Customer {
  id: number;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  address: string;
}

function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers()
      .then((data) => {
        console.log(data);
        setCustomers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.fullName} ({customer.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
