function Family(){
    return(
        <h3>Family comes first!</h3>
    );
}

function Friends(){
    return(
        <h3>Bond out with your own friends!</h3>
    );
}

function FamilyOrFriends(props){
    const isFamily = props.isFamily;
    if (isFamily){
        return(
            <Family />
        );
    }
    return(
        <Friends />
    );
}

export default function App(){
    return(
        <div>
            <FamilyOrFriends isFamily={false}/>
        </div>
    );
}
