import "./index.css";
function Progress(){
    return <>
        <div className="area_prog center"> 
            <svg>
                <circle cx="95" cy="95" strokeDasharray="7" fill="transparent" r="80"></circle>
                <circle cx="95" cy="90" r="80"></circle>
                <text x="75" y="110" fill="white">55%</text>
            </svg>  
        </div>
    </>
}
export default Progress;