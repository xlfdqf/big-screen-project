<template>  
  <div class="head-wrap" :class="[headClass]">
    <div class="header">
      <div class="header-logo">
        <a href="/">
            <img alt="Vue logo" :src="logo">
        </a>
      </div>
      <div class="nav">
        <router-link to="/home" active-class="nav-item-active" class="nav-item">
          首页
        </router-link>
        <router-link to="/join" active-class="nav-item-active" class="nav-item">
          加入我们
        </router-link>
        <router-link to="/about" active-class="nav-item-active" class="nav-item">
          关于我们
        </router-link>
        <router-link to="/login" active-class="nav-item-active" class="nav-item" :class="[active]">
          商家登录
        </router-link>
      </div>
      <div class="gzh">
        <el-popover placement="bottom" width="100" trigger="hover" popper-class="head-popover">
          <img slot="reference" :src="weixin" />
          <div class="erweima">
             <img src="../assets/image/wxgzh.png" />
          </div>
        </el-popover>

      </div>
    </div>
  </div>
</template>

<script>
import Bus from "@/components/bus.js";
import bihzuanLogo from "../assets/image/bihzuanLogo.png";
import bihzuanLogoActive from "../assets/image/bihzuanLogo-active.png";
import icon_weixin_active from "../assets/image/icon_weixin_active.png";
import icon_weixin from "../assets/image/icon_weixin.png";
import { constants } from "fs";
export default {
  name: "commonHeader",
  props: {
    offset: {
      default: 100
    },
    navActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChange: false,
      navItem: false
    };
  },
  computed: {
    headClass() {
      if (this.isChange) {
        return ["header-active"];
      }
    },
    active() {
      if (this.navActive) {
        return ["nav-item-active"];
      }
    },
    logo() {
      if (this.isChange) {
        return bihzuanLogoActive;
      } else {
        return bihzuanLogo;
      }
    },
    weixin() {
      if (this.isChange) {
        return icon_weixin_active;
      } else {
        return icon_weixin;
      }
    }
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        if (document.documentElement.scrollTop > this.offset) {
          this.isChange = true;
        } else {
          this.isChange = false;
        }
      },
      true
    );
  }
};
</script>

<style scoped>
.head-wrap {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  /* background-color: rgba(11, 55, 149, 0.6); */
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 92;
}
.header-active {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 30px 0px rgba(16, 43, 77, 0.039);
}
.header-logo {
  float: left;
  height: 80px;
  padding: 24px 0;
  box-sizing: border-box;
}
.nav {
  float: right;
  margin-right: 100px;
  overflow: hidden;
}
.nav .nav-item {
  display: block;
  height: 100%;
  float: left;
  padding: 0 33px;
  color: #ffffff;
  height: 80px;
  line-height: 80px;
  text-decoration: none;
}
.header-active .nav .nav-item {
  color: #333333;
}
.nav .nav-item:hover {
  /* background-color: rgba(11, 55, 149,0.6); */
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.header-active .nav .nav-item:hover {
  /* background-color: #3059ff; */
  background-color: coral;
  cursor: pointer;
  color: #ffffff;
}

.nav .nav-item-active {
  /* background-color: rgba(11, 55, 149,0.6); */
  /* background-color: rgba(0, 0, 0, 0.3); */
  background-color: coral;
}
.header-active .nav .nav-item-active {
  /* background-color: #3059ff; */
  background-color: coral;
  color: #ffffff;
}
</style>
<style>
.header {
  overflow: hidden;
  width: 1180px;
  margin: 0 auto;
  position: relative;
}
.gzh {
  position: absolute;
  width: 60px;
  right: 0;
  top: 0;
  height: 80px;
  padding: 30px 0;
  box-sizing: border-box;
}
.gzh > img {
  cursor: pointer;
}
.el-popover {
  min-width: 100px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px !important;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: rgba(0, 0, 0, 0.2);
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: rgba(0, 0, 0, 0.2);
}
/* @media (max-width: 768px) {

    .header {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
    }

    .nav {
      margin-right: 30px !important;
    }

    .nav>.nav-item {
      padding: 0 15px !important;
    }

    .gzh {
      width: 30px;
    }
  } */

/*   @media (max-width: 375px) {
    .nav>.nav-item {
      padding: 0 10px !important;
    }
  } */
</style>