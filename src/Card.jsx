import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
    return (
        <>
            {console.log(props.data)}
            <div className='col-xxl-6'>
                <div className='cards d-flex'>
                    <div>
                        <img src={props.data.image} alt="" />
                    </div>
                    <div className='det'>
                        <h1>#{props.data.name}</h1>
                        <div className='d-flex'>
                            <p className=
                                {`dot ${(props.data.status === "Alive") ? 'green' :
                                    (props.data.status === "Dead") ? 'red' :
                                        'grey'}`
                                }
                            ></p>
                            <h3> _{props.data.status}-Human</h3>
                        </div><br />
                        <h4><span>Last known location:</span><br />
                            {props.data.location.name}
                        </h4>
                        {/* {props.data.species} */}
                        <h2></h2>
                    </div>
                </div>
            </div >
        </>
    )
};
export default Card;