/* eslint-disable no-unused-vars */
import { Button, Card, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { BiEdit, BiTrash, BiX } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { MdDoneAll } from "react-icons/md";
import { RiProgress1Fill, RiTodoFill } from "react-icons/ri";
import UseAxiosPublic from "../../Auth/UseAxiosPublic";

const AllDataCard = () => {
    const axiosPublic = UseAxiosPublic();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ title: "", description: "", category: "To-Do" });
    const [cardData, setCardData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [todoDisabled, setTodoDisabled] = useState(true);
    const [inProgressDisabled, setInProgressDisabled] = useState(false);
    const [doneDisabled, setDoneDisabled] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosPublic.get('/allTasks');
                if (!response.data) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setCardData(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [refresh]);

    const handleUpdateTask = (task) => {
        setSelectedTask(task);
        setNewTask({ title: task.title, description: task.description, category: task.category });
        setUpdateModalOpen(true);

        setTodoDisabled(task.category === "To-Do");
        setInProgressDisabled(task.category === "In Progress");
        setDoneDisabled(task.category === "Done");
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const response = await axiosPublic.delete(`/alltasks/${taskId}`);
            if (!response.data) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setCardData(cardData.filter(task => task._id !== taskId));
            console.log("Task deleted successfully:", response.data);

        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const handleCloseUpdateModal = () => {
        setUpdateModalOpen(false);
        setSelectedTask(null);
        setNewTask({ title: "", description: "", category: "" });
        setTodoDisabled(false);
        setInProgressDisabled(false);
        setDoneDisabled(false);
    };

    const handleAddTask = () => {
        setModalOpen(true);
        setTodoDisabled(false);
        setInProgressDisabled(false);
        setDoneDisabled(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setNewTask({ title: "", description: "", category: "" });
    };

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleCategoryClick = (taskId, category) => {
        const updatedCardData = cardData.map(task => {
            if (task._id === taskId) {
                return { ...task, category: category };
            }
            return task;
        });

        setCardData(updatedCardData);

        if (category === "To-Do") {
            setTodoDisabled(true);
            setInProgressDisabled(false);
            setDoneDisabled(false);
        } else if (category === "In Progress") {
            setTodoDisabled(false);
            setInProgressDisabled(true);
            setDoneDisabled(false);
        } else if (category === "Done") {
            setTodoDisabled(true);
            setInProgressDisabled(true);
            setDoneDisabled(true);
        }

        axiosPublic.patch(`/alltasks/${taskId}`, { category }).then(() => {
            setRefresh(!refresh);
        }).catch(error => {
            console.error("Error updating task category:", error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPublic.post('/alltasks', newTask);
            if (!response.data) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setRefresh(!refresh);
            handleCloseModal();
            console.log("Task added successfully:", response.data);
            setNewTask({ title: "", description: "", category: "" });

        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPublic.patch(`/alltasks/${selectedTask._id}`, newTask);
            if (!response.data) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setRefresh(!refresh);
            handleCloseUpdateModal();
            console.log("Task updated successfully:", response.data);
            setNewTask({ title: "", description: "", category: "" });

        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
            {cardData.map((data) => (
                <Card key={data._id} className="shadow-2xl shadow-black min-w-64 sm:min-w-72 md:min-w-64 lg:min-w-72 xl:min-w-80 max-w-64 sm:max-w-72 md:max-w-64 lg:max-w-72 xl:max-w-80 mx-auto bg-green-100 rounded-md">
                    <div>
                        <p className="text-xl font-semibold">{data.title}</p>
                        <h1 className="opacity-70 my-2">{data.description}</h1>
                        <h1 className="opacity-70 my-2">{data.category}</h1>
                    </div>
                    <div className="w-full">
                        <div className="flex gap-1 mx-auto justify-center">
                            <Button
                                onClick={() => handleCategoryClick(data._id, "To-Do")}
                                disabled={data.category === "To-Do"}
                            >
                                <RiTodoFill />
                            </Button>
                            <Button
                                className="bg-slate-500"
                                onClick={() => handleCategoryClick(data._id, "In Progress")}
                                disabled={data.category === "In Progress"}
                            >
                                <RiProgress1Fill />
                            </Button>
                            <Button
                                className="bg-green-400"
                                onClick={() => handleCategoryClick(data._id, "Done")}
                                disabled={data.category === "Done"}
                            >
                                <MdDoneAll />
                            </Button>
                            <Button onClick={() => handleUpdateTask(data)} className="bg-stone-500">
                                <BiEdit />
                            </Button>
                        </div>
                        <div className="flex justify-center mx-auto mt-10">
                            <Button className="bg-red-600" onClick={() => handleDeleteTask(data._id)}>
                                <BiTrash />
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}

            <Card
                onClick={handleAddTask}
                className="shadow-2xl min-h-[260px] shadow-black min-w-64 sm:min-w-72 md:min-w-64 lg:min-w-72 xl:min-w-80 max-w-64 sm:max-w-72 md:max-w-64 lg:max-w-72 xl:max-w-80 mx-auto bg-green-100 rounded-md"
            >
                <div className="flex flex-col justify-center items-center">
                    <CgAdd className="text-5xl" />
                    <h2 className="text-2xl font-bold">Add A Task</h2>
                </div>
            </Card>

            {modalOpen && (
                <div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px] h-auto flex flex-col text-center ">
                    <Card className="bg-teal-100 ">
                        <form onSubmit={handleSubmit}>
                            <TextInput
                                className="mb-5"
                                type="text"
                                placeholder="Task Title"
                                name="title"
                                value={newTask.title}
                                onChange={handleInputChange}
                                required
                            />

                            <Textarea
                                rows={5}
                                type="text"
                                placeholder="Task Description"
                                name="description"
                                value={newTask.description}
                                onChange={handleInputChange}
                            />

                            <Button type="submit" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5">
                                Add
                            </Button>
                        </form>

                        <button className="flex text-5xl justify-center bottom-0" onClick={handleCloseModal}>
                            <BiX />
                        </button>
                    </Card>
                </div>
            )}

            {updateModalOpen && (
                <div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px] h-auto flex flex-col text-center">
                    <Card className="bg-stone-300">
                        <form onSubmit={handleUpdateSubmit}>
                            <TextInput
                                className="mb-5"
                                type="text"
                                placeholder="Update Task Title"
                                name="title"
                                value={newTask.title || selectedTask?.title || ""}
                                onChange={handleInputChange}
                                required
                            />

                            <Textarea
                                rows={5}
                                type="text"
                                placeholder="Update Task Description"
                                name="description"
                                value={newTask.description || selectedTask?.description || ""}
                                onChange={handleInputChange}
                            />

                            <Button type="submit" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5">
                                Update
                            </Button>
                        </form>

                        <button className="flex text-5xl justify-center bottom-0" onClick={handleCloseUpdateModal}>
                            <BiX />
                        </button>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default AllDataCard;