import React,{Component} from "react";
import './container.css';
import Bol from "../bol/bol";



export default class Container_eng extends Component{
    render(){
        let arr  = this.props.bols;
        return(
            <>
            
            <div className={'container'}>
                <div className={'lrahos'}>
                    <ul>
                        <li> Ishkhan Saghatelyan has been diagnosed with coronavirus. His meeting with the Russian ambassador was postponed </li>
                        <li> Russian Foreign Ministry. Moscow has sent proposals to Yerevan and Baku on demarcation talks </li>
                        <li> Values ​​․ Erdogan on the purchase of S-400s and the deterioration of relations with the United States </li>
                        <li> The identity of the person who attempted to kill on Abovyan Street is known </li>
                        <li> Iranian official ․ The route to Iranian trucks to Armenia has not changed </li>
                        <li> Iranian official ․ The route to Iranian trucks to Armenia has not changed </li>
                        <li> Values. Such is the opinion of Russian President Vladimir Putin in Sochi on the purchase of S-400s and relations with the United States </li>
                        <li> Turkish President Tayyip Erdogan announced after the meeting with Putin. </li>
                    </ul>
                </div>
                <video width="500" height="250" controls >
      <source src="./video/erg.webm" type="video/mp4"/>
</video>
                <div className={'seri'}>Singer Hayko's funeral</div>
                <div  className={'red'}><a className={'paterazm'} href="https://www.youtube.com/watch?v=F_lTWjl9ePw" >War in Artsakh</a></div>
                <div className={'blue'}><a className={'Telegram'} href="https://www.youtube.com/watch?v=F_lTWjl9ePw"> NEWS.am in Telegram</a></div>
                <div className={'breackingnews'}>Breaking news
                <div className={'keter'}>
                {
                    arr.map((el,i)=>{
                        return(
                            <Bol  el={el}  i={i} changActiv={this.props.changActiv} />
                        )
                    })
                } 
                </div>
                
            
                
                
                </div>
               <div className={'nerqevimec'}>
                  
               <div className={'mek'}>
                   <div className={'imeg'}></div>
                   <div className={'imegtext'}><li>Why is the Civil Aviation Committee silent on the issue of allowing Baku-Nakhichevan flights through Armenia?</li></div>
                       
                           
                      
                  
               </div>
               <div className={'erku'}>
                   <div className={'erkusiverev'}>
                       <div className={'erkusiverevdzax'}>
                           
                               <li>General news:</li>
                           
                       </div>
                       <div className={'erkusiverevaj'}>
                           <li>Most read:</li>
                           </div>
                           <div className={'erkusimejitext'}>
                             
                               <li>Armenia's airspace is not controlled. What color is betrayal? Hakob Chagharyan</li>
                               <li>Shooting in Tsakhkadzor. The shooter had hit him before and had given sexual insults</li>
                               <li>The first announcements about the opening of Armenia's airspace for Azerbaijan </li>
                               <li>The first announcements about the opening of Armenia's airspace for Azerbaijan </li>
                               <li>The first announcements about the opening of Armenia's airspace for Azerbaijan </li>
                              
                           </div>
                       
                   </div>
               </div>
               <div className={'ereq'}>
                   
                       <video width ='312' controls>
                       <source src='https://www.youtube.com/watch?v=WcsxuB6Wciwlist=RDWcsxuB6Wciwstart_radio=1'></source>
                       </video>

                       
                            
                          
                              <div className={'ereqitakitext'}>
                                  <li>
                                  Why is the Civil Aviation Committee silent on the issue of allowing Baku-Nakhichevan flights through Armenia?</li>
                                  <li>
                                  Why is the Civil Aviation Committee silent on the issue of allowing Baku-Nakhichevan flights through Armenia?</li>
                                  <li>
                                  Why is the Civil Aviation Committee silent on the issue of allowing Baku-Nakhichevan flights through Armenia?</li>
                              </div>
                         
                           
                              </div>
               

               </div>
                
            </div>
              
            </>
        )
    }
}