import React, {Fragment} from "react";
import Banner from "./banner";
import BannerContact from "./contact/banner-contact";
function Header() {
    let banner;
    let bannerContact;
    const returnBanner = () => {
        if (window.location.pathname === "/") {
            return (banner = <Banner />);
        } else if (window.location.pathname !== "/") {
            return (banner = null);
        }
    };

    const returnBannerContact = () => {
        if (window.location.pathname === "/contact") {
            return (bannerContact = <BannerContact />);
        } else if (window.location.pathname !== "/contact") {
            return (bannerContact = null);
        }
    };
    return (
        <Fragment>
            <header className={"header"}>
                {returnBanner()}
                {returnBannerContact()}
            </header>
        </Fragment>
    );
}

export default Header;
