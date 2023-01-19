import Header from "../components/header";

const Account = () => {
    return (
        <div>
            <div className="Container bg-secondary p-3">
                <div className="row">
                    <div className="col-12">
                        <a href="/setting"><i class="fa-solid fa-arrow-left fa-2x text-light ps-4 pe-5"></i></a> <big><b className="open text-light">Аккаунт</b></big>
                    </div>
                </div>
            </div>
            <div className="Container bg-dark">
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                    <i class="fa-solid fa-lock fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Конфиденциальность</b></big>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-shield fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Безопасность</b></big>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-money-bill fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Двухшаговая проверка</b></big>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-door-open fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Изменить номер</b></big>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                    <i class="fa-solid fa-lock fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-2">
                        <big><b className="text-light">Запросить информацию<br></br>аккаунта</b></big>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1 ps-5 p-3">
                        <i class="fa-solid fa-bucket fa-2x text-secondary"></i>
                    </div>
                    <div className="col-11 pt-3">
                        <big><b className="text-light">Удалить аккаунт</b></big>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Account;