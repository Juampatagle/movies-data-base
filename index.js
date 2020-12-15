var  express  =  require ( 'express' ) ;
var  router  =  express . Enrutador ( ) ;
const  mainController  =  require ( '../controllers/mainController' )


enrutador . obtener ( '/' , mainController . index ) ;

módulo . exportaciones  =  enrutador ;