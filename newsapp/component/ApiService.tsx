export async function fetchData(pageNo = 1) {
    const url = `https://newsapi.org/v2/everything?q=India&from=2025-08-15&pageSize=10&page=${pageNo}&sortBy=popularity&apiKey=fbf82a3f6b6a4510bb3778aa07ec5e03`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`error! ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API fetch error:', error);
        return null;
    }
}
