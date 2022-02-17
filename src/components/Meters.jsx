import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client"
import Skeleton from "react-loading-skeleton";
import url from '../utils/url';

export function Meters() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const socket = socketIOClient(url);
        socket.on("Cards", (data) => {
            setCards(data);
            setLoading(false);
        })
    }, [])
    return (
        <div>
            <div className="card bg-green-600 p-5 text-xl text-white font-bold mb-5">WEB BILLER</div>
            <div className="card--logs text-sm">
                {/* card one starts */}
                {loading ?
                    <>

                        <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                            <div className="lg:w-1/2 mb-2 card--code">
                                <div className="title font-bold mb-3">METER NUMBER</div>

                                <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/2 mb-2 card--balance">
                                <div className="title font-bold mb-3">OWNER</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>

                        </div>
                    </>
                    :
                    <>
                        {cards?.slice().reverse().map((item) => {
                            return (
                                <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                                    <div className="lg:w-1/2 mb-2 card--code">
                                        <div className="title font-bold mb-3">METER NUMBER</div>
                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />
                                            :
                                            <> {item.meterNumber} </>
                                        }
                                    </div>
                                    <div className="lg:w-1/2 mb-2 card--balance">
                                        <div className="title font-bold mb-3">METER OWNER</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> {item.owner} </>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </>}


                {/* card ends here */}





            </div>
        </div>
    )
}
