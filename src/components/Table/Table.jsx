import React from 'react';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import './Table.css';

const Table = (props) => {

    const { customers, history } = props;

    return (
        <div className="table-container">
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Initial Value</th>
                        <th>Final Value</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {customers.map((customer) => (
                        <tr 
                            key={customer.id}
                            onClick={() => history.push(`/customers/${customer.id}`)}
                        >
                            <td>
                                <span className="table-data">{customer.name}</span>
                            </td>
                            <td>
                                <span className="table-data">{customer.age}</span>
                            </td>
                            <td>
                                <span className="table-data">{customer.initalValue}</span>
                            </td>
                            <td>
                                <span className="customer-name">{customer.finalValue}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    customers: propTypes.array.isRequired,
    history: propTypes.object.isRequired
}

export default withRouter(Table);