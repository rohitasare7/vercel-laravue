import{_ as c}from"./AppLayout-jSslM8xB.js";import p from"./DeleteUserForm-BZy_ZTpM.js";import l from"./LogoutOtherBrowserSessionsForm-BZXkvXFc.js";import{S as s}from"./SectionBorder-BKIMpljy.js";import f from"./TwoFactorAuthenticationForm-DKs4oxQO.js";import u from"./UpdatePasswordForm-BDtwxhbt.js";import d from"./UpdateProfileInformationForm-11UKnbs9.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-CurglTzY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-C_rGvLco.js";import"./SectionTitle-xAmUGK_t.js";import"./DangerButton-FUdANbUe.js";import"./TextInput-CjPXQtOj.js";import"./SecondaryButton-CT6V-vKd.js";import"./ActionMessage-DFs42aRx.js";import"./PrimaryButton-B7OWNLpj.js";import"./InputLabel-DM9wr-cA.js";import"./FormSection-DkXGegsH.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
