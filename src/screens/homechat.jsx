import Header from "../components/header";

const Homechat = () => {
    return (
        <div>
            <div className="Container bg-secondary">
                <div className="row">
                    <div className="col-6">
                        <div className="float pt-2 p-2"><a href="/"><i class="fa-solid fa-arrow-left fa-2x text-light"></i></a></div> <div className="float p-2"><img className="rounded-circle" width="40" height="40" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"></img></div>
                        <div><a className="a" href="/profile"><big><b className="open text-light ps-2">Алымбек укам</b></big></a></div>
                    </div>
                    <div className="col-6 d-md-flex justify-content-end">
                        <i class="fa-solid fa-video fa-2x text-light mt-2 pe-5"></i>
                        <i class="fa-solid fa-phone fa-2x text-light mt-2 pe-5"></i>
                        <div>    
                            <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis-vertical fa-2x text-light mt-2 pe-5 ps-3"></i></button>
                            <ul class="dropdown-menu bg-secondary">
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Просмотр контакта</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Медиа, ссылки и докум.</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Поиск</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="#">Без звука</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="/Setting">Исчезающие сообщения</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="/Setting">Обои</a></li>
                                    <li><a class="dropdown-item mb-2 text-light" href="/Setting">Еще</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <div className="Container fixed">
                    <div className="bg-secondary bor p-1 text-light">
                        <i class="fa-solid fa-face-smile text-light fa-2x ps-2 pe-2"></i>
                        <input className="bg-secondary border-0 input pt-1" placeholder="Сообщение"></input>
                        <i class="fa-solid fa-paperclip fa-2x text-light ps-2 pe-4 p-1"></i>
                        <i class="fa-solid fa-camera fa-2x text-light pe-4 ps-3 pt-1"></i>
                    </div>
                    <div className="bg-success width">
                        <i class="fa-solid fa-microphone fa-2x text-light"></i>
                    </div>
                </div>
        </div>
    )
}
export default Homechat;