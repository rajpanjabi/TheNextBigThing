import './TV.css';

function TV(){
    return(
        <>
        <div className = "tvWrapper" style={{paddingTop:"5%"}}>
            <div className = "tvText">
                <h2 className="sinUph2">Enjoy on your TV</h2>
                <p className="sinUpPText">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className = "tvMp4">
                <img className="desktopImg" src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"></img>
                <div className="animation">
                    <video autoPlay muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                </div>
            </div>
        </div>
        </>
    )
}

export default TV;