import Header from "../components/header";

const Profile = () => {
    return (
        <div>
            <div className="Container bg-dark">
                <div className="row">
                    <div className="col-1 pt-2">
                        <a href="/homechat"><i class="fa-solid fa-arrow-left fa-2x text-light ps-3"></i></a>
                    </div>
                    <div className="col-3"></div>
                    <div className="img col-4 ps-5 text-center">
                        <img className="rounded-circle" width="400" height="400" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"></img>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-1 d-md-flex justify-content-end pt-2">
                        <i class="fa-solid fa-ellipsis-vertical fa-2x text-light pe-3"></i>
                    </div>
                </div>
            </div>
            <div className="Container bg-dark">
                <div className="row">
                    <div className="col-12 text-light text-center ps-5">
                        <big><b className="open">Алымбек укам</b></big>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-secondary text-center ps-4">
                        <big><b className="open">+996 000 000 000</b></big>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 ms-5">

                    </div>
                    <div className="col-2 text-success ps-5">
                        <i class="fa-solid fa-phone fa-3x"></i><br></br><br></br>
                        <big><b>Аудио</b></big>
                    </div>
                    <div className="col-2 text-success ps-5">
                        <i class="fa-solid fa-video fa-3x"></i><br></br><br></br>
                        <big><b>Видео</b></big>
                    </div>
                    <div className="col-2 text-success ps-5">
                        <i class="fa-solid fa-magnifying-glass fa-3x"></i><br></br><br></br>
                        <big><b>Поиск</b></big>
                    </div>
                    <div className="col-3">

                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-12 ps-5">
                            <big><b className="text-light">Статус</b></big><br></br>
                            <b className="text-secondary">30 августа</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-secondary ps-5">
                            <b>Медиа, ссылки и докум.</b>
                        </div>
                        <div className="col-6 d-md-flex justify-content-end text-secondary">
                            <b>0</b> <i class="fa-solid fa-chevron-right pt-1"></i>
                        </div>
                    </div>
                    <div className="row mt-5 ps-5">
                        <div className="col-1 p-4 ps-5">
                            <i class="fa-solid fa-bell fa-2x text-secondary"></i>
                        </div>
                        <div className="col-11 pt-4">
                            <b className="text-light"><big>Без звука</big></b>
                        </div>
                    </div>
                    <div className="row mt-5 ps-5">
                        <div className="col-1 p-4 ps-5">
                            <i class="fa-solid fa-music fa-2x text-secondary"></i>
                        </div>
                        <div className="col-11 pt-4">
                            <b className="text-light"><big>Индивидуальные уведомления</big></b>
                        </div>
                    </div>
                    <div className="row mt-5 ps-5">
                        <div className="col-1 p-4 ps-5">
                            <i class="fa-solid fa-mountain-sun fa-2x text-secondary"></i>
                        </div>
                        <div className="col-11 pt-4">
                            <b className="text-light"><big>Видимость медиа</big></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;