import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getBalance } from '../services/api';
export function CheckBalance() {
    const [uuid, setUUID] = useState('');
    const [error, setError] = useState();

    const history = useHistory();
    const handleUUID = (e) => {
        setUUID(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await getBalance({
            uuid,
        })
            .then(() => {
                // history.push("/balance/logs")
                alert("It was a success")
            })
            .catch((error) => {
                // console.log(error.response.data.message)
                // setError(error.response.data.message)
            })

    }

    return <div className="text-black ">
        <div className="card bg-green-600 p-5 text-xl text-white font-bold mb-5">E-BILLER CONTROLL | METER ACTIONS</div>
        <div className="lg:flex p-5">
            <div className="bg-white lg:w-1/2 p-5 flex items-center text-sm text-gray-400">
                <div className="m-auto">
                    <div className="title text-black font-bold text-xl">E-BILLER</div>
                </div>

            </div>
            <div className="bg-white lg:w-1/2 p-5 text-black text-sm">
                {error &&
                    <div className="error-log bg-red-500 text-white w-full text-center py-3 rounded">{error}</div>
                }
                <form action="" onSubmit={handleSubmit} className="p-5">
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">METER NUMBER</span>
                            <input type="text" onChange={handleUUID} value={uuid} id="" className="form-control p-4 w-full border" required />
                        </label>
                    </div>
                    <button type="submit" className="btn bg-black p-3 rounded text-white w-full">Check balance</button>
                </form>
        
            </div>
        </div>
    </div>
}