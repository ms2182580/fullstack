import Image from "next/image"
import { Splash_Development_DWrapper } from "./styles/Splash_Development_DWrapper"
import Splash_3 from "@/assets/images/splash/splash_3.png"
import { Search_Icon_SVG } from "@/assets/icons"
import IdentificationCardSVG from "@/assets/icons/org/search-input/IdentificationCard.svg"
import GlobeHemisphereEastSVG from "@/assets/icons/org/search-input/GlobeHemisphereEast.svg"


export const Splash_Development_D = () => {
    return (
        <Splash_Development_DWrapper >
            <div>
                <div>
                    <div>
                        <div>The ultimate guide to the world's developmental disability resources</div>
                        <p>Choose from over 6 million resources and  participate in your community, find supports and live independently,</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Keyword*</p>
                                <div>
                                    <Search_Icon_SVG />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="speech language pathologist (SLP)"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Condition</p>
                                <div>
                                    <IdentificationCardSVG />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="autism, cerebral pa..."
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Location*</p>
                                <div>
                                    <GlobeHemisphereEastSVG />
                                    <input type="text" name="location" placeholder="19130" required />
                                </div>
                            </div>
                            <button>
                                <Search_Icon_SVG style={{ width: "24px", height: "24px" }} />
                            </button>
                        </div>
                    </div>
                </div>
                <Image src={Splash_3} alt="Splash cloud image" />
            </div>
        </Splash_Development_DWrapper>
    )
}
