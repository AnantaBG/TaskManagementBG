import { Button, Card, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { BiEdit, BiTrash, BiX } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { MdDoneAll } from "react-icons/md";
import { RiProgress1Fill, RiTodoFill } from "react-icons/ri";
// ,
//         {
//           "title": "Book Doctor Appointment",
//           "description": "Schedule a check-up with Dr. Smith."
//         },
//         {
//           "title": "Pay Bills",
//           "description": "Pay electricity, internet, and phone bills."
//         },
//         {
//           "title": "Walk the Dog",
//           "description": "Take Max for a walk in the park."
//         },
//         {
//           "title": "Finish Project Proposal",
//           "description": "Complete the project proposal for the client meeting."
//         },
//         {
//           "title": "Learn a New Skill",
//           "description": "Start learning Python programming."
//         },
//         {
//           "title": "Organize Photos",
//           "description": "Sort and organize photos on the computer."
//         },
//         {
//           "title": "Call Mom",
//           "description": "Catch up with Mom and see how she's doing."
//         },
//         {
//           "title": "Plan Weekend Trip",
//           "description": "Research and plan a weekend getaway."
//         },
//         {
//           "title": "Read a Book",
//           "description": "Continue reading 'The Hitchhiker's Guide to the Galaxy'."
//         }

const AllDataCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const handleUpdateTask = async () =>{
    setUpdateModalOpen(true)
}
const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
  };
      const handleAddTask = async () =>{
          setModalOpen(true)
      }
      const handleCloseModal = () => {
          setModalOpen(false);
        };
    const cardData = [
        {
          "title": "Grocery Shopping",
          "description": "Buy milk, eggs, bread, and cheese from the supermarket."
        }
      ]
    return (
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-2     ">
            {cardData && cardData.map((data ,id) => <Card  className="shadow-2xl shadow-black min-w-64 sm:min-w-72  md:min-w-64 lg:min-w-72 xl:min-w-80   max-w-64 sm:max-w-72  md:max-w-64 lg:max-w-72 xl:max-w-80 mx-auto bg-green-100 rounded-md" key={id}>
              <div>
              <p className="text-xl font-semibold">{data.title} </p>
              <h1 className="opacity-70 my-2">{data.description}</h1>
              </div>
            <div className="w-full">
            <div className="flex gap-1 mx-auto justify-center">
              <Button ><RiTodoFill></RiTodoFill></Button>
              <Button className="bg-slate-500"><RiProgress1Fill></RiProgress1Fill></Button>
              <Button className="bg-green-400"><MdDoneAll></MdDoneAll></Button>
              <Button onClick={() => handleUpdateTask()} className="bg-stone-500"><BiEdit></BiEdit></Button>
            </div>
            <div className="flex justify-center mx-auto mt-10">
            <Button className="bg-red-600"><BiTrash></BiTrash></Button>
            </div>
            </div>
            
            </Card>
            
        )
            }
            <Card onClick={() => handleAddTask()}  className="shadow-2xl min-h-[260px] shadow-black min-w-64 sm:min-w-72  md:min-w-64 lg:min-w-72 xl:min-w-80   max-w-64 sm:max-w-72  md:max-w-64 lg:max-w-72 xl:max-w-80 mx-auto bg-green-100 rounded-md">
              <div className=" flex flex-col justify-center items-center">
              <CgAdd className="text-5xl"></CgAdd>
              <h2 className="text-2xl font-bold">Add A Task</h2>
              </div>
              
            </Card>
            {modalOpen &&
         (
                        
<div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px]  h-auto  flex flex-col text-center ">
                    <Card className="bg-teal-100 ">
                    <form >
                    <TextInput
                    className="mb-5"
                    type="text" 
                    placeholder="Task Title"
                    name="title"
                    ></TextInput>
                    
                    <Textarea
                    rows={5}  
                    type="text" 
                    placeholder="Task Description"
                    name="Desc"
                    ></Textarea>


                    <TextInput type="submit"  value="Add" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5" />
                        
                        
                    </form>
                    

                    <button  className=" flex text-5xl justify-center bottom-0" onClick={handleCloseModal}>
                      <BiX></BiX>
                    </button>
                    
                    
                    </Card>
                    
    
                </div>
      )} 
      {updateModalOpen &&
         (
                        
<div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px]  h-auto  flex flex-col text-center ">
                    <Card className="bg-stone-300">
                    <form >
                    <TextInput
                    className="mb-5"
                    type="updatetext" 
                    placeholder="Update Task Title"
                    name="title"
                    ></TextInput>
                    
                    <Textarea
                    rows={5}  
                    type="text" 
                    placeholder="Update Task Description"
                    name="Desc"
                    ></Textarea>


                    <TextInput type="submit"  value="Update" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5" />
                        
                        
                    </form>
                    

                    <button  className=" flex text-5xl justify-center bottom-0" onClick={handleCloseUpdateModal}>
                      <BiX></BiX>
                    </button>
                    
                    
                    </Card>
                    
    
                </div>
      )}
        </div>
    );
};

export default AllDataCard;