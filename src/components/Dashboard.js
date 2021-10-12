import Sidebar from './Sidebar';
import Reviews from './Reviews';
import AvgRating from './AvgRating';
import Analysis from './Analysis';
import Visitors from './Visitors';

function Dashboard(props){
    return(
        <div className="dash">
            <Sidebar />
            <Reviews />
            <AvgRating />
            <Analysis />
            <Visitors />
            
        </div>
    )
}

export default Dashboard;