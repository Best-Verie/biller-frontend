import { NavLink } from 'react-router-dom';
export function Dashboard(props) {
    return (
        <div className="lg:flex lg:gap-5 lg:mx-16 items-center h-screen">
            <div className="lg:w-1/4">
                <div className="text-lg font-bold text-green-600">E-BILLER</div>

                <div className="">
                   </div>
                <div className="bg-white rounded shadow-lg my-2 p-5 text-sm">
                    <NavLink to="/balance/logs" className="block p-2">My Transactions</NavLink>
                    <NavLink to="/balance/add" className="block p-2 my-2">Buy electricity</NavLink>
                    <NavLink to="/create/meter" className="block p-2" activeClassName="active">Buy a meter</NavLink>

                </div>

            </div>

            <div className="lg:w-3/4 bg-green-600 lg:h-screen px-5 py-2 text-white overflow-auto">
                {props.children}
            </div>
        </div>
    );
}
