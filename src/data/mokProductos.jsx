const productos = [
    {
        id: 'id_1',
        title: 'FENDER TELECASTER USA',
        description: 'AMERICAN PERFORMER | RWN | SS YOSEMITE | C/FUNDA DELUXE | SATIN SONIC',
        price: 'U$D 2000',
        stock: '10',
        cate: 'productos',
        caracte: '- Cuerpo de aliso.\n- Pastillas de bobina simple de Yosemite; Circuito de tono Greasebucket.\n- Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”\n- 22 trastes jumbo.\n- Clavijero ClassicGear ™; logo de los 70 plateado',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_794869-MLA44727426259_012021-O.jpg'
    },
    {
        id: 'id_2',
        title: 'FENDER STRATOCASTER USA',
        description: 'AMERICAN PERFORMER | MN | SSS YOSEMITE',
        price: 'U$D 1800',
        stock: '10',
        cate: 'productos',
        caracte: '- Cuerpo de aliso.\n- Tres pastillas Stratocaster de bobina simple de Yosemite; RW / RP pastilla central.\n- Un interruptor push-pull activa la pastilla del mástil; Circuito de tono Greasebucket.\n- Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”; 22 trastes jumbo.\n- Clavijero ClassicGear ™; logo de los 70 plateado',
        pictureUrl: 'https://emavemusical.com/wp-content/uploads/2021/04/Fender-Stratocaster-Standard-Mexico-Sunburst-1-4068-1-1.jpg'
    },
    {
        id: 'id_3',
        title: 'GIBSON FIREBIRD',
        description: 'VINTAGE SUNBURST 120TH ANNIVERSARY',
        price: 'U$D 2300',
        stock: '10',
        cate: 'productos',
        caracte: 'Gibson 2014 Firebird en acabado vintage sunburst. Condición MINT con estuche rígido original. Se ve, juega y suena genial. Completamente original y sin modificar a excepción de los Dunlop Straplocks que instalé (también se incluirán botones de correa originales). Compré esto hace unos meses y realmente me gusta, pero soy más un tipo Fender. Se merece una buena casa donde se juegue.\nLa guitarra pesa 8.5 libras y es sorprendentemente cómoda de tocar. Tiene la incrustación del 120 aniversario de Gibson en el traste 12. Literalmente, no hay una marca en esta guitarra, a excepción de posiblemente algunas marcas de remolino muy leves por el pulido. Cuenta con sintonizadores sin engranajes Steinberger, relación 40: 1 ... muy fáciles de sintonizar. Perfil de mástil cónico delgado de los años 60 con el nuevo diseño de traste sobre encuadernación. Acabo de ponerme un nuevo juego de Elixir Nanoweb .009 - .046 cuerdas y engrasé el diapasón.\n',
        pictureUrl: 'http://images.musicstore.de/images/1280/gibson-firebird-tobacco-burst_1_GIT0051789-000.jpg'
    },
    {
        id: 'id_4',
        title: 'FENDER TELECASTER MEX',
        description: 'RWN | SS YOSEMITE | C/FUNDA DELUXE',
        price: 'U$D 850',
        stock: '10',
        cate: 'productos',
        caracte: '- Cuerpo de aliso.\n- Pastillas de bobina simple de Yosemite; Circuito de tono Greasebucket.\n- Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”\n- 22 trastes jumbo.\n- Clavijero ClassicGear ™; logo de los 70 plateado',
        pictureUrl: 'https://static.sonovente.com/img/library/zoom/62/optim/62148_1.jpg'
    },
    {
        id: 'id_5',
        title: 'GIBSON SG',
        description: 'SPECIAL 1964 (VINTAGE)',
        price: 'U$D 2000',
        stock: '10',
        cate: 'productos',
        caracte: '- Cuerpo de caoba de una pieza.\n- Trastes 22 Medium Jumbo.\n- Pastillas Custombucker III.\n- Estuche y certificado de autenticidad',
        pictureUrl: 'https://d1aeri3ty3izns.cloudfront.net/media/60/604503/600/preview.jpg'
    },
    {
        id: 'id_6',
        title: 'GIBSON LES PAUL',
        description: 'STANDARD',
        price: 'U$D 1800',
        stock: '10',
        cate: 'productos',
        caracte: '- Color: Heritage Cherry Sunburst.\n- Cuerpo: Caoba.\n- Tapa: Arce Mástil:.\n- Caoba con perfil Vintage 50.\n- Diapasón: Palorosa.\n- Pastillas: Gibson Burstbucker 1 en mástil y Gibson Burstbucker 2 en puente',
        pictureUrl: 'https://www.malaga8.com/img/cms/gibson-les-paul-standard-50s-hcs-p-32553.jpg'
    },
    {
        id: 'id_7',
        title: 'GRETSCH BRIAN SETZER',
        description: 'NASHVILLE (ORANGE LACQUER) - G6120SSL',
        price: 'U$D 2300',
        stock: '10',
        cate: 'productos',
        caracte: 'Los modelos Gretsch Brian Setzer Nashville se construyen según las especificaciones exactas de Brian y se inspiran en las guitarras de su colección vintage asesina. El refuerzo del caballete coincide con el del 59 favorito de Setzer, lo que le da una sensación más sólida y toneladas de sustain. Las características estándar incluyen soportes de caballete de 1959, pastillas duales TV Jones® Brian Setzer "Signature", sintonizadores de bloqueo Schaller® y cierres de correa, puente Adjusto-Matic ™ con pasador, herrajes de níquel y cordal de vibrato Bigsby® B6CB.',
        pictureUrl: 'https://muzikercdn.com/uploads/products/313/31350/thumb_d_gallery_base_9f8b13e2.jpg'
    },
    {
        id: 'id_8',
        title: 'GIBSON LES PAUL ',
        description: 'CUSTOM SHOP 57 BLACK BEAUTY VOS HISTORIC COLLECTION',
        price: 'U$D 850',
        stock: '10',
        cate: 'productos',
        caracte: '- Tipo de madera del mástil: Caoba.\n- Cantidad de cuerdas: 22.\n- Largo de la escala: 25.\n- Tipos de control: Selector de micrófonos,Tono,Volumen.\n- Cantidad de micrófonos: 2.\n- Selector de micrófonos: 3 posiciones.\n- Tipos de micrófonos: Humbucker',
        pictureUrl: 'https://www.stars-music.com/medias/gibson/custom-shop-les-paul-custom-1957-reissue-2-pickup-2019-eb-hd-161301.png'
    }
]


export default productos;