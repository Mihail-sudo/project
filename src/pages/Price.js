import React from "react";
import classes from './Price.module.css'

function Price(){
    function makeChildish(){
        let buttonForOlds = document.getElementById('old-train')
        let buttonForChilds = document.getElementById('little-train')

        let oldSection = document.getElementById('oldSession')
        let childSection = document.getElementById('childSession')

        buttonForOlds.className = [classes.button, classes.inactive].join(' ')
        buttonForChilds.className = [classes.button, classes.active].join(' ')

        oldSection.className = classes.hidden
        childSection.className = ''
    }

    function makeOlder(){
        let buttonForOlds = document.getElementById('old-train')
        let buttonForChilds = document.getElementById('little-train')

        let oldSection = document.getElementById('oldSession')
        let childSection = document.getElementById('childSession')

        buttonForOlds.className = [classes.button, classes.active].join(' ')
        buttonForChilds.className = [classes.button, classes.inactive].join(' ')

        childSection.className = classes.hidden
        oldSection.className = ''
    }

    return (
        <div className="wrapper">
            <h1>Наши цены</h1>
            <section className={classes.centered_text}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button id="old-train" className={[classes.button, classes.active].join(' ')} onClick={makeOlder}>Посещения для взрослых 16+</button>
                        </div>
                        <div className="col">
                            <button id="little-train" className={[classes.button, classes.inactive].join(' ')} onClick={makeChildish}>Детская школа</button>
                        </div>
                    </div>
                </div>

                    <div id="oldSession" className="">
                        <h3>Абонементы на количество посещений</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Будни с 8:00 до 16:00</th>
                                    <th scope="col">Без ограничения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">5 посещений</th>
                                    <td>2 600 руб</td>
                                    <td>3 600 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">10 посещений</th>
                                    <td>4 900 руб</td>
                                    <td>6 700 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">30 посещений</th>
                                    <td>13 200 руб</td>
                                    <td>17 900 руб</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Срок действия абонемента 1 год. По такому абонементу можно привести друзей и оплатить им занятия</p>
                        <br/>

                        <h3>Самостоятельное посещение зала 16+</h3>
                        <p>Время лазания не ограничено</p>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Будни с 8:00 до 16:00</th>
                                    <th scope="col">Будни с 16:00 до 22:30</th>
                                    <th scope="col">Выходные с 9:00 до 22:00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Разовое посещение</th>
                                    <td>550 руб</td>
                                    <td>750 руб</td>
                                    <td>750 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Посещение родителя с ребенком*<br/>
                                    <small>*Согласно правилам посещения с детьми</small></th>
                                    <td>850 руб</td>
                                    <td>1 200 руб</td>
                                    <td>1 200 руб</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Безлимитные абонементы</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Будни с 8:00 до 16:00</th>
                                    <th scope="col">Без ограничения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1 месяц</th>
                                    <td>4 400 руб</td>
                                    <td>5 900 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">3 месяца (заморозка 7 дней)</th>
                                    <td>10 600 руб</td>
                                    <td>14 100 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">6 месяцев (заморозка 14 дней)</th>
                                    <td>17 200 руб</td>
                                    <td>24 800 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">12 месяцев (заморозка 30 дней)</th>
                                    <td></td>
                                    <td>42 500 руб</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Скидки на самостоятельное посещение</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Размер скидки</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Членам сборной России по скалолазанию/альпинизму</th>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Мастерам спорта по скалолазанию/альпинизму</th>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Школьникам, студентам, пенсионерам</th>
                                    <td>15%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Держателям карт лояльности ФСР</th>
                                    <td>20% на самостоятельные посещения и абонементы
                                    (безлимиты / самостоятельные блоки)</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Взрослая школа скалолазания</h3>
                        <p>с 16 лет</p>

                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Будни с 8:15 до 16:00</th>
                                    <th scope="col">Будни с 16:00 до 22:30<br/>Выходные</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Легкий старт для одного / для двоих и более, с участника</th>
                                    <td>1 200 руб / 1 000 руб</td>
                                    <td>1 200 руб / 1 000 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Групповая тренировка</th>
                                    <td>1 000 руб</td>
                                    <td>1 200 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Школьникам, студентам, пенсионерам</th>
                                    <td>400 руб / 1600 руб</td>
                                    <td>400 руб / 1600 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Персональная тренировка 1,5 часа (прокат снаряжения оплачивается отдельно)</th>
                                    <td></td>
                                    <td>2 800 руб / 3 900 руб сплит</td>
                                </tr>
                                <tr>
                                    <th scope="row">Вводный курс из 3 персональных занятий. Прокат снаряжения включен в стоимость. Срок действия 1 месяц с момента активации</th>
                                    <td></td>
                                    <td>7 900 руб/ 11 000 руб сплит</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>При добавлении на персональное занятие третьего и последующих участников - доплата 1 200р/чел.</p>

                        <h3>Абонементы на занятия с тренером</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Будни с 8:15 до 16:00</th>
                                    <th scope="col">Без ограничения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">4 занятия в группе</th>
                                    <td>3 600 руб</td>
                                    <td>4 300 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">8 занятий в группе</th>
                                    <td>6 600 руб</td>
                                    <td>7 900 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">12 занятий в группе</th>
                                    <td>8 900 руб</td>
                                    <td>10 800 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">4 персональных занятий</th>
                                    <td></td>
                                    <td>10 100 руб / 14 050 руб сплит</td>
                                </tr>
                                <tr>
                                    <th scope="row">8 персональных занятий</th>
                                    <td></td>
                                    <td>17 900 руб/ 24 950 руб сплит</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Срок действия абонемента 3 месяца. В абонемент можно дополнительно включить прокат снаряжения.</p>

                        <h3>Скидки на групповые тренировки</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Размер скидки</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Школьникам, студентам, пенсионерам</th>
                                    <td>10%</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Прокат снаряжения</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Снаряжение</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Включить прокат в абонемент при покупке (кроме Безлимитов)</th>
                                    <td>-20% на прокат</td>
                                </tr>
                                <tr>
                                    <th scope="row">Скальные туфли на 1 занятие </th>
                                    <td>250 руб (взрослые) / 200 руб (детские)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Магнезия на 1 занятие </th>
                                    <td>150 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Страховочная система на одно занятие</th>
                                    <td>200 руб (взрослая)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Веревка для нижней страховки</th>
                                    <td>250 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Страховочное устройство gri-gri</th>
                                    <td>200 руб</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Аренда шкафчика на скалодроме</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1 месяц</th>
                                    <td>800 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">3 месяца</th>
                                    <td>1900 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">6 месяцев</th>
                                    <td>3000 руб</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="childSession">
                        <h3>Детская школа скалолазания</h3>
                        <p>с 4 до 16 лет</p>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Посещение</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Детское занятие в группе / пробное занятие</th>
                                    <td>1 200 руб / 1 000 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">4 занятия в группе (срок действия 5 недель)</th>
                                    <td>14 000 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">8 занятий в группе (срок действия 6 недель)</th>
                                    <td>7 400 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">12 занятий в группе (срок действия 7 недель)</th>
                                    <td>10 200 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Персональная детская тренировка</th>
                                    <td>2 600 руб / 3 800 руб сплит</td>
                                </tr>
                                <tr>
                                    <th scope="row">Абонемент на 4 персональных тренировки (срок действия 2 месяца)</th>
                                    <td>9 600 руб / 14 000 руб сплит</td>
                                </tr>
                                <tr>
                                    <th scope="row">Абонемент на 8 персональных тренировок (срок действия 2 месяца)</th>
                                    <td>17 600 руб / 25 600 руб сплит</td>
                                </tr>
                                <tr>
                                    <th scope="row">Занятие в универсальном зале в группе / индивидуально</th>
                                    <td>600 руб / 1 800 руб</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Прокат снаряжения</h3>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Снаряжение</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Включить прокат в абонемент при покупке (кроме Безлимитов)</th>
                                    <td>-20% на прокат</td>
                                </tr>
                                <tr>
                                    <th scope="row">Скальные туфли на 1 занятие </th>
                                    <td>250 руб (взрослые) / 200 руб (детские)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Магнезия на 1 занятие </th>
                                    <td>150 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Страховочная система на одно занятие</th>
                                    <td>200 руб (взрослая)</td>
                                </tr>
                                <tr>
                                    <th scope="row">Веревка для нижней страховки</th>
                                    <td>250 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">Страховочное устройство gri-gri</th>
                                    <td>200 руб</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Аренда шкафчика на скалодроме</th>
                                    <th scope="col">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1 месяц</th>
                                    <td>800 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">3 месяца</th>
                                    <td>1900 руб</td>
                                </tr>
                                <tr>
                                    <th scope="row">6 месяцев</th>
                                    <td>3000 руб</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

            </section>
        </div>
    )
}

export default Price