import Image from "next/image";
import about from "../data/about.json";
import SocialMedia from "./SocialMedia";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="about">
            <div className="container">
                <SectionTitle
                    title="About Me"
                    className="lg:hidden"
                />

                <div className="md:grid grid-cols-12 items-center">
                    <div className="col-span-4 sm:text-center md:text-left">
                        <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                            <Image
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${about.thumb}`}
                            />
                        </div>
                    </div>

                    <div className="col-start-6 col-end-13">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="About Me"
                                className="hidden lg:block"
                            />

                            <div className="bio-text" dangerouslySetInnerHTML={{__html: about.bio}}/>

                            <SocialMedia className="mt-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
