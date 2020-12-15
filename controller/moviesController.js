const  db =  require ( '../database/models' ) ;
const { Película , género , actor }  =  require ( '../database/models' )
const  { validationResult }  =  require ( 'express-validator' ) ;
const  { Op }  =  require ( 'sequelize' ) ;



módulo . exportaciones  =  {
    all : async ( req , res )  => {
        try {
            const  películas  =  await  movie . findAll ( { include : [ 'Genre' ,  'actores' ] } ) ;         
            res.render('index', {movies})
            // res.json (películas);
        } catch  (error){
            console.log(error);
        }
    } ,
    detail:async(req,res)=>{
        try {
            let id = req.params.id;
            const  detallePelicula = await movie.findByPk(id,{include:['Genre', 'actores' ] } ) ;
            // const generos = await Genre.findByPk (id);
            // const actores = await Actor.findAll ();
            // res.json (detallePelicula);
            res.render('detalle',{ detallePelicula, id})
        }  catch (erro ){
            console.log (error);
        }
    } ,
    last5:async(req,res) => {
        try  {
            const ultimas5 = await  Movie.findAll ( {
                orden : [
                    ['release_date', 'DESC']
                ],
                límite : 5 ,
                desplazamiento : 16
            } )
            res.render('estrenos', {ultimas5});
        }  catch (error)  {
            console.log(error);
        }
    } ,
    recomend:async(req, res) => {
        try {
            const  recomendadas  = await Movie.findAll({
                where:{
                   rating:{[Op.gte]:8}
                }
            } )
            res.render( 'recomendadas', {recomendadas});
        }  catch(error){
            console.log(error);
        }
    } ,
    search:async(req,res) =>{
        try{
            const  loQueBuscoElUsuario  =  req.body.busqueda;
            const  resultados  =  await película.findAll({
                where:{
                  tittle: {[ Op.like]: "%" + loQueBuscoElUsuario + "%" }
                }
            } )
            res.render('resultados', {resultados});
        }  catch (error) {
            console.log(error);
        }
    } ,
    create : async(req, res) => {
        const  generos  =  await  Genre.findAll();
        const  actores  =  await  Actor.findAll();
        res.render('create_movie', {generos, actores})
        
    } ,
    store:async(req, res) => {
        // errores constantes = validationResult (req);
        

		// if (errors.isEmpty ()) {
        // console.log (req.body);
        const  newMovie =  await  Movie.create(req.body)
        await  newMovie.addActores(req.body.actores)
        res.redirect('/ películas')
        //} más {
            // res.render ("create_movie", {errors: errors.errors});
    //}
    } ,
    update: async (req, res) => {
        const  movieId  =  req. params.id;
        const  toEdit  =  await  Movie.findByPk (movieId,{include:['Genre', 'actores']});
        const  generos  =  await  Genre.findAll () ;
        const  actores  =  await  Actor.findAll () ;
        toEdit.release_date  =  toEdit.release_date.toLocaleString ( ) ;
        // res.send (toEdit);
        res.render('update_movie',{toEdit, generos, actores})
    } ,
    change: async(req, res) => {
        const  movieId  =  req.params.id;
        const  modifiedMovie  =  await Movie.findByPk (movieId,{include:[ 'Genre', 'actores']})
        await  changeMovie . removeActores( changeMovie.actores);
        await  changeMovie . addActores( req.body.actores)
        await  changeMovie . update( req.body);
    } ,
    destry:async(req, res) => {
        const  movieId  =  req.params.id;
        const  toDelete  =  await  Movie.findByPk(movieId,{include:['Genre', 'actores']});
        await toDelete.removeActores (toDelete.actores);
        await toDelete.destroy();
        res.redirect('/ películas');

    } ,
    generos: async(req, res) => {
        const  genreId  =  req.params.id ;
        const  detalleGenero  =  await  Genre.findByPk(genreId,{ include:['películas']})
        // res.json (detalleGenero);
        // películas continuas = aguardar Movie.findAll ();
        res.render('generos',{detalleGenero})
    } ,
    actores: async(req, res) => {
        const  actorId  =  req.params.id ;
        const  detalleActor  = await  Actor.findByPk(actorId,{include:['películas']});
        // res.json (detalleActor);
        res.render('actores',{detalleActor});
    } ,  
}