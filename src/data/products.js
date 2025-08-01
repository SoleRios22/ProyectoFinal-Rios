const products=[
    {
        id: 1,
        name: "nueces",
        description: "Nueces frescas y crujientes, perfectas para un snack saludable.",
        stock: 5,
        image:"/public/img/nueces.jpg",
        price: 19,
        category: "frutos"

    },
     {
        id: 2,
        name: "almendras",
        description: "Almendras tostadas y saladas, ideales para picar.",
        stock: 4,
        image:"/public/img/almendras.jpg",
        price: 15,
        category: "frutos"
    },
     {
        id: 3,
        name: "mani",
        description: "Maní salado y crujiente, ideal para picar.",
        stock: 8,
        image:"/public/img/mani.jpg",
        price: 10,
        category: "frutos"

    },
     {
        id: 4,
        name: "Aritos frutale",
        description: "Almendras tostadas y saladas, ideales para picar.",
        stock: 4,
        image:"/public/img/aritos.jpg",
        price: 15,
        category: "cereales"
    },
     {
        id: 5,
        name: "Almohaditas rellenas",
        description: "Almendras tostadas y saladas, ideales para picar.",
        stock: 4,
        image:"/public/img/almohaditas.jpg",
        price: 15,
        category: "cereales"
    },
     {
        id: 6,
        name: "Harina de coco",
        description: "Harina de coco fina y saludable.",
        stock: 4,
        image:"/public/img/harinaCoco.jpg",
        price: 15,
        category: "harinas"
    },
    {
        id: 7,
        name: "Harina de almendras",
        description: "Harina de almendras fina y saludable.",
        stock: 4,
        image:"/public/img/harinaAlmendras.jpeg",
        price: 15,
        category: "harinas"
    },
    {
        id: 8,
        name: "Semillas de girasol",
        description: "Semillas de girasol tostadas y saladas, ideales para picar.",
        stock: 4,
        image:"/public/img/semillasGirasol.jpg",
        price: 15,
        category: "semillas"
    },
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => product.id == productId);
                resolve(product);
        }, 3000);
    });
};

export {getProducts , getProductById};