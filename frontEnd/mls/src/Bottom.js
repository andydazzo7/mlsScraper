import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './mls.png'
import "./Bottom.css"
export default function Bottom(){
    return (
        <Navbar style={{backgroundImage:'linear-gradient(to left, #df231a, #001f5b)'}}bg="primary" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            MLS Newsroom
            </Navbar.Brand>
            <Nav>
                <div>
                <a href='http://atlutd.com'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Atlanta_MLS.svg/1200px-Atlanta_MLS.svg.png'}/></a>
                <a href='http://chicagofirefc.com'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Chicago_Fire_FC_logo_%282019%29.svg/1200px-Chicago_Fire_FC_logo_%282019%29.svg.png'}/></a>
                <a href='https://www.fccincinnati.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/FC_Cincinnati_primary_logo_2018.svg/180px-FC_Cincinnati_primary_logo_2018.svg.png'}/></a>
                <a href='https://www.coloradorapids.com/'> <img width="25" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Colorado_Rapids_logo.svg/180px-Colorado_Rapids_logo.svg.png'}/></a>
                <a href='https://www.columbuscrewsc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Columbus_Crew_SC_Logo.svg/180px-Columbus_Crew_SC_Logo.svg.png'}/></a>
                <a href='https://www.fcdallas.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Dallas_logo.svg/180px-FC_Dallas_logo.svg.png'}/></a>
                <a href='https://www.dcunited.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/D.C._United_logo_%282016%29.svg/180px-D.C._United_logo_%282016%29.svg.png'}/></a>
                <a href='https://www.houstondynamo.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Houston_Dynamo_logo.svg/180px-Houston_Dynamo_logo.svg.png'}/></a>
                <a href='https://www.lafc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Los_Angeles_Football_Club.svg/180px-Los_Angeles_Football_Club.svg.png'}/></a>
                <a href='https://www.lagalaxy.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Los_Angeles_Galaxy_logo.svg/180px-Los_Angeles_Galaxy_logo.svg.png'}/></a>
                <a href='https://www.intermiamicf.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/180px-Inter_Miami_CF_logo.svg.png'}/></a>
                <a href='https://www.mnufc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Minnesota_United_FC_%28MLS%29_Primary_logo.svg/150px-Minnesota_United_FC_%28MLS%29_Primary_logo.svg.png'}/></a>

                <a href='https://www.impactmontreal.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Montreal_Impact_%28MLS%29_logo.svg/180px-Montreal_Impact_%28MLS%29_logo.svg.png'}/></a>
                <a href='https://www.nashvillesc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nashville_SC_MLS_2020.svg/150px-Nashville_SC_MLS_2020.svg.png'}/></a>
                <a href='https://www.revolutionsoccer.net/'> <img width="40" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/New_England_Revolution_logo.svg/180px-New_England_Revolution_logo.svg.png'}/></a>
                <a href='https://www.nycfc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/New_York_City_FC.svg/180px-New_York_City_FC.svg.png'}/></a>
                <a href='https://www.newyorkredbulls.com/'> <img width="40" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/New_York_Red_Bulls_logo.svg/200px-New_York_Red_Bulls_logo.svg.png'}/></a>
                <a href='https://www.orlandocitysc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Orlando_City_2014.svg/180px-Orlando_City_2014.svg.png'}/></a>
                <a href='https://www.philadelphiaunion.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Philadelphia_Union_2018_logo.svg/200px-Philadelphia_Union_2018_logo.svg.png'}/></a>
                <a href='https://www.timbers.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Portland_Timbers_logo.svg/180px-Portland_Timbers_logo.svg.png'}/></a>
                <a href='https://www.rsl.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Real_Salt_Lake_2010.svg/180px-Real_Salt_Lake_2010.svg.png'}/></a>
                <a href='https://www.sjearthquakes.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/San_Jose_Earthquakes_2014.svg/180px-San_Jose_Earthquakes_2014.svg.png'}/></a>
                <a href='https://www.soundersfc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Seattle_Sounders_FC.svg/150px-Seattle_Sounders_FC.svg.png'}/></a>
                <a href='https://www.sportingkc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Sporting_Kansas_City_logo.svg/180px-Sporting_Kansas_City_logo.svg.png'}/></a>
                <a href='https://www.torontofc.ca/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Toronto_FC_Logo.svg/200px-Toronto_FC_Logo.svg.png'}/></a>
                <a href='https://www.whitecapsfc.com/'> <img width="30" height="30" src={'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Vancouver_Whitecaps_FC_logo.svg/180px-Vancouver_Whitecaps_FC_logo.svg.png'}/></a>

                </div>
            </Nav>
        </Navbar>
    )
}