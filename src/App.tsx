
import React from 'react';
import './css/home.css';
import './css/footer.css';
import './css/header.css';
import './css/welcome.css';
import './css/learning.css';
import './css/detailLearning.css';
import './css/signin.css';
import './css/signup.css';
import './css/quiz.css';
import './css/speaking.css';
import './css/listen.css';
import './css/teacherPage.css';
import './css/menageTeacher.css';
import "toastr/build/toastr.min.css";

// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
// import List from './Admin/categories/List';
import Welcome from './pages/Welcome';
import Learning from './pages/Learning';
import DetailLearning from './pages/DetailLearning';
// import Contact from './pages/Contact';
import FileUser from './pages/FileUser';
// import User from './pages/User';


// import Login from './Component/user/Login';
import SignUp from './Component/user/SignUp';
import ThongKe from './Component/user/ThongKe';
import ExeQuiz from './pages/ExeQuiz';
import ExeSpeak from './pages/ExeSpeak';
import ExeWriteAndListen from './pages/ExeWriteAndListen';
import Login from './Component/user/Login';
// import Add from './Admin/categories/Add';
import toastr from "toastr";
// import Add from './features/Admin/categories/Add';
// import Edit from './features/Admin/categories/Edit';
// import List from './features/Admin/categories/List';
import ListUser from './features/Admin/Auth/listUser';
import AddUser from './features/Admin/Auth/AddUser';
// import Edit from './Admin/categories/Edit';
import Store from './pages/Store';
import ForgotPassword from './Component/user/ForgotPassword';
import NewPassword from './Component/user/NewPassword';
import List from './pages/admin/categories/List';
import Add from './pages/admin/categories/Add';
import Edit from './pages/admin/categories/Edit';
import User from './pages/user/User';
import Contact from './pages/contact/Contact';
import ListQuiz from './pages/admin/quizz/quiz/ListQuiz';
import FormQuiz from './pages/admin/quizz/quiz/FormQuiz';

import ListAnswerQuiz from './pages/admin/quizz/answerQuiz/ListAnswerQuiz';
import FormAnswerQuiz from './pages/admin/quizz/answerQuiz/FormAnswerQuiz';
import ListUserQuiz from './pages/admin/quizz/userQuiz/ListUserQuiz';
import FormUserQuiz from './pages/admin/quizz/userQuiz/FormUserQuiz';
import FormListenWrite from './pages/admin/ListenWrite/listenWrite/FormListenWrite';
import ListListenWrite from './pages/admin/ListenWrite/listenWrite/ListListenWrite';



import TeacherPage from './pages/teacher/TeacherPage';
import ManageTeacher from './pages/teacher/ManagementTeacher';
import CategoryTeacher from './pages/teacher/category/category';
import CategoryList from './pages/teacher/category/category';
import AddCategory from './pages/teacher/category/createCategory';




function App() {
  return (
    <div >
      <Routes>

        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='learning' element={<Learning />} />
          <Route path='detailLearning' element={<DetailLearning />} />
          <Route path='detailLearning/quiz' element={<ExeQuiz />} />
          <Route path='detailLearning/speak' element={<ExeSpeak />} />
          <Route path='detailLearning/writeAndListen' element={<ExeWriteAndListen />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fileuser" element={<FileUser />} />
          <Route path="user" element={<User />} />
          <Route path='store' element={<Store />} />
          <Route path='teacher' element={<TeacherPage />} />
          <Route path='menageteacher'  element={<ManageTeacher />}>
          
            <Route path="category" >
              <Route index element={<CategoryList />} />
              <Route path='add' element={<AddCategory />} />
              <Route path='edit/:id' element={<Edit />} />
            </Route>
          </Route>
        </Route>


        <Route path='admin' element={<AdminLayout />}>

          <Route index element={<Navigate to="category" />} />
          <Route path="category" >
            <Route index element={<List />} />
            <Route path='add' element={<Add />} />
            <Route path='edit/:id' element={<Edit />} />
          </Route>

          <Route path="user" >
            <Route index element={<ListUser />} />
            <Route path='add' element={<AddUser />} />
            <Route path='edit/:id' element={<Edit />} />
          </Route>

          {/* quizz */}
          <Route path="quiz" >
            <Route index element={<ListQuiz />} />
            <Route path='add' element={<FormQuiz />} />
            <Route path=':id/edit' element={<FormQuiz />} />
          </Route>

          <Route path="answerQuiz" >
            <Route index element={<ListAnswerQuiz />} />
            <Route path='add' element={<FormAnswerQuiz />} />
            <Route path=':id/edit' element={<FormAnswerQuiz />} />
          </Route>

          <Route path="userQuiz" >
            <Route index element={<ListUserQuiz />} />
            <Route path='add' element={<FormUserQuiz />} />
            <Route path=':id/edit' element={<FormUserQuiz />} />
          </Route>


          {/* listenWrite */}
          <Route path="listenWrite" >
            <Route index element={<ListListenWrite />} />
            <Route path='add' element={<FormListenWrite />} />
            <Route path=':id/edit' element={<FormListenWrite />} />
          </Route>

        </Route>

        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/newPassword/:email' element={<NewPassword />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>

      </Routes>



    </div>
  );
}

export default App;


