import 'isomorphic-fetch'

// 解析通过网络响应返回来的JSON字符串
function parseJSON(response: any) {
  return response.json()
}

// 检查网络响应返回是否正常，如果不正常就抛出一个错误
function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  // @ts-ignore
  error.response = response
  throw error
}

// 请求一个地址，返回一个promise
export default function request(url: string, options: object) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({
      data,
    }))
    .catch(err => ({
      err,
    }))
}
