const Setting = () => {
    return (
        <div>
            <div className="Container hed bg-secondary pt-2 pb-2">
                <div className="row">
                    <div className="col-12">
                    <a href="/"><i class="fa-solid fa-arrow-left fa-2x text-light pe-5 ps-3"></i></a> <b className="open text-light ps-3"><big>Настройки</big></b>
                    </div>
                </div>
            </div>
            <div className="Container margin bg-dark">
                <div className="row">
                    <div className="col-12">
                    <div className="row">
                            <div className="col-1">
                                <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"></img>
                            </div>
                            <div className="col-10 mt-2">
                                <big><b className="open text-light">Нурсултан</b></big><br></br>
                                <small><b className="text-secondary">Статус</b></small>
                            </div>
                            <div className="col-1 pt-3">
                                <i class="fa-solid fa-box-archive fa-2x text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-solid fa-key fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11">
                        <a className="a" href="/account"><b className="text-light"><big>Аккаунт</big></b><br></br></a>
                        <b className="text-secondary"><smal>Lorem ipsum dolor sit amet consectetur<br></br> 
                        adipisicing elit deserunt dolorem quod eveniet sequi</smal></b>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-solid fa-message fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11">
                        <a className="a" href="/schat"><b className="text-light"><big>Чаты</big></b><br></br></a>
                        <b className="text-secondary"><smal>Тема, обои, история чатов</smal></b>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-solid fa-bell fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11">
                        <b className="text-light"><big>Уведомления</big></b><br></br>
                        <b className="text-secondary"><smal>Звуки сообщений, групп и<br></br>
                        звонков</smal></b>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-solid fa-circle-notch fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11">
                        <b className="text-light"><big>Данные и хранилище</big></b><br></br>
                        <b className="text-secondary"><smal>Использование сети,<br></br>
                        автозагрузка</smal></b>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-regular fa-circle-question fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11">
                        <b className="text-light"><big>Помощь</big></b><br></br>
                        <b className="text-secondary"><smal>Справочный центр, связь с нами,<br></br>
                        политика конфиденциальности</smal></b>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1 p-4 ps-5">
                        <i class="fa-solid fa-user-plus fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <b className="text-light"><big>Пригласить друга</big></b><br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;