new Vue({
    el : "#app",
    data : {
        player_heal:100,
        monster_heal:100,
        game_is_on:false,
        attack_multiple:10,
        special_attack_multiple:25,
        heal_multiple:20,
        monster_attack_multiple:15,
        logs : []
    },
    methods : {
        start_game: function (){
            this.game_is_on = true;
        },
        attack : function (){
            var point = Math.ceil(Math.random()*this.attack_multiple);
            this.monster_heal-=point;
            this.monster_attack();

            this.loggin({turn:'P',text:'Oyuncu Atağı('+point+')'});
        },
        special_attack : function (){
            var point = Math.ceil(Math.random()*this.special_attack_multiple);
            this.monster_heal-=point;
            this.monster_attack();

            this.loggin({turn:'P',text:'Özel Oyuncu Atağı('+point+')'});

        },
        heal : function (){
            var point = Math.ceil(Math.random()*this.heal_multiple);
            this.player_heal+=point;
            this.monster_attack();

            this.loggin({turn:'P',text:'Ilk Yardım('+point+')'});

        },
        give_up : function (){
            this.player_heal=0;

            this.loggin({turn:'P',text:'Oyuncu Pes Etti!'});

        },
        monster_attack : function(){
            var point = Math.ceil(Math.random()*this.monster_attack_multiple);
            this.player_heal-=point;

            this.loggin({turn:'M',text:'Canavar Atağı('+point+')'});

        },
        loggin : function(log){
            this.logs.push(log);
        }
    },
    watch : {
        player_heal : function (value) {
            if(value<=0){
                this.player_heal=0;
                if(confirm("Oyunu KAYBETTIN ! Tekrar denemek ister misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs=[];
                }
            }else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal : function (value) {
            if(value<=0){
                this.monster_heal=0;
                if(confirm("Oyunu KAZANDIN ! Tekrar denemek ister misin ?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs=[];

                }
            }
        }
    },
    computed : {
        user_progress : function(){
            return {width : this.player_heal+'%'};
        },
        monster_progress : function(){
            return {width : this.monster_heal+'%'};
        }
    }
})