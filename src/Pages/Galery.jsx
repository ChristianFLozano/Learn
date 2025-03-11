import React, { useState } from "react";
import images from "../Cards/ImagesCards";
import Images from "../Components/Images";
import { motion } from "motion/react";

export default function Galery() {
    const [mount, setMount] = useState(0);

    const incrementMount = () => {
        setMount(prevMount => (prevMount + 1) % images.length);
    };

    const decrementMount = () => {
        setMount(prevMount => (prevMount - 1 + images.length) % images.length);
    };

    return (
        <section className="w-full h-auto md:h-screen bg-neutral-900 flex flex-col md:flex-row items-center justify-center relative">
            <motion.button onClick={decrementMount} className="bg-black hover:bg-[#00000080] text-white px-4 py-2 rounded md:absolute md:left-4 mb-4 md:mb-0"
                whileTap={{scale:1.2}}
            >Anterior</motion.button>
            <div className="w-full md:w-3/4 h-2/3 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-4">
                {images.map((image, index) => (
                    <Images
                        key={image.id}
                        img={image.img}
                        description={image.description}
                        mount={mount === index}
                    />
                ))}
            </div>
            <motion.button onClick={incrementMount} className="bg-black hover:bg-[#00000080] text-white px-4 py-2 rounded md:absolute md:right-4 mt-4 md:mt-0"
                whileTap={{scale:1.2}}
            >Siguiente</motion.button>
        </section>
    );
}
