import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch,useHistory } from "react-router-dom";
import JobAction  from "../redux/job/actions";
import HostAction  from "../redux/host/actions";
import { forEach } from "lodash";

const {initJob} = JobAction;
const {initHost} = HostAction;

const widgetStyle = {
    width: "350px",
    padding: "25px 45px",
    margin: "10px",
    border: "dotted 2px gray",
}
const itemValueStyle ={
    fontSize: "20px"
}
const itemTitleStyle = {
    color: "gray",
}

export default function Dashboard() {
  const [intOnline, setIntOnline] = React.useState(0);
  const [intDown, setIntDown] = React.useState(0);
  const [intMaintaince, setIntMaintaince] = React.useState(0);
  const [intJobNoScheduled, setIntJobNoScheduled] = React.useState(0);
  let history = useHistory();
  const { jobs } = useSelector((state) => state.Job);
  const { hosts } = useSelector((state) => state.Host);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initJob());
    dispatch(initHost());
  }, []);
  React.useEffect(() => {
    let nMaintaince = 0;
    let nNoSchedule = 0;
    jobs.forEach( job => {
        if(job.job_type == "MONITORING" && job.disabled == 1){
            nMaintaince += 1;
        }
        else if (job.schedule == null || job.schedule == ""){
            nNoSchedule += 1;
        }
    });
    setIntMaintaince(nMaintaince);
    setIntJobNoScheduled(nNoSchedule);
  }, [jobs]);
  React.useEffect(() => {
    let nOnline = 0;
    let nDown = 0;
    hosts.forEach(host => {
        if(host.active == 1){
            nOnline += 1;
        }
        else if(host.active == 0) {
            nDown += 1;
        }
    });
    setIntOnline(nOnline);
    setIntDown(nDown);
  }, [hosts]);

  return (
    <div className="widget" style={widgetStyle}>
        <div className="item">
            <div className="item-value" style={itemValueStyle}>{ intOnline }</div>
            <div className="item-title" style={itemTitleStyle}>Server Online</div>
        </div>
        <div className="item">
            <div className="item-value" style={itemValueStyle}>{ intDown }</div>
            <div className="item-title" style={itemTitleStyle}>Server Down</div>
        </div>
        <div className="item">
            <div className="item-value" style={itemValueStyle}>{ intMaintaince }</div>
            <div className="item-title" style={itemTitleStyle}>Server Maintaince</div>
        </div>
        <div className="item">
            <div className="item-value" style={itemValueStyle}>{ intJobNoScheduled }</div>
            <div className="item-title" style={itemTitleStyle}>Server job not scheduled</div>
        </div>
    </div>
  );
}
