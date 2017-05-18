<template>
    <div class="contact-page">
      <div class="paper-top">
        <img class="background-img" src="../../assets/about.jpg">
        <div class="paper-classify-font font-size-paper animateClass">联系我们</div>
      </div>
      <div class="contact-content">
        <div class="main-content">
          <div class="left-content">
            <textarea  class="ivu-input"  style="resize: none;width: 100%;height: 150px;"   placeholder="您遇到的问题。。。"></textarea>
            <div class="contact-info" style="display: flex;margin-top: 2%;">
              <Input   size="large" style="width: 47.5%;" placeholder="QQ"></Input>
              <Input  size="large" style="width: 47.5%;margin-left: 5%;" placeholder="E-mail"></Input>
            </div>
            <Button class="submit-advice" style="width: 100%;margin-top: 1%;background: #998677;color: #f9f9f9; " size="large">提交</Button>
          </div>
          <div class="right-content">
            <div class="alienlabnews-info-content">
              <div class="tel">
                <i class="infoicon iconfont  icon-dianhua-copy-copy-copy font-size-maintitle "></i><a  href="tel:18752002039" class="infofont font-size-title">+86-18752002039</a>
              </div>
              <div class="email">
                <i class="infoicon iconfont  icon-duanxin font-size-maintitle"></i><span class="infofont font-size-title">zgyxx091418@163.com</span>
              </div>
              <div class="address">
                <i class="infoicon iconfont  icon-dizhi font-size-maintitle"></i><span class="infofont font-size-title">江苏省南京市栖霞区仙林大学城羊山北路1号</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import './mainPage.scss'
    export default{
        data(){
            return {}
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
