import React from 'react'
import {useState}from 'react'
import { BarChart,BarChart2, Menu,Users, Settings, File,LogOut  } from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDEBAR_ITEMS = [
    // {
    //     name : "Dashboard",
    //     icon : BarChart2,
    //     color : "#6366f1",
    //     path: "/",
    // },
    // {
    //     name : "Profile",
    //     icon : File,
    //     color : "#6EE7B7",
    //     path: "/profile",
    // },
    {
        name : "Organisasi",
        icon : Users,
        color : "#EC4899",
        path: "/organisasi",
    },
   
    {
      name : "Logout",
      icon : LogOut,
      color : "#3B82F6",
      path: "/login",
  },
]

const Sidebar = () => {

  const [isOpen,setIsOpen] = useState(false)
  return (
    <motion.div 
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen? 'w-64':'w-20'}`}
    animate={{width:isOpen? 256:100}}
    >
      <div className="h-full bg-gray-700 bg-opacity-50 backdrop-blur-md flex p-4 flex-col border-r border-gray-600">
        <motion.button
        whileHover={{scale:1.1}}
        whileTop={{scale:0.9}}
        onClick={()=> setIsOpen(!isOpen)}
        className='p-2 rounded-full hover:bg-gray-600 transition-colors max-w-fit'
        >
          <Menu size={24}></Menu>
        </motion.button>

        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map((a)=>(
            <Link className='' key={a.name} to={a.path}>
              <motion.div
              className='mb-2 flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'
              whileHover={{x:4,scale:1}}
              >
                <a.icon size={20} style={{color: a.color, minWidth:"20px",  backgroundColor: 'rgba(255, 255, 255, 0.9)', padding:'4px',width:'35px', height:"35px",borderRadius:'3px'}}/>                
                <AnimatePresence>
                  {isOpen && (
                    <motion.span 
                      className='ml-4 whitespace-nowrap'
                      initial={{opacity:0, width:0}}
                      animate={{opacity:1, width:'auto'}}
                      exit={{opacity:0, width:0}}
                      transition={{duration:0.2, delay:0.3}}
                    
                    >
                    {a.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
