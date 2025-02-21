import { CgNotes } from "react-icons/cg";
import { MdDoneOutline } from "react-icons/md";
import { RiProgress1Line, RiTodoLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const TaskCategory = [
        {
            title: "All Tasks",
            icon:<CgNotes></CgNotes>,
            link: "/"
        },
        {
            title: "To-Do",
            icon:<RiTodoLine></RiTodoLine>,
            link: "todo"
        },
        {
            title: "In-Progrss",
            icon:<RiProgress1Line></RiProgress1Line>,
            link: "inprogress"
        },
        {
            title: "Done",
            icon: <MdDoneOutline></MdDoneOutline>,
            link: "done"
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
                        <Link to={Tasks.link} key={id} className="my-2 flex items-center gap-2 text-xl hover:bg-gray-200 p-2 rounded-xl transition-all duration-300">
                            {Tasks.icon} {Tasks.title}
                        </Link>
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