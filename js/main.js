var isLogged = false;
function logCheck() {
  return isLogged;
}
function login(){
  gigya.accounts.showScreenSet({
    screenSet:'Default-RegistrationLogin',
    onAfterSubmit:getAccountInfo
  });
}
function logout(callbackFun) {
  gigya.accounts.logout({callback:callbackFun});
}
function getAccountInfo(callbackFun){
  gigya.accounts.getAccountInfo({ callback: callbackFun });
}
function liteRegistration() {
  gigya.accounts.showScreenSet({
    screenSet:'Default-LiteRegistration'
  });
}

export {logCheck,login,logout,getAccountInfo,liteRegistration};
