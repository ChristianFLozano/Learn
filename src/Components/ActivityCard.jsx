import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function ActivityCard(props){

    let navigation = useNavigate()

    const goToPage = (navigate) => {
        navigation(navigate)
    }
    
    return(
        <div className="w-full h-full flex justify-center items-center p-2 md:p-5">
            <motion.div className=" w-10/12 sm:w-8/12 h-52 sm:h-64 bg-white p-5 border-2 border-gray-200 shadow-2xl flex hover:cursor-pointer"
                whileHover={{scale:1.2}}
                onClick={()=>{goToPage(props.navigate)}}
            >
                <header>
                    <h2>{props.title}</h2>
                </header>
            </motion.div>
        </div>
        
    )
}
