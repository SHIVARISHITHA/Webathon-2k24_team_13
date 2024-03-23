import React from 'react'
import Navbar from "./Navbar";

function Profile() {
  return (
    <div>
            <Navbar/>
<div class="h-screen  mt-20  flex flex-wrap items-center  justify-center pb-12 ">
            <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 mb-10 fixed w-full z-50 bg-slate-300 bg-white  shadow-lg    transform   duration-200 easy-in-out ">
                <div class=" h-32  overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <img class="h-32 w-32 bg-white p-2 rounded-full " src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?b=1&s=170667a&w=0&k=20&c=lQxEqo4oY2z9-yUVMFdsJPYpMNRgOhi8-sFCz8Wt-cg=" alt="" />
                </div>
                <div class=" ">
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl font-bold">Ravi</h2>
                        <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?b=1&s=170667a&w=0&k=20&c=lQxEqo4oY2z9-yUVMFdsJPYpMNRgOhi8-sFCz8Wt-cg=" target="BLANK()">@Ravi</a>
                        <p class="mt-2 text-gray-500 text-sm">Believe in Yourself</p>
                    </div>
                    <hr class="mt-6" />
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">805 </span> Followers</p>
                        </div>
                        <div class="border"></div>
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span class="font-semibold">638 </span> Following</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
