import{u as a}from"./index.d7dc1ff6.js";import{k as i}from"./vendor.1c8b4573.js";function t(){const t=i((()=>({canView:a(["VIEW_ADMIN"]),canEdit:a(["EDIT_ADMIN"]),canActivate:a(["ACTIVATE_ADMIN"]),canDeactivate:a(["DEACTIVATE_ADMIN"])}))),E=i((()=>({canEdit:a(["EDIT_ADMIN"]),canEditRole:a(["EDIT_ROLE_ADMIN"]),canEditTeam:a(["EDIT_TEAM_ADMIN"])}))),c=i((()=>({canView:a(["VIEW_MY_PROFILE"]),canEdit:a(["EDIT_MY_PROFILE"])}))),e=i((()=>Object.values(t.value).some((a=>a))));return{capabilities:t,haveActionButton:e,canEditAdminProfile:E,myProfile:c}}export{t as u};
