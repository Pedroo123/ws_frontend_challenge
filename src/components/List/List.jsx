import React from 'react';
import Table from '../Table/Table';
import Loading from '../Loading/Loading';
import { responseHandle } from '../Helpers/helpers';
import { API_URL } from '../../config';

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
        fetch(`${API_URL}`)
            .then(responseHandle)
            .then((data) => {
                console.log('Successfull Request', data);

                const { customers } = data;

                this.setState({ customers, loading: false })
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