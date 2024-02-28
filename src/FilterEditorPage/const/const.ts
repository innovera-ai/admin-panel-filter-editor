export interface ILocationsForFilterProps {
    filters: { [key: string]: string[] | undefined }
}

export const locationsForFilter: ILocationsForFilterProps = {
    filters: {
        "North America": ["United States", "Canada"],
        "United States": [],
        "San Francisco Bay Area": [
            "San Francisco Bay Area",
            "San Francisco",
            "Oakland",
            "San Jose",
            "Berkeley",
            "Palo Alto",
            "Santa Clara",
            "Sunnyvale",
            "Fremont",
            "Hayward",
            "San Mateo",
            "Redwood City",
            "Mountain View",
            "Concord",
            "Vallejo",
            "Antioch",
            "Richmond",
            "Daly City",
            "Vacaville",
            "South San Francisco",
            "San Rafael",
            "Novato",
            "San Leandro",
            "Livermore",
            "Napa",
            "Alameda",
            "Union City",
            "Pleasanton",
            "Walnut Creek",
            "Milpitas",
            "Pittsburg",
            "Cupertino",
            "San Ramon",
            "Petaluma",
            "Fairfield",
            "Menlo Park",
            "Dublin",
            "Newark",
            "San Bruno",
            "Santa Rosa",
            "Pacifica",
            "Martinez",
            "Pleasant Hill",
            "Los Gatos",
            "Burlingame",
            "San Carlos",
            "Sausalito",
            "Benicia",
            "Foster City",
            "Los Altos",
            "Half Moon Bay",
        ],
        Canada: [],
        "Central and South America": ["Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru"],
        Mexico: [],
        Brazil: [],
        Argentina: [],
        Chile: [],
        Colombia: [],
        Peru: [],
        Europe: [
            "United Kingdom",
            "Germany",
            "France",
            "Spain",
            "Benelux",
            "Northern Europe",
            "Iceland",
            "Switzerland",
            "Portugal",
            "Estonia",
            "Latvia",
            "Poland",
            "Italy",
            "Austria",
        ],
        "United Kingdom": ["London"],
        London: [],
        Germany: ["Berlin"],
        Berlin: [],
        France: ["Paris"],
        Paris: [],
        Spain: ["Barcelona"],
        Barcelona: [],
        Benelux: ["Belgium", "Netherlands", "Luxembourg"],
        Belgium: [],
        Netherlands: [],
        Luxembourg: [],
        "Northern Europe": ["Sweden", "Finland", "Denmark", "Norway", "Ireland"],
        Sweden: [],
        Finland: [],
        Denmark: [],
        Norway: [],
        Ireland: [],
        Switzerland: [],
        Portugal: [],
        Estonia: [],
        Latvia: [],
        Poland: [],
        Italy: [],
        Austria: [],
        Asia: [
            "China",
            "India",
            "Japan",
            "South Korea",
            "Singapore",
            "Israel",
            "Hong Kong",
            "Pakistan",
            "SE Asia",
        ],
        China: ["Beijing", "Shanghai", "Shenzhen"],
        Beijing: [],
        Shanghai: [],
        Shenzhen: [],
        India: ["Bangalore", "Mumbai", "Delhi"],
        Bangalore: [],
        Mumbai: [],
        Delhi: [],
        Japan: [],
        "South Korea": [],
        Singapore: [],
        Israel: ["Tel Aviv"],
        "Tel Aviv": [],
        "Hong Kong": [],
        Pakistan: [],
        "SE Asia": ["Indonesia", "Thailand", "Vietnam"],
        Indonesia: [],
        Thailand: [],
        Vietnam: [],
        "Middle East & Africa": [
            "Turkey",
            "Saudi Arabia",
            "United Arab Emirates",
            "South Africa",
            "Kenya",
            "Nigeria",
        ],
        Turkey: [],
        "Saudi Arabia": [],
        "United Arab Emirates": [],
        "South Africa": [],
        Kenya: [],
        Nigeria: [],
        Oceania: ["Australia", "New Zealand"],
        Australia: [],
        "New Zealand": [],
    },
}
