import Button from "./Button";

const Header = () => {
    const onClick = () => {
        console.log("Click");
    };

    return (
        <header className="header">
            <h1>Header</h1>
            <Button color="green" text="add" onClick={onClick} />
        </header>
    );
};

export default Header;
