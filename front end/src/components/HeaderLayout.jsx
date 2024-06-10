import { Outlet } from "react-router-dom";

function HeaderLayout(){
    return(<div style={{ height: '100%'}}>
        <h1 style={{padding : "10px", borderRadius : "10px", color : 'white',textAlign: 'center'}}>Tic-Tac-Toe</h1>
        <div style={{minHeight:"76%"}}>
            <Outlet />
        </div>
        
    </div>);
    
}
export default HeaderLayout;