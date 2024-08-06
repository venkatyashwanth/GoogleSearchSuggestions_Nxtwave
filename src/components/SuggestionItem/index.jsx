import "./index.css";

const SuggestionItem = (props) => {
    const { suggestionItem,pushSuggestion } = props;
    const handleValue = () => {
        pushSuggestion(suggestionItem.suggestion);
    }

    return (
        <li className="suggestion-item">
            <p className="suggestion-text">
                {suggestionItem.suggestion}
            </p>
            <button onClick={handleValue}>
                <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" />
            </button>
        </li>
    )
}

export default SuggestionItem