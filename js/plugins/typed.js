export const config={usrTypeSpeed:theme.home_banner.subtitle.typing_speed,usrBackSpeed:theme.home_banner.subtitle.backing_speed,usrBackDelay:theme.home_banner.subtitle.backing_delay,usrStartDelay:theme.home_banner.subtitle.starting_delay,usrLoop:theme.home_banner.subtitle.loop,usrSmartBackspace:theme.home_banner.subtitle.smart_backspace,usrHitokotoAPI:theme.home_banner.subtitle.hitokoto.api};export default function initTyped(e){const{usrTypeSpeed:t,usrBackSpeed:o,usrBackDelay:a,usrStartDelay:s,usrLoop:n,usrSmartBackspace:r,usrHitokotoAPI:c}=config;function h(c){const h=new Typed("#"+e,{strings:[c],typeSpeed:t||100,smartBackspace:r||false,backSpeed:o||80,backDelay:a||1500,loop:n||false,startDelay:s||500})}if(theme.home_banner.subtitle.hitokoto.enable){fetch(c).then((e=>e.json())).then((e=>{if(e.from_who&&theme.home_banner.subtitle.hitokoto.show_author){h(e.hitokoto+"——"+e.from_who)}else{h(e.hitokoto)}})).catch(console.error)}else{const c=[...theme.home_banner.subtitle.text];if(document.getElementById(e)){const h=new Typed("#"+e,{strings:c,typeSpeed:t||100,smartBackspace:r||false,backSpeed:o||80,backDelay:a||1500,loop:n||false,startDelay:s||500})}}}