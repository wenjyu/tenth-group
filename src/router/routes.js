const Snapup=()=>import("@/pages/Snapup");
const Home=()=>import("@/pages/Home");

export default[
    {
        path:"/",
        component:Home
    },
    {
        path:"/snapup",
        component:Snapup
    },

]