/**
 * Created by zhuliang on 2017/4/6.
 */
global.title=[{name:'首页',path:"/"},{name:'报纸',path:"/newspaperPage"},{name:'关于',path:"/about"},{name:'联系',path:"/relation"}];
global.mainContentTile="打破传统报纸阅读方式";
global.mainContentFir="各类报纸一站式搜索，新闻热点随时掌握，";
global.mainContentSec="给你带来全新的阅读体验。";
global.tokenUrl="http://localhost:8011/getToken"
global.SERVICEURL="http://localhost:8011"
global.TOKENTIME=new Date();
global.TOKEN="";
global.PICURL="http://localhost:8083/static/newsImg/";
global.NEWSTYPE=[
  {name:"头条",icon:"icon-redian",type:"top"},
  {name:"社会",icon:"icon-shehui",type:"shehui"},
  {name:"国内",icon:"icon-guonei",type:"guonei"},
  {name:"国际",icon:"icon-guoji",type:"guoji"},
  {name:"娱乐",icon:"icon-yulebagua",type:"yule"},
  {name:"体育",icon:"icon-tiyu",type:"tiyu"},
  {name:"军事",icon:"icon-junshi",type:"junshi"},
  {name:"科技",icon:"icon-keji",type:"keji"},
  {name:"财经",icon:"icon-caijing",type:"caijing"},
  ]
global.ABOUTICON=[{icon:'icon-icon-yxj-newspaper',name:"报纸",explain:"平台为您提供国内各类主流报纸，种类繁多，通过分类查找更方便。"},{icon:'icon-remen',name:"热门",explain:"平台精选当下最新最热点的新闻资讯，及时掌握新闻热点。"},{icon:'icon-xingxing',name:"省心",explain:"搜索或查找自己喜欢的报纸，一键收藏，从此阅读查找更方便。"}];
global.TEAM=[{img:'zl.jpg',name:"朱亮",post:"程序开发",abstruct:" 保持简单、自有健康的生活方式、在设计之外寻找灵感、努力为每一个项目带来简单、清晰、真实和恰当的感觉。"},{img:'secBackground.jpg',name:"赵刚",post:"程序开发",abstruct:" 保持简单、自有健康的生活方式、在设计之外寻找灵感、努力为每一个项目带来简单、清晰、真实和恰当的感觉。"},{img:'sf.png',name:"孙凤",post:"视觉设计",abstruct:" 保持简单、自有健康的生活方式、在设计之外寻找灵感、努力为每一个项目带来简单、清晰、真实和恰当的感觉。"}];
global.ISLOGIN=false;
global.USERINFO=[];


if(process.env.NODE_ENV=="production"){
  global.tokenUrl="http://119.23.40.120:9091/getToken"
  global.SERVICEURL="http://119.23.40.120:9091"
  global.PICURL="http://119.23.40.120:8080/alienlabnews//static/newsImg/";
}










global.historyList=[{"detail":"alienlab成立","date":"2015-07-01"},
  {"detail":"第一个项目质控系统启动","date":"2015-07-15"},
  {"detail":"质控系统完工","date":"2015-09-01"},
  {"detail":"质控系统交付使用","date":"2015-09-15"},
  {"detail":"参加软件杯基于html的报刊展示项目比赛","date":"2016-03-22"},
  {"detail":"历时1个月，完成alienlabnews1.0系统","date":"2016-05-27"},
  {"detail":"赛程圆满结束，荣获国家三等奖。","date":"2016-9-01"},
  {"detail":"使用alienlabnews参加发明杯，荣获国家一等奖。","date":"2016-11-10"},
  {"detail":"对项目进行进一步的完善，增加评论等功能。","date":"2016-12-27"},
  {"detail":"技术准备完善，开始对项目的重构。","date":"2017-01-10"},
  {"detail":"pc端准备结束，开始对项目的重构。","date":"2017-04-27"},
  {"detail":"pc端一期开发完成。","date":"2017-05-18"},
];


