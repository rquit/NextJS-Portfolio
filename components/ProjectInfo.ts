import ThisSite from '../public/img/image_card.png'

export type Project = {
    src: string,
    title: string,
    desc: string,
    longDesc?: string,
    link: string
}

export type ProjectProp = {
    project: Project
}

const sample: Project = {
    src: ThisSite.src,
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sin amet",
    longDesc: "Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet \
            Lorem ipsum dolor sin amet Lorem ipsum dolor sin amet",
    link: "https://github.com/rquit/NextJS-Portfolio"
}

const awoogadex: Project = {
    src: ThisSite.src,
    title: "Manga Reader",
    desc: "Website to browse manga with MangaDex API.",
    longDesc: "Website for browsing manga and webcomics made using \
            ReactJS and Axios for requests. Consumes the MangaDex API.",
    link: "https://github.com/rquit/AwoogaDex"
}

const cifar10: Project = {
    src: ThisSite.src,
    title: "CIFAR-10 Classifier",
    desc: "ConvNet to classify images. Made with PyTorch.",
    longDesc: "Convolutional Neural Network made to classify 10 classes of \
            images in the CIFAR-10 image database. Made using PyTorch.",
    link: "https://github.com/rquit/colab_nn_tests/blob/main/Convolutional_NN.ipynb"
}

const slackbot: Project = {
    src: ThisSite.src,
    title: "Spurwing Slack Bot",
    desc: "RTC bot used for managing appointments.",
    longDesc: "RTC Slack bot made using the Slack API and Spurwing \
            API in NodeJS. Created during my internship at Spurwing.",
    link: "https://github.com/rquit/Chat-Bot-Integrations"
}

const thissite: Project = {
    src: ThisSite.src,
    title: "This Website",
    desc: "Made with NextJS and Framer Motion in TypeScript.",
    longDesc: "This is the website you are on right now. Made using \
            NextJS for content, and Framer Motion for animations.",
    link: "https://github.com/rquit/NextJS-Portfolio"
}

export {
    sample,
    slackbot,
    thissite,
    awoogadex,
    cifar10
};