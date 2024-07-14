import './App.css'

function App() {

  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">
              TkWorksDesigns
            </span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>
              Home
            </a>
            <a href="#About" className='mr-5 hover:text-blue-400 duration-300'>
              About
            </a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>
              skills
            </a>
            <a href="#Blog" className='hover:text-blue-400 duration-300'>
              Blog
            </a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700 ' id='home'>
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center ">
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className=' text-3xl sm:text-6xl text-gray-900 font-medium mb-4 '>
              Hi!
              <br />
              I’m TkWorksDesigns
              <br />
              MobilApplication Developer
            </h1>
            <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sed perspiciatis ipsa aliquid at eaque non cumque omnis fugit cupiditate!</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6 '>
            <img src="/public/img/IMG_1350.JPG" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900 '>About Me</h1>
            <p className='pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis velit perspiciatis praesentium deserunt tempora saepe odit quam quaerat necessitatibus eius!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga sit expedita dolore, molestias nam harum ipsam eligendi dolorum reiciendis cupiditate quae tempore officiis necessitatibus assumenda hic facere, excepturi magni veritatis laboriosam alias quidem nobis pariatur. Nostrum voluptas excepturi mollitia est pariatur! Impedit aliquam vero sapiente ut cum repellendus tenetur pariatur iure repellat, mollitia sequi veniam obcaecati incidunt, quos maxime officia odit! Quaerat exercitationem consectetur inventore vel laudantium accusamus molestias neque hic amet voluptatibus suscipit, ducimus, cum debitis quo. Asperiores numquam praesentium facere debitis! Assumenda quae odio eligendi ad, voluptates blanditiis quas placeat cumque maiores fuga excepturi consectetur quod in.</p>
          </div>
          <div className=' flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Mobile Application
                  </h2>
                </div>
                <div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, error. Placeat voluptas ducimus similique nostrum corporis mollitia, eos officiis. Illo.
                </p>
                  <a href="#" className=' flex mt-3 text-green-500 items-center'>More
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Design
                  </h2>
                </div>
                <div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, error. Placeat voluptas ducimus similique nostrum corporis mollitia, eos officiis. Illo.
                </p>
                  <a href="#" className=' flex mt-3 text-green-500 items-center'>More
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Aplication
                  </h2>
                </div>
                <div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, error. Placeat voluptas ducimus similique nostrum corporis mollitia, eos officiis. Illo.
                </p>
                  <a href="#" className=' flex mt-3 text-green-500 items-center'>More
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/* left side*/}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="public/img/pc.jpg" alt="" className='rounded' />
          </div>
          {/* right side*/}
          <div className='lg:pl-12 lg;py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>
              My Skills
            </h1>
            <div className='w-full'>
              <h2>SwiftUI</h2>
              <div className='shadow bg-green-100 mt-2 w-full mb-10' >
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white ' style={{ width: "85%" }}>
                  85%
                </div>
              </div>
              <h2>Flutter</h2>
              <div className='shadow bg-green-100 mt-2 w-full mb-10'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white ' style={{ width: "70%" }}>
                  70%
                </div>
              </div>
              <h2>Android</h2>
              <div className='shadow bg-green-100 mt-2 w-full mb-10'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white ' style={{ width: "60%" }}>
                  60%
                </div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full mb-10'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white ' style={{ width: "50%" }}>
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
