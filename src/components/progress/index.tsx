import "./index.css";
function Progress({fraction}:{fraction:number}){
    const perc = (100-fraction)*560/100; //565.48
    return <>
        <div className="area_prog center"> 
            <svg>
                <circle r="90" cx="100" cy="100" fill="transparent"    strokeDasharray="560" strokeDashoffset="0"></circle>
                <circle r="90" cx="100" cy="95" strokeDasharray="565.48" strokeDashoffset={perc}></circle>
                <text x="75" y="110" fill="white">{fraction+"%"}</text>
            </svg>  
        </div>
    </>
}
export default Progress;