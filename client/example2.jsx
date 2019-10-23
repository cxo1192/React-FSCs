const HelloUser = (props) => {
    return (
        <div>
            Hello {props.username}!
            <p>Change Username: </p>
            <input type="text" value={props.username} onChange={handleNameChange} />
        </div>
    );
};


const handleNameChange = (e) => {
    ReactDOM.render(
        <HelloUser username={e.target.value} />, //e sent from onChange, target is input, value is whatever is in the input field
        document.getElementById('app')
    );
};


const init = () => {
    ReactDOM.render(
        <HelloUser username='Austin' />, //e sent from onChange, target is input, value is whatever is in the input field
        document.getElementById('app')
    );
};

window.onload = init;