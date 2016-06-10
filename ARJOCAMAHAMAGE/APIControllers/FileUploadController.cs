using ARJOCAMAHAMAGE.ActionFilter;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace ARJOCAMAHAMAGE.ApiControllers
{
    public class FileUploadController : ApiController
    {
        [HttpGet]
        [FilterAppDownload]
        public HttpResponseMessage Get(string fileName, string token)
        {
            HttpResponseMessage result = null;
            var localFilePath = AppDomain.CurrentDomain.BaseDirectory + "apps/" + fileName;

            // check if parameter is valid
            if (String.IsNullOrEmpty(fileName))
            {
                result = Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            // check if file exists on the server
            else if (!File.Exists(localFilePath))
            {
                result = Request.CreateResponse(HttpStatusCode.Gone);
            }
            else
            {// serve the file to the client
                result = Request.CreateResponse(HttpStatusCode.OK);
                result.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
                result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                result.Content.Headers.ContentDisposition.FileName = fileName;
            }

            return result;
        }
    }
}
