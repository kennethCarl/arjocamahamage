using ARJOCAMAHAMAGE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ARJOCAMAHAMAGE.APIControllers
{
    public class GenerateTokenController : ApiController
    {
        Response response = new Response();
        [HttpGet]
        public IHttpActionResult GetGeneratedToken()
        {
            response.status = "FAILURE";
            try
            {
                TokenGenerator tokenGenerator = new TokenGenerator();
                response.stringParam1 = tokenGenerator.Encrypt(tokenGenerator.generateCode(10)) + ":" + tokenGenerator.Encrypt("ARJOCAMAHAMAGEAPP");
                response.status = "SUCCESS";
            }
            catch(Exception e){
                response.message = e.InnerException.InnerException.Message.ToString();
            }
           
            return Ok(response);
        }
    }
}
