import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart } from 'recharts';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

export default class CharsCard extends React.Component {

    constructor() {
        super();

        this.state = {
            customer: {},
            error: null,
            loading: false
        }
    }

    fetchCustomerValue() {
        fetch(`${API_URL}/customer`)
            .then(responseHandle)
            .then((data) => {
                this.setState({
                    customer: data,
                    error: null,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchCustomerValue();
    }

    render() {
        const { customer, error, loading } = this.state;
        const chartData = [
            {
                name: customer.name, iv: customer.initialValue, fv: customer.finalValue
            },
        ]

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <div className="Customer-chart-card">
                <Card width={520} height={320}>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="iv" fill="#8884d8" />
                        <Bar dataKey="fv" fill="#82ca9d" />
                    </BarChart>
                </Card>
            </div>
        )
    }

}