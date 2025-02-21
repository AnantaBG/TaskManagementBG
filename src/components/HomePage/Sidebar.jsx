import { CgNotes } from "react-icons/cg";
import { MdDoneOutline } from "react-icons/md";
import { RiProgress1Line, RiTodoLine } from "react-icons/ri";

const Sidebar = () => {
    const TaskCategory = [
        {
            title: "All Tasks",
            icon:<CgNotes></CgNotes>
        },
        {
            title: "To-Do",
            icon:<RiTodoLine></RiTodoLine>
        },
        {
            title: "In-Progrss",
            icon:<RiProgress1Line></RiProgress1Line>
        },
        {
            title: "Done",
            icon: <MdDoneOutline></MdDoneOutline>
        }
    ]
        
    
    return (
        <>
            <div>
                <h2 className="text-xl font-semibold">user.DisplayName</h2>
                <h2 className="my-2 text-gray-600">user.email</h2>
                <hr />
            </div>
            <div className="">
                {
                    TaskCategory.map((Tasks, id) => (
                        <div key={id} className="my-2 flex items-center gap-2 text-xl hover:bg-gray-200 p-2 rounded-xl transition-all duration-300">
                            {Tasks.icon} {Tasks.title}
                        </div>
                    )
                )
                }
            </div>
            <div>
                <button className="w-full bg-slate-500 text-white p-1 rounded">Log-Out</button>
            </div>
        </>
    );
};

export default Sidebar;