import "./Discover.css";
import TopHeading from '../topHeading/TopHeading';
import {discover} from '../../dummyData'
function Discover() {
    return (
      <div className="discover">
        <div className="disContainer">
          <TopHeading title="Discover" />
        </div>
        <div className="content">
            {discover.map((val)=>{
return (
<div className='box'>
    <div className="img">
        <img src={val.cover} alt=""/>
    </div>
    <h1 className='title'>{val.title}</h1>
</div>)
            })}
        </div>
      </div>
    );
}

export default Discover
