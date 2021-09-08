
export default function ItemView ({desc = ' ', price = 0, caracte = ' ', stock = 0, pictureUrl = ' ', title= ' '}){

    return (
        <>
            <div className='item-view'>
                <div className='item-view-pi'>
                    <img className='card-img-top imgcarritovista' src= { pictureUrl } alt="img"></img>                
                </div>
                <div className='item-view-pd'>
                    <div className="contenedor-prod"><span>Guitarra: </span><br/> <b className='caracte-b'>{ title }</b> </div>                    
                    <div className="contenedor-prod"><span>Modelo: </span><br/> <b className='caracte-b'>{ desc }</b> </div>                    
                    <div className="contenedor-prod"><span>Características: </span><br/> <div className='caracte-a'>{ caracte }</div> </div>
                    <div className="contenedor-prod"><span>Precio: </span><br/> <b className='caracte-b'>{ price }</b> </div>
                    <div className="contenedor-prod"><span>Cantidad de Unidades: </span><br/> <b className='caracte-b'>{ stock }</b> </div>
                </div>
            </div>
        </>
    )

} 