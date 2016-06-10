using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ARJOCAMAHAMAGE
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // Web API configuration and services

            //// Web API routes
            //config.MapHttpAttributeRoutes();

            //var corsAttr = new EnableCorsAttribute("*", "*", "*");
            //config.EnableCors(corsAttr);
            //RouteTable.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);//.RouteHandler = new SessionRouteHandler();
        }
    }
}
