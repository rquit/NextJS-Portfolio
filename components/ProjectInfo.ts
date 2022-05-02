import ThisSite from '../public/img/image_card.png'
import Cifar from '../public/img/Cifar.png'
import Manga from '../public/img/Manga.png'
import Spurwing from '../public/img/Spurwing.png'
import CarPrices from '../public/img/CarPrices.png'
import CppServer from '../public/img/CppWebServer.png'
import FaceMesh from '../public/img/FaceMesh.png'

export type Project = {
    src: string,
    title: string,
    desc: string,
    longDesc?: string,
    link: string,
    deployed?: string
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
    src: Manga.src,
    title: "Manga Reader",
    desc: "Website to browse manga with MangaDex API.",
    longDesc: "Website for browsing manga and webcomics made using \
            ReactJS and Axios for requests. Consumes the MangaDex API.",
    link: "https://github.com/rquit/AwoogaDex"
}

const cifar10: Project = {
    src: Cifar.src,
    title: "CIFAR-10 Classifier",
    desc: "ConvNet to classify images. Made with PyTorch.",
    longDesc: "Convolutional Neural Network made to classify 10 classes of \
            images in the CIFAR-10 image database. Made using PyTorch.",
    link: "https://github.com/rquit/colab_nn_tests/blob/main/Convolutional_NN.ipynb"
}

const slackbot: Project = {
    src: Spurwing.src,
    title: "Spurwing Slack Bot",
    desc: "RTC bot used for managing appointments.",
    longDesc: "RTC Slack bot made using the Slack API and Spurwing \
            API in NodeJS. Created during my internship at Spurwing.",
    link: "https://github.com/rquit/Chat-Bots"
}

const thissite: Project = {
    src: ThisSite.src,
    title: "This Website",
    desc: "Made with NextJS and Framer Motion in TypeScript.",
    longDesc: "This is the website you are on right now. Made using \
            NextJS for content, and Framer Motion for animations.",
    link: "https://github.com/rquit/NextJS-Portfolio",
    deployed: "https://www.nabilto.com/"
}

const carprices: Project = {
    src: CarPrices.src,
    title: "Predict Used Car Prices",
    desc: "XGBoost, Sklearn Parameter Grid Search.",
    longDesc: "",
    link: "https://www.kaggle.com/nabilomi/xgb-car-prices/"
}

const cppserver: Project = {
    src: CppServer.src,
    title: "C++ Webserver",
    desc: "C++ webserver library made with mainly sys/socket.h",
    longDesc: "",
    link: "https://github.com/rquit/Webserver_From_Scratch"
}

const faceswap: Project = {
    src: FaceMesh.src,
    title: "Face Mesh Face Swap",
    desc: "Fit a face mesh from 2d images to your face!",
    longDesc: "",
    link: "https://github.com/rquit/landmarks_face_swap"
}

export {
    sample,
    slackbot,
    thissite,
    awoogadex,
    carprices,
    cppserver,
    cifar10,
    faceswap
};