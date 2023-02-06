import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {

    const init = useCallback(async (engine)=>{
        await loadFull(engine)
    })

    return (
        <Particles options={{
            particles:{
                color:{
                    value:"#fff"
                },
                number:{
                    value:100
                },
                opacity:{
                    value:{min:0.3,max:0.4}
                },
                shape:{
                    type:"circle"
                },
                size:{
                    value:{min:1,max:5}
                },
                move:{
                    direction:'bottom-right',
                    enable:true,
                    speed:{min:1,max:2},
                    straight:true
                }
            }
        }} init={init}/>
    )
}
 
export default Particle;