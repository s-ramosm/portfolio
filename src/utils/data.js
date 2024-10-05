
import { 
    faPython, faJs, faReact, faNodeJs, faDocker, faGit, 
    faGithub, faAws, faGoogle, faMicrosoft, faLinux, faNpm, 
} from '@fortawesome/free-brands-svg-icons';


const products = [
    {
        title:  "Producto 1",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the ,1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        git :  "https://www.youtube.com/watch?v=IyKkj3fZX1w",
        img : "product_1.png"
    },
    {
        title:  "Producto 2",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        git :  "https://www.youtube.com/watch?v=IyKkj3fZX1w",
        img : "product_2.png"
    },
    {
        title:  "Producto 3",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        git :  "https://www.youtube.com/watch?v=IyKkj3fZX1w",
        img : "product_3.png"
    },
    {
        title:  "Producto 4",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        git :  "https://www.youtube.com/watch?v=IyKkj3fZX1w",
        img : "product_4.png"
    },
    {
        title:  "Producto 5",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        git :  "https://www.youtube.com/watch?v=IyKkj3fZX1w",
        img : "product_5.png"
    }
]


const skills = [
    { icon: faPython, name: "Python", stars : 5, anos: 5 },
    { icon: faJs, name: "JavaScript",stars:  4, anos: 2 },
    { icon: faReact, name: "React", stars: 4, anos: 2 },
    { icon: faNodeJs, name: "Node.js", stars: 3 ,  anos: 1},
    { icon: faDocker, name: "Docker", stars:  4 , anos: 2 },
    { icon: faGit, name: "Git", stars : 5, anos: 5 },
    { icon: faGithub, name: "GitHub", stars : 5, anos: 5},
    { icon: faAws, name: "AWS", stars:  4 , anos: 4 },
    { icon: faGoogle, name: "GCP", stars:  4 , anos: 2 },
    { icon: faMicrosoft, name: "Azure", stars:  4 , anos: 2 },
    { icon: faLinux, name: "Linux",stars : 5, anos: 5 },
    { icon: faNpm, name: "NPM",stars: 3, anos: 1 },
];


const presentations_data = {
    description : "Soy ParzivalPY (Sair Ramos), un apasionado desarrollador de software con una sólida experiencia en backend y un enfoque constante en la mejora continua y la innovación. Con un sólido conocimiento en Python y Django, y una amplia experiencia en JavaScript, he trabajado en una variedad de proyectos que abarcan desde aplicaciones web hasta inteligencia artificial.",
    name : "Sair Ramos 💻👨🏻‍💻" 
}

const rolesAndSpecialties = [
    'Software Developer',
    'Backend Developer Expert',
    'Web Development Teacher',
    'AI Engineer in Progress',
    'Product Owner Jr',
    'Python Expert',
    'JavaScript Programmer'
];


const colors = [
    {
        "primary": "#d8d8d8",
        "secondary": "#cdf348",
        "background": "#b3b3b3",
        "text": "#21212f"
    },
    {
        "primary": "#f8f7f3",
        "secondary": "#f2b540",
        "background": "#020202",
        "text": "#020202"
    },
    {
        "primary": "#899c79",
        "secondary": "#f2fa9b",
        "background": "#020202",
        "text": "#1f2e13"
    }
];


export {
    presentations_data, 
    rolesAndSpecialties, 
    skills,
    products,
    colors
}