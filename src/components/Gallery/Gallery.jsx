
const Gallery = () => {
    return (
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div className="transform scale-110 -rotate-6">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="" loading="lazy" />
            </div>
            <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="" loading="lazy" />
            </div>
            <div className="transform scale-150 translate-y-11">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="" loading="lazy" />
            </div>
            <div className="transform translate-y-24">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="" loading="lazy" />
            </div>
            <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="" loading="lazy" />
            </div>
        </div>
    )
}

export default Gallery 