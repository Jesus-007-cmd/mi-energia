export default class AppRoutes {

  static sistemaFotovoltaicoComercialEIndustrialRoute:AppRoute = {
    route:'/mi-energia#sistema-fotovoltaico-comercial-industrial',
    title:'Sistema Fotovoltaico Comercial e Industrial'
  }
/*
  static sistemaFotovoltaicoResidencialEHibridoRoute:AppRoute = {
    route:'/mi-energia#sistema-fotovoltaico-residencial-hibrido',
    title:'Sistema Fotovoltaico Residencial e Híbrido'
  }*/
  static sistemaFotovoltaicoComercialEIndustrial: AppRoute = {
    route: '/mi-energia-comercial', // Asegúrate de definir la ruta completa
    title: 'Sistema Fotovoltaico Comercial e Industrial'
  }

  static sistemaFotovoltaicoResidencialEHibrido: AppRoute = {
    route: '/mi-energia-residencial ', // Asegúrate de definir la ruta completa
    title: 'Sistema Fotovoltaico Residencial e Híbrido'
  }

  static montaCargas:AppRoute = {
    route:'/monta-cargas',
    title:'Monta Cargas'
  }

  static iluminariasRoute:AppRoute = {
    route:'/iluminarias',
    title:'Iluminación'
  }

  static monitoreoRoute:AppRoute = {
    route:'/monitoreo',
    title:'Monitoreo'
  }

  static serviciosRoute:AppRoute = {
    route:'/servicios',
    title:'Servicios'
  }

  static financiamientoRoute:AppRoute = {
    route:'/financiamiento',
    title:'Financiamiento'
  }

  static contactanosRoute:AppRoute = {
    route:'/contactanos',
    title:'Contáctanos'
  }

  static electromovilidadRoute:AppRoute = {
    route:'/electromovilidad',
    title:'Electromovilidad'
  }

  static sistemaBess:AppRoute = {
    route:'/bess-system',
    title:'Sistema BESS'
  }

  static sobreNosotrosRoute:AppRoute = {
    route:'/sobre-nosotros',
    title:'Sobre Nosotros'
  }

  static homeRoute:AppRoute = {
    route:'/',
    title:'Inicio'
  }

}

export type AppRoute = {
  route:string;
  title:string;
}