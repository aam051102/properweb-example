import "src/js/partials/sub";

P("main list", "ul");
P("main button", "button");

const handleClick = e => {
    P.render(<p>Cool, new, component.</p>, e.target);
};

P("main button").addEventListener("click", e => {
    e.preventDefault();
    
    const component = (
        <>
            <li className="test-li">
                <p>A new component.</p>
            </li>
            <li className="test-li-2">
                <p onClick={handleClick}>A new component 2.</p>
            </li>
        </>
    );

    P.render(component, P("main list"));
});