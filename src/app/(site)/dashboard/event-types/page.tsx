'use server'
import DashboardNav from "@/app/components/DashboardNav"
import TimeSelect from "@/app/components/TimeSelect";
import { session } from "@/libs/session";
import { EventTypeModel } from "@/models/EventType";
import mongoose from "mongoose"

const weekdaysName=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];



export default async function EventTypesPage()
{
    await mongoose.connect(process.env.MONGODB_URI); 
    const email=await session().get('email');
    EventTypeModel.find({email});
    return(
        <div>
            <DashboardNav/> 
            {JSON.stringify(eventTypes)}
            Event types...

            <form className="p-2 bg-gray-200 rounded-lg  ">

            Create new event type:
                <div className="grid grid-cols-2 gap-4 ">
                 <div>
                    <label>
                        <span>title</span>
                        <input type="text" placeholder="title"></input>
                    </label>
                    
                    <label>
                        <span>description</span>
                        <textarea placeholder="description"></textarea>
                    </label>

                    <label>
                        <span>event length (minutes)</span>
                        <input type="number" placeholder="30">min</input>
                    </label>

                </div>
                
                <div>
                   
                        <span className="label">availability</span>

                        <div className="grid grid-cols-2 gap-2 items-center">

                        {weekdaysName.map(day=>(
                            <>
                                {day}
                                <div className="inline-flex gap-2 items-center ml-2">
                                    <TimeSelect step={30}/>
                                    <span>-</span>
                                    <TimeSelect step={30 }/> 
                                </div>
                            </>    
                        ))}
                    
                    </div>

                </div>
                </div>  
                <div className="flex justify-center">
                    <button className="bg-blue-600 text-white px-8  py-2 rounded-full">Save</button>  
                </div>
                
            </form>
        </div>
    );  
}