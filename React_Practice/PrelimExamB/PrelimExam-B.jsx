function Item({ name, isPacked}) {
    if (isPacked) {
        return <li className="item">{name}</li>
    }
}

export default function PrelimB(){
    return(
        <section>
            <ul>
                <h4><Item isPacked={true} name="My StrawHat"/></h4>
                <h4><Item isPacked={true} name="Gum Gum Fruit"/></h4>
                <h4><Item isPacked={false} name="The Red Vest"/></h4>
            </ul>
        </section>
    );
}