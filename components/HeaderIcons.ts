import type { ImageProps } from 'next/image'

// SVG Files for Languages
import CPP from '../public/svg/c.svg'
import CSS from '../public/svg/css.svg'
import HTML from '../public/svg/html.svg'
import JS from '../public/svg/js.svg'
import PYTHON from '../public/svg/python.svg'
import SQL from '../public/svg/sql.svg'
import TS from '../public/svg/ts.svg'

// SVG Files for Technologies
import REACT from '../public/svg/React.svg'
import NEXT from '../public/svg/Next.svg'
import TORCH from '../public/svg/Torch.svg'
import MONGO from '../public/svg/Mongo.svg'
import GIT from '../public/svg/Git.svg'
import LINUX from '../public/svg/Linux.svg'
import EXPRESS from '../public/svg/Express.svg'

export type HeaderIcon = {
    src: ImageProps,
    name: string
}

const LangArray: HeaderIcon[] = [
    {src: TS,       name: "TypeScript"},
    {src: JS,       name: "JavaScript"},
    {src: PYTHON,   name: "Python"},
    {src: CPP,      name: "C++"},
    {src: HTML,     name: "HTML5"},
    {src: CSS,      name: "CSS3"},
    {src: SQL,      name: "SQL"},
];

export { LangArray };

const TechArray: HeaderIcon[] = [
    {src: REACT,    name: "ReactJS"},
    {src: NEXT,     name: "NextJS"},
    {src: EXPRESS,  name: "ExpressJS"},
    {src: TORCH,    name: "PyTorch"},
    {src: GIT,      name: "Git"},
    {src: MONGO,    name: "MongoDB"},
    {src: LINUX,    name: "Linux"},
]

export { TechArray };