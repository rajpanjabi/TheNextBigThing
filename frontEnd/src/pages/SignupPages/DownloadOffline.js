import "./DownloadOffline.css";

function DownloadOffline(){
    return(
        <>
        <div className="downloadOffline">
            <div className="downloadImage">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
                <div className="sthingsWrap">
                    <div className="sthingImage">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" style={{height:"4.5rem"}}></img>
                    </div>
                    <div className="sthingsText">
                        <div style={{color:"white"}}>Stranger Things</div>
                        <div style={{color:"blue"}}>Downloading...</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="textOffline">
                <h2>Download your shows to watch offline</h2>
                <p className="sinUpPText">Watch on a plane, train, or submarine...</p>
            </div>
        </div>
        </>
    )
}

export default DownloadOffline;