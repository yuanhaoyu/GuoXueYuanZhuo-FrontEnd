import { Router, Route, Link ,IndexRoute ,hashHistory,browserHistory } from 'react-router';
export const LOGIN='LOGIN';
export const LOGINOUT='LOGINOUT';
export const REGISTER='REGISTER';
export const GETUSERINFO='GETUSERINFO';
export const GETQUESTIONS='GETQUESTIONS';
export const COMMITQUESTIONS='COMMITQUESTIONS';
export const RESETERROR='RESETERROR';
export const PK='PK';
export const PKCONNECT='PKCONNECT';
export const PKREADY='PKREADY';
export const PKANSWER='PKANSWER';
export const PKCLOSE='PKCLOSE';
export const GETRANK='GETRANK';
export const GETINDEXINFO='GETINDEXINFO';
export const GETARTICLEMORE='GETARTICLEMORE';
export const GETARTICLELIST='GETARTICLELIST';
var ws; // websocket
var apiHead="//www.yzyxw.online";
//var apiHead="//localhost:3000";




/**
 * 登录接口
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
export const login =(username,password)=>{
  return dispatch =>{
    return fetch(apiHead+'/api/user/login',{
      method:'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify({ username: username, password: password,})
    })
      .then(res=>res.json())
      .then(data=>{
        let isLogin
        if(data.code=='200'){
          isLogin=true
          sessionStorage.setItem('isLogin', isLogin);
        }else{
          isLogin=false
          sessionStorage.setItem('isLogin', isLogin);
        }
        dispatch({type:LOGIN,isLogin:isLogin,data:data.data})
      })

  }
}

 /**
 * 注销接口
 */
export const loginOut=()=>{
  return dispatch=>{
    return fetch(apiHead+'/api/user/logout',{
      method:'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
     .then(res=>res.json())
     .then(data=>{
       console.log(data);
       var isLogin;
       if(data.code=="200"){
         isLogin=false;
         sessionStorage.setItem('isLogin', isLogin);
         location.reload();
        //browserHistory.push('/home');
       }
     })
  }
}



/**
 * 注册接口
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
export const register=(username,password)=>{
  return dispatch=>{
    dispatch({type:REGISTER});
    return fetch(apiHead+"/api/user/register",{
      method:'post',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify({ username: username, password: password,})
    })
    .then(res=>res.json())
    .then(data=>{
      let isLogin
      if(data.code=='200'){
        isLogin=true
        sessionStorage.setItem('isLogin', isLogin);
        browserHistory.push('/login');
      }else{
        isLogin=false
        sessionStorage.setItem('isLogin', isLogin);
      }
      dispatch({type:REGISTER,isLogin:isLogin})
    })
  }
}

/**
 * 获取用户信息接口
 */
export const getUserInfo=()=>{
  return dispatch=>{
    return fetch(apiHead+"/api/user/getUserInfo",{
      method:'get',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      let isLogin
      if(data.code!='200'){
        return false;
      }
      dispatch({type:GETUSERINFO,data:data.data})
    })
  }
}


/**
 * 获取闯关题目接口
 */
export const getQuestions=()=>{
  return dispatch=>{
    return fetch(apiHead+"/api/round/getQuestion",{
      method:'post',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.code=='200'){
        //console.log(data.data);
      }else if(data.code=='10012'){
        //console.log(data.data);
      }else if(data.code=='10010'){
        browserHistory.push('/check');
        return false;
      }else if(data.code=='10014'){
        browserHistory.push('/check');
        return false;
      }else{
        return false
      }
      dispatch({type:GETQUESTIONS,data:data.data})
    })
  }
}

/**
 * 提交闯关答案接口(id为用户id，answer为用户当前回答)
 * @param {string} id 用户id
 * @param {string} answer 用户回答
 */
export const commitQuestions=(id,answer)=>{
  return dispatch=>{
    return fetch(apiHead+"/api/round/sendAnswer",{
      method:'post',
      mode:'cors',
      credentials:'include',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify({ id: id, answer: answer,})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      let thisData;
      if(data.code=='200'){
        thisData=true;
      }else if(data.code=='10013'){
        thisData=false;
      }else{
        return false
      }
      dispatch({type:COMMITQUESTIONS,data:thisData})
    })
  }
}

/**
 * 设置错误提示（内置动作，非接口）
 */
export const resetError=()=>{
  return dispatch=>{
    return dispatch({type:RESETERROR,data:true});
  }
}



/**
 * 开启pk链接接口(连接websocket)
 */
export const pkConnect=()=>{
  return dispatch=>{
    ws=new WebSocket('ws:'+apiHead+'/api/pk/');
    ws.onopen=function(e){
      var flag=0;
      ws.onmessage =function(e){
         var code=JSON.parse(e.data).code;
         var type=JSON.parse(e.data).type;
         if(code == "10010"){ //10010未登陆
            browserHistory.push('/check');
            return false;
         }else if(type === "newQuestion"){//type为newQuestion时，延迟3.5s发题，用于显示对战双方信息，同时设置flag，第二次的newQuestion来到时解除延迟发题的设置
           if(!flag){
              setTimeout(function(){dispatch({type:PKCONNECT,data:e})},3500);
              flag=1;
           }else{
              dispatch({type:PKCONNECT,data:e});
           }
         }else{
            dispatch({type:PKCONNECT,data:e});
         }
       }
     }
  }
}


/**
 * pk搜寻对手接口
 */
export const pkSearch=()=>{
  return dispatch=>{
    let a={"type":"doSearch"};
    a=JSON.stringify(a);
    ws.send(a);
  }
}


 /**
 * pk状态下准备完毕接口
 */
export const pkReady=()=>{
  return dispatch=>{
    let a={"type":"doReady"};
    a=JSON.stringify(a);
    ws.send(a);
  }
}

/**
 * pk状态下回答问题接口
 * @param {string} answer 用户的回答
 */
export const pkAnswer=(answer)=>{
  return dispatch=>{
    let a={"type":"sendAnswer","answer":answer};
    a=JSON.stringify(a);
    ws.send(a);
  }
}


/**
 * 获取当前排名信息接口
 */
export const getRank=()=>{
  return dispatch=>{
    return fetch(apiHead+"/api/user/getRank?page=0",{
      method:'get',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.code=='200'){
        //console.log(data.data)
      }else{
        return false
      }
      dispatch({type:GETRANK,data:data.data})
    })
  }
}


/**
 * 获取首页信息接口
 */
export const getIndexInfo=()=>{
  var timestamp=Date.parse(new Date());//获取当前时间戳，用于ajax请求末尾，防止读取缓存
  return dispatch=>{
    return fetch(apiHead+"/api/pageData/index?r="+timestamp,{
      method:'get',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.code=='200'){
        //console.log(data.data);
      }else{
        return false
      }
      dispatch({type:GETINDEXINFO,data:data.data})
    })
  }
}

 /**
 * 获取文章详情接口
 * @param {string} id 文章id
 */
export const getArticleMore=(id)=>{
  return dispatch=>{
    return fetch(apiHead+"/api/article/getArticle?id="+id,{
      method:'get',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.code=='200'){
        //console.log(data.data);
      }else{
        return false
      }
      dispatch({type:GETARTICLEMORE,data:data.data})
    })
  }
}


 /**
 * 获取文章列表
 * @param {string} page 页数
 * @returns 
 */
export const getArticleList=(page)=>{
    return dispatch=>{
    return fetch(apiHead+"/api/article/getArticleList?page="+page,{
      method:'get',
       mode: 'cors',
       credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.code=='200'){
        //console.log(data.data);
      }else{
        return false
      }
      dispatch({type:GETARTICLELIST,data:data.data})
    })
  }
}
