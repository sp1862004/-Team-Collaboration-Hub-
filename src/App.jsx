import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserDashboard from './components/Dashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Sidebar from './layout/Sidebar';
import Chat from './components/Chat/Chat';
import ChatProvider from './context/ChatContext';
import ChatRoom from './components/Chat/ChatRoom';
import TaskForm from './components/Tasks/TaskForm';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Router>
        
        <AuthProvider>
        <Sidebar />
          
            <TaskProvider>
              <ChatProvider>
                <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/add-task" element={<TaskForm />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/chat" element={<ChatRoom />} />
                </Routes>
              </ChatProvider>
            </TaskProvider>
          <Footer/>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
