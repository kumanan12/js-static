module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    context.res = {
        body: {
          text: "Hello from the user"
        }
      };
}