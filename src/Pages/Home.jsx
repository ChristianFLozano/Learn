import React from "react";
import activites from "../Cards/ActivitiesCards";
import ActivityCard from "../Components/ActivityCard";

export default function Home(){

    return (
        <>
            <header className="w-full h-32 md:h-40  bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900
                flex justify-center items-center ">
                <h1 className="font-mono text-white text-2xl sm:text-4xl md:text-6xl" >Mi aprendizaje</h1>
            </header>
            <main className=" w-full h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 row-auto
                p-3 md:p-8 items-center justify-center">
                {activites.map(activity=>{
                    return (
                        <ActivityCard
                            key = {activity.id}
                            title = {activity.name}
                            navigate = {activity.navigate}
                        />
                    )
                })}
            </main>
        </>
    )

}