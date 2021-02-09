import React from "react";
import ReactDOM from "react-dom";
import './styles.css';


const logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAkFBMVEX///8jICEAAAAgHR4dGhscGRoRDA4VERIaFxgZFRb7+/sOCAry8vIGAAD5+fkJAAMmIyTu7u7k5OTd3d0uKyyioaHGxsZXVVZ1dHTo6OiIh4eOjY1mZGVDQULX1te7urp8e3vDwsI4NTaZmJhMSkuysbIwLi9VU1SmpaVBP0BKSElhX2DPz892dXVsamudnJwB9okYAAAMyUlEQVR4nO1cV5uyOhCWBIhIs6PYe133//+7A0jJTIKru9959GLeS2mTyfSZ2GgQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBALhLej0et130/DJ6E2iU7+/vqzeTcinojtyXMvknDvs+920fCaOTHAjB9u9m5oPROvLLxlkGLxPBknBzTZk+IN3E/Rx+GaAQ4ZzezdFn4Yu4pDhTN9N0qchthGL7PjdJH0YgksTsci/vpumD8N4bSI9i4J30/Rh6MwgizgJEUZr2oQcOr6bos/Dxpc5FFL+ocLbi5JBtrN4NzkfiW7E7KZlWYK1l513E/OhCK7xZbs9fO3G76aEQCAQCATCK2h5XqvmkjcebuJl/D30lCue8tP99w/KaVteJ0Pt8p5EcLzNzjdtiT44bl3mCiFctp+AK/N4ez4s1ch6OJpFk/+1lO3NF6vVajH8MSTrHie37dpoJ5hNJ8M/fPLo+45pOuykfvMofKtMNdi5CqS7UyYsM4muL1CSvBsTZtNVWyLecLGJ43iz0HFvvNpNkovH4U/yN15NZj4rcamPXFvDJWeh7aRdrASmYzP2253rXdy8lyEOSHG8myu1OQzDvhTiuuOi/E1+4nqyc3aC9uN4F+2bYSaMbns6R1/ZHfrCt5OLodgPHjBpvIjati3XYRy3PdEqe+f7JASgPYXb3vxG31ZVRmqEsLzaiVz0jfCuV8GEVZ9nkq4t2k7+qzWrJG4cr1mzfCBhrqydwXEmXTT9i96+JW+ZrP2msmrOIlWQvME6NPGd2d1hVPf6egyY3A5rA0m8YQ4lC88ouMi1EGda7szRrwirOrQbAWUxWVYlR9cZg4tx9Y2CYOK42lUb9havenVi+lvTu7Gm/IRgBFsZoVwbi33lA9xKeDhuC/CjW2zjRn6Zub6rzHUdKlvvHAp1mjALX9R2dheYzfKqgao3gmU9gxKI80s8Ci6ok2HOqotXlUMJOYvGfI9q+yx3FTEUOisr1h4NhQfVI52pIqfJc+o+j0d2LYPSt8nGrXfQvFOGGL3AIW+Lez0Gq8xZ5GjeH+6umEOFMVra+NZGKiXatd3J7ByU72cPInPemJ+095WQO1TXtXh4r1Ft6RPoat5WPb7C3cQM1s1UpPjOoikWOjsJo5bal+TS2tnrV4PrvCtVGdHb1qUbnD9UsuL2Zzk07GvEpDRGrYtOiAyd2qQsGmOVzXrYGmt2B1+PE39Zs99iCeg8+o+U7E5B4T2vjnJvEhDZaCnPzrGsuG5v7CKCnqsfqyVwrlUZsTzW6gdv91oqU3PA5vdRDW9UCvIe1byNZcgRp+lkcoGb4Vyeio52tlYinVv+dMzSIPahlSyWyzsdnQGwpmoUUz7Tn+vt0J0GmU5szJyQMRz05CzqrJGZTIKmVWb7JyH4XfSe4FCcfZkLzCfzlLuT0WAeNHobjSyZ6CErmpuZJJuIwEcWpN3U63EKmUU7ZMzM8JYseoi6wXcL2jqhdzq8DPEjQEz4TN9vaCZrF/vlFm+/yNU6FyZFV7g7i8+AFyJupTEmd7fT+mW/AskrZ2TKi17fFz2EZLMs4o2hqBjOrBIWyOrn5lgGvml/JTZzinjEoMftrlFgbMedhneWN9EdNIJZs+l8e42TPuq3Hqir6iAre9gYr6EkNotEuwNeyfupRxviGG8tqdO4LT9gnp5hUePmZNLpIXMTQmsfHACR3MgeGsjRWWoIOsY5pSfS6Bb3edSu8f2GxdZnxU37JQnI5zVPZd4HpCtzgd4JfZzJBgfOsvD9U72/IDc6C8h8ATNZD7LIz+VcXnIWbd6raBoWmTzV+0WoXEgRHhKZ7eExk1KQ0Sgc75eLvgLeZdYaWWTDhvYGTETxNo5OHwNS2IRqOl5DAb1z/yhJEd9Xd88UreHtO1OXuhjIXXr4bekjRp5Ld9tQwKWSQiy/rnlOCUWxgRPBVX7LH3mVRRtAoTkDMngFe+PmIibbZdn/9BWjU0RpVw2LxOF+rQeFxSwKd19IvisrDp7gmcXYID4LNM7zJxb1wGYlQZ18cSTAd+/WMpBFS3agismxv4qPqNyz1p72MSdnxRDKhdkvs9sApI8ste4ecn0oQv8jixrQV/tykgcdQeFqhrLpE1V5cY5ZZO6LZc0VFnFe7jN8zN3cf0UZkFv5EVBSENPUDC7QpxkODv/GIvC05HITbICsF6mQ7NA4r76G6ZSWdVVCJn9TXOvAx/JMugfVzKoKZ0dZsq27cxqhFEOZcf6TuUYTwpZk5zxQDXML5m0lx8X7Vb4zQJUa61BeG+IijnmSsnPIojsvkHGp0n8QBTbNzLbj4UtXacyM5D160ulXCLby+7lRFdhBCcgsbEcLFBelIhx2W1KJ/4i9PqvMKYwIrNyI76Fm2oUQDeSvi/VYx2Xu4DV2AA+fDB0lwClqURqjK/i91BqgT5KfwaPG1qFiNs5N5BRAq+jIzTXz5DwAGmWfu9odaMJSbfo6//H1nwBtiF2INHQcolwU4KhbHf4Yo2TFlwJ1ZK1lC4aEL9cRpLQF40CdtCrVI/l1lTT1gb19CgE0Rgfda3npIzwQIEoK00X2hlVfGCNDLiRzGkA7khcqvjSLDiahtGkmqxaKvJ+tzDjDuJ8p138EjIrveXOi3/LOs3JjgHWXw6gh5IMcmuygInBLzjDBY7yd/eihXCbRcu9oSPkkd9fSOrcwk+xjl3+Fae/69enDjUYMOyAtlOJ5oPem1ORGPkgKmPCZEdCE2OnMRAcVDcTmeya7V8GXcp8E7rF5wg4LKuJvjj0NgZxm5+9aNxhIVPtyk2+WDR/UjdIBJgjOuhKYlvzcTOD8zACNaoddoKogFs1Qm6kDyxm/maT3oKF1om4P9qqlDBIebpA3JAIOTb7ioSxM9rmolpBzr8tra0ymG96wLYFqqbAI7gJ3Xm9aKz7Z6htguXKvfw5ulZw3qr7J/gyFLfZG+jRMEX9gETdFONuo8x0w3MAsuiIj+auDYTiygwRaJ2lc4whMR6X2V1QhdCWTCc2NAbLwoTb96BqaorntGrPlVQmMW/NbG1K/B0z0DjBec381QoP9NfyiIzuIGxS4MDfKA1Q8BF4Dpnq509JeK2yRp5ae2tvJQpNaeYMtw02IECgiaqTbrzSspe8c6tsVXICEB2VD3Ey3fXjCTUVpXgRVwJBDQSHNvaDWuylpL8cGJkVvd2CuSjrwmN+okvTbw+BxfSc8lC1Ho4ONBDcut8hUyAQFG5iH+6A8jlsCZv8ymrZ1fbkTiHaC8XwS9TX8SWmyKxHeocGUX58FV+oYJewbaF3O8dCDwZuOpsUBYnyQZkNT5O2VQlLT0XeCLb5cZJIU9FaD+NJndm1rpRSjIEYccqLfzoV6dSwSKClePB7SKOHKsgdrlyD27eEA6AG4YIz3++mQoyvqW70pWHa+qTvgyMjy8PfHemqMkXNCmrv7YXqnANAmEJfA6vhc47oegddEA5h8YZwPexPPbXH3D/8Ag8th+XL22IcohZ8SVm1Y1JiAuhMYE3uVRXqItdKf4qalctP+ywnVnk6BuJoS17IovABZASwClk6qRT5ikfWkRhtpPvLVbT0zocFeLoIAaIbSTFuNQ2psEfdHja7MPcAiUJ12QD1rXpNpuNHxyQkBh0W9esJkGtmm8Sfglnjy7b6mrKLW6VNY1iDNfCUxgp5dDnOgFHXU7lG6Gvur1VjWDXDJaIbTPCf+6XbT+fM5cDyWJtbaNoFuSfa9djOX5slcMI0nZ0nQFjXOGj/hZF3uzuHHsUXRPAwLhnvqDDS4df/3/+pCyV541ncJJkp44LCidiPNS6HaZ1w9ZcJzFAPlfRbb3t2o93gMtBmyL1nOW5F+9jT7qG6C/XXIxFp2XBNieWdUWWAXqZPWLqwmboduWCGkqN/rocEpi53LhMe71U138qbLogFOSSZ4qrFk0OwfHZQvp6C5f64fvO1JU3vc5ZeVzMvuqO1mQZ2FTxJcD457jwtCSO7VqNbFhTjvpAdbu5mvjlKYwu9Hk57mtMg1ctXkznFnx99UiHQIvpjg3LLdvrI/MsZbOz3wIkJb9DeKveoNItMRthsq84TXzdZJrzA0I9Y7u252SMYVxvKKT+ocZ8K1kxQnPQ1kOcJ1hXNarmqHFRdRQlwRonHTcW3rtvpXDEoxHK3723j1UxozP8bLZXzUnptK0b2udjvtxe51uFsoM73Z+5ZHXa0jfWYxuR36/X77fLglH73+cCBrvFse2vezWHw2GvzlFJoerT+e/vu/0Gq9QlkryPCpiyEQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAI/wD/AQ71ymRFfrveAAAAAElFTkSuQmCC'
const darklogo='data:image/png;base64,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'
const img1='https://i.vimeocdn.com/custom_asset/1205'
const img2='https://i.vimeocdn.com/custom_asset/976.png'
const img3='https://i.vimeocdn.com/custom_asset/956'
const img4='https://i.vimeocdn.com/custom_asset/953'
const grid1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpyiJkWZxv_k17apGQbpzuAIFDobxMSJvfw&usqp=CAU'
const grid2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf504KZd-KXFWjcKyNe6vhV0fT1trhBrDUA&usqp=CAU'
const grid3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKtJcTdkyaf6edQqPM3OT18A3Ljn48NOGjw&usqp=CAU'
const grid4='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfvrYwhcxj1XNBgM1Dnp_Kvpi1KEaWNA0AA&usqp=CAU'
const grid5='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43YztAl-oWuIx42zsUqehQxa8e_4eIaFtvQ&usqp=CAU'
const grid6='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDLb8DQnYOEaFF5mtmY98Tgr97e8xtJc-A&usqp=CAU'

const Navbar = () => {
  return <div>
<nav class="flex items-center justify-between flex-wrap bg-teal p-6">
  <div class="item-center md:flex items-center flex-no-shrink text-white mr-6">
<img class="w-16"src={logo}/>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-base lg:flex-grow">
           <a href="#responsive-header" class="mt-4  block md:hidden  hover:text-white mr-4">
        Log in
      </a>
       <a href="#responsive-header" class="mt-4  block md:hidden  hover:text-white mr-4">
        Join
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
    Product
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
       Solutions
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Inspiration
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Pricing
      </a>
            <a href="#responsive-header" class="mt-4  block md:hidden  hover:text-white mr-4">
        Search
      </a>

    </div>
  </div>

<div class="inset-y-0 right-0  pr-2 sm:inset-auto sm:ml-6  hidden md:flex items-center">
        <button class="bg-gray-200 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <div class="sr-only">Search</div>
<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></button>
 <div class=" grid-cols-3  divide-x divide-gray-375  ">
<a href="#"class="inline-block px-1 py-5 text-lg font-medium ">Search</a>
<a href="#"class="inline-block px-1 py-5 text-lg font-medium ">Log In</a>
</div>
<button class="border-2 py-2 px-4 border-gray-400 hover:border-gray-800">
    Join
</button>
      <button
        type="button"
        class="border border-gray-700 bg-gray-700 text-white font-medium rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        New video
      </button>
      </div>
</nav>

</div>;
};

ReactDOM.render(<Navbar />, document.getElementById("navbar"));

const WelcomComp = () => {
  return <div class="grid gap-y-20 grid-cols-1">
   <div class=" col-start-1 font-mono  font-black  py-8 text-center " >
   <p class="text-lg md:text-6xl">The power of video at</p>
   <p class="text-lg md:text-6xl"> your fingertips.</p>
   <p class="text-base md:text-lg font-light ">Simple tools for you and your team to create, manage and share</p>
   <p class="text-base md:text-lg font-light  ">high-quality videos.</p>
   <div class="items-center mt-2">
   <button class="  bg-red-500 hover:bg-red-700 text-white font-bold md: py-2 px-4 rounded mt-2 ml-1 ">
        <strong>Find a plan</strong>
      </button>
         <button class="border-2 py-2 px-4 border-gray-400 hover:border-gray-800 mr-2">
    <strong>Join for free</strong>
</button>
</div>
 </div>
 
  
      
</div>
;
};
ReactDOM.render(<WelcomComp />, document.getElementById("welcomeComp"));

const BodyComp = () => {
  return <div class="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4 md:grid-flow-col">
 <div className="py-5">
 <div className="flex flex-row">
  <div ><img className="w-30 md:object-none object-left" src= {img1} alt="..."/></div>
  <div></div>
  <div class="hidden md:block">
  <p className="text-5xl font-mono md:font-mono text-opacity-100"><strong>Just add Live.</strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Capture any moment with reliable, professional live streaming. </p>
  <p className="text-lg font-mono md:font-mono text-opacity-100">
  <strong>Go live </strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Connect your entire team on one secure, enterprise-level video platform. </p>
  <p className="text-lg font-mono md:font-mono text-opacity-100"><strong>Get Enterprise</strong> </p>
  </div>
  </div></div>
  <div className="hidden md:block ">
  <div className="flex flex-row">
  <div>
  <p className="text-5xl font-mono md:font-mono text-opacity-100"><strong>Your video starts here.</strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Create standout social videos for your business instantly. </p>
  <p className="text-lg font-mono md:font-mono text-opacity-100">
  <strong>Try Vimeo Create </strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Record video messages of your screen, your face, or both </p>
  <p className="text-lg font-mono md:font-mono text-opacity-100"><strong>Try Vimeo Record</strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Upload your latest cut in the highest quality possible.</p>
  <p className="text-lg font-mono md:font-mono text-opacity-100"><strong>Start uploading
</strong> </p>
  </div>
  <div ><img className="w-full object-cover" src= {img2} alt="..."/></div>
  </div></div>
<div className="hidden md:block ">
 <div className="flex flex-row">
  <div ><img className="w-full object-cover" src= {img3} alt="..."/></div>
  <div>
  <p className="text-5xl font-mono md:font-mono text-opacity-100"><strong>Publish anywhere, grow everywhere.</strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Publish videos to any channel, customize the player and add powerful marketing tools to bump up engagement.</p>
  <p className="text-lg font-mono md:font-mono text-opacity-100">
  <strong>Grow your audience </strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">See how your videos are performing with advanced analytics.</p>
  <p className="text-lg font-mono md:font-mono text-opacity-100"><strong>Track engagement</strong> </p>
  </div>
  </div>
    <div className="hidden md:block ">
<div className="flex flex-row">
  <div>
  <p className="text-5xl font-mono md:font-mono text-opacity-100"><strong>Simple, creative collaboration.</strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Streamline feedback with time-coded comments, and assemble your team on your terms. </p>
  <p className="text-lg font-mono md:font-mono text-opacity-100">
  <strong>Start collaborating </strong> </p>
  <p className="text-lg font-mono md:font-mono text-opacity-75">Share securely with comprehensive privacy options.</p>
  <p className="text-lg font-mono md:font-mono text-opacity-100"><strong>See privacy options
</strong> </p>
  </div>
  <div ><img className="w-full object-cover" src= {img4} alt="..."/></div>
</div>
    </div>
 <div className="hidden md:block">
  <div className="flex-col-reverse divide-y divide-y-reverse divide flex items-center no-underline">
 <div> 
      <button class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
    <strong>Get started</strong>
</button>
    </div>
  <div className="font-mono md:font-mono font-black text-5xl  py-10 text-opacity-100"><strong>Try Vimeo free for 30 days.</strong></div>
</div></div>
  </div>

  
  
  
  
</div>
};
ReactDOM.render(<BodyComp />, document.getElementById("bodyComp"));
const GridComp = () => {
  return <div class="hidden md:block">
<div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
  <div><img className=" h-48 w-full object-cover" src={grid1} alt="..."/></div>
  <div><img className=" h-48 w-full object-cover" src={grid2} alt="..."/></div>
 <div><img className=" h-48 w-full object-cover" src={grid3} alt="..."/></div>
 <div><img className=" h-48 w-full object-cover" src={grid4} alt="..."/></div>
 <div><img className=" h-48 w-full object-cover" src={grid5} alt="..."/></div>
 <div><img className=" h-48 w-full object-cover" src={grid6} alt="..."/></div>
</div>

</div>
};

ReactDOM.render(<GridComp />, document.getElementById("gridComp"));

const Grid = () => {
  return <div className="bg-gray-800 " >
  <div class="grid grid-cols-5 gap-1 ">
  <div class="col-start-1">
  <img class=" h-12 w-auto" src={darklogo} alt="vimeo"/>
  </div>
 <div class="hidden md:block col-start-2">
<h5 class="text-gray-300">Product</h5>
<h5 class="text-gray-100"> Video Playr</h5>
<h5 class="text-gray-100">Create</h5>
<h5 class="text-gray-100">Live Streaming</h5>
<h5 class="text-gray-100">Screen Recorder</h5>
<h5 class="text-gray-100">Privacy</h5>
<h5 class="text-gray-100">Collaboration</h5>
<h5 class="text-gray-100">Distribution & Marketing</h5>
<h5 class="text-gray-100">Monetization</h5>
<h5 class="text-gray-100">Analytics</h5>
<h5 class="text-gray-100">Hosting & Management</h5>
<h5 class="text-gray-100">Stock</h5>
<h5 class="text-gray-100">For Hire</h5>
</div>
<h5 class="hidden md:block col-start-3">
<h5 class="text-gray-300">Resources</h5>
<h5 class="text-gray-100">Help Center</h5>
<h5 class="text-gray-100">Blog</h5>
<h5 class="text-gray-100">Video School</h5>
<h5 class="text-gray-100">OTT Resources</h5>
<h5 class="text-gray-100">Developers</h5>
<h5 class="text-gray-100">Students</h5>
<h5 class="text-gray-100">Become a Partner</h5>
<h5 class="text-gray-100">Guidelines</h5>
</h5>
<div class="hidden md:block col-start-4">
<h5 class="text-gray-300">Apps</h5>
<h5 class="text-gray-100">Vimeo for macOS</h5>
<h5 class="text-gray-100">Vimeo for iOS</h5>
<h5 class="text-gray-100">Vimeo for Android</h5>
<h5 class="text-gray-100">Vimeo Create for iOS</h5>
<h5 class="text-gray-100">Vimeo Create for Android</h5>
<h5 class="text-gray-100">Magisto</h5>
<h5 class="text-gray-100">Vimeo for Shopify</h5>
<h5 class="text-gray-300">Vimeo</h5>
</div>
<div class="hidden md:block col-start-5">
<h5 class="text-gray-300">Pricingv</h5>
<h5 class="text-gray-100">Upload</h5>
<h5 class="text-gray-100">Staff Picks</h5>
<h5 class="text-gray-100">On Demand</h5>
<h5 class="text-gray-100">Vimeo OTT</h5>
<h5 class="text-gray-100">Site map</h5>
<h5 class="text-gray-100">About</h5>
<h5 class="text-gray-100">Jobs</h5>
</div>
</div>

<div class="text-gray-100">© 2021 Vimeo,Inc. All right reserved. Terms | Privacy | Copyright | Cookies  Language : <select class="text-gray-700" name="language " >
  <option value="English">English</option>
  <option value="Hebrew">Hebrew</option>
  <option value="Spanish">Spanish</option>
</select> </div>
</div>

};

ReactDOM.render(<Grid />, document.getElementById("grid"));