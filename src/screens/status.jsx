import Header from "../components/header";

const Status = () => {
    return (
        <div>
            <Header />
            <div className="Container mt-2 bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-1">
                                <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
                            </div>
                            <div className="col-10 mt-2">
                                <big><b className="open text-light">Мой статус</b></big><br></br>
                                <small><b className="text-secondary">Нажмите, чтобы добавить новый ст...</b></small>
                            </div>
                            <div className="col-1">
                                <b className="text-secondary pt-2"></b>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12 ps-4">
                                <b className="text-secondary"><small>Последние</small></b>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <img className="rounded-circle ms-2 mt-2" height="80" width="80" src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"></img>
                                    </div>
                                    <div className="col-10 mt-2">
                                        <big><b className="open text-success">WhatsApp</b></big> <i class="fa-solid fa-check border rounded-circle text-success"></i>
                                    </div>
                                    <div className="col-1">
                                        <b className="text-secondary pt-2"></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status;