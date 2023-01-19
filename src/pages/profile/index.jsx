import { Navbar, Helmet } from "../../partials";
import { getCurrentUser } from "../../utility";
import { useState } from "react";
import { useEffect } from "react";
import config from "../../config.json";

export function Profile() {

    let [user, setUser] = useState(null);
    let [date, setDate] = useState("");
    
    useEffect(() => {

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

        getCurrentUser()
            .then(res => {
                if(!res.isLogged) window.location.href = `${config.domain.backend}/auth`;
                else {
                    let new_date = new Date(res.data.createdAt);
                    setDate(`${new_date.getDate()} ${months[new_date.getMonth()]} ${new_date.getFullYear()}`)
                    setUser(res.data);
                }
            })

    }, []);

    return (
        <div
            className={`profile ${config.site_name.toLowerCase().split(" ").join("-")}`}
            id={user ? user.id : "00000"}
        >

            <Helmet>
                <title>{`Profile - ${config.site_name}`}</title>
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

            {
                user
                ? (
                    <div
                        className="profile-container"
                        style={{
                            margin: "0 3%"
                        }}
                    >

                        <h1
                            className="profile-header"
                            style={{
                                color: "black"
                            }}
                        >
                            Account Overview
                        </h1>

                        <div
                            className="profile-wrap"
                            style={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "center"
                            }}
                        >

                            <section
                                style={{
                                    width: "23%"
                                }}
                            >

                                <div
                                    className="profile-card"
                                    style={{
                                        padding: "15px",
                                        borderRadius: "10px",
                                        backgroundColor: "#B0D497",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        flexWrap: "wrap",
                                        height: "20rem",
                                    }}
                                >

                                    <div
                                        className="profile-avatar"
                                        style={{
                                            width: "100%",
                                            textAlign: 'center'
                                        }}
                                    >

                                        <img
                                            src={user ? user.picture : "/assets/images/default-profile-photo.jpg"}
                                            onError={(e) => e.target.src = "/assets/images/default-profile-photo.jpg"}
                                            style={{
                                                height: "8rem",
                                                width: "auto",
                                                borderRadius: "50%"
                                            }}
                                            alt="avatar"
                                        />

                                    </div>

                                    <div
                                        className="profile-card-content"
                                        style={{
                                            margin: "10px 0",
                                            width: "100%",
                                        }}
                                    >
                                        <h3
                                            className="profile-username"
                                            style={{
                                                fontWeight: "normal",
                                                fontSize: "20px",
                                                margin: "0"
                                            }}
                                        >
                                            {user.email.split("@")[0]}
                                        </h3>

                                        <div
                                            className="profile-joined-date"
                                            style={{
                                                fontSize: "15px"
                                            }}
                                        >
                                            Joined At {date}
                                        </div>
                                    </div>

                                    <div
                                        className="user-following-topic"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            backgroundColor: "#A2A2A2",
                                            borderRadius: "10px",
                                            width: "55%",
                                            padding: "5px 10px"
                                        }}
                                    >

                                        <div>0</div>
                                        <div>Following</div>

                                    </div>

                                </div>

                            </section>
                            <section
                                style={{
                                    width: "67%",
                                    margin: "0 2.5%"
                                }}
                            >

                                <div
                                    className="profile-email"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontSize: "20px"
                                    }}
                                >

                                    <div style={{ color: "black" }} >Email</div>
                                    <div>{user.email}</div>

                                </div>

                                <Line color={"black"} />

                                <div
                                    className="profile-id"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontSize: "20px"
                                    }}
                                >

                                    <div style={{ color: "black" }} >ID</div>
                                    <div>{user.id}</div>

                                </div>

                                <Line color={"black"} />

                                <button
                                    className="settings-btn"
                                    style={{
                                        borderRadius: "5px",
                                        padding: "10px",
                                        color: "red",
                                        backgroundColor: "white",
                                        border: "none",
                                        fontFamily: "'Montserrat', sans-serif",
                                        margin: "0 5px"
                                    }}
                                    disabled={true}
                                >
                                    Settings
                                </button>
                                <button
                                    className="logout-btn"
                                    style={{
                                        borderRadius: "5px",
                                        padding: "10px",
                                        color: "red",
                                        backgroundColor: "white",
                                        border: "none",
                                        fontFamily: "'Montserrat', sans-serif",
                                        cursor: "pointer",
                                        margin: "0 5px"
                                    }}
                                    onClick={() => window.location.href = `${config.domain.backend}/auth/destroy`}
                                >
                                    Logout
                                </button>

                            </section>

                        </div>

                    </div>
                )
                : ""
            }

        </div>
    )
}

function Line({ color }) {
    return (
        <div
            className="profile-line"
            style={{
                height: "2.5px",
                borderRadius: "10px",
                backgroundColor: color,
                margin: "5px 0"
            }}
        >
        </div>
    )
}