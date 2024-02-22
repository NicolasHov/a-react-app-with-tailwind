
const Gallery = () => {
    return (
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div className="blur transform scale-110 -rotate-6">
                <img src="https://i.insider.com/65632fe0c58b6f84123a0d07?width=700" alt="" loading="lazy" />
            </div>
            <div className="blur col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                <img src="https://i.insider.com/65632fe0c58b6f84123a0d07?width=700" alt="" loading="lazy" />
            </div>
            <div className="blur transform scale-150 translate-y-11">
                <img src="https://i.insider.com/65632fe0c58b6f84123a0d07?width=700" alt="" loading="lazy" />
            </div>
            <div className="blur transform translate-y-24">
                <img src="https://i.insider.com/65632fe0c58b6f84123a0d07?width=700" alt="" loading="lazy" />
            </div>
            <div className="blur row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                <img src="https://i.insider.com/65632fe0c58b6f84123a0d07?width=700" alt="" loading="lazy" />
            </div>
        </div>
    )
}

export default Gallery 