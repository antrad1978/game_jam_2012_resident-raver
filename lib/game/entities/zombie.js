ig.module(
    'game.entities.zombie'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityZombie = ig.Entity.extend({
        animSheet: new ig.AnimationSheet( 'media/zombie.png', 16, 16 ),
        size: {x: 8, y:14},
        offset: {x: 4, y: 2},
        maxVel: {x: 100, y: 100},
        flip: false,
        
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim('walk', .07, [0,1,2,3,4,5]);
        },
    
    });   
});