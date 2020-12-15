var  express  =  require ( 'express' ) ;
var  router  =  express . Enrutador ( ) ;
var  ruta  =  require ( 'ruta' ) ;
const  validador  =  require ( "../middlewares/validator" ) ;
const  moviesController  =  require ( '../controllers/moviesController' ) ;

enrutador . obtener ( '/' , moviesController . todo ) ;
enrutador . get ( '/ detalle /: id' ,  moviesController . detalle ) ;
enrutador . get ( '/ nuevo' ,  moviesController . last5 ) ;
enrutador . get ( '/ recommended' ,  moviesController . recomend ) ;
enrutador . publicar ( '/ buscar' ,  moviesController . buscar ) ;
enrutador . get ( '/ crear' ,  moviesController . crear ) ;
enrutador . publicar ( '/ crear' , validador . movieCreate , moviesController . store ) ;
enrutador . get ( '/ generos /: id' ,  moviesController . generos ) ;
enrutador . get ( '/ actores /: id' , moviesController . actores )
enrutador . get ( '/ edit /: id' , moviesController . update ) ;
enrutador . put ( '/ edit /: id' , validator . movieCreate ,  moviesController . change ) ;
enrutador . eliminar ( '/ eliminar /: id' , moviesController . destruir ) ;

módulo . exportaciones  =  enrutador ;
