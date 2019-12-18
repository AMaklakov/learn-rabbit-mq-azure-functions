import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.', req.body);

    console.log(req.query, req.body);

    const msg = req.query.msg || req.body.msg;

    if (msg) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello, " + (req.query.msg || req.body.msg)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export default httpTrigger;
