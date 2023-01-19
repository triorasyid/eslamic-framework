import { Navbar, Helmet } from "../../partials";
import sechedule from "./pray-sechedule";
import config from "../../config.json";

export function Home() {

    let date = new Date();
    let months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
    let days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }

    return (
        <div className={`home ${config.site_name.toLowerCase().split(" ").join("-")}`}>

            <Helmet>
                <title>{`Home - ${config.site_name}`}</title>
            </Helmet>

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
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#B0D497",
                        borderRadius: "50px 0 0 50px",
                        width: "50%"
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

            <div
                className={`home-container ${config.site_name.toLowerCase().split(" ").join("-")}`}
            >
                <div
                    className="wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px 20px"
                    }}
                >
                    <div
                        className={`home ${config.site_name.toLowerCase().split(" ").join("-")} description`}
                        style={{
                            textAlign: "left",
                            width: "45%"
                        }}
                    >
                        <h3
                            className="home-header description"
                            style={{
                                fontWeight: "bold",
                                fontSize: "36.7px",
                                color: "black"
                            }}
                        >
                            Always recite Qur'an no matter how busy you are
                        </h3>
                        <div
                            className="home-content description"
                            style={{
                                fontSize: "20.9px"
                            }}
                        >
                            "Bacalah Alquran, maka sesungguhnya ia akan datang di hari kiamat memberi syafaat kepada pembacanya"
                        </div>
                    </div>
                    <div
                        className="banner-container"
                        style={{
                            width: "45%"
                        }}
                    >
                        <img
                            className={`${config.site_name.toLowerCase().split(" ").join("-")} banner`}
                            style={{
                                height: "500px",
                                width: "auto"
                            }}
                            src="/assets/images/mosque.png"
                            alt="banner"
                        />
                    </div>
                </div>
            </div>

            <div
                className="prayer-schedule"
                style={{
                    margin: "0 7%"
                }}
            >

                <h1
                    className="prayer-schedule header"
                    style={{
                        color: "black"
                    }}
                >
                    Prayer Schedule
                </h1>

                <h3
                    className="prayer-date"
                    style={{
                        color: "white",
                        margin: "0 0.5%"
                    }}
                >
                    {`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
                </h3>

                <div
                    className="prayer-sechedule container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >

                    {sechedule[date.getMonth()].map((pray) =>
                        <div
                            className="pray"
                            style={{
                                margin: "10px 15px"
                            }}
                        >

                            <div
                                className="pray-card"
                                style={{
                                    padding: "10px",
                                    borderRadius: "10px",
                                    backgroundColor: "#B0D497",
                                    textAlign: "center",
                                    fontSize: "20px",
                                    margin: "10px",
                                    width: "10rem"
                                }}
                            >
                                {pray.name}
                            </div>

                            <div
                                className="pray-card"
                                style={{
                                    padding: "10px",
                                    borderRadius: "10px",
                                    backgroundColor: "#B0D497",
                                    textAlign: 'center',
                                    fontSize: "20px",
                                    margin: "10px",
                                    width: "10rem"
                                }}
                            >
                                {pray.time}
                            </div>

                        </div>
                    )}

                </div>

            </div>
        </div>
    )

}