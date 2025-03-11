import React from "react";
import { motion } from "motion/react";

export default function Images(props) {
    return (
        props.mount ? (
            <motion.div className="flex justify-center items-center"
                whileInView={{scale: 1.2}}
            >
                <img className={`h-auto ${props.mount ? 'w-9/12  md:w-11/12' : 'w-9/12'} shadow-2xl shadow-black `} src={props.img} alt={props.description} />
            </motion.div>
        ) : (
            <div className="flex justify-center items-center">
                <img className={`h-auto ${props.mount ? 'w-11/12' : 'w-9/12'}`} src={props.img} alt={props.description} />
            </div>
        )
    );
}