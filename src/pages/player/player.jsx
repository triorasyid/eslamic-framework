import { Component, createRef } from "react";

export class PlayerControl extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            seek: 0,
            isPlaying: false,
            interval: null,
            index_surah: 0,
            volume: 100
        }
        this.audio = createRef(null);

    }

    onPlay = () => {
        let audio = this.audio.current;
        let interval = setInterval(() => {
            audio.volume = this.state.volume / 100;
            let seekPosition = audio.currentTime * (100 / audio.duration);
            this.setState({ seek: seekPosition });
        }, 1000);
        this.setState({ isPlaying: true, interval });
    }

    onPause = () => {
        this.setState({ isPlaying: false });
    }

    onStop = () => {
        let index = this.state.index_surah + 1;
        this.setState({
            isPlaying: false,
            interval: null,
            seek: 0,
            index_surah: index
        });
        if(this.props.tracks[index]) this.playTrack();
        else {
            this.setState({ index_surah: 0 });
            this.props.set([]);
        }
    }

    playpauseTrack = () => {

        let audio = this.audio.current;
        if(!audio || !audio.src.length) return alert("Pilih surah terlebih dahulu dari juz-juz yang tersedia!");
        if(this.state.isPlaying) audio.pause();
        else this.playTrack();

    }

    playTrack = () => {
        let audio = this.audio.current;
        audio.play()
            .catch(() => {
                audio.load();
                setTimeout(this.playTrack, 2500);
            });
    }

    previousTrack = () => {
        if(!this.props.tracks[this.state.index_surah]) return;
        let audio = this.audio.current;
        audio.pause();

        var index = this.state.index_surah - 1;
        if(this.state.index_surah === 0) return;

        this.setState({ seek: 0, isPlaying: false, interval: null, index_surah: index });
        this.playTrack();
    }

    skipTrack = () => {
        if(!this.props.tracks[this.state.index_surah]) return;
        let audio = this.audio.current;
        audio.currentTime = audio.duration;
    }

    seekTo = (value) => {
        let audio = this.audio.current;
        let seekto = audio.duration * (value / 100);

        audio.currentTime = seekto;
        this.setState({ seek: value });
    }

    convertSecondsToFormat = (number) => {
        let minutes = Math.floor(number / 60);
        let seconds = Math.floor(number - minutes * 60);
     
        if (seconds < 10) { seconds = "0" + seconds; }
        if (minutes < 10) { minutes = "0" + minutes; }
     
        return minutes + ":" + seconds;
    }

    capitalizeFirstLetter = (string) => {
        return string.slice(0, 1).toLocaleUpperCase()+string.slice(1);
    }

    render() {
        return (
            <div
                id="player"
                className="player control"
                style={{
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "#B0D497",
                    padding: "10px",
                    color: "black"
                }}
            >
                <audio
                    ref={this.audio}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onEnded={this.onStop}
                    style={{ display: "none" }}
                    src={this.props.tracks.length ? this.props.tracks[this.state.index_surah].url : ""}
                    controls={false}
                >
                </audio>
                <div
                    className="player control container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0 10px"
                    }}
                >

                    <div
                        className="left wrap"
                        style={{
                            display: "flex",
                            justifyContent: "left",
                            alignItems: "center"
                        }}
                    >

                        <div>
                            <img
                                src="/assets/images/2707400.png"
                                style={{
                                    height: "45px",
                                    width: "auto"
                                }}
                                alt="al-quran"
                            />
                        </div>
                        <div
                            className="current surah"
                            style={{
                                color: "black",
                                margin: "0 5px",
                                fontSize: "12px",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: "bold"
                                }}
                            >{
                                this.props.tracks[this.state.index_surah]
                                ? `${this.props.tracks[this.state.index_surah].name}`
                                : "No Surah In Queue!"
                            }</div>
                            {
                                this.props.tracks[this.state.index_surah]
                                ? (
                                    <div>
                                        {`${this.props.tracks[this.state.index_surah].reciter.split("_").map(name => this.capitalizeFirstLetter(name)).join(" ")}`}
                                    </div>
                                )
                                : ""
                            }
                        </div>

                    </div>

                    <div
                        className="center wrap"
                    >
                        <div
                            className="controller"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <div
                                className="skip-backward"
                                style={{
                                    fontSize: "25px",
                                    margin: "5px",
                                    cursor: "pointer"
                                }}
                                onClick={this.previousTrack}
                            >
                                <i className="bi bi-skip-backward-circle"></i>
                            </div>
                            <div
                                className="play-track"
                                style={{
                                    fontSize: "28px",
                                    margin: "5px",
                                    cursor: "pointer"
                                }}
                                onClick={this.playpauseTrack}
                            >
                                <i className={`bi bi-${this.state.isPlaying ? "pause" : "play"}-circle`}></i>
                            </div>
                            <div
                                className="skip-forward"
                                style={{
                                    fontSize: "25px",
                                    margin: "5px",
                                    cursor: "pointer"
                                }}
                                onClick={this.skipTrack}
                            >
                                <i className="bi bi-skip-forward-circle"></i>
                            </div>
                        </div>
                        <div
                            className="slider container"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <div>
                                {
                                    this.audio.current?.src.length
                                    ? this.convertSecondsToFormat(this.audio.current.currentTime)
                                    : "00:00"
                                }
                            </div>
                            <div>
                                <input
                                    type={"range"}
                                    value={this.state.seek}
                                    style={{
                                        width: "20rem"
                                    }}
                                    onChange={(e) => this.seekTo(e.target.value)}
                                />
                            </div>
                            <div>
                                {
                                    this.audio.current?.src.length
                                    ? this.convertSecondsToFormat(isNaN(this.audio.current.duration) ? 0 : this.audio.current.duration)
                                    : "00:00"
                                }
                            </div>
                        </div>
                    </div>

                    <div
                        className="right wrap"
                        style={{
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center"
                        }}
                    >

                        <div
                            className="right wrap component"
                            style={{
                                margin: "0 5px"
                            }}
                            onClick={() => this.props.popup.set(!this.props.popup.status)}
                        >
                            <i className="bi bi-collection-play"></i>
                        </div>
                        <div
                            className="right wrap component"
                            style={{
                                margin: "0 5px"
                            }}
                        >
                            <label htmlFor="volume"><i className={`bi bi-volume-${50 < this.state.volume && this.state.volume <= 100 ? "up" : "down"}`}></i></label>
                            <input id="volume" type={"range"} value={this.state.volume} onChange={(e) => this.setState({ volume: e.target.valueAsNumber })} />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}