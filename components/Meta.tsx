import { NextSeo } from 'next-seo'
import ImageCard from '../public/img/image_card.png'

const Meta = () => {
    return (
        <>
            <NextSeo
                title="Nabil Omi"
                description="I'm a Computer Science Student at CCNY."
                openGraph={{
                    url: "https://www.nabilto.com/",
                    title: "Nabil Omi",
                    description: "I'm a Computer Science Student at CCNY.",
                    images: [
                        {
                            url: ImageCard.src,
                            width: 1200,
                            height: 630,
                            alt: "Nabil, Github Logo, LinkedIn Logo"
                        }
                    ],
                    type: "profile",
                    profile: {
                        firstName: "Nabil",
                        lastName: "Omi",
                        username: "Nabil",
                        gender: "male"
                    },
                    
                }}
                additionalMetaTags={[{
                    name: "theme-color",
                    content: "#323232"
                }, {
                    name: "keywords",
                    content: "nabil, omi, nabil omi, omi nabil"
                }, {
                    name: "twitter:card",
                    content: ImageCard.src
                }]}
            />
        </>
    )
}

export default Meta;