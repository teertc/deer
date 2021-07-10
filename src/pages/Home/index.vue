<template>
  <div>
     <TypeNav></TypeNav>
     <ListContainer></ListContainer>
     <TodayRecommend></TodayRecommend>
     <Rank></Rank>
     <Like></Like>
     <Floor></Floor>
     <Brand></Brand>

  </div>
</template>

<script>

  import ListContainer from './ListContainer'
  import TodayRecommend from './TodayRecommend'
  import Rank from './Rank'
  import Like from './Like'
  import Floor from './Floor'
  import Brand from './Brand'

export default {
    name:"",
    components:{
      ListContainer,TodayRecommend,Rank,Like,Floor,Brand,
    },
}
</script>

<style>

</style>