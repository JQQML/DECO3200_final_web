<template>
  <div class="container">
    <!-- <div class="OpeningRemarks">
      
    </div> -->
    <div class="header">
      <div class="head_warp">
        <div>
          <img src="../assets/home.png" class="ho_home" @click="BackHome">
        </div>
        <div>
          <div class="search">
            <img src="../assets/location icon black.png" class="posi">
            <input type="text" placeholder="Search places (country,city)">
          </div>
        </div>
        <div>
          <div >
            <img src="../assets/question.png" class="ho_home" @click="HelpAA">
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="Schedule">
        <div class="ascly">
          <img :src="adly" alt="">
        </div>
        <div class="die">
          <audio src="../assets/Rainy Mood-Big Ocean.mp3" controls="controls" autoplay muted loop class="audio"></audio>
          <div class="left_title">
          <div>
            <p class="case"></p>
            <span class="case_text">Below water level</span>
          </div>
          <br>
          <div>
            <p class="case current"></p>
            <span class="case_text">Current waterbody</span>
          </div>
        </div>
        </div>
        <div class="Schedule_bottom"></div>
      </div>
      <div class="ProgressBar">
        <div class="ProgressBar_video">
          <video 
            src="../assets/Sea - 24216.mp4" 
            autoplay='autoplay' 
            muted 
            preload='auto' 
            loop = 'loop' 
            width="100%"
          ></video>
        </div>
        <div class="DisplayLayer">
            <div class="DI">
              Water level
              <img src="../assets/information.png" class="WL" @click="Water">
            </div>
            <div class="tishi1">
              <div @click="back_title" style="text-align: center;margin-top: -25px; border: 1px solid black;width: 50px; float: right;border-radius: 5px;">back</div>
              Water Level: The height of the shown water surface above the local tideline. “Tideline” is used to denote the recent historical average of the highest daily local tide level.
            </div>
            <div>
              <h2 class="waterhieght">
                <!-- nicewater<46? "0" :
                  92>nicewater>46? "2" : 
                  138>nicewater>96? "4" : 
                  184>nicewater>138? "6" : 
                  230>nicewater>184? "8" : 
                  280>nicewater>230? '10' : '0' -->
                {{
                  nicewater<46? "0" :
                  nicewater>46&&nicewater<96? "2" : 
                  nicewater>96&&nicewater<138? "4" : 
                  nicewater>138&&nicewater<184? "6" : 
                  nicewater>184&&nicewater<230? "8" : 
                  nicewater>230? '10' : '0'
                }} m
              </h2>
              <div class="progBar">
                <div class="chang" @click="chang">
                  <div class="qiu" @mousedown="drag"></div>
                </div>
              </div>
            </div>
            <div class="Corner">
              <div @click="last_Dui">CREATE GIF OF SEA_LEVEL</div>
              <div @click="whatcanido">WHAT CAN  <br> I DO...</div>
            </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="foo_icon">
        <img src="../assets/facebook white.png" alt="">
        <img src="../assets/twitter white.png" alt="">
        <img src="../assets/instagram white.png" alt="">
      </div>
      <div class="foo_name">
        <div>FEEDBACK</div>
        <div>|</div>
        <div>PRIVACY</div>
        <div>|</div>
        <div>TERMS</div>
      </div>
    </div>
    <div class="welcome" v-show="welcome">
      <div class="we_all" v-show="we_all" @click="yc">
         "Can you image that you have been misinformed on climate change?"
      </div>
      <div class="confirm" v-show="we_all_confirm">
        <div>
          If you don’t believe the severy of the climate change, let me show you common misinformation states. There are lots of misinformation around you! Even only about seal-level rising.
          <button class="btn" @click="btn"> REALLY？SHOW ME！ </button>
        </div>
      </div>
      <div class="DuiHua" v-show="DuiHua">
        <div class="DH_top">SOME COMMON <br> MISINFORMATION</div>
        <div class="DH_img">
          <div @click="imgone" v-show="img1">
            <img src="../assets/1.png">
          </div>
          <div @click="imgtwo" v-show="img2">
            <img src="../assets/2.png">
          </div>
          <div @click="imgthreen" v-show = img3>
            <img src="../assets/3.png">
          </div>
        </div>
      </div>
      <div class="Back_wc confirm" v-show="Back_wc">
        <div>
          Nothing is more impressive than experiencing the truly impact on climate change. By playing our sea level simulator, you will see the impact of rising tides intuitively.
          <button class="btn" @click="btn2"> PLAY IT NOW! </button>
        </div>
      </div>
    </div>
    <div class="help_JT" v-show="Help">
      <div v-show="Help1">
        <div class="skip">
          <div class="descr">DESCRIPTION</div>
          The website offers small testing experiences to learn about the effect of Sea-level Rising. It will help you understand the threat of rising sea levels to coastal cities by simulating sea level rise. You can capture coastal cities affected by rising sea levels at different sea levels by setting sea level heights.
          <div class="continue" @click="ct">CONTINUE TO QUICK GUIDE</div>
        </div>
        <div class="jump" @click="jumpA">SKIP</div>
      </div>
      <div class="Help2" v-show="Help2">
        <div class="next" @click="next1"></div>
        <div class="tiao" @click="jumpA"></div>
      </div>
      <div class="Help3" v-show="Help3">
        <div class="H3" @click="next2"></div>
        <div class="H31"  @click="jumpA"></div>
      </div>
      <div class="Help4" v-show="Help4">
        <div class="H4" @click="next3"></div>
        <div class="H41"  @click="jumpA"></div>
      </div>
      <div class="Help5" v-show="Help5">
        <div class="H5" @click="jumpA" ></div>
        <div class="H51" @click="next4"></div>
      </div>
       <div class="Help6" v-show="Help6">
          <div class="H6" @click="jumpA" ></div>
      </div>
    </div>
    <!-- what can i do ...... -->
    <div class="wcid" v-show="wcid_s">
      <div class="wcid_one abc">
        <div class="wo_img">
          <img src="../assets/reduce carbon footprint.png">
        </div>
        <div class="sse">
          Reduce Your  <br>
          "Carbon-footprint"
        </div>
        <div class="conwc">carbon footprint measures the total amount of greenhouse gases emitted as a result of your daily activities. When you drive to work, run the appliances in your home or sneak off for a weekend getaway, you cause the burning of fossil fuels, which provide the energy needed to power your lifestyle.</div>
        <div class="co_yi">Source: https://homeguides.sfgate.com/reducing-carbon-footprint-mean-78722.html</div>
        <div class="san" @click="san">{{Details}}</div>
      </div>
      <!-- 2 -->
      <div class="wcid_one abc er">
        <div class="wo_img">
          <img src="../assets/reduce energy.png">
        </div>
        <div class="sse">
          Reduce Energy
        </div>
        <div class="conwc_er">To protect the people and places we love from the impacts of global warming we need to make more conscious decisions about our energy use. More than one-third of our emissions come from our electricity consumption.</div>
        <div class="co_er">Source: https://www.wwf.org.au/get-involved/change-the-way-you-live/reduce-your-energy-use#gs.lv4f3y</div>
        <div class="san" @click='san2'>{{Details2}}</div>
      </div>
      <!-- 3 -->
      <div class="wcid_one abc three">
        <div class="wo_img">
          <img src="../assets/recycle&reuse.png">
        </div>
        <div class="sse">
          Recycle & Reuse
        </div>
        <div class="conwc_san">Every time a new product is made from raw materials, large amounts of energy are consumed. We can think of the role energy plays in the four stages of product development: extraction of raw materials, the manufacture of these materials into products, product use by consumers and product disposal. In most cases, recycling uses less energy, which translates into fewer fossil fuels burned and reduced emissions of greenhouse gases that contribute to climate change.</div>
        <div class="co_san">Source: https://deq.nc.gov/conservation/recycling/recycling-climate-change</div>
        <div class="san" @click="san3A">{{Details3}}</div>
      </div>
      <!-- 4 -->
      <div class="wcid_one abc si">
        <div class="wo_img">
          <img src="../assets/save water.png">
        </div>
        <div class="sse">
          Save Water
        </div>
        <div class="conwc_si">
          The link between water and climate change.
          This trend is being accelerated by climate change because floods, droughts and heat have a direct impact on the availability of the various types of water that humans need. Changing the way we use water will help to strengthen our planet’s ecosystem and reduce the risk of extreme weather events that make water more unpredictable, more polluted, and more scarce.</div>
        <div class="co_si">Source:  https://www.henkel.com/spotlight/2020-03-20-saving-water-and-tackling-climate-change-1046204</div>
        <div class="san" @click="san4">{{Details4}}</div>
      </div>
    </div>
    <!-- last -->
    <div v-show="lasta" class="lasta">
      <div class="ls" @click="banoe"></div>
      <div class="ls2" @click="lassasa"></div>
    </div>
    <div v-show="lasta1212" class="lastaaaa">
      <div class="ls3" @click="oldwang"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      nicewater: 0,
      welcome:true,
      we_all:true,
      we_all_confirm:false,
      DuiHua:false,
      img1: true,
      img2: false,
      img3: false,
      Back_wc: false,

      // 帮助部分
      Help: false,
      Help1: false,
      Help2:false,
      Help3:false,
      Help4:false,
      Help5:false,
      Help6:false,

      wcid_s:false,

      lasta:false,
      //最后的最后
      lasta1212:false,

      //澳洲
      adly: require('../assets/001.png'),

      Details:'Details',
      Details2:'Details',
      Details3:'Details',
      Details4:'Details'
    }
  },
  watch:{
    "this.nicewater": function(){
      // nicewater<46? "0" :
      // nicewater>46&&nicewater<96? "2" : 
      // nicewater>96&&nicewater<138? "4" : 
      // nicewater>138&&nicewater<184? "6" : 
      // nicewater>184&&nicewater<230? "8" : 
      // nicewater>230? '10' : '0'
    }
  },
  mounted(){
    let qiu = document.querySelector('.qiu');
    qiu.onmousedown = function(e) {
      let leftVal = e.clientX - this.offsetLeft
      var that = this
      document.onmousemove = function(e){
        var distance = e.clientX - leftVal;
        if(distance<0){
          distance = 0
        }else if(distance>280){
          distance = 280
        }
        qiu.style.left = distance + 'px'
      }
    }
  },
  methods:{
    oldwang(){
      this.lasta1212 = false
    },
    //最后一张图
    lassasa(){
      this.lasta = false
      this.lasta1212 = true
    },
    banoe(){
      this.lasta = false
    },
    last_Dui(){
      this.lasta = true
    },
    san(e){
      if(e.path[0].childNodes[0].nodeValue == 'Details'){
        document.querySelector('.wcid_one').style.height = 370 + 'px'
        document.querySelector('.conwc').style.height = 200 + 'px' 
        document.querySelector('.co_yi').style.height = 60 + 'px'
        this.Details = 'Show less'
      }else if(e.path[0].childNodes[0].nodeValue == 'Show less'){
        document.querySelector('.wcid_one').style.height = 120 + 'px'
        document.querySelector('.conwc').style.height = 0 + 'px' 
        document.querySelector('.co_yi').style.height = 0 + 'px'
        this.Details = 'Details'
      }
    },
    san2(e){
      if(e.path[0].childNodes[0].nodeValue == 'Details'){
        document.querySelector('.er').style.height = 370 + 'px'
        document.querySelector('.conwc_er').style.height = 155 + 'px'
        document.querySelector('.co_er').style.height = 60 + 'px'
        this.Details2 = 'Show less'
      }else if(e.path[0].childNodes[0].nodeValue == 'Show less'){
        document.querySelector('.er').style.height = 120 + 'px'
        document.querySelector('.conwc_er').style.height = 0 + 'px' 
        document.querySelector('.co_er').style.height = 0 + 'px'
        this.Details2 = 'Details'
      }
    },
    san3A(e){
      if(e.path[0].childNodes[0].nodeValue == 'Details'){
        document.querySelector('.three').style.height = 500 + 'px'
        document.querySelector('.conwc_san').style.height = 300 + 'px'
        document.querySelector('.co_san').style.height = 60 + 'px'
        this.Details3 = 'Show less'
      }else if(e.path[0].childNodes[0].nodeValue == 'Show less'){
        document.querySelector('.three').style.height = 120 + 'px'
        document.querySelector('.conwc_san').style.height = 0 + 'px' 
        document.querySelector('.co_san').style.height = 0 + 'px'
        this.Details3 = 'Details'
      }
    },
    san4(e){
      if(e.path[0].childNodes[0].nodeValue == 'Details'){
        document.querySelector('.si').style.height = 500 + 'px'
        document.querySelector('.conwc_si').style.height = 280 + 'px'
        document.querySelector('.co_si').style.height = 60 + 'px'
        this.Details4 = 'Show less'
      }else if(e.path[0].childNodes[0].nodeValue == 'Show less'){
        document.querySelector('.si').style.height = 120 + 'px'
        document.querySelector('.conwc_si').style.height = 0 + 'px' 
        document.querySelector('.co_si').style.height = 0 + 'px'
        this.Details4 = 'Details'
      }
    },
    whatcanido(){
      this.wcid_s = true
    },
    chang(){
      if(this.nicewater<56 ){
        this.adly = require('../assets/001.png')
      }else if(this.nicewater>56 && this.nicewater<112){
        this.adly = require('../assets/002.png')
      }else if(this.nicewater>112 && this.nicewater<168){
        this.adly = require('../assets/003.png')
      }else if(this.nicewater>168 && this.nicewater<224){
        this.adly = require('../assets/004.png')
      }else if(this.nicewater>224){
        this.adly = require('../assets/005.png')
      }
    },
    BackHome(){
      // alert("返回首页")
            // welcome:true,
      // we_all:true,
      // we_all_confirm:false,
      // DuiHua:false,
      // img1: true,
      // img2: false,
      // img3: false,
      // Back_wc: false,

      // // 帮助部分
      // Help: false,
      // Help1: false,
      // Help2:false,
      // Help3:false,
      // Help4:false,
      // Help5:false,
      // Help6:false,

      // wcid_s:false
      this.we_all = false
      this.welcome = false
      this.we_all_confirm = false

      this.DuiHua = false
      this.img1 = false
      this.img2 = false

      this.img3 = false
      this.Back_wc = false

      this.Help = false
      this.Help1 = false
      this.Help2 = false

      this.Help3 = false
      this.Help4 = false
      this.Help5 = false
      this.Help6 = false
      this.wcid_s = false
      this.lasta1212 = false
      

      this.lasta=false
    },
    HelpAA(){
      this.Help = true
      this.Help1 = true
    },
    next1(){
      this.Help2 = false
      this.Help3 = true
    },
    next2(){
      this.Help3 = false
      this.Help4 = true
    },
    next3(){
      this.Help4 = false
      this.Help5 = true
    },
    next4(){
      this.Help5 = false
      this.Help6 = true
    },
    next5(){
      this.Help6 = false
    },
    jumpA(){
      this.Help = false
      this.Help1= false
      this.Help2=false
      this.Help3 = false
      this.Help4 = false
      this.Help5 = false
      this.Help6 = false
    },
    ct(){
      this.Help1 = false
      this.Help2 = true
    },
    Water(){
      document.querySelector('.tishi1').style.width = 100 + '%'
    },
    back_title(){
      document.querySelector('.tishi1').style.width = 0 + 'px'
    },
    drag(e){
      let qiu = document.querySelector('.qiu')
      let left = qiu.style.left
      left = left.substring(0,left.length -2)
      this.nicewater = left
      if(left = ""){
        this.nicewater = 0
      }
    },
    // 结束  welcome-->we_all 界面
    yc(){
      this.we_all = false
      this.we_all_confirm = true
    },
    btn(){
      this.we_all_confirm = false
      this.DuiHua = true
    },
    imgone(){
      // alert(222)
      this.img1 = false
      this.img2 = true
    },
    imgtwo(){
      this.img2 = false
      this.img3 = true
    },
    imgthreen(){
      this.img1 = false
      this.img2 = false
      this.img3 = false
      this.DuiHua = false
      this.Back_wc = true
    },
    btn2(){
      this.welcome = false
    }
  }
}
</script>
<style scoped>
html{
  height: 100%;
  width: 100%;
  position: fixed;
}
.welcome{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.container{
  height: calc(100vh - 0vh);
  background-color: black;
  display: flex;
  flex-direction: column;
  color: white;
}
.we_all{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  margin-top: 70%;
  font-size: 28px;
  letter-spacing:2.54px;
  line-height: 50px;
  font-family: "PT Sans";
  font-style:oblique;
  z-index: 5;
}
.confirm{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
}
.confirm div{
  width: 70%;
  height: 30%;
  background-color: #F2F2F7;
  color: #707070;
  border-radius: 5px;
  margin: 45% auto 0;
  padding: 25px 20px 0 20px;
  letter-spacing:1px;
  font-size: 16px;
  font-family: "PT Sans";
}
.btn{
  width: 100%;
  height: 45px;
  color: white;
  background-color: #9A9A9A;
  outline: none;
  border: none;
  margin-top: 15px;
}
.DH_top{
  width: 100%;
  height: 95px;
  background-image: url(../assets/top.png);
  background-size: 100% 120%;
  text-align: center;
  letter-spacing:1px;
  font-size: 20px;
  padding-top: 25px;
}
.DH_img{
  display: flex;
  height: calc(100vh - 0vh);
}
.DH_img img{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 120px;
  background-image: url(../assets/top.png);
  background-size: 100% 120%;
  position: relative;
  background-color: #000e1e;
}
.head_warp{
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.head_warp div{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.head_warp div:nth-child(1){ 
  width: 12%;
}
.ho_home{
  width: 25px;
  height: 25px;
}
.head_warp div:nth-child(2){
  width: 75%;
}
.search{
  width: 90% !important;
  height: 30px;
  background-color: #f1f2f3;
  border-radius: 8px;
  overflow: hidden;
}
.search input{
  width: 85%;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 12px;
  color: black;
}
.posi{
  width: 10px;
  height: 15px;
}
.head_warp div:nth-child(3){
  width: 12%;
}
.main{
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.Schedule{
  min-height: 55%;
  background-color: #000e1e;
  position: relative;
}
.Schedule_bottom{
  height: 0px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  box-shadow: 1px 0px 20px 11px #15394e;
  z-index: 10;
}
.Schedule .ascly{
  width: 100%;
  height: 265px;
}
.Schedule .ascly img{
  width: 100%;
  height: 100%;
}
.ProgressBar{
  min-height: 40%;
  position: relative;
}
.ProgressBar_video{
  box-shadow: 0px -20px 20px 0px #15394e;
}
.DisplayLayer{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.left_title{
  display: inline-block;
  float: right;
  width: 40%;
  height: 30px;
  border-radius: 2px;
  background-color: white;
  margin-right: 4%;
  color: black;
  padding: 10px;
}
.case{
  width: 12px;
  height: 12px;
  background-color: #FF7E7E;
  float: left;
  border-radius: 2px;
}
.case_text{
  display: inline-block;
  float: left;
  margin-left: 8px;
  /* font-size: 12px; */
  line-height: 12px;
}
.current{
  background-color: #F2F2F7 !important;
}
.WL{
  width: 20px;
  height: 20px;
  display: inline-block;
  float: right;
  padding-right: 15px;
}
.DI{
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
  text-indent: 25px;
  font-weight: 100;
}
.waterhieght{
  font-size: 30px;
  text-align: center;
  font-weight: 100;
  letter-spacing:2px;
  padding-top: 5px;
}
.progBar{
  height: 30px;
  width: 300px;
  margin: 10px auto 0;
}
.Corner{
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
.Corner div{
  width: 165px;
  height: 50px;
  background-color: #ffffffd4;
  border-radius: 8px;
  color: #000E1E;
  text-align: center;
  padding-top: 15px;
}
.footer{
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.foo_icon{
  width: 150px;
  margin: 15px auto 5px;
  height: 25px;
  display: flex;
  justify-content: space-between;
}
.foo_name{
  width: 200px;
  margin: 0 auto;
  height: 25px;
  display: flex;
  justify-content: space-between;
}
.foo_name div{
  line-height: 25px;
  font-size: 12px;
}
.foo_icon img{
  width: 30px;
  height: 30px;
}
.chang{
  width: 100%;
  background-color: #ffffffb3;
  height: 10px;
  border-radius: 10px;
  position: relative;
}
.qiu{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50px;
  position: absolute;
  left: 0;
  top: -5px;
}
.audio{
  position: absolute;
  left: 0;
  top: 43%;
  width: 168px;
  height: 168px;
}
.tishi1{
  position: absolute;
  right: 0;
  top: -20px;
  z-index: 15;
  width: 0;
  height: 120px;
  overflow: hidden;
  background-color: #ffffffed;
  color: black;
  text-align: center;
  font-size: 16px;
  padding: 30px 0 0 0;
  transition-duration: 1s;
}
.help_JT{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: calc(113vh - 0vh);
  background-color: rgba(0, 0, 0, 0.81);
  line-height: 1;
  backdrop-filter: blur(15px);
  z-index: 30;
}
.skip{
  width: 70%;
  margin: 40% auto 0;
  font-size: 16px;
  letter-spacing:1px;
  background-color: #F0F0F0;
  color: black;
  height: 300px;
  padding: 30px 30px;
  border-radius: 5px;
  line-height: 20px;
}
.continue{
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 45px;
  font-size: 17px;
  text-align: center;
  line-height: 45px;
  margin-top: 40px;
}
.descr{
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
}
.jump{
  width: 115px;
  height: 45px;
  border: 3px solid white;
  border-radius: 20px;
  text-align: center;
  font-size: 25px;
  line-height: 45px;
  float: right;
  margin-right: 10%;
  margin-top: 20px;
}
.Help2{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/4.png);
  background-size: 100% 100%;
}
.next{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 51%;
  top: 25%;
}
.tiao{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 57%;
  bottom: 6%;
}
.Help3{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/5.png);
  background-size: 100% 100%;
}
.H3{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 57%;
  bottom: 6%;
      left: 58%;
    bottom: 31%;
}
.H31{
  width: 150px;
  height: 80px;
  position: absolute;
    left: 59%;
    top: 18%;
}
.Help4{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/6.png);
  background-size: 100% 100%;
}
.H4{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 57%;
  bottom: 6%;
      left: 58%;
    bottom: 15%;
}
.H41{
  width: 150px;
  height: 80px;
  position: absolute;
    left: 59%;
    top: 18%;
}
.Help5{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/7.png);
  background-size: 100% 100%;
}
.H5{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 59%;
  top: 18%;
}
.H51{
  width: 150px;
  height: 80px;
  position: absolute;
  left: 57%;
  bottom: 6%;
      left: 59%;
    bottom: 39%;
}
.Help6{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/8.png);
  background-size: 100% 100%;
}
.H6{
  width: 178px;
  height: 80px;
  position: absolute;
  left: 49%;
  top: 25%;
}
.wcid{
  position: absolute;
  left: 0;
  top: 120px;
  width: 100%;
  /* display: flex;
  height: calc(100vh - 0vh); */
  background-image: linear-gradient(#000E1E, #03192C, #0B2C49,#133846,#1A4143);
  z-index: 10;
  padding-bottom: 30px;
}
.wcid div{
  /* float: left; */
  color: black;
  font-size: 18px;
  font-weight: 900;
  font-family: "Adobe Clean";
  position: relative;
  margin: 0 auto;
}
.wcid_one{
  width: 80%;
  height: 120px;
  background-color: #F5FBFF;
  margin: 25px auto 0;
  padding: 20px 10px 20px 10px;
  border-radius: 5px;
  transition-duration: 1.5s;
}
.abc{
  margin-top: 34px !important;
  text-indent: 5px;
}
.wcid_one div{
  float: left;
}
.wo_img{
  width: 100px;
  height: 120px;
}
.wo_img img{
  width: 100%;
  height: 100%;
}
.san{
  position: absolute !important;
  bottom: 5px;
  right: 10px;
  border-radius: 5px;
  border: 2px solid black;
  font-weight: 100 !important;
  font-size: 12px !important;
  padding: 3px 8px;
}
.conwc{
  height: 0;
  overflow: hidden;
  transition-duration: 1.5s;
  font-size: 16px !important;
  font-weight: normal !important;
  margin-top: 5px;
  padding: 0 12px 0 12px;
}
.conwc_er{
  height: 0;
  overflow: hidden;
  transition-duration: 1.5s;
  font-size: 16px !important;
  font-weight: normal !important;
  margin-top: 5px;
  padding: 0 12px 0 12px;
}
.conwc_san{
  height: 0;
  overflow: hidden;
  transition-duration: 1.5s;
  font-size: 16px !important;
  font-weight: normal !important;
  margin-top: 5px;
  padding: 0 12px 0 12px;
}
.conwc_si{
  height: 0;
  overflow: hidden;
  transition-duration: 1.5s;
  font-size: 16px !important;
  font-weight: normal !important;
  margin-top: 5px;
  padding: 0 12px 0 12px;
}
.sse{
  padding-top: 31px;
  padding-left: 15px;
}
.lasta{
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/100.png);
  background-size: 100% 100%;
  z-index: 10 !important;
}
.lastaaaa{
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/200.png);
  background-size: 100% 100%;
  z-index: 10 !important;
}
.ls{
  position: absolute;
  left: 8%;
  bottom: 2%;
  width: 85%;
  height: 45px;
}
.ls2{
  position: absolute;
  left: 8%;
  bottom: 42%;
  width: 85%;
  height: 53px;
}
.ls3{
  position: absolute;
  left: 8%;
  bottom: 2%;
  width: 85%;
  height: 53px;
}
.co_yi{
  transition-duration:1.5s !important;
  font-size: 12px !important;
  font-weight: 100 !important; 
  color:blue !important;  
  padding: 0 10px 0 10px !important; 
  height: 0;
  overflow: hidden;
}
.co_er{
  transition-duration:1.5s !important;
  font-size: 12px !important;
  font-weight: 100 !important; 
  color:blue !important;  
  padding: 0 10px 0 10px !important; 
  height: 0;
  overflow: hidden;
}
.co_san{
  transition-duration:1.5s !important;
  font-size: 12px !important;
  font-weight: 100 !important; 
  color:blue !important;  
  padding: 0 10px 0 10px !important; 
  height: 0;
  overflow: hidden;
}
.co_si{
  transition-duration:1.5s !important;
  font-size: 12px !important;
  font-weight: 100 !important; 
  color:blue !important;  
  padding: 0 10px 0 10px !important; 
  height: 0;
  overflow: hidden;
}
.die{
  height: 80px;
}

</style>
