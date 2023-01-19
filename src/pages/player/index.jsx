import config from "../../config.json";
import { useState, useEffect, useRef } from "react";
import { Helmet, Navbar } from "../../partials";
import { PlayerControl } from "./player";
import { gsap } from "gsap"
import reciters from "./audio";

export function Player() {

    let [juz, selectJuz] = useState(1);
    let [reciter, setReciter] = useState("misyari_rasyid");
    let [open, setOpen] = useState(false);
    let [queue, setQueue] = useState([]);
    let popupRef = useRef(null);

    /**
     * 
     * @param {string} string 
     */
    function capitalizeFirstLetter(string) {
        return string.slice(0, 1).toLocaleUpperCase()+string.slice(1);
    }

    function addSurahToQueue(item) {
        item['reciter'] = reciter;
        if(!queue.length) setQueue([item]);
        else {
            let new_queue = [queue][0];
            new_queue.push(item);
            setQueue(new_queue);
        }
        alert(`Menambah surah ${item.name} ke dalam queue!`);
    }

    return (
        <>

            <Helmet>
                <title>{`Player - ${config.site_name}`}</title>
            </Helmet>

            {
                open 
                ?
                (
                    <Popup setOpen={setOpen} ref={popupRef}>
                        <div
                            className="popup-container"
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                padding: "10px",
                                borderRadius: "10px",
                                width: "25%",
                                height: queue.length ? "40%" : "auto",
                                overflowY: "auto"
                            }}
                        >
                            <h4
                                className="popup-header"
                                style={{
                                    textAlign: "center",
                                    margin: "10px"
                                }}
                            >
                                Queue List
                            </h4>
                            <div
                                className="queue-tracks"
                                style={{
                                    margin: "10px",
                                }}
                            >
                                {
                                    queue.length
                                    ? queue.map((track, index) => 
                                        <div
                                            className="track"
                                            tabIndex={index}
                                        >
                                            <div
                                                className="track-container"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    padding: "5px"
                                                }}
                                            >
                                                <div
                                                    className="track-information"
                                                >
                                                    <div
                                                        style={{
                                                            fontSize: "14px"
                                                        }}
                                                    >
                                                        {track.name}
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: "10px",
                                                            opacity: "0.8"
                                                        }}
                                                    >
                                                        {track.reciter.split("_").map(name => capitalizeFirstLetter(name)).join(" ")}
                                                    </div>
                                                </div>
                                                <div 
                                                    className="track-verses"
                                                    style={{
                                                        fontSize: "15px"
                                                    }}
                                                >
                                                    {track.verses} Ayat
                                                </div>
                                            </div>
                                            <div
                                                className="line"
                                                style={{
                                                    backgroundColor: "black",
                                                    padding: "0.5px"
                                                }}
                                            ></div>
                                        </div>
                                    )
                                    : (
                                        <div
                                            className="track"
                                        >

                                            <h5
                                                style={{
                                                    textAlign: "center",
                                                    opacity: "0.8"
                                                }}
                                            >
                                                You Don't Have Queue!
                                            </h5>

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </Popup>
                )
                : ""
            }

            <div
                className={`player ${config.site_name.toLowerCase().split(" ").join("-")}`}
            >

                <Navbar>
                    <div
                        className="navbar-icon"
                        style={{
                            height: "120px",
                            width: "240px",
                            backgroundImage: "url(/assets/images/eslamic-corner-icon.png)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            cursor: "pointer"
                        }}
                        onClick={() => window.location.href = "/"}
                    ></div>

                    <div
                        className="wrap-navbar"
                        style={{
                            backgroundColor: "#B0D497",
                            borderRadius: "50px 0 0 50px",
                            width: "50%",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <ul
                            className="navbar-container"
                            style={{
                                display: "flex",
                                textDecoration: "none",
                                listStyleType: "none"
                        }}>
                            <li
                                style={{ margin: "10px 20px", cursor: "pointer" }}
                                onClick={() => window.location.href = "/"}
                            >
                                Home
                            </li>
                            <li
                                style={{ margin: "10px 20px", cursor: "pointer" }}
                                onClick={() => window.location.href = "/player"}
                            >
                                Player
                            </li>
                            <li
                                style={{ margin: "10px 20px", cursor: "pointer" }}
                                onClick={() => window.location.href = "/news"}
                            >
                                News
                            </li>
                        </ul>

                        <button
                            className="btn account"
                            style={{
                                backgroundColor: "white",
                                color: "#CFEBBB",
                                padding: "10px",
                                borderRadius: "50px",
                                border: "none",
                                margin: "10px 20px",
                                width: "15%",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                            onClick={() => window.location.href = "/profile"}
                        >
                            ACCOUNT
                        </button>
                    </div>
                </Navbar>

                <header
                    className={`player header ${config.site_name.toLowerCase().split(" ").join("-")}`}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "black",
                        margin: "0 3%"
                    }}
                >
                    <h1
                        className="wrap header left"
                        style={{
                            fontWeight: "bolder"
                        }}
                    >
                        Listen Here
                    </h1>
                    <div
                        className="wrap header right"
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <div
                            className="reciters container"
                        >
                            <label
                                className="label"
                                htmlFor="selectReciters"
                            >
                                Reciters:
                            </label>
                            <select
                                id="selectReciters"
                                className="reciter selector"
                                value={reciter}
                                style={{
                                    border: "none",
                                    borderRadius: "10px",
                                    fontFamily: "'Montserrat', sans-serif",
                                    margin: "0 10px",
                                    padding: "1.5px"
                                }}
                                onChange={(e) => {
                                    let option = e.target.options[e.target.options.selectedIndex];
                                    setReciter(option.value);
                                }}
                            >
                                {Object.keys(reciters).map(i => 
                                    <option value={i}>
                                        {i.split("_").map(i2 => capitalizeFirstLetter(i2)).join(" ")}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div
                            className="juz container"
                        >
                            <label
                                className="label"
                                htmlFor="selectJuz"
                            >
                                Juz:
                            </label>
                            <select
                                id="selectJuz"
                                className="juz selector"
                                value={Object.keys(reciters[reciter]).length ? juz : "null"}
                                style={{
                                    border: "none",
                                    borderRadius: "10px",
                                    fontFamily: "'Montserrat', sans-serif",
                                    margin: "0 10px",
                                    padding: "1.5px"
                                }}
                                disabled={Object.keys(reciters[reciter]).length ? false : true}
                                onChange={(e) => {
                                    let option = e.target.options[e.target.options.selectedIndex];
                                    selectJuz(parseInt(option.value));
                                }}
                            >
                                {
                                    Object.keys(reciters[reciter]).length
                                    ? Object.keys(reciters[reciter]).map(i2 =>
                                        <option value={i2}>Juz {i2}</option>
                                    )
                                    : <option value={"null"}>No juz!</option>
                                }
                            </select>
                        </div>
                    </div>
                </header>

                <div 
                    className="player body"
                    style={{
                        margin: "0 3%",
                    }}
                >
                    {
                        reciters[reciter][juz]
                        ? (
                            <>
                                <h3
                                    className={`${reciters[reciter][juz].subject} reciter`}
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "25px",
                                        color: "black"
                                    }}
                                >
                                    {reciters[reciter][juz].subject}
                                </h3>
                                <div
                                    className={`${reciters[reciter][juz].subject} container`}
                                    style={{
                                        margin: "0 1.5% "
                                    }}
                                >
                                    {
                                        reciters[reciter][juz].items.map(item => 
                                            <ItemContent item={item} addQueue={addSurahToQueue} />
                                        )
                                    }
                                </div>
                            </>
                        )
                        : (
                            <div
                                className="empty items container"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "50vh",
                                    width: "100%",
                                    position: "fixed"
                                }}
                            >
                                <h2
                                    className="empty items"
                                    style={{
                                        color: "black",
                                        fontSize: "5rem",
                                        opacity: "0.3"
                                    }}
                                >
                                    <i className="bi bi-dropbox"></i>
                                    No Juz Available
                                </h2>
                            </div>
                        )
                    }
                </div>

                <PlayerControl tracks={queue} set={setQueue} popup={{status: open, set: setOpen}} ref={popupRef} />

            </div>

        </>
    )
}

function ItemContent({ item, addQueue }) {
    return (
        <div
            className={`surah item ${item.surah_number} ${item.name}`}
            tabIndex={item.surah_number}
            style={{
                cursor: "pointer"
            }}
            onClick={() => addQueue(item)}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "left",
                    padding: "20px 0",
                }}
            >
                <div className="surah number">
                    <h5
                        style={{
                            color: "black",
                            fontSize: "20px",
                            margin: "0"
                        }}
                    >
                        {item.surah_number}.
                    </h5>
                </div>
                <div
                    className="item content"
                    style={{
                        margin: "0 10px"
                    }}
                >
                    <h5
                        className={`surah name ${item.name}`}
                        style={{
                            color: "black",
                            fontSize: "20px",
                            margin: "0"
                        }}
                    >
                        {item.name}
                    </h5>
                    <div
                        className="surah description"
                        style={{
                            color: "black",
                            fontSize: "12px"
                        }}
                    >
                        {item.type}, {item.verses} ayat
                    </div>
                </div>
            </div>
            <div
                className="item line"
                style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: "black"
                }}
            ></div>
        </div>
    );
}

function Popup({ children, setOpen, ref }) {

    useEffect(() => {

        gsap
            .fromTo(
                ref.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            )

    }, [ref]);

    return (
        <div
            ref={ref={}}
            className="popup"
            style={{
                position: "fixed",
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white"
            }}
            onClick={(e) => {
                if(e.target.className === "popup-container") return;
                gsap.fromTo(
                    ref.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0
                    }
                )
                .then(() => setOpen(false))
                .catch(() => setOpen(false));
            }}
        >
            {children}
        </div>
    )

}