"use client";

import { supabase } from '@/lib/supabaseClient.js'
import { useState } from 'react'
import { useRouter } from 'next/router';
import  { GetStaticPaths } from 'next'

const SystemDetails = (system) => {

    return (
    <div>
      <h2>{system.name}</h2>
      <p>Mass: {system.mass}</p>
      <p>Temperature: {system.temperature}</p>
    </div>
    )
}

export async function getStaticPaths(){
    return {
        paths: [
            { params: { systemID: '1'}},
            { params: { systemID: '2'}},
        ],
    }   
}

export async function getStaticProps(context) {
//use getServerSideProps if you need access to the req and res objects
    const systemID = context.params.systemID
    console.log(systemID)

    //let { data } = await supabase.from('systems-test').select('*').eq('id', 1).single();

    return {
        props: {
            systemData: {
                name: 'Sol',
                mass: '10,000lb',
                temperature: '10,000K'
            }
        },
        revalidate: 3600
    }
}

export default SystemDetails

