import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addCard } from '../services/api';
export function RegisterMeter() {
    const [owner, setOwner] = useState('');

    const history = useHistory();
    const handleOwner = (e) => {
        setOwner(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await addCard({
                meter_owner: owner,
            })
            if (data) {
                setOwner('')
            }
            history.push('/view/meters');
        } catch (e) {
            console.log(e.message);
        }
    }
    return <div className="text-black ">
        <div className="card bg-green-600 p-5 text-xl text-white font-bold mb-5">E-biller | BUY A  METER</div>
        <div className="lg:flex p-5">
            <div className="bg-white lg:w-1/2 p-5 flex items-center text-sm text-gray-400">
                <div className="m-auto">
                    <div className="title text-black font-bold text-xl">E-BILLER</div>
                </div>

            </div>
            <div className="bg-white lg:w-1/2 p-5 text-black text-sm">
                <form action="" className="p-5" onSubmit={handleSubmit}>
                    
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Your names</span>
                            <input type="text" onChange={handleOwner} value={owner} id="" className="form-control p-4 w-full border" />
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">meter number</span>
                            <input type="text"disabled value="generated" id="" className="form-control p-4 w-full border" />
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Initial balance</span>
                            <input type="number" value="0" disabled id="" className="form-control p-4 w-full border" />
                        </label>
                    </div>

                    <button type="submit" className="btn bg-black p-3 rounded text-white w-full">Buy</button>
                </form>
            </div>
        </div>
    </div>
}