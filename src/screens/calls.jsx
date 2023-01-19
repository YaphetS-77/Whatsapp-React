import Header from "../components/header";

const Calls = () => {
    return (
        <div>
            <Header />
            <div className="Container mt-2 bg-dark">
                <div className="row mb-3">
                    <div className="col-1">
                        <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"></img>
                    </div>
                    <div className="col-10 mt-2">
                        <big><b className="open text-light">Нурдоолот</b></big><br></br>
                        <i class="fa-solid fa-arrow-up text-success"></i> <b className="text-secondary"><small>(4) Вчера, 20:13</small></b>
                    </div>
                    <div className="col-1 pt-4">
                        <b className="text-success"><i class="fa-solid fa-phone fa-2x"></i></b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"></img>
                    </div>
                    <div className="col-10 mt-2">
                        <big><b className="open text-light">Айбек</b></big><br></br>
                        <i class="fa-solid fa-arrow-down text-danger"></i> <b className="text-secondary"><small>(2) 5 сентября, 20:13</small></b>
                    </div>
                    <div className="col-1 pt-4">
                        <b className="text-success"><i class="fa-solid fa-phone fa-2x"></i></b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
                    </div>
                    <div className="col-10 mt-2">
                        <big><b className="open text-light">Нурсултан ака</b></big><br></br>
                        <i class="fa-solid fa-arrow-up text-success"></i> <b className="text-secondary"><small>(10) 2 сентября, 20:13</small></b>
                    </div>
                    <div className="col-1 pt-4">
                        <b className="text-success"><i class="fa-solid fa-phone fa-2x"></i></b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://swall.teahub.io/photos/small/0-2836_nature-wallpaper-with-flowers-image-good-morning-photo.jpg"></img>
                    </div>
                    <div className="col-10 mt-2">
                        <big><b className="open text-light">Нурик</b></big><br></br>
                        <i class="fa-solid fa-arrow-up text-success"></i> <b className="text-secondary"><small>(1) 31 Август, 20:13</small></b>
                    </div>
                    <div className="col-1 pt-4">
                        <b className="text-success"><i class="fa-solid fa-phone fa-2x"></i></b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calls;