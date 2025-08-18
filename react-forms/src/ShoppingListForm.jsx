import { useState } from "react";

function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:"", quantity: 0});
    const handleForm = (evt) => {
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

            <label htmlFor="product">Quantity:</label>
            <input type="number" 
                placeholder="Quantity"
                name="quantity"
                onChange={handleForm}
                value={formData.quantity}
                id="quantity"
            />

            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;