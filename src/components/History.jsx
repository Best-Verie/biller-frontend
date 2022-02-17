import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client"
import Skeleton from "react-loading-skeleton";
import url from '../utils/url';

export function History() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const socket = socketIOClient(url);
        socket.on("Transactions", (data) => {
            console.log(data)
            setCards(data);
            setLoading(false);
        })

        return () => {
            socket.disconnect()
        }
    }, [])
    return (
        <div className="transition duration-500 ease-in-out">
            <div className="card bg-green-600 p-5 text-xl text-white font-bold mb-5">E-BILLER</div>
            <div className="card--logs text-sm">
                {loading ?
                    <>

                        <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                            <div className="lg:w-1/5 mb-2 card--code">
                                <div className="title font-bold mb-3">token</div>

                                <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2 card--balance">
                                <div className="title font-bold mb-3">meter number</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2 card--balance">
                                <div className="title font-bold mb-3">amount </div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/5 mb-2">
                                <div className="title font-bold mb-3">duration </div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />

                            </div>
                            <div className="lg:w-1/5 mb-2">
                                <div className="title font-bold mb-3 gap-2">DONE AT</div>
                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                            </div>

                        </div>
                    </>
                    :
                    <>
                        {cards?.slice().reverse().map((item) => {
                            return (
                                <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                                    <div className="lg:w-1/5 mb-2 card--code">
                                        <div className="title font-bold mb-3">TOKEN</div>
                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />
                                            :
                                            <> {item.transactions[0]?.id} </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2 card--balance">
                                        <div className="title font-bold mb-3">METER</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> { item.meterNumber} </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">AMOUNT</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <>{item.amount} </>}
                                    </div>

                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">DURATION</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <>{item?.amount/100+' days'}   </>}
                                    </div>
                                    <div className="lg:w-1/5 mb-2">
                                        <div className="title font-bold mb-3">DONE AT</div>
                                        <div className="flex gap-2 justify-center">

                                            <span className="flex justify-center">   {item.createdAt}</span>
                                        </div>

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
