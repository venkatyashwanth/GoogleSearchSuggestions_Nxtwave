import { Component } from "react";
import "./index.css";
import SuggestionItem from "../SuggestionItem";

class GoogleSuggestions extends Component {
    state = {
        searchInput: ''
    }

    handleSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    handleSuggestion = (suggestion) => {
        this.setState({searchInput: suggestion})
    }

    render() {
        const { suggestionsList } = this.props;
        const { searchInput } = this.state;
        const filteredSearch = suggestionsList.filter(eachItem =>
            eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase())
        )


        return (
            <div className="appBg">
                <div className="app-content">
                    <div className="image-wrapper">
                        <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" />
                    </div>
                    <div className="google-searchbar">
                        <div className="input-container">
                            <img className="search-icon" src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search icon" />
                            <input type="search" placeholder="Search Google" onChange={this.handleSearchInput} value={searchInput} />
                        </div>
                        <ul className="suggestion-list">
                            {
                                filteredSearch.map(eachSuggestionItem =>
                                    <SuggestionItem key={eachSuggestionItem.id} suggestionItem={eachSuggestionItem} pushSuggestion={this.handleSuggestion} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleSuggestions