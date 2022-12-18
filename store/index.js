export const state = () => ({
  user: null,
  keyword: ''
})

//通用设置
export const mutations = {
  setData( state , obj) {
    state[obj.key] = obj.value
  }
}
