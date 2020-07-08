import React, {Fragment, useEffect, useState} from "react";
import Header from "../header";
import Footer from "../footer";
import Player from "../../components/player";
export default function Services() {
    return (
        <div>
            <Header />
            <section className={"services"}>
                <div className={"services-item"}>
                    <div className={"flex-container"}>
                        <div className={"flex-item"}>
                            <h2>{"Layers"}</h2>
                            <Player
                                height={150}
                                width={250}
                                url={
                                    "https://www.youtube.com/watch?v=Sh2EQZLzBXw"
                                }
                            />
                            <p>
                                {
                                    "Every cut falls under three categories: layered, one-length, or a combination of both, says celebrity hairstylist Dwayne Ross. Layers help lessen density and create movement. One-length cuts, on the other hand, add weight. To avoid confusion and hair mishaps, double-check with your stylist. Regardless of what terminology the stylist is using, Ross recommends always asking, 'Will this technique create layers or remove them?'"
                                }
                            </p>
                        </div>
                        <div className={"flex-item"}>
                            <h2>{"Overdirecting"}</h2>
                            <Player
                                height={150}
                                width={250}
                                url={
                                    "https://www.youtube.com/watch?v=IE3Eg-Cp6OI"
                                }
                            />
                            <p>
                                {
                                    "This is a cutting technique where hair is lifted and cut over the head to create extra body and volume, says Nick Penna Jr., owner and lead stylist of SalonCapri. Essentially, the end result is a ton of exaggerated layers. Think: shaggy, rockstar cuts, says Ross."
                                }
                            </p>
                        </div>
                        <div className={"flex-item"}>
                            <h2>{"Thinning"}</h2>
                            <Player
                                height={150}
                                width={250}
                                url={
                                    "https://www.youtube.com/watch?v=FcTIVcYPm0Y"
                                }
                            />
                            <p>
                                {
                                    "Thinning is ideal for those with thick, dense tresses who want to eliminate bulkiness. By relying on thinning shears, the process creates super-fine layers and adds dimension, says Penna. To thin with regular shears, also known as 'slithering,' stylists slide an open set of scissors along the shaft."
                                }
                            </p>
                        </div>
                        <div className={"flex-item"}>
                            <h2>{"Cutting Line"}</h2>
                            <Player
                                height={150}
                                width={250}
                                url={
                                    "https://www.youtube.com/watch?v=uO1RnThE-Eg&t=186s"
                                }
                            />
                            <p>
                                {
                                    "This is a line that stylists determine for a particular hairstyle, and its angle corresponds with how close or far apart the layers will look, says Penna. 'For example, when a stylist wants to create a layered look, he will use a vertical cutting line.'"
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
