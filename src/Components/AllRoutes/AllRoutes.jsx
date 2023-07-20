import { Route, Routes } from "react-router-dom"
import { HomePage } from "../AllPages/HomePage/HomePage"

export const AllRoutes=()=>{


    return(<div>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </div>)
}