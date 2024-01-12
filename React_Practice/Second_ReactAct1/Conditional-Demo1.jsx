function TapButton(){
    const handleClick = () => {
        alert("Alright, You've notify ME!");
    }
    return(
        <button onClick={handleClick}>Tap Here!</button>
    );
}

export default TapButton;
