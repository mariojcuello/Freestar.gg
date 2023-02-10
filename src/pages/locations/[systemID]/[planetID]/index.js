"use client";
import { supabase } from '@/pages/api/supabase';
import { useState } from 'react'
import { useRouter } from 'next/router';
import  { GetStaticPaths } from 'next'
import Link from 'next/link';

const DEMO_PLANET = {
    name: 'Earth',
    system: 'Sol',
    planetSlug: 'earth',
    systemSlug: 'sol',
    mass: '10,000lb',
    temperature: '10,000K',
    magnitude: '10,000'
}

const PlanetDetails = (props) => {

    return (
    <div className="container mx-auto">
        <div className="max-w-[85rem] px-8 mt-9 mb-2 lg:px-8 lg:mt-14 mx-auto">
            <h1 className="md:text-4xl text-2xl font-bold">Galaxy Map</h1>
            <h2>{DEMO_PLANET.name}</h2>
            <h2>Star System: 
                <Link href={{
                    pathname: "/locations/[systemID]",
                    query: { systemID: DEMO_PLANET.systemSlug }
                }}>{DEMO_PLANET.system}</Link>  
            </h2>
            <p>Mass: {DEMO_PLANET.mass}</p>
            <p>Temperature: {DEMO_PLANET.temperature}</p>
        </div>
    </div>    
    )
}

// export async function getStaticPaths(){
//     return {
//         fallback: false,
//         paths: [
//             { params: { planetID: 'earth'}},

//         ],
//     }   
// }

// export async function getStaticProps(context) {
// //use getServerSideProps if you need access to the req and res objects
    
//     // const systemID = context.params.systemID
//     // console.log(systemID)

//     let { data } = await supabase.from('systems-test').select('*').eq('id', 1).single();

//     return {
//         props: {
//             systemData: {
//                 name: 'Sol',
//                 mass: '10,000lb',
//                 temperature: '10,000K'
//             }
//         },
//         revalidate: 3600
//     }
// }

export default PlanetDetails

