export const state = ()=>({
    services:[
        {
            id: 1,
            title: "Web Design & Development",
            snippet: "We design and develop Corporate Websites, E Commerce Web Stores, Web Apps and also provide services such as Branding sites, Search Engine Optimization, Social Media Marketing, and Website Management and Maintenance",
            image: "je1.webp",
            video: "01.mp4",
            cards:[
                {
                    id:101,
                    title: "Branding Website",
                    price: "150",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:102,
                    title: "Corporate Website",
                    price: "250",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:103,
                    title: "Wordpress Ecommerce Web store",
                    price: "200",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:104,
                    title: "Custom Ecommerce Web store",
                    price: "500",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:105,
                    title: "CMS Web Solutions",
                    price: "250",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:106,
                    title: "POS, ERP, HRM and other Business Web Solutions",
                    price: "500",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:107,
                    title: "Website Managment & maintenance",
                    price: "100",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                },
                {
                    id:108,
                    title: "Web Hosting",
                    price: "50",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a massa eget purus blandit consequat eget quis orci. Duis nec nisl dui. Integer in volutpat dolor"
                }


            ]
        },
        {
            id: 2,
            title: "Logo Design & Branding",
            snippet: "We design logos, provide complete branding solutions, and highlight your brand identity.",
            image: "je2.webp",
            video: "02.mp4",
            cards:[
                {
                    id:101,
                    title: "Logo Designs",
                    price: "20"
                },
                {
                    id:102,
                    title: "Business Cards",
                    price: "10"
                },
                {
                    id:103,
                    title: "Cards",
                    price: "10"
                },
                {
                    id:104,
                    title: "Letter Heads",
                    price: "15"
                },
                {
                    id:105,
                    title: "Brochures",
                    price: "15"
                },
                {
                    id:106,
                    title: "Flyer Designs & Posters",
                    price: "5"
                },
                {
                    id:107,
                    title: "Leaflet Designs",
                    price: "10"
                },
                {
                    id:108,
                    title: "Invoices & Reciept Designs",
                    price: "7.5"
                },
                {
                    id:109,
                    title: "Corporate Profiles",
                    price: "50"
                },
                {
                    id:110,
                    title: "Corporate Videos",
                    price: "35"
                }
            ]
        },
        {
            id: 3,
            title: "Robotic Process Automation",
            snippet: "We build bots to automate your day today tasks in legacy systems, web, desktop, and spreadsheets. We help you to generate business insights using AI",
            image: "je3.webp",
            video: "03.mp4",
            cards:[
                {
                    id:101,
                    title: "Ecommerce Web stores",
                    price: "200"
                },
                {
                    id:102,
                    title: "Corporate Websites",
                    price: "250"
                }
            ]
        },
        {
            id: 4,
            title: "Digital Marketing",
            snippet: "We develop effective digital marketing strategy, and offers content creation services. We provide SEO, Social Media Marketing, Advertisement, and Web Analytic services",
            image: "je4.webp",
            video: "04.mp4",
            cards:[
                {
                    id:101,
                    title: "Search Engine Optimization (SEO)",
                    price: "150"
                },
                {
                    id:102,
                    title: "Social Media Campaign",
                    price: "25"
                },
                {
                    id:102,
                    title: "Social Media - Bronze (10 Post per month)",
                    price: "80"
                },
                {
                    id:102,
                    title: "Social Media - Silver (15 Post per month)",
                    price: "120"
                },
                {
                    id:102,
                    title: "Social Media - Gold (30 Post per month)",
                    price: "160"
                }
            ]
        },
        {
            id: 5,
            title: "Software Solutions",
            snippet: "We design and develop Desktop applications to suit your business. We help to manage your applications, whether its on cloud or integrated to your premise",
            image: "je5.webp",
            video: "05.mp4",
            cards:[
                {
                    id:101,
                    title: "Cloud Solutions",
                    price: "200"
                },
                {
                    id:102,
                    title: "App Modernisation & Integration",
                    price: "250"
                },
                {
                    id:103,
                    title: "DevOps Solutions",
                    price: "250"
                }
            ]
        },
        {
            id: 6,
            title: "Mobile App Development",
            snippet: "We provide Native Mobile App Development, Cross Platform Application Development, Android Application Development, and IOS Application Development",
            image: "je6.webp",
            video: "06.mp4",
            cards:[
                {
                    id:101,
                    title: "Native Android Development",
                    price: "200"
                },
                {
                    id:102,
                    title: "Native IOS Development",
                    price: "250"
                },
                {
                    id:102,
                    title: "Cross Platform Application Development",
                    price: "250"
                },
                {
                    id:102,
                    title: "Enterprise Application Development",
                    price: "250"
                }
            ]
        }
    ]
})

export const getters = {
    getServiceById:(state)=>(id)=>{
        return state.services.find(service=>service.id == id)
    }
}