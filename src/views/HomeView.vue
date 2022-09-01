<template>
  <div class="homeContainer">
    <div class="home">
      <img alt="Vue logo" src="../assets/aaa.png" />
    </div>
    <div class="content">
      <div class="left">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="right">
        <h1>张三</h1>
        <h3>北京大学物理组</h3>
        <h3>
          diofhoiegioeroifheroijgoirigerowhguewsdfnijdfnkenfjdndenfgernigfnreuigfneruirnuivne<br />
          dsoiafhoaidshfieadnfieriofjierohfierojoriefjerifjerijfioerhfoipjerpiafrwgheruighuerhg<br />
          fiuewbfuoehwuoqawhuifhuieqrhfuiehquifherhiurhfiwehqFEWIUFHIEURHFUIERIUregnjrewngiwergr<br />
          diofhoiegioeroifheroijgoirigerowhguewsdfnijdfnkenfjdndenfgernigfnreuigfneruirnuivne<br />
          dsoiafhoaidshfieadnfieriofjierohfierojoriefjerifjerijfioerhfoipjerpiafrwgheruighuerhg<br />
          diofhoiegioeroifheroijgoirigerowhguewsdfnijdfnkenfjdndenfgernigfnreuigfneruirnuivne<br />
          dsoiafhoaidshfieadnfieriofjierohfierojoriefjerifjerijfioerhfoipjerpiafrwgheruighuerhg<br />
        </h3>
      </div>
    </div>
    <div class="content2">
      <div class="mainContent">
        <h1>研究方向</h1>
        <a href="/#/search">更多 &gt;</a>
        <div class="test">
          <hr />
          <br />
          <h3>
            diofhoiegioeroifheroijgoirigerowhguewsdfnijdfnkenfjdndenfgernigfnreuigfneruirnuivne<br />
            dsoiafhoaidshfieadnfieriofjierohfierojoriefjerifjerijfioerhfoipjerpiafrwgheruighuerhg<br />
          </h3>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="mainContent">
        <h1>课题组新闻</h1>
        <a href="/#/news">更多 &gt;</a>
        <div class="test">
          <hr />
          <br />
          <h3>
            diofhoiegioeroifheroijgoirigerowhguewsdfnijdfnkenfjdndenfgernigfnreuigfneruirnuivne<br />
            dsoiafhoaidshfieadnfieriofjierohfierojoriefjerifjerijfioerhfoipjerpiafrwgheruighuerhg<br />
          </h3>
        </div>
      </div>
    </div>
    <div class="content4">
      <div class="mainContent">
        <h1>组内活动</h1>
        <a href="/#/activity">更多 &gt;</a>
        <div class="test">
          <hr />
          <div class="testContent">
            <div>
              <img alt="Vue logo" src="../assets/logo.png" /><br />
              <span>sdaoifnidasfniuehifeifae</span>
            </div>
            <div>
              <img alt="Vue logo" src="../assets/logo.png" /><br />
              <span>sdaoifnidasfniuehifeifae</span>
            </div>
            <div>
              <img alt="Vue logo" src="../assets/logo.png" /><br />
              <span>sdaoifnidasfniuehifeifae</span>
            </div>
            <div>
              <img alt="Vue logo" src="../assets/logo.png" /><br />
              <span>sdaoifnidasfniuehifeifae</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>
<style>
.home img {
  height: 500px;
  width: 100%;
}
.content {
  position: relative;
}
.content2 {
  position: relative;
  background-color: rgb(235, 228, 228);
}
.content4 {
  height: 500px;
  position: relative;
  background-color: rgb(235, 228, 228);
}
.content img {
  margin-left: 20%;
  width: 300px;
  height: 400px;
}
.right {
  position: absolute;
  top: 5%;
  left: 38%;
}
.right h3 {
  color: rgb(185, 183, 183);
}
.mainContent {
  height: 300px;
  width: 1200px;
  margin: auto;
  position: relative;
}
.mainContent h1 {
  position: absolute;
  left: 0%;
  top: -1%;
  color: rgb(20, 50, 120);
}
.mainContent a {
  position: absolute;
  left: 90%;
  top: 6%;
  font-size: 30px;
  font-weight: bold;
  color: rgb(20, 50, 120);
  text-decoration: none;
}
.test {
  width: 1200px;
  position: absolute;
  top: 27%;
  left: 0%;
}
.test img {
  width: 260px;
  height: 200px;
  margin: 10px;
}
.testContent {
  display: flex;
  flex-direction: row;
}
.testContent span {
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(20, 50, 120);
}
</style>
