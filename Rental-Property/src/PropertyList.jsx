import Property from "./Property";

function PropertyList({properties}) {
    const styles = {
        display: "flex"
    }
    return(
        <div style={styles}>
            {properties.map((i) => (
                <Property key={i.id} {...i}/>
            ))}
        </div>
    );
}

export default PropertyList;