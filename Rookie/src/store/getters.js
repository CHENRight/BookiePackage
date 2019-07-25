export default {

  getShowPackageList: (state) => {
    // if (state.filterStatus === 0) {
    //   return state.packages;
    // } else if (state.filterStatus === 1) {
    //   return state.packages.filter((item) => item.status === 1)
    // } else if(state.filterStatus === 2) {
    //   return state.packages.filter((item) => item.status === 2)
    // } else {
    //   return state.pa.filter((item) => item.status === 3)
    // }
    return state.packages;
  }
}
