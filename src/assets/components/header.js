import React, {Fragment} from "react";
import Banner from "./banner";
import BannerContact from "./contact/banner-contact";
import BannerService from "./services/banner-service";
function Header() {
    let banner;
    let bannerContact;
    let bannerService;
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
    const returnBannerService = () => {
        if (window.location.pathname === "/services") {
            return (bannerService = <BannerService />);
        } else if (window.location.pathname !== "/services") {
            return (bannerService = null);
        }
    };

    return (
        <Fragment>
            <header className={"header"}>
                {returnBanner()}
                {returnBannerContact()}
                {returnBannerService()}
            </header>
        </Fragment>
    );
}

export default Header;
