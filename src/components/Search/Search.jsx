import React from 'react';
import './Search.css'

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    /**
     * Exemplo de função caso existisse uma API para pesquisa.
     */
    // handleSearch(event) {
    //     const searchQuery = event.target.value;

    //     /**Teria que existir no state um cara chamado searchQuery e outro searchResults para atualizar o componente. */
    //     this.setState({ searchQuery });

    //     if(!searchQuery) {
    //         return '';
    //     }

    //     this.setState({ loading: true });

    //     fetch(`${API_QUALQUER}/recurso?${searchQuery}`)
    //         .then(responseHandle)
    //         .then((resultado) => {
    //             this.setState({ searchResults: resultado, loading: false })
    //         })
    // }

    /**
     * Caso existisse essa API, seria necessario fazer o redirecionamento do registro pesquisado, para a pagina de detalhes
     * Ficaria mais ou menos nesse formato
     */
    //  handleRedirect() {
    //      this.setState = ({
    //          searchQuery: '',
    //          searchResults: []
    //      });

    //      this.props.history.push(`recurso/${IDdoResgistro}`)
    //  }

    render() {
        return(
            <div className="Search">
                <input className="Search-Input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type a customer name"/>
            </div>
        )
    }

}

export default Search;