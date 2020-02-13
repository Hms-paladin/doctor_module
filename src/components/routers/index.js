import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DoctorLogin from '../../components/DoctorLogin/DoctorLogin'
import DoctorForgot from '../../components/DoctorLogin/DoctorForget'
import DashboardMaster from '../../components/DoctorDashboard/DashboardMaster'
import QueueComp from "../Queuecomp/queuecomp";
import AdvertisementMaster from '../../components/AdvertisementBooking/AdvertisementMaster'
import AppointmentMaster from "../../components/AppointmentShedule/AppointmentMaster"
import CancelledDashboard from '../../components/CancelledHistory/CancelledDashboard'
import ManageServiceMaster from '../../components/ManageService/ManageServiceMaster'
import MediaUploadsMaster from '../../components/MediaUploads/MediaUploadsMaster'
import TodayAppointmentsDashboard from '../../components/TodayAppointments/TodayAppointmentsDashboard'
import Drawerpage from "../../components/Drawer page/Drawerpage";
import UploadsMaster from '../../components/Upload/UploadsMaster'
import Revenuemaster from '../../components/Revenue/RevenueMaster'
import ViewDetailsMaster from '../../components/ViewDetails/ViewDetailsMaster'
import ResetPassword from '../../components/DoctorLogin/ResetPassword' 
const AppRouter = () => (
  <BrowserRouter>
    <Drawerpage>
      <Switch>
        <Route path="/login" component={DoctorLogin} exact/>
        <Route path="/forgot" component={DoctorForgot} />
        <Route path="/ResetPassword" component={ResetPassword} />  
        <Route path="/dashboard" component={DashboardMaster}  />
        <Route path="/viewdetails" component={ViewDetailsMaster}  />
        <Route path="/advertise" component={AdvertisementMaster}  />
        <Route path="/totaysAppointment" component={TodayAppointmentsDashboard} />  
        <Route path="/AppointShedule" component={AppointmentMaster}  />       
        <Route path="/queue" component={QueueComp} />
        <Route path="/cancelhistory" component={CancelledDashboard} />
        <Route path="/manageservice" component={ManageServiceMaster}  />
        <Route path="/mediaupload" component={MediaUploadsMaster} />
        <Route path="/upload" component={UploadsMaster} />
        <Route path="/revenue" component={Revenuemaster} />
         
      </Switch>
    </Drawerpage>
  </BrowserRouter>
);

export default AppRouter;
