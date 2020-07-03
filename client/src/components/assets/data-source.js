const tvSeriesData = 
[
    {
        id: 1,
        title: "The Witcher",
        year: "2019",
        category: "Tv Series",
        img: "/thewitcher-movie.png",
        carouselText: "The Witcher : Episode 1",
        desc: "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
        vidSrc: "https://www.youtube.com/watch?v=ndl1W4ltcmg"
    },
    {
        id: 2,
        title: "Persona 3 The Movie",
        year: "2016",
        category: "Tv Series",
        img: "/persona-movie.png",
        carouselText: "Persona : Episode 1",
        desc: "Japanese animated film and the first installment in a film series based on the Persona 3 video game by Atlus. Directed by Noriaki Akitaya and written by Jun Kumagai, it is based on the original story by Atlus and distributed by Aniplex.",
        vidSrc: "https://www.youtube.com/watch?v=yp5wTE1GyUw"
    },
    {
        id: 3,
        title: "Game Of Thrones",
        year: "2011",
        category: "Tv Series",
        img: "/gameofthrones-movie.png",
        carouselText: "Game Of Thrones : Episode 1",
        desc: "is an HBO series that tells the story of a medieval country's civil war. The series, which premiered in April 2011, is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years",
        vidSrc: "https://www.youtube.com/watch?v=gcTkNV5Vg1E"
    },
    {
        id: 4,
        title: "Money Heist",
        year: "2017",
        category: "Tv Series",
        img: "/moneyheist-movie.png",
        carouselText: "Money Heist : Episode 1",
        desc: "(Spanish: La casa de papel, The House of Paper) is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain",
        vidSrc: "https://www.youtube.com/watch?v=fvCdLmxnkj0"
    },
    {
        id: 5,
        title: "Touch",
        year: "2020",
        category: "Tv Series",
        img: "/touch-movie.png",
        carouselText: "Touch : Episode 1",
        desc: "Cha Jeong-Hyeok (Joo Sang-Wook) was a popular make-up artist, who pursued perfection, but he is now in debt and unemployed. Han Soo-Yeon (Kim Bo-Ra) has been a trainee to become an idol for 10 years. She takes part in an audition program to become an idol.",
        vidSrc: "https://www.youtube.com/watch?v=3Uc1r5AS-Qk"
    },
    {
        id: 6,
        title: "Arrow",
        year: "2012",
        category: "Tv Series",
        img: "/arrow-movie.png",
        carouselText: "Arrow : Episode 1",
        desc: "Arrow is an American superhero television series developed by Greg Berlanti, Marc Guggenheim, and Andrew Kreisberg based on the DC Comics character Green Arrow, a costumed crime-fighter created by Mort Weisinger and George Papp, and is set in the Arrowverse, sharing continuity with other Arrowverse television series.",
        vidSrc: "https://www.youtube.com/watch?v=XQS7JkQmlx8"
    }
];

const moviesData = 
[
    {
        id: 1,
        title: "The GodFather",
        year: "1972",
        category: "Movies",
        img: "/thegodfather-movies.png",
        carouselText: "The GodFather : Movie",
        desc: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando).",
        vidSrc: "https://www.youtube.com/watch?v=sY1S34973zA"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: "2008",
        category: "Movies",
        img: "/thedarkknight-movies.png",
        carouselText: "The Dark Knight : Movie",
        desc: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
        vidSrc: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
        id: 3,
        title: "Avengers: End Game",
        year: "2019",
        category: "Movies",
        img: "/avenger-movies.png",
        carouselText: "Avengers (End Game) : Movie",
        desc: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
        vidSrc: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
        id: 4,
        title: "Joker",
        year: "2019",
        category: "Movies",
        img: "/joker-movies.png",
        carouselText: "Joker : Movie",
        desc: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        vidSrc: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    },
    {
        id: 5,
        title: "Gisaengchung",
        year: "2019",
        category: "Movies",
        img: "/parasite-movies.png",
        carouselText: "Gisaengchung : Movie",
        desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        vidSrc: "https://www.youtube.com/watch?v=w_0KJAzyUJc"
    },
    {
        id: 6,
        title: "Chernobyl",
        year: "2019",
        category: "Movies",
        img: "/chernobyl-movies.png",
        carouselText: "Chernobyl : Movie",
        desc: "Premise. Chernobyl dramatizes the story of the April 1986 nuclear plant disaster which occurred in the Ukrainian Soviet Socialist Republic, Soviet Union, telling the stories of the people who caused the disaster and those who responded to it.",
        vidSrc: "https://www.youtube.com/watch?v=s9APLXM9Ei8"
    }
];

const dataTransaksi = [
    {
        user_id: 1,
        username: "Akbar Ganteng",
        transfer_proof: "cimb.jpg",
        member_period: "30 / hari",
        user_status: "Active",
        payment_status: "Approve"
    },
    {
        user_id: 2,
        username: "Radif Ganteng",
        transfer_proof: "bni.jpg",
        member_period: "0 / hari",
        user_status: "Active",
        payment_status: "Approve"
    },
    {
        user_id: 3,
        username: "Fadhil",
        transfer_proof: "bca.jpg",
        member_period: "0 / hari",
        user_status: "Not Active",
        payment_status: "Cancel"
    },
    {
        user_id: 4,
        username: "Deni Arman",
        transfer_proof: "permata.jpg",
        member_period: "0 / hari",
        user_status: "Not Active",
        payment_status: "Pending"
    },
    {
        user_id: 5,
        username: "Putu Ekky",
        transfer_proof: "bri.jpg",
        member_period: "0 / hari",
        user_status: "Not Active",
        payment_status: "Pending"
    }
    ,
    {
        user_id: 6,
        username: "Harist Firmanto",
        transfer_proof: "bi.jpg",
        member_period: "0 / hari",
        user_status: "Not Active",
        payment_status: "Pending"
    }
]

export {tvSeriesData,moviesData,dataTransaksi};