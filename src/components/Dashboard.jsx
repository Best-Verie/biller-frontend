import { NavLink } from 'react-router-dom';
export function Dashboard(props) {
    return (
        <div className="lg:flex lg:gap-5 lg:mx-16 items-center">
            <div className="lg:w-1/4 h-screen">
                <div className="text-lg font-bold text-black">WEB BILLER</div>

                <div className="">
                   </div>
                <div className="bg-white rounded shadow-lg my-2 p-5 text-sm">
                    <NavLink to="/balance/logs" className="block p-2">All Transactions</NavLink>
                    <NavLink to="/balance/add" className="block p-2 my-2">Buy power</NavLink>
                </div>

                <div className="bg-white rounded shadow-lg p-5 text-sm">
                    <NavLink to="/create/meter" className="block p-2" activeClassName="active">Register meter</NavLink>
                    <NavLink to="/balance/actions" className="block p-2 my-2">Meter balance</NavLink>
                    <NavLink to="/view/meters" className="block p-2 my-2">View meters</NavLink>
                </div>

            </div>

            <div className="lg:w-3/4 bg-black lg:h-screen px-5 py-2 text-white overflow-auto">
                {props.children}
            </div>
            <div className="bg-white rounded  my-3 p-5 text-xs sm:block ">
                &copy; 2022 ~ Webbiller
        </div>
        </div>
    );
}
