export default function TimeSelect({step=30}:{step:30 | 60}){
    let times=[]; 
    for(let i=0;i<24;i++)
    {
        times.push((i<10 ? '0'+i : i)+ ':00');
        if(step==30)
        {
            times.push((i<10 ? '0'+i : i)+ ':30')
        } 
    }
     return (
        <select>
            {times.map(time=>(
                <option value={time}>{time}</option>
            ))} 
            
        </select> 
     );
}