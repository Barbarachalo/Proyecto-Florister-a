/* objeto para contenido dinámico */
 export const arrayDeProductos=[
    /* EVENTOS */
    {
        id:1,
        name:'Eventos',
        text:'La decoración con flores es una de las formas más bellas y elegantes de embellecer cualquier espacio, ya sea una finca para eventos o el propio evento. Las flores traen consigo una sensación de frescura, alegría y sofisticación, transformando cualquier lugar en un ambiente mágico y acogedor',
        tipos:[
            {
                id:11,
                name:'Cumpleaños',
                img:'/IMG/evento cumpleños.jpg',
                description:'Realizamos hermosas decoraciones en los cumpleaños',
                precios:[
                    {
                        id:111,
                        name:'Arreglos sencillos',
                        description:'El precio es por cada pack de 10 flores usados sin importar el tipo',
                        precio:10
                    },
                    {
                        id:112,
                        name:'Arreglos complejos',
                        description:'El precio es cuando son más de 200 flores sin importar el tipo',
                        precio:8
                    }
                ]

            },{
                id:12,
                name:'Bodas',
                img:'/IMG/boda.jpg',
                description:'Decora tu boda con nosotros',
                precios:[
                    {
                        id:112,
                        name:'Arreglos sencillos',
                        description:'El precio es por cada pack de 10 flores usados sin importar el tipo incluyendo globos',
                        precio:10
                    },
                    {
                        id:113,
                        name:'Arreglos complejos',
                        description:'El precio es cuando son más de 200 flores sin importar el tipo',
                        precio:8
                    }
                ],
            }
        ]
        
    },
    /* CESTAS */
    {
        id:2,
        name:'Cestas',
        text:'Las cestas con flores son una opción encantadora y versátil para regalar en diversas ocasiones. Estas cestas pueden estar llenas de una amplia variedad de flores frescas y coloridas, creando un arreglo floral impresionante y lleno de vida.',
        tipos:[
            {
                id:21,
                name:'Cesta de Amapolas',
                category:'Amapolas',
                img:'/IMG/cesta amapola.jpg',
                description:'Es la popular amapola de delicadas flores rojas que solemos ver y admirar en los campos de maíz .',
                precios:[
                    {
                        id:211,
                        name:'Cesta pequeña',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Cesta pequeña de 10 Amapolas',
                        precio:15
                    },
                    {
                        id:212,
                        name:'Cesta grande',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Para un rango de Amapolas de 15 a 28 flores',
                        precio:30
                    }
                ]
            },
            {
                id:22,
                name:'Cesta de Lirios',
                category:'Lirios',
                img:'/IMG/cesta lirios.webp',
                description:'Un verdadero placer rendir homenaje a los versátiles iris o lirios barbados que iluminan. ',
                precios:[
                    {
                        id:221,
                        name:'Cesta pequeña',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Cesta pequeña de 10 Lirios',
                        precio:15
                    },
                    {
                        id:222,
                        name:'Cesta grande',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Para un rango de Lirios de 15 a 28 flores',
                        precio:30
                    }
                ]
            },
            {
                id:32,
                name:'Cesta de Rosas',
                category:'Rosas',
                img:'/IMG/cesta de rosas.jpg',
                description:'La presencia de las rosas en la cultura popular es omnipresente, desde su aparición en películas y programas de televisión',
                precios:[
                    {
                        id:321,
                        name:'Cesta pequeña',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Cesta pequeña de 10 Rosas',
                        precio:15
                    },
                    {
                        id:322,
                        name:'Cesta grande',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Para un rango de Rosas de 15 a 28 flores',
                        precio:30
                    }
                ]
            },
            {
                id:42,
                name:'Cesta de Gardenias',
                category:'Gardenias',
                img:'/IMG/cesta gardenia.webp',
                description:'Durante el final de la primavera produce flores parecidas a las de las rosas.',
                 precios:[
                    {
                        id:421,
                        name:'Cesta pequeña',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Cesta pequeña de 10 Gardenias',
                        precio:15
                    },
                    {
                        id:422,
                        name:'Cesta grande',
                        img:'/IMG/cesta amapola.jpg',
                        description:'Para un rango de Gardenias de 15 a 28 flores',
                        precio:30
                    }
                ]
            },
        ]  
    }
]