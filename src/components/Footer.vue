<template>
    <div class="footer-wrap">
        <div class="links-wrap">
            <div class="friend-links">
                <el-row>
                    <el-col :span="2" >
                        <span class="friend-title">友情链接</span>
                    </el-col>
                    <el-col :span="16">
                        <el-row class="links-list" :gutter="15">
                            <el-col :span="4"  v-for="(item, key) in list" :key="key" >
                                <a target="_blank"   :href="item.url">{{item.name}}</a>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div  class="footer-bottom-wrap">
            <div  class="footer-bottom">
                <div class="footer-bottom-content">
                    <el-row>
                        <el-col :span="12">
                            <div class="content-mes">
                                <img src="../assets/image/tu.png" target="_blank"/>
                                <div>
                                    <p>商务合作</p>
                                    <a href="jacascript::void(0)">hubin@erongdu.com</a>
                                </div>
                            </div>
                        </el-col>
                         <el-col :span="12"  >
                             <div class="content-mes">
                                   <img src="../assets/image/tu1.png"/>
                                   <div>
                                       <p>客服邮箱</p>
                                        <a href="jacascript::void(0)">chenss@erongdu.com</a>
                                   </div>
                             </div>
                         </el-col>
                    </el-row>
                </div>
                <div class="copyRight-wrap">
                    <div class="copyRight">
                        <div>Copyright © 2018 杭州圣数科技有限公司 All Rights Reserved 浙ICP备18047180号-2</div>
                        <div>
                             <a target="_blank">
                                <img src="../assets/image/ga.png" style="float:left;"/>
                                浙公网安备 33010502005348号
                            </a>
                        </div>
                        
                    </div>
                 
                </div>
                <div class="bottom-erweima-wrap">
                    <div class="bottom-erweima">
                        <img src="../assets/image/wxgzh.png" class="img" />
                        <p>必赚微信公众号</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style >
    a{
        text-decoration: none;
    }
    .friend-links,.footer-bottom{
        width:1180px;
        margin:  0 auto;
        position: relative;

    }
    .friend-links>.el-row{
        overflow: hidden;
        padding: 35px 0;
    }
   .links-wrap{
       background-color: #383e45;

   }
   .friend-title{
       color: #7b8a96;
       background-color: #2d3237;
       padding: 10px 15px;
       border-radius: 3px;
       display: inline-block;
   }
   .links-list a{
       color: #7b8a96;
       padding: 10px 0;
       display: block;
   }
    .footer-bottom-wrap{
        background-color: #2d3237;
    }
    .footer-bottom-content{
        padding: 41px 0;
    }
    .copyRight-wrap{
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(86, 95, 103);
        padding: 21px 0;
        border-top:1px solid #7b8a96;
        text-align: center;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .copyRight>div{
        float: left;
    }
    .copyRight img{
        padding: 0 8px ;
    }
    .content-mes>div,.content-mes>img{
        float: left;
    }
     .content-mes>div{
         margin-left: 17px;
     }
    .content-mes p{
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(136, 159, 174);
        margin-bottom: 13px;
        font-weight: bold;
    }
     .content-mes a{
        font-size: 14px;
        font-family: "Microsoft YaHei";

        color: rgb(131, 148, 160);
     }
     .bottom-erweima{
        border-radius: 5px;
        background-color: rgb(45, 50, 55);
        position: absolute;
        top:10px;
        left:-10px;
        width: 140px;
        height: 140px;
        z-index: 63;
     }
     .bottom-erweima img{
         width:100px;
         height: 100px;
         margin-top: 20px;
     }
     .bottom-erweima p{
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb(86, 95, 103);
        text-align: center;
        margin-top: 7px;
     }


       .bottom-erweima-wrap {
        border-radius: 5px;
        background-color: rgba(45, 50, 55,0.542);
        position: absolute;
        top:-61px;
        right:0;
        width: 140px;
        height: 140px;
        z-index: 61;
    }


   /*   @media (max-width: 768px) {
         .friend-links,.footer-bottom{
             width:100%;
         }
         .footer-bottom-content .el-col{
             margin-bottom: 15px;
         }
     } */




</style>
<script>
export default {
    name:"commonFooter",
    data(){
        return {
            list:[
                {
                    name:"应用宝-必赚",
                    url:"https://sj.qq.com/myapp/detail.htm?apkName=com.rd.bizhuan",
                }
               /*  {
                    name:"大圣数据",
                    url:"https://www.dsdatas.com",
                },
                {
                    name:"融都科技",
                    url:"http://www.erongdu.com",
                },
                {
                    name:"恒生电子",
                    url:"http://www.hundsun.com/",
                },
                {
                    name:"蚂蚁金服",
                    url:"https://open.alipay.com"
                } */
            ]
        }
    }
}
</script>


