import { useFetch } from "@vueuse/core";

class Service {
  /**
   * Fetches data from a specified URL.
   *
   * @param {string} url - The URL to fetch data from.
   * @return {Promise<Response>} A Promise that resolves to the response from the server.
   */
  fetch(url) {
    let baseUrl = "/api";
    return useFetch(`${baseUrl}${url}`, {
      updateDataOnError: true,
      beforeFetch({ options }) {
        const token = localStorage.getItem("token");
        if (token) {
          options.headers = {
            Authorization: `Bearer ${token}`,
            ...options.headers,
          };
        }
        return {
          options,
        };
      },
      afterFetch(context) {
        // 自定义处理返回数据
        return context;
      },
      onFetchError(context) {
        if (context.response.status === 401) {
          // token过期处理（移除 token，跳转到登录）
        }
        return context;
      },
    });
  }

  /**
   * Generates a query string from a given credential object.
   *
   * @param {Object} credential - The credential object.
   * @return {string} - The generated query string.
   */
  generateQuery(credential) {
    const entries = Object.entries(credential);
    return entries
      .reduce((accumulation, [key, value]) => {
        if (value) {
          accumulation.push(`${key}=${value}`);
        }
        return accumulation;
      }, [])
      .join("&");
  }
}

export default Service;
