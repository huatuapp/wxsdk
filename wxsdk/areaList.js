const app = getApp();import common from 'common.js';const url = "/wxapp/school/arealist"; const params = []; const wxRequest = (params) => common.wxRequest(params, url); function areaList(e) { var data = e; return new Promise(function (resolve, reject) { wxRequest({ data: data, method: "GET", success: (res) => { let result = res.data; resolve(result) } }) }) } module.exports = { areaList }