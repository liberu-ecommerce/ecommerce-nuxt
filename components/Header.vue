<template>
  <div class="header-top">
    <div class="nav-container">
      <v-row class="row">
        <v-col md="4" lg="3" class="">
          <div class="header-top-left">
            <ul class="phone-wrap">
              <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
            </ul>
          </div>
        </v-col>

        <v-col md="8" lg="9" class="">
          <div class="header-top-right">
            <ul class="ht-menu d-flex justify-end">
              <li>
                <span class="currency-selector-wrapper">Currency :</span>
                <div class="ht-currency-trigger"><span>USD $</span></div>
                <div class="currency ht-currency">
                  <ul class="ht-setting-list">
                    <li><a href="#">EUR €</a></li>
                    <li class=""><a href="#">USD $</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <span class="language-selector-wrapper">Language :</span>
                <div class="ht-language-trigger"><span>English</span></div>
                <div class="language ht-language">
                  <ul class="ht-setting-list">
                    <li class="">
                      <a href="#"><img src="images/menu/flag-icon/1.jpg" alt="" />English</a>
                    </li>
                    <li>
                      <a href="#"><img src="images/menu/flag-icon/2.jpg" alt="" />Français</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-container {
  max-width: 70%;
  margin: 0 auto;
}
/*Header Top*/
.header-top {
  background: #f8f9f9;
  padding: 12px 0;
  border-bottom: 1px solid #e1e1e1;
}
/*Phone Wrap*/
.phone-wrap > li > span {
  font-size: 12px;
  color: #242424;
}
.phone-wrap > li > a {
  font-size: 12px;
  color: #242424;
}
.phone-wrap > li,
.ht-menu > li {
  list-style: none;
  padding: 0 15px;
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;
}
.ht-menu > li::after {
  content: '';
  position: absolute;
  background: #2424;
  height: 15px;
  width: 1px;
  right: 0;
  top: 5px;
}
.ht-menu > li:last-child::after {
  content: unset;
}
.ht-menu > li:last-child {
  padding-right: 0;
}
.ht-menu > li span {
  font-size: 12px;
}

/*Header Top Currency*/
.currency-selector-wrapper,
.language-selector-wrapper {
  margin-right: 5px;
}
.ht-menu > li > span i {
  font-size: 10px;
  font-weight: 400;
  color: #a4a4a4;
  display: inline-block;
  position: relative;
}
.ht-setting-trigger,
.ht-currency-trigger,
.ht-language-trigger {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.ht-currency-trigger:hover,
.ht-language-trigger:hover {
  color: #fed700;
}
.ht-currency-trigger:hover i,
.ht-language-trigger:hover i {
  color: #fed700;
}
.ht-setting,
.ht-currency,
.ht-language {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 9;
  display: none;
}
.setting,
.currency,
.language {
  border-top: 2px solid #fed700;
  padding: 20px 20px 10px;
  background: #ffffff;
  text-align: left;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}
.currency,
.language {
  min-width: 120px;
}
.currency li {
  padding: 0 10px;
  color: #636363;
  line-height: 22px;
  font-size: 12px;
}

.ht-menu > li:hover .ht-currency-trigger span,
.ht-menu > li:hover .ht-currency-trigger span::after,
.ht-menu > li:hover .ht-language-trigger span,
.ht-menu > li:hover .ht-language-trigger span::after {
  color: #fed700;
}

.hm-minicart-trigger .item-text::after {
  color: #fff;
}
</style>
