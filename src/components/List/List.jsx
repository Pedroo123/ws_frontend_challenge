import React from 'react';
import Table from '../Table/Table';
import { responseHandle } from '../Helpers/helpers';
import Loading from '../Loading/Loading';

export default class List extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            error: null,
            customers: []
        }
    }

    componentDidMount() {
        this.fetchApiData();
    }

    fetchApiData() {
        fetch('http://localhost:4000/customers')
            .then(responseHandle)
            .then((data) => {

                const { customers } = data

                console.log('Successfull Request', data);

                this.setState({ loading: false, customers })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const { loading, error, customers } = this.state;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <div>{this.state.error}</div>
        }

        return (
            <div>
                <Table customers={customers}/>
            </div>
        )
    }
}