const app = getApp();
import common from 'common.js';
var detail_url = 'wxapp/yaoguo/detail';
var paly_url = 'wxapp/yaoguo/play';
var wxRequest = (params) => common.wxRequest(params, detail_url);
var playRequest = (params) => common.wxRequest(params, paly_url);

function getDetail(e){
  var params = [];
  params.course_id = e.cid;
  
  return new Promise(function(resolve){
    wxRequest({
      data: params,
      success: function (res) {
        if(res.data.code == 200 && res.data.data){
          resolve(res.data); 
        }
      }
    });
  })
  
}

function play(e) {
  var liveParams = [];
  var userinfo = wx.getStorageSync('userinfo');
  liveParams.course_id = e.cid;
  liveParams.class_id = e.classid;
  liveParams.uid = userinfo.yg_uid;
  liveParams.token = userinfo.yg_token;

  return new Promise(function (resolve) {
    playRequest({
      data: liveParams,
      success: function (res) {   
        if (res.data.code == 200 && res.data.data) {       
          resolve(res.data);
        }else{
          resolve({code:res.data.code,message:res.data.message});
        }
      }
    });
  })

}

module.exports = {
  getDetail,
  play
}