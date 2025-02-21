import AllDataCard from "./AllDataCard";


const AllTasks = () => {
   
    return (
        <>
        <div className="flex flex-col">
            
            <AllDataCard></AllDataCard>
        </div>
        {/* {modalOpen &&
         (
            <div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px]  h-auto  flex flex-col text-center ">
                    <Card className="bg-teal-200 ">
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
      )}  */}
        </>
         );  
};

export default AllTasks;
