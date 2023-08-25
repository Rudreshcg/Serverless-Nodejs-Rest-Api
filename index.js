module.exports.handler = async (event) => {
  secretAccessKey: 'zPDJ+9VLE1/zPDJ+9VLE1AAqa7LvwU2F58b7LvwUyz'
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!', secretAccessKey,
        input: event,
      },
      null,
      2
    ),
  };
};
