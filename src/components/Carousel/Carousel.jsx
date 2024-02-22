
const Carousel = ({ isInDeny, hueLevel, glitch }) => {
    // hue-rotate-${hueLevel} sometimes won't work: but start to work again if nnont using dynamic completion
    return (
        <>
            <div className={`snap-x overflow-x-auto flex flex-row justify-between w-full mt-6`}>
                <div className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div
                    className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    {isInDeny ?
                        <img
                            ref={glitch.ref}
                            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                        :
                        <img
                            ref={null}
                            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                    }
                </div>
                <div className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className={`hue-rotate-${hueLevel} snap-center w-96 h-48 flex-shrink-0`}>
                    <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
            </div>
        </>
    )
}

export default Carousel

