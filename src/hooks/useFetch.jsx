import { SupabaseClient } from "@supabase/supabase-js";
const useFetch = async ({ method, url, data }) => {

  let result = null;
  if (method === "POST") {
    result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  } else if (method === "GET") {
    result = await fetch(url);
    result = await result.json();
  }
  return result;
};

export default useFetch;
