export const state = () => ({
  userIncorp: null,
  dataPrematrix: {},
  dataPercentageOrang: null,
  dataPercentageBadan: null,
  dataNominalOrang: null,
  dataNominalBadan: null,
  dataJumlahSahamOrang: null,
  dataJumlahSahamBadan: null,
  updating: null,
  showVideo: true,
})

export const mutations = {   
    saveUserIncorp(state, data) {
      state.userIncorp = data
    },
    
    saveDataPrematrix(state, data) {
      state.dataPrematrix = data
    },
    
    savePercentageOrang(state, data) {
      state.dataPercentageOrang = data
    },

    saveNominalOrang(state, data) {
      state.dataNominalOrang = data
    },

    saveJumlahSahamOrang(state, data) {
      state.dataJumlahSahamOrang = data
    },
    
    savePercentageBadan(state, data) {
      state.dataPercentageBadan = data
    },

    saveNominalBadan(state, data) {
      state.dataNominalBadan = data
    },

    saveJumlahSahamBadan(state, data) {
      state.dataJumlahSahamBadan = data
    },

    updateMatrix(state, data) {
      state.updating = data
    },

    updateShowVideo(state, data) {
      state.showVideo = data
    },
}