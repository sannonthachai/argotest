import{u as C}from"./index.d7dc1ff6.js";import{r as E,k as e}from"./vendor.1c8b4573.js";function a(){const a=E([{routeName:"coaches-info-:id",icon:"lnil lnil-user-alt",label:"Profile",action:"VIEW_COACH"},{routeName:"coaches-info-:id-experiences",icon:"lnil lnil-gift-bag",label:"Experiences",action:"VIEW_COACH_EXPERIENCE"},{routeName:"coaches-info-:id-note-for-students",icon:"lnil lnil-bookmark",label:"Note for Students",action:"VIEW_COACH_NOTE"},{routeName:"coaches-info-:id-product-access",icon:"lnir lnir-producthunt",label:"Product Access",action:"VIEW_PRODUCT_COACH_ACCESS"}].filter((E=>C([E.action])))),c=e((()=>({canView:C(["VIEW_COACH"]),canEdit:C(["EDIT_COACH"]),canEditNote:C(["EDIT_COACH_NOTE"]),canViewExp:C(["VIEW_COACH_EXPERIENCE"]),canCreateExp:C(["CREATE_COACH_EXPERIENCE"]),canEditExp:C(["EDIT_COACH_EXPERIENCE"]),canDeleteExp:C(["DELETE_COACH_EXPERIENCE"]),canLoginAsCoach:C(["LOGIN_AS_COACH"]),canCreateProductCoachAccess:C(["CREATE_PRODUCT_COACH_ACCESS"]),canDeleteProductCoachAccess:C(["DELETE_PRODUCT_COACH_ACCESS"]),canViewListOfCoachSlot:C(["VIEW_LIST_OF_COACH_SLOT"]),canEditStatus:C(["EDIT_COACH_STATUS"]),canEditOrder:C(["EDIT_COACH_ORDER"])}))),_=e((()=>({canViewSchedulePlan:C(["VIEW_COACH_SCHEDULE_PLAN"]),canCreateSchedulePlan:C(["CREATE_COACH_SCHEDULE_PLAN"]),canEditSchedulePlan:C(["EDIT_COACH_SCHEDULE_PLAN"]),canDeleteSchedulePlan:C(["DELETE_COACH_SCHEDULE_PLAN"])}))),A=e((()=>({canViewLevel:C(["VIEW_COACH_LEVEL"]),canCreateLevel:C(["CREATE_COACH_LEVEL"]),canEditLevel:C(["EDIT_COACH_LEVEL"]),canDeleteLevel:C(["DELETE_COACH_LEVEL"])}))),n=e((()=>({canViewCoachCharacter:C(["VIEW_COACH_CHARACTER"]),canCreateCoachCharacter:C(["CREATE_COACH_CHARACTER"]),canEditCoachCharacter:C(["EDIT_COACH_CHARACTER"]),canDeleteCoachCharacter:C(["DELETE_COACH_CHARACTER"])}))),t=e((()=>({canViewCoachTeaching:C(["VIEW_COACH_TEACHING"]),canCreateCoachTeaching:C(["CREATE_COACH_TEACHING"]),canEditCoachTeaching:C(["EDIT_COACH_TEACHING"]),canDeleteCoachTeaching:C(["DELETE_COACH_TEACHING"])}))),o=e((()=>({canViewCoachDashboard:C(["VIEW_COACH_DASHBOARD"])})));return{coachMainTab:a,capabilities:c,schedulePlans:_,levels:A,haveActionButton:e((()=>C(["VIEW_COACH"])||C(["EDIT_COACH"]))),haveActionSchedulePlansButton:e((()=>C(["VIEW_COACH_SCHEDULE_PLAN"])||C(["EDIT_COACH_SCHEDULE_PLAN"])||C(["DELETE_COACH_SCHEDULE_PLAN"]))),haveActionLevelButton:e((()=>C(["VIEW_COACH_LEVEL"])||C(["EDIT_COACH_LEVEL"])||C(["DELETE_COACH_LEVEL"]))),haveActionCharacterButton:e((()=>C(["VIEW_COACH_CHARACTER"])||C(["EDIT_COACH_CHARACTER"])||C(["DELETE_COACH_CHARACTER"]))),haveActionTeachingButton:e((()=>C(["VIEW_COACH_TEACHING"])||C(["EDIT_COACH_TEACHING"])||C(["DELETE_COACH_TEACHING"]))),characters:n,teachings:t,dashboard:o}}export{a as u};
