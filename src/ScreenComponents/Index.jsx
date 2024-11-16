import movies from '../assets/banner.png'

export const Index = () => {


    return (
        <>
            <h1 className="text-center">Cool Movies</h1>

            <main className='mb-5'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={movies} className='img-fluid' />
                    </div>
                    <div className='col-sm-8'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, lacus eget faucibus egestas, magna risus semper ex, semper tempus ante purus ac metus. Nulla non leo luctus, pellentesque justo eu, tincidunt dolor. Vestibulum consequat nec mauris a imperdiet. Nunc sodales, felis ut cursus blandit, enim felis viverra mi, non viverra turpis purus sed ex. Fusce metus tortor, congue nec fermentum at, cursus scelerisque ex. Aenean ultrices, magna vel auctor pretium, velit risus vestibulum urna, id aliquam urna erat eu arcu. Vivamus quis purus eu leo cursus posuere ac in ante. Praesent tincidunt elementum tortor, tristique venenatis libero convallis quis. Fusce pulvinar diam at suscipit aliquet. Nunc ullamcorper ante vel nisl elementum, vitae tristique diam dignissim. Cras a pulvinar risus. Donec sagittis vitae felis eu sodales. Ut ac augue consequat, posuere lorem et, auctor erat. Nam tristique magna et neque euismod, a imperdiet mauris interdum. Praesent feugiat ipsum erat, a faucibus lorem dapibus quis.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )

}