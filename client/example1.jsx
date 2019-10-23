const HelloWorld = () => {
    return (
        <div>
            HelloWorld!
        </div>
    );
};


const init = () => {
    ReactDOM.render(
        <HelloWorld />,
        document.getElementById('app')
    );
};

window.onload = init;