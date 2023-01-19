import { Navbar, Helmet } from "../../partials";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import config from "../../config.json";

export function News() {

    let ref = useRef(null);
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
            className={`news ${config.site_name.toLowerCase().split(" ").join("-")}`}
        >
            <Helmet>
                <title>{`News - ${config.site_name}`}</title>
            </Helmet>

            <div
                ref={ref}
                className="popup"
                style={{
                    position: "fixed",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}
            >

                <div
                    className="popup-container"
                    style={{
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        color: "black"
                    }}
                >

                    <h1>Coming Soon</h1>
                    <button
                        style={{
                            border: "solid red 0.2px",
                            fontFamily: "'Montserrat', sans-serif",
                            borderRadius: "10px",
                            padding: "10px",
                            cursor: "pointer"
                        }}
                        onClick={() => window.location.href = "/"}
                    >
                        GO BACK HOME
                    </button>

                </div>

            </div>

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
                className="news-container"
                style={{
                    margin: "0 4.5%"
                }}
            >

                <h1
                    className="news-header"
                    style={{
                        color: "black"
                    }}
                >
                    News - Islam Around The World
                </h1>

                <section
                    className="news-content"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        className="left content"
                        style={{
                            width: "35%"
                        }}
                    >

                        <div
                            className="content-container"
                            style={{
                                borderRadius: "10px",
                                height: "15rem",
                                width: "100%",
                                backgroundColor: "#B0D497",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                textAlign: "center"
                            }}
                        >
                        </div>
                        <div
                            className="switch-dots"
                            style={{
                                margin: "5px 0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >

                            <div
                                className="dot"
                                style={{
                                    padding: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#B0D497",
                                    margin: "0 5px"
                                }}
                            ></div>
                            <div
                                className="dot"
                                style={{
                                    padding: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#B0D497",
                                    margin: "0 5px"
                                }}
                            ></div>
                            <div
                                className="dot"
                                style={{
                                    padding: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#B0D497",
                                    margin: "0 5px"
                                }}
                            ></div>
                            <div
                                className="dot"
                                style={{
                                    padding: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#B0D497",
                                    margin: "0 5px"
                                }}
                            ></div>
                            <div
                                className="dot"
                                style={{
                                    padding: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: "#B0D497",
                                    margin: "0 5px"
                                }}
                            ></div>

                        </div>

                    </div>
                    <div
                        className="right content"
                        style={{
                            width: "50%"
                        }}
                    >

                        <h3>
                            Latest Updates
                        </h3>

                        <Line color={"white"} />

                        <div
                            className="news"
                            style={{
                                margin: "5px 0"
                            }}
                        >

                            <div
                                className="news-container"
                                style={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "center",
                                    margin: "10px 0"
                                }}
                            >

                                <div
                                    className="news-thumbnail"
                                    style={{
                                        backgroundColor: "#B0D497",
                                        borderRadius: "10px",
                                        height: "80px",
                                        width: "120px"
                                    }}
                                >
                                </div>

                                <div
                                    className="lines"
                                    style={{
                                        width: "70%",
                                        margin: "0 3%"
                                    }}
                                >

                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />

                                </div>

                            </div>

                        </div>

                        <Line color={"white"} />

                        <div
                            className="news"
                            style={{
                                margin: "5px 0"
                            }}
                        >

                            <div
                                className="news-container"
                                style={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "center",
                                    margin: "10px 0"
                                }}
                            >

                                <div
                                    className="news-thumbnail"
                                    style={{
                                        backgroundColor: "#B0D497",
                                        borderRadius: "10px",
                                        height: "80px",
                                        width: "120px"
                                    }}
                                >
                                </div>

                                <div
                                    className="lines"
                                    style={{
                                        width: "70%",
                                        margin: "0 3%"
                                    }}
                                >

                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />

                                </div>

                            </div>

                        </div>

                        <Line color={"white"} />

                        <div
                            className="news"
                            style={{
                                margin: "5px 0"
                            }}
                        >

                            <div
                                className="news-container"
                                style={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "center",
                                    margin: "10px 0"
                                }}
                            >

                                <div
                                    className="news-thumbnail"
                                    style={{
                                        backgroundColor: "#B0D497",
                                        borderRadius: "10px",
                                        height: "80px",
                                        width: "120px"
                                    }}
                                >
                                </div>

                                <div
                                    className="lines"
                                    style={{
                                        width: "70%",
                                        margin: "0 3%"
                                    }}
                                >

                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />
                                    <Line color={"white"} style={{ margin: "15px 0" }} />

                                </div>

                            </div>

                        </div>

                        <Line color={"white"} />

                    </div>
                </section>


            </div>

        </div>
    )
}

function Line({ color, style }) {

    let divStyle = {
        height: "2.5px",
        borderRadius: "10px",
        backgroundColor: color,
        margin: "2.5px 0"
    }

    if(style) {
        for (let i = 0; i < Object.keys(style).length; i++) {
            let key = Object.keys(style)[i];
            divStyle[key] = style[key];
        }
    }

    return (
        <div
            className="profile-line"
            style={divStyle}
        >
        </div>
    )
}