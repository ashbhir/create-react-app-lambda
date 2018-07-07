export function handler(event, context, callback) {
  console.log(event)
  callback(null, {
    statusCode: 200,
    headers: {'access-control-allow-origin': '*'},
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
