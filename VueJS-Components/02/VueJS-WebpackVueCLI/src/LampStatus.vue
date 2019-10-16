<template>
    <div>
        <h1>Lamba Durumu : {{status}} !</h1>
        <button @click="openLamp">Lambayı Aç</button>
        <hr>
    </div>
</template>

<script>
export default {
  data : function(){
    return{
      status : "Aktif"
    }
  },
  methods :{
        openLamp(){
            this.status="açık.."
        }
  }
}
</script>

<style>

</style>
