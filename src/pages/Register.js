import {React, useState} from "react";
import classes from "./Register.module.css"


function Register(){
    const [formData, setFormData] = useState({
        telephoneNumber: '',
        email: ''
    }); 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            alert('type correct email')
            return
          }

        if (!formData.telephoneNumber.match(
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g
        )) {
            alert('type correct tel number')
            return
        }

        alert(`Отправлено: ${formData.email} ${formData.telephoneNumber}`); 
        console.log(formData.email, formData.telephoneNumber)
    }; 

    return (
        <div className="wrapper">
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className="form-group">

                    <label for="exampleInputTel">
                        Ваш номер телефона:
                        <input type="tel" className="form-control" name='telephoneNumber' placeholder="Введите номер телефона"
                        value={formData.telephoneNumber} onChange={handleChange}/>
                    </label>
                </div>

                <div className="form-group">
                    <label for="exampleInputTel">
                        Ваш Email:
                        <input type="tel" className="form-control" name='email' placeholder="Введите Email"
                        value={formData.email} onChange={handleChange}/>
                    </label>
                </div>

                <button type="submit" className="btn">Записаться</button>
            </form>
        </div>
    )
}

export default Register