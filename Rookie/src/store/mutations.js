
export default {

  loadPackageList(state,list){
    state.packages = list
  },
  addPackage(state, packageItem) {
    state.packages.push(packageItem);
  },
  updatePackageStatus(state,payload) {
    state.packages.find(item => item.OrderId === payload.OrderId).status = 2;
    state.packages.find(item => item.OrderId === payload.OrderId).appointmentTime = payload.appointmentTime;
  },
  //修改列表显示
  updateFilterStatus(state,FilterStatus){
    state.filterStatus = FilterStatus;
  },
  //老板设置为已取货
  changePackage(state,payload){
    state.packages.find(item => item.OrderId === payload.OrderId).isGot = 1;
    state.packages.find(item => item.OrderId === payload.OrderId).status = 3;
  }

}
