import { useState } from "react";
import { validate } from "uuid";

function ValidatedShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:"", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if(product.length === 0){
            setProductIsValid(false);
        }
        else{
            setProductIsValid(true);
        }
    }


    const handleForm = (evt) => {
        if(evt.target.name === "product"){
            validate(evt.target.value);
        }
        
        setFormData(currData => {
           return {
             ...currData,
             [evt.target.name] : [evt.target.value]
           }
        })
    }

    const handleItem = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product:"", quantity:0});
    }   

    return(
        <form onSubmit={handleItem}>
            <label htmlFor="product">Product Name:</label>
            <input type="text" 
                placeholder="product name"
                name="product"
                onChange={handleForm}
                value={formData.product}
                id="product"
            />
            {!productIsValid && (<p style={{color:"red"}}>Product cannot be empty</p>)}
            <label htmlFor="product">Quantity:</label>
            <input type="number" 
                placeholder="Quantity"
                name="quantity"
                onChange={handleForm}
                value={formData.quantity}
                id="quantity"
            />

            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}

export default ValidatedShoppingListForm;