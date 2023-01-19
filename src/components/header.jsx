
const Header = () => {
    return (
        <div className="Container">
            <div className="row">
                <div className="col-12 bg-secondary">
                    <div className="row mb-4">
                        <div className="col-6">
                            <h2 className="ps-3"><b>Whatsapp</b></h2>
                        </div>
                        <div className="col-6 d-md-flex justify-content-end">
                            <i class="fa-solid fa-magnifying-glass fa-2x pt-3 pe-3"></i>
                            <div class="dropdown">
                                <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis-vertical fa-2x pt-2 pe-3 ps-3 text-dark"></i></button>
                                <ul class="dropdown-menu bg-secondary">
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Новая группа</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Новая рассылка</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Связанные устройства</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Избранные сообщения</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="/Setting">Настройки</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <i class="fa-solid fa-camera fa-2x ps-2"></i>
                        </div>
                        <div className="col-3">
                            <a className="a text-dark" href="/"><big><b>ЧАТЫ</b></big></a>
                        </div>
                        <div className="col-3">
                            <a href="/status" className="a text-dark"><big><b>СТАТУС</b></big></a>
                        </div>
                        <div className="col-3">
                            <a href="/calls" className="a text-dark"><big><b>ЗВОНКИ</b></big></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;