export const state = ()=>({
    services:[
        {
            id: 1,
            title: "Web Design & Development",
            snippet: "We design and develop Corporate Websites, E Commerce Web Stores, Web Apps and also provide services such as Branding sites, Search Engine Optimization, Social Media Marketing, and Website Management and Maintenance",
            image: "je1.webp",
            video: "test.mp4",
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
            id: 2,
            title: "Logo Design & Branding",
            snippet: "We design logos, provide complete branding solutions, and highlight your brand identity.",
            image: "je2.webp",
            video: "test.mp4",
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
            id: 3,
            title: "Robotic Process Automation",
            snippet: "We build bots to automate your day today tasks in legacy systems, web, desktop, and spreadsheets. We help you to generate business insights using AI",
            image: "je3.webp",
            video: "test.mp4",
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
            video: "test.mp4",
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
            id: 5,
            title: "Custom Software Solutions",
            snippet: "We design and develop Desktop applications to suit your business. We help to manage your applications, whether its on cloud or integrated to your premise",
            image: "je5.webp",
            video: "test.mp4",
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
            id: 6,
            title: "Mobile App Development",
            snippet: "We provide Native Mobile App Development, Cross Platform Application Development, Android Application Development, and IOS Application Development",
            image: "je6.webp",
            video: "test.mp4",
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
        }
    ]
})

export const getters = {
    getServiceById:(state)=>(id)=>{
        return state.services.find(service=>service.id == id)
    }
}