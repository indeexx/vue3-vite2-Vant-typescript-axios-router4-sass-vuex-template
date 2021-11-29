/*
 * @Author: indeex
 * @Date: 2021-01-29 11:28:46
 * @Email: indeex@qq.com
 */
import {createStore} from "vuex"
export default createStore(
    {
        state: {
            listData: {1: 10},
            num: 10
        },
        mutations: {
            setData(state, value){
                state.listData = value;
            },
            addNum(state){
                state.num = state.num + 10;
            },
        },
        actions: {
            setData(context, value){
                context.commit("setData", value);
            }
        },
        modules: {}
    }
);