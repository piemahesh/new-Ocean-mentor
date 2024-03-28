import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Register } from "./pages/reg/reg";

import { AddDateDivision } from "./pages/filters/TotalFilter/AddDateDivision";
import { CourseDivision } from "./pages/filters/TotalFilter/CourseDivision";
import { DateDivision } from "./pages/filters/TotalFilter/DateDivision";
import { FilterTime } from "./pages/filters/TotalFilter/FilterTime";
import { FilterAddDate } from "./pages/filters/TotalFilter/FilterAddDate";
import { FilterCourse } from "./pages/filters/TotalFilter/FilterCourse";
import { FilterDate } from "./pages/filters/TotalFilter/FilterDate";
import { FilterDivision } from "./pages/filters/TotalFilter/FilterDivision";
import { FilterSort } from "./pages/filters/TotalFilter/FilterSort";
import { Landing } from "./pages/landing/landing";
import { SortDivision } from "./pages/filters/TotalFilter/SortDivision";
import { TimeDivision } from "./pages/filters/TotalFilter/TimeDivision";

import { QrScanner } from "./pages/scan-qr/scan";
import { Edit } from "./pages/edit-profile/Edit-Profile";
import { AddGroup } from "./pages/add-group/AddGroup";
import { Notifiy } from "./pages/notification/Notifiy";
import { Course } from "./pages/course/Course";
import { GroupInfo } from "./pages/group-info/GroupInfo";
import { Notes } from "./pages/notes/Notes";
import { Task } from "./pages/task/Task";
import { Profile } from "./pages/profile/Profile";
import { Mentor } from "./pages/mentor/Mentor";
import { CreateGroup } from "./pages/create-group/CreateGroup";
import { Update } from "./pages/update/Update";
import { Student } from "./pages/student/Student";
import {
  Forget,
  ForgetPassword,
  NewPassword,
  VerifyPassword,
} from "./pages/forget-pswd/ForgetPassword";
import { StudentAttendance } from "./pages/student-attendance/StudentAttendance";
import { UpdateDetails } from "./pages/update-details/UpdateDetails";
import { CreditPercentange } from "./pages/credit-percentange/Credit";
import { LeaderBoard } from "./pages/leaderboard/LeaderBoard";
import { BatchBoard } from "./pages/batchboard/BatchBoard";
import { BatchInfo } from "./pages/batch-info/BatchInfo";
import { AnotherMentorPage } from "./pages/another-mentor/AnotherMentorPage";
import { Syllabus } from "./pages/syllabus/Syllabus";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoutes from "./ProtectedRoutes";
import { Jars } from "./pages/6jars/Jars";
import NetworkStatus from "./components/networkStatus/Network";
import { TaskView } from "./pages/task/TaskView";
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/6jars/query/" Component={Jars} />
            <Route path="/register" Component={Register} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/updatedetails" Component={UpdateDetails} />
              <Route path="/home" Component={Landing}>
                <Route path="filter" element={<FilterDivision />}>
                  <Route path="sort" element={<FilterSort />} />
                  <Route path="course" element={<FilterCourse />} />
                  <Route path="time" element={<FilterTime />} />
                  <Route path="date" element={<FilterDate />} />
                  <Route path="add-date" element={<FilterAddDate />} />
                </Route>
                <Route path="sort" element={<SortDivision />} />
                <Route path="course" element={<CourseDivision />} />
                <Route path="time" element={<TimeDivision />} />
                <Route path="date" element={<DateDivision />} />
                <Route path="add-date" element={<AddDateDivision />} />
              </Route>
              <Route path="/qr-scan" Component={QrScanner} />
              <Route path="/forget" Component={Forget}>
                <Route index element={<ForgetPassword />} />
                <Route path="verify" element={<VerifyPassword />} />
                <Route path="newpassword" element={<NewPassword />} />
              </Route>
              <Route path="/profile" Component={Profile} />
              <Route path="/edit" Component={Edit} />
              <Route path="/addgroup" Component={AddGroup} />
              <Route path="/notifiy" Component={Notifiy} />
              <Route path="/course" Component={Course} />
              <Route path="/groupinfo/:batchId" Component={GroupInfo} />
              <Route path="/notes/:batchId" Component={Notes} />
              <Route path="/task/:batchId" Component={Task} />
              <Route path="/taskview/:taskId" Component={TaskView} />
              <Route path="/mentor" Component={Mentor} />
              <Route
                path="/another-mentor-page/:mentorId"
                Component={AnotherMentorPage}
              />
              <Route path="/addcourse" Component={CreateGroup} />
              <Route path="/student" Component={Student}>
                <Route path="filter" element={<FilterDivision />}>
                  <Route path="sort" element={<FilterSort />} />
                  <Route path="course" element={<FilterCourse />} />
                  <Route path="time" element={<FilterTime />} />
                  <Route path="date" element={<FilterDate />} />
                  <Route path="add-date" element={<FilterAddDate />} />
                </Route>
                <Route path="sort" element={<SortDivision />} />
                <Route path="course" element={<CourseDivision />} />
                <Route path="time" element={<TimeDivision />} />
                <Route path="date" element={<DateDivision />} />
                <Route path="add-date" element={<AddDateDivision />} />
              </Route>
              <Route path="/update/:batchId" Component={Update} />
              <Route
                path="/studentattendance/:studentId"
                Component={StudentAttendance}
              />
              <Route path="/credit" Component={CreditPercentange} />
              <Route path="/leader" Component={LeaderBoard} />
              <Route path="/batch" Component={BatchBoard} />
              <Route path="/batchinfo" Component={BatchInfo} />
              <Route path="/syllabus" Component={Syllabus} />
            </Route>
          </Routes>
        </Router>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
