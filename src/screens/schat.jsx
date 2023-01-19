import Header from "../components/header";

const Schat = () => {
    return (
        <div className="bg-dark">
            <div className="Container bg-secondary p-3">
                <div className="row">
                    <div className="col-12">
                        <a href="/setting"><i class="fa-solid fa-arrow-left fa-2x text-light ps-4 pe-5"></i></a> <big><b className="open text-light">Чаты</b></big>
                    </div>
                </div>
            </div>
            <div className="Container bg-dark">
                <div className="row">
                    <div className="col-12 p-3 ps-5">
                        <b className="text-secondary">Экран</b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-sun fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-2">
                        <big><b className="text-light">Тема</b></big><br></br>
                        <small><b className="text-secondary">По умолчанию</b></small>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-mountain-sun fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Обои</b></big><br></br>
                        <small><b className="text-secondary"></b></small>
                    </div>
                </div>
            </div><hr className="cha"></hr>
            <div className="Container bg-dark p-3">
                <div className="row">
                    <div className="col-12 ps-5">
                        <b className="text-secondary">Настройки чата</b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        
                    </div>
                    <div className="col-10 pt-3">
                        <big><b className="text-light">Отправка клавишей "Ввод"</b></big><br></br>
                        <small><b className="text-secondary">Клавиша ввода отправляет<br></br>
                        сообщение</b></small>

                    </div>
                    <div className="col-1">

                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        
                    </div>
                    <div className="col-10 pt-3">
                        <big><b className="text-light">Видимость медиа</b></big><br></br>
                        <small><b className="text-secondary">Показывать загруженные<br></br>
                        недавно медиафайлы в галерее<br></br>
                        устройства</b></small>
                        
                    </div>
                    <div className="col-1">

                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Размер шрифта</b></big><br></br>
                        <small><b className="text-secondary">Средний</b></small>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-cloud-arrow-up fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Резервная копия чатов</b></big><br></br>
                        <small><b className="text-secondary"></b></small>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-clock-rotate-left fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">История чатов</b></big><br></br>
                        <small><b className="text-secondary"></b></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Schat;