import "./WatchEverywhere.css"

function WatchEverywhere(){
    return(
        <>
        <div className="watchEverywhere">
            <div className="mac">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"></img>
                <div className="animationVideo">
                    <video autoPlay muted loop ><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/></video>
                </div>
            </div>
            <div className="textmac">
                <h2>Watch everywhere</h2>
                <p className="sinUpPText">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
        </div>
        </>
    )
}

export default WatchEverywhere;