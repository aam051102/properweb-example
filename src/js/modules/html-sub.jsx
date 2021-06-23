const component = ({ name }) => {
    let el = (
        <>
            <header><h1>Welcome, {name}.</h1></header>
            <footer><h3>Goodbye, {name}.</h3></footer>
        </>
    );

    return el;
};

export default component;