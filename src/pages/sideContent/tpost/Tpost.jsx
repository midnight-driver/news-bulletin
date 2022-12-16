import './tpost.css';
import TopHeading from '../../../components/topHeading/TopHeading'
import {tpost} from '../../../dummyData'
function Tpost() {
    return (
        <>
<div className="tpost">
<TopHeading title='Tiktok Post'/>
{tpost.map((val)=>{
    return(
        <div className="box flexSB">
            <div className="img">
                <img src={val.cover} alt=""/>
            </div>
            <div className="text">
                <h1 className='title'>{val.title.slice(0,35)}...</h1>
                <span>a year ago</span>
            </div>
        </div>
    )
})}
</div>
        </>
    )
}

export default Tpost
