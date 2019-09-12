<template>
  <div>
    <Header></Header>
    <Main></Main>
    <About></About>
    <Profile></Profile>
    <router-view/>
    <Skill></Skill>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Main,
    About,
    Profile,
    Skill,
    Work,
    Contact,
    Footer
  },
  name: 'App'
}
</script>
