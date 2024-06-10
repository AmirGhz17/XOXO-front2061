import { Outlet } from "react-router-dom";
function FooterLayout(){
    return(
        <div style={{height: '90%'}}>

            <div style={{minHeight:"85%"}}>
            <Outlet />
            </div>
            
            <p style={{textAlign: "center",color: "yellow"}}>Proved by Amir GHZ</p>
        </div>
    )
}
export default FooterLayout;