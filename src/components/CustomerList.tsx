import React from 'react'
import { ICustomer } from '../interfaces'

type CustomerListProps = {
    customers: ICustomer[]
    onRemove: (id:number) => void
}

export const CustomerList: React.FC<CustomerListProps> = ({customers, onRemove}) => {
  if(customers.length === 0){
    return <p className="center">No customers</p>
  }

    return (
        <table>
        <thead>
          <tr>
              <th>Id</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
            {customers.map(customer => {
                    return (
                      <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td><span className="material-icons red-text trash-custom"
                               onClick={()=>onRemove(customer.id)}>delete</span></td>
                      </tr>
                    )
                })
            }
        </tbody>
      </table>
    )
}