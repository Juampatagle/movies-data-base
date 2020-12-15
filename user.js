var  express  =  require ( 'express' ) ;
var  router  =  express . Enrutador ( ) ;

/ * OBTENER listado de usuarios. * /
enrutador . get ( '/' ,  function ( req ,  res ,  next )  {
  res . enviar ( 'responder con un recurso' ) ;
} ) ;

módulo . exportaciones  =  enrutador ;
