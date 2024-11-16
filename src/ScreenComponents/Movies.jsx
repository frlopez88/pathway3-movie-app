import batman from '../assets/batman.png'
import wonderwoman from '../assets/wonder-woman.png'
import superman from '../assets/superman.png'

export const Movies = () => {

    return (
        <>
            <h1 className="text-center">Movies DataBase</h1>

            <main className="container-fluid row className='mb-5'">

                <div className="card col-sm-4" >
                    <img src={batman} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Batman</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lacus vitae neque sodales pharetra vitae a nisi. Integer et ullamcorper lorem. Curabitur sollicitudin diam et venenatis tincidunt. Nam lobortis est non metus dictum finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
                            
                        </div>
                </div>

                <div className="card col-sm-4" >
                    <img src={wonderwoman} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Wonder Woman</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lacus vitae neque sodales pharetra vitae a nisi. Integer et ullamcorper lorem. Curabitur sollicitudin diam et venenatis tincidunt. Nam lobortis est non metus dictum finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
                            
                        </div>
                </div>

                <div className="card col-sm-4" >
                    <img src={superman} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Superman</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lacus vitae neque sodales pharetra vitae a nisi. Integer et ullamcorper lorem. Curabitur sollicitudin diam et venenatis tincidunt. Nam lobortis est non metus dictum finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
                            
                        </div>
                </div>

            </main>
        </>
    )

}