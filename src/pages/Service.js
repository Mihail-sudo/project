import React from "react"
import classes from './Service.module.css'
import Card from "../components/Card"
import {easy, strong, sales, kooperate, team, kids} from './images/images'

function Service(){
    return (
        <div className="wrapper">
            <h1>Наши услуги</h1>
            <section>
                <div className={classes.content}>
                    <Card
                        background={easy}
                        title='Легкий старт для взрослых'
                        info='Первое занятие для начинающих – знакомимся с двумя направлениями скалолазания и делаем первые шаги'>
                    </Card>
                    <Card 
                        background={strong}
                        title='Взрослая школа скалолазания'
                        info='Групповые и персональные тренировки для новичков и любителей'>
                    </Card>
                    <Card 
                        background={kids}
                        title='Детская школа скалолазания'
                        info='Занятия с детьми от 4 лет'>
                    </Card>
                    <Card 
                        background={team}
                        title='Корпоративные мероприятия'
                        info='События для больших и маленьких компаний'>
                    </Card>
                    <Card 
                        background={sales}
                        title='Скидки и спецпредложения'
                        info='Программа лояльности'>
                    </Card>
                    <Card 
                        background={kooperate}
                        title='Выездные мероприятия'
                        info='Обучения и занятия на скалах'>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default Service