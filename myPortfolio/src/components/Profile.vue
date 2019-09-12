<template>
  <section id="profile">
    <div class="content-wrap animated fadeIn">
      <div class="content">
        <h2>Profile</h2>
        <div class="data">
          <div class="myPhoto">
            <img src="https://miiicha15146.github.io/portfolio/image/prof.jpg" alt="">
            <a href="#contact"><span class="contact-us">CONTACT US</span></a>
          </div>
          <ul>
            <li><span>name</span><br>Miyuki Takekawa</li>
            <li><span>workplace</span><br>Tokyo, Japan</li>
            <li><span>like</span><br>idol, vocaloid, game, cooking</li>
            <li><span class="pc">Resume</span><router-link class="pc" @click.native="resume()" :to="{ name: 'Resume' }">>>Open Resume</router-link></li>
          </ul>
        </div>
        <a href="#resume">
          <div id="p-arrow" class="p-arrow" :class="{active:arrowActive}">
            <p>click here</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    resume: function () {
      document.getElementById('p-arrow')
      this.arrowActive = !this.arrowActive
    }
  },
  data () {
    return {
      arrowActive: false
    }
  }
}
</script>

<style>
  .p-arrow {
    display: none;
  }
  .p-arrow.active {
    display: block;
    cursor: pointer;
    transform: rotate(-45deg);
  }
  .p-arrow p {
    line-height: 1.5;
    color: #c73020;
    text-align: left;
    margin: -20px 0;
    width: 70px;
    transform: rotate(45deg);
    animation: r-arrow .4s ease forwards;
  }
  @keyframes r-arrow{
    0% {transform: translateY(0px); transform: rotate(45deg);}
    100% {transform: translateY(-10px); transform: rotate(-45deg);}
  }
</style>
