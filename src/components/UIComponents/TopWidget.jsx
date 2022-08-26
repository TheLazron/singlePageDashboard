import React from 'react';
import { Line } from 'react-chartjs-2';
import  {Sparklines, SparklinesLine} from 'react-sparklines';
function TopWidget({title, count, renderBadge, renderGraph, change}){

return(<div className="topWidget">
    <h2>{title}</h2>

    <div className="midSection">
    <span>{count}</span>
    {renderBadge && <p className={`badge ${change>0?'badge-green': 'badge-red'}`}>18%</p>}
    {renderGraph && <Sparklines data={[5, 8, 17, 20]} limit={5} width={120} height={50} margin={15}>
  <SparklinesLine color="blue"/>
</Sparklines>}
</div>
<p className="bottomLine">{change>=0?`${change} new subscribers` : `${Math.abs(change)} inactive users`}</p>
</div>)

}

export default TopWidget;