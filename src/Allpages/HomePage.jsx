import Sidebar from "../components/HomePage/Sidebar";

const HomePage = () => {
    return (
        <div className="flex h-[98vh] gap-2">
            <div className="bg-yellow-200 border border-black border-opacity-35  rounded-xl lg:w-1/5 w-1/3 p-4 flex flex-col justify-between"><Sidebar></Sidebar></div>
            <div className="bg-green-200 lg:w-4/5  w-2/3 border border-black  border-opacity-35  rounded-xl p-4">hello</div>        
        </div>
    );
};

export default HomePage;