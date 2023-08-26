import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <div id="navbar">
              
            <Link to = "/blue">BLUE</Link>
            <Link to = "/orange">ORANGE</Link> 
            <Link to = "/green">GREEN</Link>
            <Link to = "/red">RED</Link>
            <Link to = "/yellow">YELLOW</Link>
            <Link to = "/purple">PURPLE</Link>
            <Link to = "/">HOME</Link>

        </div>
    );
}