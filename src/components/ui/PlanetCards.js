import Link from "next/link"

const PlanetCards = (props) => {

    return(
        <div>
            {props.planets.map((planets) => (
                <Link 
                    href={{
                        pathname: "/locations/[systemID]/[planetID]",
                        query: {
                            planetID: planets.planetSlug,
                            systemID: planets.systemSlug
                        },
                    }}
                 key={planets.name}
                 >
                    {planets.name} 
                </Link>
            ))}
        </div>
    )
}

export default PlanetCards
