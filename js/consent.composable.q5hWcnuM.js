import{a4 as c,a5 as u,k as l,a6 as f,a7 as g,c as p,a8 as w}from"./entry.DvYAX4a8.js";const y=!1,E=()=>{const e=f();y&&(e==null||e.debug(!0));const o=(t,n)=>{e==null||e.push(["consent",t,{ad_storage:n,ad_user_data:n,ad_personalization:n,analytics_storage:n}])},s=(t,n)=>{window.dataLayer||(window.dataLayer=[]),e==null||e.trackView(t,n)};return{pushCustomerGA4:t=>{if(typeof t<"u"){const n=document.createElement("script");n.innerHTML=`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${t}');
        `,document.body.appendChild(n)}},startGTM:t=>{const n=l(),d=c();t===void 0?o("default","denied"):o("update",t),u(n.public.gtm.id,{compatibility:!1,defer:!1}),s(String(d.name),window.location.origin+d.fullPath)},pushConsentGranted:()=>{o("update","granted")},pushTrackView:s}},r="bc-gdpr-consent",i=()=>typeof window<"u"&&typeof window.localStorage<"u",C=()=>{if(i()){const e=window.localStorage.getItem(r);if(e){if(e==="granted"||e==="denied")return e;window.localStorage.removeItem(r)}}},m=e=>{i()&&window.localStorage.setItem(r,e)},a=g({consent:void 0,featureEnabled:!1,updateConsent(e){this.consent=e}}),S=()=>{const e=t=>(a.featureEnabled=t.featureEnabled,a.consent=C(),a.consent),o=p(()=>!!(a.consent&&a.consent==="granted"));return{initialise:e,grant:t=>{m("granted"),a.updateConsent("granted"),t&&t()},accepted:o,...w(a)}};export{S as a,E as u};
