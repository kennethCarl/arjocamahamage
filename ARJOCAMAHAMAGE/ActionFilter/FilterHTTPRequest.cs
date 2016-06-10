using ARJOCAMAHAMAGE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
namespace ARJOCAMAHAMAGE.ActionFilter
{
    class FilterHTTPRequest: ActionFilterAttribute{
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            try
            {
                if (actionContext.Request.Headers.Contains("Token"))
                {
                    var tokenValue = actionContext.Request.Headers.GetValues("Token").First();
                    TokenGenerator tokenGenerator = new TokenGenerator();
                    string decryptedToken = tokenGenerator.Decrypt(tokenValue.Split('@')[1].Split(':')[1]);
                    // Validate Token
                    if (!decryptedToken.Equals("ARJOCAMAHAMAGEAPP"))
                    {
                        var responseMessage = new HttpResponseMessage(HttpStatusCode.Unauthorized) { ReasonPhrase = "Invalid Request" };
                        actionContext.Response = responseMessage;
                    }
                }
                else
                {
                    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                }
            }
            catch{
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }

             base.OnActionExecuting(actionContext);
        }
    }
}
