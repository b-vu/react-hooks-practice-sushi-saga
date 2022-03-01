import {React, useState} from "react";

const Form = ({ handleAddingMoney }) => {
    const [formData, setFormData] = useState({
        moneyInput: ""
    });

    const handleInputChange = event => {
        setFormData({
            [event.target.name]: event.target.value
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        handleAddingMoney(parseInt(formData.moneyInput));
        setFormData({
            moneyInput: ""
        });
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input name="moneyInput" value={formData.moneyInput} onChange={handleInputChange}></input>
            <button type="submit">Add More Money</button>
        </form>
    );
}

export default Form;