import Carousel from './Carousel';
import './App.css';
import h from './h.png'
function App() {
  return (
    <>
    <div className="w-full h-1/2  flex">
      
   
    <div className="w-3/6 h-2/6  mt-36">
      
    </div>
      <div className="flex  ml-48 mt-5">
        <div>
          <img
            className="  -mt-5 w-1/2"
            src="https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Bing-Logo-2020-present.png"
            alt=""

          />
          
        </div>
     <div className="  flex mr-96">
     <div className="text-white ">Images</div>
        
        <div className="text-white  ml-6">Videos</div>
        <div className="text-white  ml-6">Translate</div>
     </div>
       
       
      </div>
     
      <div className="flex mr-36  text-white">
        <div className="mt-5">
          
          SignIn
        </div>
      
       
        <div className="dropdown1  text-white text-sm inline  text-xs hover:border-white rounded">
            <li className="dropbtn1"><a href="#" ><i ></i></a>     
            <div>
          <img
            className="w-6 h-4 m-6 mt-7"
            src={h}
            alt=""
          />
        </div>

            <div className= "text-white text-sm font-bold ">
           
            </div>
            </li>
         
           
            <div className="dropdown-content1 text-black ">
              <div className="flex h2-6 space-x-24 cursor-pointer text-base m-1 mt-0"> 
               <div>
           
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Setting</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">SafeSearch</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Search History</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">My Bing </h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Privacy</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Feedback</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Customise your Homepage</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Show Menu Bar</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Show news and interests</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">Show homepage image</h2> 

                   
               </div>


               {/* <div className="ml-5">
               <h2 className="text-lg font-bold ">Your Account</h2>           
               <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
                    <h2 className ="mt-2 hover:text-blue-700 ml-5 hover:underline cursor-pointer">All Services</h2> 
               </div> */}
              </div>
                   
                   
                    
            </div>
        </div> 

      </div>
     
      </div>

      <div className="ml-48" >
        <input type="text" className="searchBar ml-42 border border-black" />
      </div>
      <div
        style={{
          maxWidth: 1000,
          maxHeight: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        <div className =" mt-64 w-full">
          
      
        <Carousel show={4} infiniteLoop>
          <div >
            <div style={{ padding: 8 }}  >
              <div className="rounded-3xl">
                
              </div>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/pjimage-2022-04-05T145652.460.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2021/03/pjimage-33.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/rouble.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/rouble.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/rouble.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/rouble.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <div className="bg-black text-2xl text-white">
                US stops Russian bond payments
              </div>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2022/04/rouble.jpg?impolicy=website&width=770&height=431"
                alt="placeholder"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Carousel>
          </div>
      </div>
    </>
  );
}

export default App;
