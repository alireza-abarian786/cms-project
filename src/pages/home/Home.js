import './Home.css'
import Card from '../../components/card/Card'
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InsightsIcon from '@mui/icons-material/Insights';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChartExample from '../../components/chartLine/chartBar';
import DonutChart from '../../components/chartLine/DonutChart';


export default function Home() {
  return (
    <div className='home'>

      <h3 className='home-title'>
        <HomeIcon className='homeIcon' sx={{fontSize: "40px"}}/>
        <span>Dashboard</span>
      </h3>

      <div className='card-wrapper'>
        <Card des="Increased by 60%" number="$ 15,0000" icon={<InsightsIcon />} title="Weekly Sales" background="bg-gradient-purple" />
        <Card des="Decreased by 10%" number="45,6334" icon={<BookmarkBorderIcon />} title="Weekly Orders" background="bg-gradient-blue" />
        <Card des="Increased by 5%" number="95,5741" icon={<DiamondIcon />} title="Visitors Online" background="bg-gradient-green" />
      </div>

      <div className='chart-container'>
        <div className='bar-chart-wrapper'>
          <div className='chart-title'>
            <h4>Visit And Sales Statistics</h4>
            <ul>
              <li><span class="color-1"></span> Label 1</li>
              <li><span class="color-2"></span> Label 2</li>
              <li><span class="color-3"></span> Label 3</li>
            </ul>
          </div>

          <ChartExample style={{height: "60%"}} />
        </div>

        <div className='donut-chart-wrapper'>
          <h4>Traffic Sources</h4>

          <DonutChart />

        </div>
      </div>

      <div className='tickets-container'>
        <div className="card-tickets">
          <div className="card-tickets__title">
            <h4>Recent Tickets</h4>
          </div>
          <div className="card-tickets__body">

            <table className="table">
              <thead>
                <tr>
                  <th>Assignee</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Tracking ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='user-image-container'>
                      <img src="images/profile.jpg" alt="profile img" style={{width: "40px", height: "40px", borderRadius: "100%"}} />
                      <span>David Grey</span>
                    </div>
                  </td>
                  <td>Fund is not recieved</td>
                  <td className='badge badge-color-1'><label>DONE</label></td>
                  <td>Dec 5, 2017</td>
                  <td>WD-12345</td>
                </tr>
                <tr>
                  <td>
                    <div className='user-image-container'>
                      <img src="images/profile.jpg" alt="profile img" style={{width: "40px", height: "40px", borderRadius: "100%"}} />
                      <span>David Grey</span>
                    </div>
                  </td>
                  <td>Fund is not recieved</td>
                  <td className='badge badge-color-2'><label>PROGRESS</label></td>
                  <td>Dec 5, 2017</td>
                  <td>WD-12345</td>
                </tr>
                <tr>
                  <td>
                    <div className='user-image-container'>
                      <img src="images/profile.jpg" alt="profile img" style={{width: "40px", height: "40px", borderRadius: "100%"}} />
                      <span>David Grey</span>
                    </div>
                  </td>
                  <td>Fund is not recieved</td>
                  <td className='badge badge-color-3'><label>ON HOLD</label></td>
                  <td>Dec 5, 2017</td>
                  <td>WD-12345</td>
                </tr>
                <tr>
                  <td>
                    <div className='user-image-container'>
                      <img src="images/profile.jpg" alt="profile img" style={{width: "40px", height: "40px", borderRadius: "100%"}} />
                      <span>David Grey</span>
                    </div>
                  </td>
                  <td>Fund is not recieved</td>
                  <td className='badge badge-color-4'><label>REJECTED</label></td>
                  <td>Dec 5, 2017</td>
                  <td>WD-12345</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
