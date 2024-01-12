function Family(){
    return(
        <h3>Family comes first!</h3>
    );
}

function Beliefs(){
    return(
        <h3>Endure your depth beliefs!</h3>
    );
}
const isFamily = true;

function FamilyOrBeliefs(props){
    const isFamily = props.isFamily
    return isFamily ? <Family /> : <Beliefs />;
}

export default function App(){
    return(
        <div className={`${isFamily === true ? 'dark' : 'light'}`}>
            <FamilyOrBeliefs />
        </div>
    );
}
