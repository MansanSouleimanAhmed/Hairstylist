import React, {Fragment} from "react";
import FacebookImg from "../min-image/facebook-icon.png";
import VimeoImg from "../min-image/vimeo-icon.png";
import TwitterImg from "../min-image/twitter-icon.png";
import EmailImg from "../min-image/email-icon.png";
import InstagramImg from "../min-image/instagram-icon.png";
import MasterCardImg from "../min-image/master-card.png";
import VisaCardImg from "../min-image/visa-card.png";
import AmericanCardImg from "../min-image/american-express-card.png";

export default function Footer() {
    return (
        <Fragment>
            <div className={"footer"}>
                <div className={"footer-item-one"}>
                    <h3>{"NEWSLETTER"}</h3>
                    <div className={"input"}>
                        <input
                            className={"email"}
                            label={"email"}
                            placeholder={"Email Address"}></input>
                        <br />
                        <input
                            className={"suscribe"}
                            name={"suscribe"}
                            value={"Suscribe"}
                        />
                    </div>

                    <div className={"cards"}></div>
                </div>
                <div className={"footer-item-two"}>
                    <ul>
                        <li>
                            <h3>{"ABOUT US"}</h3>
                        </li>
                        <li>{"About Coiffeur ltd."}</li>
                        <li>{"Salons"}</li>
                        <li>{"Giftcards"}</li>
                        <li>{"Terms & Conditions"}</li>
                        <li>{"Work With Us"}</li>
                    </ul>
                </div>
                <div className={"footer-item-three"}>
                    <ul>
                        <li>
                            <h3>{"CUSTOMER CARE"}</h3>
                        </li>
                        <li>{"Contact Us"}</li>
                        <li>{"Delivery Information"}</li>
                        <li>{"Returns Policy"}</li>
                        <li>{"Privacy & Security"}</li>
                    </ul>
                </div>
                <div className={"footer-item-four"}>
                    <table>
                        <tbody>
                            <tr>
                                <th>{"OPENING TIME"}</th>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Monday"}</td>
                                <td>{"08:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Tuesday"}</td>
                                <td>{"08:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Wednesday"}</td>
                                <td>{"08:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Thursday"}</td>
                                <td>{"08:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Friday"}</td>
                                <td>{"08:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Saturday"}</td>
                                <td>{"12:00 - 17:30"}</td>
                            </tr>
                            <tr>
                                <td className={"day"}>{"Sunday"}</td>
                                <td>{"CLOSED"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"footer-base"}>
                    <div className={"footer-base-text"}>
                        <p>{"© 2020 Coiffeur - All Rights Reserved"}</p>
                    </div>
                    <div className={"footer-base-social-media"}>
                        <div className={"facebook-icon"}>
                            <img src={FacebookImg} />
                        </div>
                        <div className={"instagram-icon"}>
                            <img src={InstagramImg} />
                        </div>
                        <div className={"email-icon"}>
                            <img src={EmailImg} />
                        </div>
                        <div className={"vimeo-icon"}>
                            <img src={VimeoImg} />
                        </div>
                        <div className={"twitter-icon"}>
                            <img src={TwitterImg} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
