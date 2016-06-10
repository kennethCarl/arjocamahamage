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
    class FilterAppDownload : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            try
            {
                string tokenValue = actionContext.RequestContext.Url.Request.RequestUri.AbsoluteUri.Split('@')[1].ToString();
                //var tokenValue = headers["Token"];
                TokenGenerator tokenGenerator = new TokenGenerator();
                string decryptedToken = tokenGenerator.Decrypt(tokenValue.Split(':')[1]);
                // Validate Token
                if (!decryptedToken.Equals("ARJOCAMAHAMAGEAPP"))
                    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }
            catch
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }

            base.OnActionExecuting(actionContext);
        }
    }
}
