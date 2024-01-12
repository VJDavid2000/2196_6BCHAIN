function Family(){
    return(
        <h3>Family comes first!</h3>
    );
}

function FamilyOrYourself(props){
    const isFamily = props.isFamily;
    if (isFamily){
        return(
            <Family />
        );
    }
    return(
        <h3>Only being cared Yourself!</h3>
    );
}

export default function App(){
    return(
        <div>
            <FamilyOrYourself isFamily={true}/>
        </div>
    );
}
