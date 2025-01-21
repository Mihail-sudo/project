import React from "react";
import classes from "./Footer.module.css"

function Footer(){
    return (
        <footer className={classes.footer}>
            <div className="container">
                <h2>Наши контакты</h2>
                <div className="row">
                    <div className="col">
                        <h5>Основной филиал</h5>
                        <p>
                            Екатеринбург,<br/>
                            ул. It's too close 3/4 <br/>
                            Время работы:<br/>
                            ПН - ПТ: 08:15 - 22:30<br/>
                            СБ - ВС: 09:00 - 22:00<br/>
                        </p>
                    </div>
                    <div className="col">
                        <h5>Детский филиал</h5>
                        <p>
                            Екатеринбург,<br/>
                            ул. Somwhere to far<br/>
                            Время работы:<br/>
                            ПН - ПТ: 10:00-21:00<br/>
                            СБ - ВС: выходной<br/>
                        </p>
                    </div>
                    <div className="col">
                        <h5>Контакты</h5>
                        <p>
                            тел: 8 800 555 35 35 <br/>
                            WA: 8 800 555 35 35<br/>
                            boulder.camp.ekb@gmail.com<br/>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer